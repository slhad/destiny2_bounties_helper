import { authorize, getInventory, getLinkedProfile, getManifest, getToken, refresh } from "./api"
import express = require("express")
import { readFileSync } from "fs"

import * as https from "https"

import cookieParser from "cookie-parser"
import manifest from "./manifest"

const keySSL = readFileSync("./files/server.key")
const certSSL = readFileSync("./files/server.cert")

const app = express()

app.use(cookieParser())

const sortByLastPlayed = (a: any, b: any) => {
    const atime = +new Date(a.dateLastPlayed)
    const btime = +new Date(b.dateLastPlayed)
    if (atime == btime) return 0
    if (atime > btime) return 1
    return -1
}

const sortItemByBountyName = (a: any, b: any) => {
    const aa = a.inventory.stackUniqueLabel.split(".") as string[]
    const bb = b.inventory.stackUniqueLabel.split(".") as string[]
    for (let i = 0; i < aa.length; i++) {
        const cmp = aa[i].localeCompare(bb[i])
        if (cmp !== 0) {
            return cmp
        }
    }
    return 0
}

app.get("/", async (q, r) => {
    const rToken = q.cookies["destinyRefreshToken"]

    if (!rToken) {
        const nanoid = await import("nanoid")
        const loginUrl = authorize(nanoid.nanoid())
        r.status(200).send(`<body><a href="${loginUrl}">Login</body>`)
    } else {
        const refreshedToken = await refresh(rToken)
        r.cookie("destinyToken", refreshedToken.data.access_token)
        r.cookie("memberId", refreshedToken.data.membership_id)
        r.cookie("destinyRefreshToken", refreshedToken.data.refresh_token,
            {
                maxAge: refreshedToken.data.refresh_expires_in.expire
            })

        const profileResponse = await getLinkedProfile(refreshedToken.data.membership_id)
        const profile = profileResponse.data.Response.profiles.sort(sortByLastPlayed)[0]
        const inventoryResponse = await getInventory(profile.membershipId, profile.membershipType, refreshedToken.data.access_token)
        const characters = inventoryResponse.data.Response.characters.data
        const characterId = Object.keys(characters)[0]
        const inventories = inventoryResponse.data.Response.characterInventories.data
        const inventory = inventories[characterId].items

        const items = []
        for (const item of inventory) {
            try {
                const _item = manifest.t(item.itemHash)
                if (!_item.itemCategoryHashes.includes(16)
                    && !_item.sockets
                    && _item.objectives
                    && _item.objectives.objectiveVerbName
                    && _item.inventory.stackUniqueLabel.indexOf("bounties.") === 0) {
                    items.push(_item)
                }
            } catch ({ message, stack }) {
                console.warn(`skipping ${message} : ${stack}`, item, manifest.t(item.itemHash))
                return false
            }
        }
        const displayI = []
        for (const i of items.sort(sortItemByBountyName)) {
            displayI.push(`<li>${i.inventory.stackUniqueLabel}</li>`)
        }
        const display = `<ul>${displayI.join("")}</ul>`
        r.status(200).send(`<body><div>Ok : You have a refresh token</div><div>${display}</div></body>`)
    }

})

app.get("/config/auth", async (q, r) => {
    const code = q.query["code"]

    try {
        const tokenData = await getToken(code as string)
        r.cookie("destinyToken", tokenData.data.access_token)
        r.cookie("memberId", tokenData.data.membership_id)
        r.cookie("destinyRefreshToken", tokenData.data.refresh_token,
            {
                maxAge: tokenData.data.refresh_expires_in
            })
    } catch ({ message, stack }) {
        console.log(`${message} : ${stack}`)
    }
    r.redirect("/")
})


https.createServer({
    key: keySSL,
    cert: certSSL
}, app).listen(process.env["APP_PORT"] || 8888, async () => {
    await manifest.fetchManifest()
})