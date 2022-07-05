/* eslint-disable prefer-rest-params */
import { mustache } from "consolidate"
import { readFileSync } from "fs"
import { authorize, getInventory, getLinkedProfile, getToken, refresh } from "./api"
import express = require("express")

import * as http from "http"
import * as https from "https"

import cookieParser from "cookie-parser"
import * as i18n from "i18n"
import { Cookie } from "./cookies"
import manifest from "./manifest"
import { urlencoded } from "body-parser"

const bountiesType = ["crucible", "gambit", "strikes"]
const bungiePath = "https://www.bungie.net"
const defaultOpts = {
    allCharactersSizeIcon: 24,
    bountyNeedCount: 8,
    backgroundColor: "transparent",
    strikes: true,
    crucible: true,
    gambit: true
}

export enum ROUTE {
    ALL_CHARACTERS = "/allCharacters",
    HOME = "/",
    AUTH_ACCESS = "/config/auth",
    SETTINGS = "/settings"
}

export type TotalBounties = {
    complete: number,
    count: number,
    needed: number,
    todo: number,
    remaining: number
}

export type GroupBounties = {
    icon: string,
    complete: number,
    count: number,
    needed: number,
    todo: number,
    remaining: number
}

export type CharacterBounties = { [key: string]: GroupBounties }

export type CharacterWithBounties = {
    total: TotalBounties,
    groups: CharacterBounties,
    "class": string
}

export type AllCharacters = {
    characters: CharacterWithBounties[]
}

const app = express()
i18n.configure({
    locales: ["en", "fr"],
    directory: __dirname + "/../../locales"
})

app.use(cookieParser())
app.use(i18n.init)
app.engine("mustache", mustache)
app.set("view engine", "mustache")
app.set("views", __dirname + "/../../template")
app.use(function (req, res, next) {
    res.locals.__ = function () {
        return function (text: any, render: any) {
            return i18n.__.apply(req, arguments as any)
        }
    }

    next()
})
app.use(urlencoded({ extended: true }))

export type RWC = { cookies: { [key: string]: string } }
export const getCookie = <T>(q: RWC, key: keyof typeof defaultOpts) => { return (q.cookies[key] || defaultOpts[key]) as unknown as T }
export const mergeDataWOpts = (
    data: any,
    opts?: {
        q?: RWC,
        partials?: string[],
        variables?: { [key: string]: string | number | boolean }
    }
) => {
    const partials: any = {}
    for (const key of opts?.partials || []) {
        partials[key] = key
    }
    const variables = { ...opts?.variables }
    for (const key in opts?.q?.cookies || []) {
        if (key in variables && opts?.q?.cookies[key]) {
            switch (typeof (defaultOpts as any)[key]) {
                case "boolean": {
                    variables[key] = opts?.q?.cookies[key] === "true"
                    break
                }
                case "number": {
                    variables[key] = parseInt(opts?.q?.cookies[key])
                    break
                }
                default: {
                    variables[key] = opts?.q?.cookies[key]
                }
            }
        }
    }
    return { ...{ partials }, ...variables, ...data }
}

const sortByLastPlayed = (a: any, b: any) => {
    const atime = +new Date(a.dateLastPlayed)
    const btime = +new Date(b.dateLastPlayed)
    if (atime == btime) return 0
    if (atime > btime) return 1
    return -1
}

const findItemComponentObjective = (objectivesMap: any, ichash: string, objectiveHashes: string[]) => {
    const objectives = objectivesMap[ichash] && objectivesMap[ichash].objectives || { objectives: [] }.objectives
    return objectives.find((objective: any) => {
        return objectiveHashes.find(hash => objective.objectiveHash === hash)
    })
}

app.get(ROUTE.ALL_CHARACTERS, async (q, r) => {
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
                maxAge: refreshedToken.data.refresh_expires_in
            })

        const profileResponse = await getLinkedProfile(refreshedToken.data.membership_id)
        const profile = profileResponse.data.Response.profiles.sort(sortByLastPlayed)[0]
        const inventoryResponse = await getInventory(profile.membershipId, profile.membershipType, refreshedToken.data.access_token)
        const characters = inventoryResponse.data.Response.characters.data
        const inventories = inventoryResponse.data.Response.characterInventories.data
        const objectives = inventoryResponse.data.Response.itemComponents.objectives.data

        const data: AllCharacters = {
            characters: []
        }

        for (const characterId of Object.keys(characters)) {
            const character = characters[characterId]
            const classCharacter = manifest.t(character.classHash).displayProperties.name
            const inventory = inventories[characterId].items
            const characterBounties: CharacterWithBounties = {
                class: classCharacter,
                groups: {},
                total: { complete: 0, count: 0, needed: 0, remaining: 0, todo: 0 }
            }
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
                        const objectiveHashes = _item.objectives.objectiveHashes
                        const objective = findItemComponentObjective(objectives, item.itemInstanceId, objectiveHashes)
                        items.push({ item: item, definition: _item, objective: objective })
                    }
                } catch ({ message, stack }) {
                    console.warn(`skipping ${message} : ${stack}`, item, manifest.t(item.itemHash))
                    continue
                }
            }

            const bountiesGroup: CharacterBounties = items.reduce((bounties, bounty) => {
                const bountyType = bounty.definition.inventory.stackUniqueLabel.split(".")[1]
                if (bounties[bountyType]) {
                    bounties[bountyType].count++
                    if (bounty.objective.complete) {
                        bounties[bountyType].complete++
                    } else {
                        bounties[bountyType].todo++
                    }
                } else {
                    bounties[bountyType] = {
                        count: 1,
                        complete: bounty.objective.complete ? 1 : 0,
                        todo: bounty.objective.complete ? 0 : 1,
                        icon: bungiePath + bounty.definition.displayProperties.icon,
                    }
                }
                return bounties
            }, {} as any)

            characterBounties.groups = bountiesGroup

            for (const bountyGroupName in bountiesGroup) {
                const bountyGroup = bountiesGroup[bountyGroupName]
                const remaining = getCookie<number>(q, "bountyNeedCount") - bountyGroup.complete
                bountyGroup.remaining = remaining > 0 ? remaining : 0
                characterBounties.total.complete += bountyGroup.complete
                characterBounties.total.count += bountyGroup.count
                characterBounties.total.needed += getCookie<number>(q, "bountyNeedCount")
                characterBounties.total.todo += bountyGroup.todo
                characterBounties.total.remaining += bountyGroup.remaining
            }
            data.characters.push(characterBounties)
        }

        r.render("allcharacters", mergeDataWOpts(
            data,
            {
                q,
                partials: ["bountiesgroup", "header"],
                variables: defaultOpts
            }
        ))

    }

})

app.get(ROUTE.AUTH_ACCESS, async (q, r) => {
    const code = q.query["code"]

    try {
        // todo : manage error token
        const tokenData = await getToken(code as string)
        r.cookie("destinyToken", tokenData.data.access_token)
        r.cookie("memberId", tokenData.data.membership_id)
        r.cookie("destinyRefreshToken", tokenData.data.refresh_token,
            {
                maxAge: tokenData.data.refresh_expires_in
            })
        // Cookie.setAuth(r, {
        //     destinyRefreshToken: { value: tokenData.data.refresh_token, options: { maxAge: tokenData.data.refresh_expires_in } },
        //     destinyToken: tokenData.data.access_token,
        //     memberId: tokenData.data.membership_id
        // })
    } catch ({ message, stack }) {
        console.log(`${message} : ${stack}`)
    }
    r.redirect(ROUTE.HOME)
})

app.get(ROUTE.HOME, async (q, r) => {
    const nanoid = await import("nanoid")
    const authLink = authorize(nanoid.nanoid())
    const refreshToken = Cookie.getRefresh(q)
    r.render("welcome", {
        refreshToken,
        authLink,
        allCharacters: ROUTE.ALL_CHARACTERS,
        settings: ROUTE.SETTINGS
    })
})

app.get(ROUTE.SETTINGS, async (q, r) => {
    const savedTime = q.cookies["settingstimeSaved"]
    const parsedTime = isNaN(savedTime) ? 0 : parseInt(savedTime)
    const settingstimeSaved = new Date(parsedTime).toISOString()
    const saved = q.query["saved"]
    r.render("settings", mergeDataWOpts({
        settingstimeSaved,
        saved
    },
        {
            q,
            partials: ["header"],
            variables: defaultOpts
        }))
})

app.post(ROUTE.SETTINGS, async (q, r) => {
    for (const key in defaultOpts) {
        switch (typeof (defaultOpts as any)[key]) {
            case "number": {
                r.cookie(key, parseInt(q.body[key]))
                break
            }
            case "boolean": {
                r.cookie(key, (q.body[key] === "on"))
                break
            }
            default: {
                r.cookie(key, q.body[key])
            }
        }
    }
    r.cookie("settingstimeSaved", Date.now())
    r.redirect(`${ROUTE.SETTINGS}?saved=true`)
})

const httpEnabled = process.env["HTTP"] === "true"
const httpsEnabled = process.env["HTTPS"] === "true"

manifest.fetchManifest().then(() => {
    if (httpsEnabled || (!httpEnabled && !httpsEnabled)) {
        const keySSL = readFileSync(process.env["SSL_KEY"] || "./files/server.key")
        const certSSL = readFileSync(process.env["SSL_CRT"] || "./files/server.crt")
        https.createServer({
            key: keySSL,
            cert: certSSL
        }, app).listen((process.env["APP_PORT_SSL"] ? process.env["APP_PORT_SSL"] : process.env["APP_PORT"]) || 8888)
    }
    if (httpEnabled) {
        http.createServer({}, app).listen(process.env["APP_PORT"] || httpsEnabled ? 8887 : 8888)
    }
})