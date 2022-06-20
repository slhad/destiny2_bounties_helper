import { authorize, getToken, refresh } from "./api"
import express = require("express")
import { readFileSync } from "fs"

import * as https from "https"

import cookieParser from "cookie-parser"


const keySSL = readFileSync("./files/server.key")
const certSSL = readFileSync("./files/server.cert")

const app = express()

app.use(cookieParser())

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