export const bountiesType = ["crucible", "gambit", "strikes"]
export const bungiePath = "https://www.bungie.net"
export const backup = {
    icon: {
        strikes: "/common/destiny2_content/icons/91121c659c5cc0d8938dfe004426c3fd.jpg",
        crucible: "/common/destiny2_content/icons/619ac29fe998248f84e10ea906d4eda0.jpg",
        gambit: "/common/destiny2_content/icons/3be4e28391c8ba1ee29c41ef67e5f509.jpg"
    }
}
export const defaultOpts = {
    allCharactersSizeIcon: 24,
    bountyNeedCount: 8,
    backgroundColor: "transparent",
    strikesAllowed: true,
    crucibleAllowed: true,
    gambitAllowed: true,
    autoRefresh: 60,
    autoRefreshEnabled: false,
    locale: "en"
}

export interface Destiny2Cookies {
    membershipId: string
    token: string
    refreshToken: string
    profileMembershipId: string
    profileMembershipType: string,
    locale?: string
}

export enum ROUTE {
    CONNECTED = "/connected",
    HOME = "/",
    ALL_CHARACTERS = "/connected/allCharacters",
    CURRENT_CHARACTER = "/connected/character",
    CURRENT_CHARACTER_SMALL = "/connected/character/small",
    CURRENT_ACTIVITY = "/connected/activity",
    AUTH_ACCESS = "/config/auth",
    SETTINGS = "/settings",
    AUTH_CLEAR = "/config/clear"
}

export interface TotalBounties {
    complete: number,
    count: number,
    needed: number,
    todo: number,
    remaining: number,
    done: boolean
}

export interface GroupBounties {
    icon: string,
    complete: number,
    count: number,
    needed: number,
    todo: number,
    remaining: number,
    done: boolean
}

export type CharacterBounties = Record<string, GroupBounties>

export interface CharacterWithBounties {
    total: TotalBounties,
    groups: CharacterBounties,
    "class": string,
    emblemBackground: string,
    emblem: string
}

export interface AllCharacters {
    characters: CharacterWithBounties[]
}

export interface RWC { cookies: Record<string, string> }
export const getCookie = <T>(q: RWC, key: keyof typeof defaultOpts): T => {
    const value = (q.cookies[key] || defaultOpts[key]) as unknown as any
    switch (typeof (defaultOpts as any)[key]) {
        case "boolean": {
            return (value === true || value === "true") as unknown as T
        }
        case "number": {
            return parseInt(value) as unknown as T
        }
        default: {
            return value as unknown as T
        }
    }
}
export const mergeDataWOpts = (
    data: any,
    opts?: {
        q?: RWC,
        partials?: string[],
        variables?: Record<string, string | number | boolean>
    }
) => {
    const partials: any = {}
    for (const key of opts?.partials || []) {
        partials[key] = key
    }
    const variables = { ...opts?.variables }
    for (const key in opts?.q?.cookies || []) {
        if (key in variables && opts?.q?.cookies[key]) {
            switch (typeof (defaultOpts as any)[key]) {
                case "boolean": {
                    variables[key] = getCookie(opts?.q, key as any)
                    break
                }
                case "number": {
                    variables[key] = getCookie(opts?.q, key as any)
                    break
                }
                default: {
                    variables[key] = getCookie(opts?.q, key as any)
                }
            }
        }
    }
    return {
        ...{ partials },
        ...variables,
        ...data
    }
}

export const sortByLastPlayed = (a: any, b: any) => {
    const atime = +new Date(a.dateLastPlayed)
    const btime = +new Date(b.dateLastPlayed)
    if (atime == btime) return 0
    if (atime < btime) return 1
    return -1
}

export const findItemComponentObjective = (objectivesMap: any, ichash: string, objectiveHashes: string[]) => {
    const objectives = objectivesMap[ichash] && objectivesMap[ichash].objectives || { objectives: [] }.objectives
    return objectives.find((objective: any) => {
        return objectiveHashes.find(hash => objective.objectiveHash === hash)
    })
}

export const cleanDuplicate = (arr: string[]) => {
    if (!arr) {
        return []
    }

    if (arr.length < 2) {
        return arr
    }

    let reCheck = false, iLeft = 0, iRight = 1
    do {
        const { result, changed } = removeTooMuchData(arr[iLeft], arr[iRight])
        reCheck = changed
        if (changed) {
            if (result.length === 1) {
                arr.splice(iRight, 1)
                arr.splice(iLeft, 1, ...result)
            }
        }
        const lastCheck = iLeft === arr.length - 2 && iRight === arr.length - 1
        if (!changed && !lastCheck) {
            if (iRight >= arr.length - 1) {
                iLeft++
                iRight = iLeft + 1
            } else {
                iRight++
            }
            reCheck = true
        }

        if (changed && iRight === arr.length) {
            iRight--
            if (iLeft === iRight) {
                iLeft--
            }
        }

        if (lastCheck) {
            reCheck = false
        }

    } while (reCheck)
    return arr
}

export const removeTooMuchData = (left: string, right: string) => {
    let changed = false
    const result = []
    switch (true) {
        case (left === right):
        case left.includes(right):
            changed = true
            result.push(left)
            break
        case right.includes(left):
            result.push(right)
            changed = true
            break
    }

    return {
        changed,
        result
    }
}