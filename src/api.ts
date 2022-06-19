import axios from "axios"
import { api_key, client_id, client_secret } from "../config.json"
import * as cookie from "./cookie"

const _axios = axios.create({
    baseURL: "https://www.bungie.net/",
    timeout: 10000,
    withCredentials: true,
    headers: {
        "X-API-Key": api_key,
    }
})

export const authorize = (state: string) => `https://www.bungie.net/en/oauth/authorize?client_id=${client_id}&response_type=code&state=${state}`

export const getToken = (code: string) => _axios.post(
    "platform/app/oauth/token/",
    createFormParams({
        client_id,
        grant_type: "authorization_code",
        client_secret,
        code
    }),
    {
        headers: {
            "X-API-Key": api_key,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
)

export const refresh = (refresh_token: string) => _axios.post(
    "platform/app/oauth/token/",
    createFormParams({
        client_id,
        client_secret,
        grant_type: "refresh_token",
        refresh_token
        // code,
    }),
    {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
)

export const getManifest = () => _axios.get("/Platform/Destiny2/Manifest/")

export const getUser = (id: string) => _axios.get(`/User/GetBungieNetUserById/${id}/`)
export const getLinkedProfile = (id: string) => _axios.get(`/Platform/Destiny2/254/Profile/${id}/LinkedProfiles/`)
export const getInventory = (id: string, membershipType: string, token = cookie.getToken()) => _axios.get(
    `/Platform/Destiny2/${membershipType}/Profile/${id}/?components=200%2C201`,
    { headers: { Authorization: "Bearer " + token } }
)

function createFormParams(params: any) {
    return Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join("&")
}
