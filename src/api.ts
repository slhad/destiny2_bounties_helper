import axios, { AxiosRequestConfig } from "axios"
import { api_key, client_id, client_secret } from "../config.json"
import { Destiny2Cookies, RWC, sortByLastPlayed } from "./constants"

const API_KEY = process.env["API_KEY"] || api_key
const CLIENT_ID = process.env["CLIENT_ID"] || client_id
const CLIENT_SECRET = process.env["CLIENT_SECRET"] || client_secret

const _axios = axios.create({
    baseURL: "https://www.bungie.net/",
    timeout: 10000,
    withCredentials: true,
    headers: {
        "X-API-Key": API_KEY,
    }
})

const getMaxAge = () => { return { maxAge: Date.now() + 3600 * 24 * 365 } }
export const axiosError = (err: any) => {
    console.log(`${err.message} : ${err.stack}`)
}
export const authorize = (state: string) => `https://www.bungie.net/en/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&state=${state}`

export const getToken = (code: string) => {

    const config: AxiosRequestConfig<string> = {
        method: "post",
        url: "platform/app/oauth/token/",
        data: createFormParams({
            CLIENT_ID,
            CLIENT_SECRET,
            grant_type: "authorization_code",
            code
        }),

        headers: {
            "X-API-Key": API_KEY,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    return _axios.request(config).catch(axiosError)
}

export const accessToken = async (q: RWC, r: any) => {
    const aToken = q.cookies["destinyToken"]
    const rToken = q.cookies["destinyRefreshToken"]
    if (aToken) {
        await ensureProfileMembership(q, r)
        return aToken
    } else if (rToken) {
        const refreshedToken = await refresh(rToken)
        if (refreshedToken) {
            setCookies(refreshedToken, r, q)
            await ensureProfileMembership(q, r)
            return refreshedToken.data.access_token
        }
    }
    return
}

export const ensureProfileMembership = async (q: RWC, r: any) => {
    const cookies = getCookies(q)
    if (!cookies.membershipId || !cookies.profileMembershipId || !cookies.profileMembershipType) {
        const profileResponse = await getLinkedProfile(cookies.membershipId)
        if (profileResponse) {
            const profile = profileResponse.data.Response.profiles.sort(sortByLastPlayed)[0]
            setCookies(profile, r, q)
        }
    }
}

export const clearTokens = (r: any) => {
    r.clearCookie("destinyToken")
    r.clearCookie("destinyRefreshToken")
    r.clearCookie("destinyMembershipId")
    r.clearCookie("destinyProfileMembershipId")
    r.clearCookie("destinyProfileMembershipType")
}

export const setCookies = (token: any, r: any, q?: RWC): Destiny2Cookies => {
    const cookies: Destiny2Cookies = {
        membershipId: token && token.data && token.data.membership_id,
        refreshToken: token && token.data && token.data.refresh_token,
        token: token && token.data && token.data.access_token,
        profileMembershipId: token && token.membershipId,
        profileMembershipType: token && token.membershipType
    }
    if (cookies.token) {
        r.cookie("destinyToken", cookies.token, token && token.data && token.data.expires_in ? { maxAge: token.data.expires_in * 1000 } : undefined)
    }
    if (cookies.refreshToken) {
        r.cookie("destinyRefreshToken", cookies.refreshToken, token && token.data && token.data.refresh_expires_in ? { maxAge: token.data.refresh_expires_in * 1000 } : undefined)
    }
    if (cookies.membershipId) {
        r.cookie("destinyMembershipId", cookies.membershipId, getMaxAge())
    }
    if (cookies.profileMembershipId) {
        r.cookie("destinyProfileMembershipId", cookies.profileMembershipId, getMaxAge())
    }
    if (cookies.profileMembershipType) {
        r.cookie("destinyProfileMembershipType", cookies.profileMembershipType, getMaxAge())
    }

    if (q && q.cookies) {
        if (cookies.membershipId) {
            q.cookies["destinyMembershipId"] = cookies.membershipId
        }
        if (cookies.profileMembershipId) {
            q.cookies["destinyProfileMembershipId"] = cookies.profileMembershipId
        }
        if (cookies.profileMembershipType) {
            q.cookies["destinyProfileMembershipType"] = cookies.profileMembershipType
        }
    }

    return cookies
}

export const getCookies = (q: any): Destiny2Cookies => {
    return {
        membershipId: q.cookies["destinyMembershipId"],
        refreshToken: q.cookies["destinyRefreshToken"],
        token: q.cookies["destinyToken"],
        profileMembershipId: q.cookies["destinyProfileMembershipId"],
        profileMembershipType: q.cookies["destinyProfileMembershipType"]
    }
}

export const refresh = (refresh_token: string) => _axios.post(
    "platform/app/oauth/token/",
    createFormParams({
        CLIENT_ID,
        CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token
        // code,
    }),
    {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
).catch(axiosError)

export const getManifest = () => _axios.get("/Platform/Destiny2/Manifest/").catch(axiosError)
export const getUser = (id: string) => _axios.get(`/User/GetBungieNetUserById/${id}/`).catch(axiosError)
export const getLinkedProfile = (id: string) => _axios.get(`/Platform/Destiny2/254/Profile/${id}/LinkedProfiles/`).catch(axiosError)

export enum DestinyComponentType {
    None = 0,
    Profiles = 100,
    VendorReceipts = 101,
    ProfileInventories = 102,
    ProfileCurrencies = 103,
    ProfileProgression = 104,
    PlatformSilver = 105,
    Characters = 200,
    CharacterInventories = 201,
    CharacterProgressions = 202,
    CharacterRenderData = 203,
    CharacterActivities = 204,
    CharacterEquipment = 205,
    ItemInstances = 300,
    ItemObjectives = 301,
    ItemPerks = 302,
    ItemRenderData = 303,
    ItemStats = 304,
    ItemSockets = 305,
    ItemTalentGrids = 306,
    ItemCommonData = 307,
    ItemPlugStates = 308,
    ItemPlugObjectives = 309,
    ItemReusablePlugs = 310,
    Vendors = 400,
    VendorCategories = 401,
    VendorSales = 402,
    Kiosks = 500,
    CurrencyLookups = 600,
    PresentationNodes = 700,
    Collectibles = 800,
    Records = 900,
    Transitory = 1000,
    Metrics = 1100,
    StringVariables = 1200,
    Craftables = 1300

}

export const inventoryComponents = [
    DestinyComponentType.Characters,
    DestinyComponentType.CharacterInventories,
    DestinyComponentType.ItemObjectives
]

export const getCharacters = (id: string, membershipType: string, token: string) => _axios.get(
    `/Platform/Destiny2/${membershipType}/Profile/${id}/?components=${DestinyComponentType.Characters}`,
    { headers: { Authorization: "Bearer " + token } }
).catch(axiosError)

export const getInventory = (id: string, membershipType: string, token: string, characterId?: string) => {

    const path = `/Platform/Destiny2/${membershipType}/Profile/${id}${characterId ? "/Character/" + characterId : ""}/?components=${inventoryComponents.join("%2C")}`
    return _axios.get(
        path,
        { headers: { Authorization: "Bearer " + token } }
    ).catch(axiosError)
}

function createFormParams(params: any) {
    return Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join("&")
}
