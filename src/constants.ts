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
    autoRefreshEnabled: false
}

export type Destiny2Cookies = {
    membershipId: string
    token: string
    refreshToken: string
    profileMembershipId: string
    profileMembershipType: string
}

export enum ROUTE {
    CONNECTED = "/connected",
    HOME = "/",
    ALL_CHARACTERS = "/connected/allCharacters",
    CURRENT_CHARACTER = "/connected/character",
    CURRENT_CHARACTER_SMALL = "/connected/character/small",
    AUTH_ACCESS = "/config/auth",
    SETTINGS = "/settings",
    AUTH_CLEAR = "/config/clear"
}

export type TotalBounties = {
    complete: number,
    count: number,
    needed: number,
    todo: number,
    remaining: number,
    done: boolean
}

export type GroupBounties = {
    icon: string,
    complete: number,
    count: number,
    needed: number,
    todo: number,
    remaining: number,
    done: boolean
}

export type CharacterBounties = { [key: string]: GroupBounties }

export type CharacterWithBounties = {
    total: TotalBounties,
    groups: CharacterBounties,
    "class": string,
    emblemBackground: string,
    emblem: string
}

export type AllCharacters = {
    characters: CharacterWithBounties[]
}

export type RWC = { cookies: { [key: string]: string } }
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
        variables?: { [key: string]: string | number | boolean }
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
    return { ...{ partials }, ...variables, ...data }
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