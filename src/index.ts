/* eslint-disable prefer-rest-params */
import { mustache } from "consolidate"
import { readFileSync } from "fs"
import { accessToken, authorize, getCookies, getLinkedProfile, getToken, setCookies } from "./api"
import express = require("express")
import responseTime = require("response-time")

import * as http from "http"
import * as https from "https"

import { urlencoded } from "body-parser"
import cookieParser from "cookie-parser"
import * as i18n from "i18n"
import { defaultOpts, mergeDataWOpts, ROUTE, RWC, sortByLastPlayed } from "./constants"
import manifest from "./manifest"

import { Bounties } from "./bounties"

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
app.use((err: Error, q: any, r: any, n: any) => {
    console.log(`${err.message} : ${err.stack}`)
    r.status(500).send("error")
})
app.use(responseTime(function (req, res, time) {
    console.log(`${req.method} ${req.url} ${time} ms`)
}))

app.use(ROUTE.CONNECTED, async (q: RWC, r, n) => {
    const a = await accessToken(q, r)
    if (!a) {
        r.redirect(ROUTE.HOME)
    } else {
        q.cookies["destinyToken"] = a
        n()
    }
})

app.get(ROUTE.CURRENT_CHARACTER, async (q, r) => {
    const data = await Bounties.fetchLastUsedCharacterBounties(q)
    r.render("character", mergeDataWOpts(
        data,
        {
            q,
            partials: ["bountiesgroup", "header"],
            variables: defaultOpts
        }
    ))
})


app.get(ROUTE.ALL_CHARACTERS, async (q, r) => {
    const data = await Bounties.fetchAllCharactersBounties(q)
    r.render("allcharacters", mergeDataWOpts(
        data,
        {
            q,
            partials: ["allbountiesgroup", "header"],
            variables: defaultOpts
        }
    ))
})

app.get(ROUTE.AUTH_ACCESS, async (q, r) => {
    const code = q.query["code"]

    const tokenData = await getToken(code as string)
    if (tokenData) {
        const cookies = setCookies(tokenData, r)
        const profileResponse = await getLinkedProfile(cookies.membershipId)
        if (profileResponse) {
            const profile = profileResponse.data.Response.profiles.sort(sortByLastPlayed)[0]
            setCookies(profile, r)
        }
    }

    r.redirect(ROUTE.HOME)
})

app.get(ROUTE.HOME, async (q, r) => {
    const nanoid = await import("nanoid")
    const authLink = authorize(nanoid.nanoid())
    const refreshToken = getCookies(q).refreshToken
    r.render("welcome", mergeDataWOpts({
        refreshToken,
        authLink,
        allCharacters: ROUTE.ALL_CHARACTERS,
        character: ROUTE.CURRENT_CHARACTER,
        settings: ROUTE.SETTINGS
    }, {
        q,
        partials: ["header"],
        variables: defaultOpts
    }))
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
