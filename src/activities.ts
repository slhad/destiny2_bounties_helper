import { getActivity, getCookies } from "./api"
import { RWC, sortByLastPlayed } from "./constants"
import manifest from "./manifest"

export class Activities {

    static getLastCharacterIdUsed(info: fetchedData) {
        return Object.keys(info.characters).map(key => info.characters[key]).sort(sortByLastPlayed)[0]
    }

    static async fetchData(q: RWC, characterId?: string) {
        const cookies = getCookies(q)
        const activityResponse = await getActivity(cookies.profileMembershipId, cookies.profileMembershipType, cookies.token, characterId)
        if (!activityResponse) return
        const characters = activityResponse.data.Response[characterId ? "character" : "characters"].data
        const activities = activityResponse.data.Response[characterId ? "activities" : "characterActivities"].data
        const data: fetchedData = {
            characters: characterId ? { [characterId]: characters } : characters,
            activities: characterId ? { [characterId]: activities } : activities,
        }
        return data
    }

    static async fetchLastUsedCharacterActivities(q: RWC) {
        const info = await this.fetchData(q)
        if (!info) return
        const lastUsedCharacter = this.getLastCharacterIdUsed(info)
        return this.extractCharacterActivities(info, q, lastUsedCharacter.characterId)
    }

    static extractCharacterActivities(info: fetchedData, q: RWC, characterId: string) {
        const character = info.characters[characterId]
        const activities = info.activities[characterId]
        const activity = manifest.t(activities.currentActivityHash)
        const activityMode = manifest.t(activities.currentActivityModeHash)
        const destination = manifest.t(activity.destinationHash)
        const place = manifest.t(activity.placeHash)

        return {
            started: activities.dateActivityStarted,
            activityName: activity ? activity.displayProperties.name : "",
            activityLocation: activity ? activity.displayProperties.description : "",
            activity,
            destination,
            place,
            at: JSON.stringify(activity, undefined, 3),
            dt: JSON.stringify(destination, undefined, 3),
            pt: JSON.stringify(place, undefined, 3),
            activityMode,
            character,
            activities
        }
    }
}


export type fetchedData = {
    characters: any
    activities: any
}