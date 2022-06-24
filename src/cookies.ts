export type Auth = {
    destinyToken: string
    memberId: string
    destinyRefreshToken: string
}

export type RequestWCookies = { cookie: (key: string, value: string) => void }

export class Cookie {

    static setCookies(r: RequestWCookies, cookies: { [key: string]: string }) {
        for (const key in cookies) {
            r.cookie(key, cookies[key])
        }
    }

    static readCookies(q: { cookies: { [key: string]: string } }, cookies: string[]) {
        return cookies.map(key => q.cookies[key])
    }

    static setAuth(r: RequestWCookies, auth: Auth) {
        this.setCookies(r, auth)
    }
}