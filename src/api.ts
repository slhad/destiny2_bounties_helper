import axios from "axios"
import { api_key, client_id, client_secret } from "../config.json"

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
export const getInventory = (id: string, membershipType: string, token: string) => _axios.get(
    `/Platform/Destiny2/${membershipType}/Profile/${id}/?components=${inventoryComponents.join("%2C")}`,
    { headers: { Authorization: "Bearer " + token } }
)

function createFormParams(params: any) {
    return Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join("&")
}
