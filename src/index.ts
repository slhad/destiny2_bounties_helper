import { authorize, getToken, refresh } from "./api"
import express = require("express")
import { readFileSync } from "fs"

import * as https from "https"
import { getRefreshToken, setMemberId, setRefreshToken, setToken } from "./cookie"

const keySSL = readFileSync("./files/server.key")
const certSSL = readFileSync("./files/server.cert")

const app = express()



app.get("/", async (req, res) => {

    const rToken = getRefreshToken()

    if (!rToken) {
        const nanoid = await import("nanoid")
        const loginUrl = authorize(nanoid.nanoid())
        res.status(200).send(`<body><a href="${loginUrl}">Login</body>`)
    } else {
        const refreshedToken = await refresh(rToken)
        setToken(refreshedToken.data.access_token)
        setMemberId(refreshedToken.data.membership_id)
        setRefreshToken(refreshedToken.data.refresh_token, refreshedToken.data.refresh_expires_in)
        res.status(200).send("<body><a href=\"#\">Ok</body>")
    }

})

app.get("/config/auth", async (q, r) => {
    const code = q.query["code"]

    try {
        const tokenData = await getToken(code as string)
        setToken(tokenData.data.access_token)
        setMemberId(tokenData.data.membership_id)
        setRefreshToken(tokenData.data.refresh_token, tokenData.data.refresh_expires_in)
    } catch ({ message, stack }) {
        console.log(`${message} : ${stack}`)
    }
    r.redirect("/")
})


https.createServer({
    key: keySSL,
    cert: certSSL
}, app).listen(process.env["APP_PORT"] || 8888)