import { authorize, getInventory, getLinkedProfile, getManifest, getToken, refresh } from "./api"
import express = require("express")
import { readFileSync } from "fs"

import * as https from "https"

import cookieParser from "cookie-parser"


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

app.get("/", async (q, r) => {
    const manifest = await getManifest() as any
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

        const items = inventory.filter((item: any) => {
            try {
                const _item = manifest.t(item.itemHash)
                return !_item.itemCategoryHashes.includes(16) && !_item.sockets && _item.objectives && _item.objectives.objectiveVerbName
                // return !(_item.objectives && _item.objectives.questlineItemHash) && _item.sockets
            } catch (error) {
                // console.log(error);
                console.warn("skipping", item, manifest.t(item.itemHash))
                return false
            }
        })
        console.log(items)
        r.status(200).send("<body><a href=\"#\">Ok : You have a refresh token</body>")
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
}, app).listen(process.env["APP_PORT"] || 8888)