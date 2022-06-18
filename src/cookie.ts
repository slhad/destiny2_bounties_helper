import Cookies from "js-cookie"

const setting = {
    expires: 1 / 24
}

const token = "destinyToken"
export const getToken = () => Cookies.get(token)
export const removeToken = () => Cookies.remove(token)
export const setToken = (str: string) => Cookies.set(token, str, setting)

const refreshToken = "destinyRefreshToken"
export const getRefreshToken = () => Cookies.get(refreshToken)
export const removeRefreshToken = () => Cookies.remove(refreshToken)
export const setRefreshToken = (str: string, expires: number) => Cookies.set(refreshToken, str, { ...setting, expires })

const memberId = "memberId"
export const getMemberId = () => Cookies.get(memberId)
export const setMemberId = (str: string) => Cookies.set(memberId, str, setting)