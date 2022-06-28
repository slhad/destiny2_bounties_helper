import { CookieOptions } from "express"

export type CookieWithOptions = { value: string, options: CookieOptions }
export type CookieContent = string | CookieWithOptions
export type Auth = {
    destinyToken: CookieContent
    memberId: CookieContent
    destinyRefreshToken: CookieContent
}

export type RequestWCookies = { cookie: (key: string, value: string, options?: CookieOptions) => void }
export type QueryWCookies = { cookies: { [key: string]: CookieContent } }

export class Cookie {

    static setCookies(r: RequestWCookies, cookies: { [key: string]: CookieContent }) {
        for (const key in cookies) {
            const value = typeof cookies[key] !== "string" ? (cookies[key] as CookieWithOptions).value : cookies[key] as string
            const options = typeof cookies[key] !== "string" ? (cookies[key] as CookieWithOptions).options : undefined
            r.cookie(key, value, options)
        }
    }

    static readCookies(q: QueryWCookies, cookies: CookieContent[]) {
        return cookies.map(key => q.cookies[key as string])
    }

    static setAuth(r: RequestWCookies, auth: Auth) {
        this.setCookies(r, auth)
    }

    static getRefresh(q: QueryWCookies) {
        return q.cookies["destinyRefreshToken"]
    }
}