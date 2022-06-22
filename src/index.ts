import { authorize, getInventory, getLinkedProfile, getToken, refresh } from "./api"
import express = require("express")
import { readFileSync } from "fs"

import * as https from "https"

import cookieParser from "cookie-parser"
import manifest from "./manifest"

const keySSL = readFileSync("./files/server.key")
const certSSL = readFileSync("./files/server.cert")

const bountiesType = ["crucible", "gambit", "strikes"]
const bungiePath = "https://www.bungie.net"
const sizeIcon = "24px"
const bountyNeedCount = 8
const backgroundColor = "transparent"

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

const findItemComponentObjective = (objectivesMap: any, ichash: string, objectiveHashes: string[]) => {
    const objectives = objectivesMap[ichash] && objectivesMap[ichash].objectives || { objectives: [] }.objectives
    return objectives.find((objective: any) => {
        return objectiveHashes.find(hash => objective.objectiveHash === hash)
    })
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
        const inventories = inventoryResponse.data.Response.characterInventories.data
        const objectives = inventoryResponse.data.Response.itemComponents.objectives.data

        const displayCharacters = []
        for (const characterId of Object.keys(characters)) {
            const character = characters[characterId]
            const classCharacter = manifest.t(character.classHash).displayProperties.name
            const inventory = inventories[characterId].items
            const items = []
            for (const item of inventory) {
                try {
                    const _item = manifest.t(item.itemHash)
                    if (_item
                        && _item.inventory
                        && _item.inventory.stackUniqueLabel
                        && _item.inventory.stackUniqueLabel.indexOf("bounties.") === 0
                        && bountiesType.indexOf(_item.inventory.stackUniqueLabel.split(".")[1]) >= 0
                    ) {
                        const bountyType = _item.inventory.stackUniqueLabel.split(".")[1]
                        const objectiveHashes = _item.objectives.objectiveHashes
                        const objective = findItemComponentObjective(objectives, item.itemInstanceId, objectiveHashes)
                        console.log(`${classCharacter} -> ${bountyType} -> ${_item.displayProperties.name} -> ${objective.complete}`)
                        items.push({ item: item, definition: _item, objective: objective })
                    }
                } catch ({ message, stack }) {
                    console.warn(`skipping ${message} : ${stack}`, item, manifest.t(item.itemHash))
                    continue
                }
            }

            const bountiesGroup = items.reduce((bounties, bounty) => {
                const bountyType = bounty.definition.inventory.stackUniqueLabel.split(".")[1]
                if (bounties[bountyType]) {
                    bounties[bountyType].count++
                    if (bounty.objective.complete) {
                        bounties[bountyType].complete++
                    }
                } else {
                    bounties[bountyType] = {
                        count: 1,
                        complete: bounty.objective.complete ? 1 : 0,
                        icon: bungiePath + bounty.definition.displayProperties.icon
                    }
                }
                return bounties
            }, {} as any)



            const displayItems = []
            const displayTotal = { complete: 0, count: 0, needed: 0 }
            for (const bountyGroupName in bountiesGroup) {
                const bountyGroup = bountiesGroup[bountyGroupName]
                displayTotal.complete += bountyGroup.complete
                displayTotal.count += bountyGroup.count
                displayTotal.needed += bountyNeedCount
                displayItems.push(`<li><div style="display:inline-flex"><img style="height:${sizeIcon};width=${sizeIcon}" src=${bountyGroup.icon} />&nbsp;<span style="line-height:${sizeIcon}">${bountyNeedCount}/${bountyGroup.count}/${bountyGroup.complete}</span></div></li>`)
            }
            displayItems.unshift(`<li><div style="display:inline-flex"><span style="line-height:${sizeIcon}">${displayTotal.needed}/${displayTotal.count}/${displayTotal.complete}</span></div></li>`)

            displayCharacters.push(`<li>${classCharacter}<ul>${displayItems.join("")}</ul></li>`)
        }
        const display = `<ul>${displayCharacters.join("")}</ul>`
        r.status(200).send(`<body style="background-color:${backgroundColor}"><div>${display}</div></body>`)
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

manifest.fetchManifest().then(() => {
    https.createServer({
        key: keySSL,
        cert: certSSL
    }, app).listen(process.env["APP_PORT"] || 8888)
})