/* eslint-disable prefer-rest-params */
import { mustache } from "consolidate"
import { readFileSync } from "fs"
import { authorize, getToken, refresh } from "./api"
import express = require("express")

import * as http from "http"
import * as https from "https"

import cookieParser from "cookie-parser"
import * as i18n from "i18n"
import { Cookie } from "./cookies"
import manifest from "./manifest"
import { urlencoded } from "body-parser"
import { defaultOpts, mergeDataWOpts, ROUTE } from "./constants"

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

        const data = await Bounties.fetchBounties(refreshedToken, q)

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