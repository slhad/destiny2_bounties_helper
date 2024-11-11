import { getActivity, getCookies } from "./api"
import { RWC, sortByLastPlayed } from "./constants"
import manifest, { Lang } from "./manifest"

export class Activities {
    static getLastCharacterIdUsed(info: fetchedData) {
        return Object.keys(info.characters)
            .map((key) => info.characters[key])
            .sort(sortByLastPlayed)[0]
    }

    static async fetchData(q: RWC, characterId?: string) {
        const cookies = getCookies(q)
        const activityResponse = await getActivity(
            cookies.profileMembershipId,
            cookies.profileMembershipType,
            cookies.token,
            characterId
        )
        if (!activityResponse) return
        const characters =
            activityResponse.data.Response[
                characterId ? "character" : "characters"
            ].data
        const activities =
            activityResponse.data.Response[
                characterId ? "activities" : "characterActivities"
            ].data
        const data: fetchedData = {
            characters: characterId
                ? { [characterId]: characters }
                : characters,
            activities: characterId ? { [characterId]: activities } : activities
        }
        return data
    }

    static async fetchLastUsedCharacterActivities(q: RWC) {
        const info = await this.fetchData(q)
        if (!info) return
        const lastUsedCharacter = this.getLastCharacterIdUsed(info)
        return this.extractCharacterActivities(
            info,
            q,
            lastUsedCharacter.characterId
        )
    }

    static getLocale(q: RWC): Lang {
        return q.cookies["locale"] as Lang
    }

    static extractCharacterActivities(
        info: fetchedData,
        q: RWC,
        characterId: string
    ) {
        const character = info.characters[characterId]
        const activities = info.activities[characterId]

        if (activities.currentActivityHash === 0) {
            return {}
        }

        const activity = manifest.t(
            activities.currentActivityHash,
            this.getLocale(q)
        )
        const activityMode = manifest.t(
            activities.currentActivityModeHash,
            this.getLocale(q)
        )
        const destination = manifest.t(
            activity.destinationHash,
            this.getLocale(q)
        )
        const place = manifest.t(activity.placeHash, this.getLocale(q))

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
            mt: JSON.stringify(activityMode || {}, undefined, 3),
            activityMode,
            character,
            activities,
            chapterName: this.computeChapterText(activity, destination, place, activityMode)
        }
    }

    static computeChapterText(
        activity: ActivityDefinition,
        destination: BaseDefinition,
        place: BaseDefinition,
        activityMode: ActivityMode
    ) {
        if (activityMode?.displayProperties?.name) {


            if ([ActivityModeType.SCORED_HEROIC_NIGHTFALL, ActivityModeType.SCORED_NIGHTFALL].includes(activity.directActivityModeType as ActivityModeType)) {
                return `${activity.originalDisplayProperties?.name} - ${activity.displayProperties.description} - ${activity.selectionScreenDisplayProperties?.name} - ${destination.displayProperties.name}`
            }

            if (activity.selectionScreenDisplayProperties?.name) {
                return `${activityMode.displayProperties.name} - ${activity.originalDisplayProperties?.name} - ${activity.selectionScreenDisplayProperties?.name} - ${place.displayProperties.name}`
            }

            if (activityMode.modeType === ActivityModeType.SOCIAL) {
                return `${activityMode.displayProperties.name} - ${activity.displayProperties.name}`

            }

            if (activity.isPvP) {
                return `${place.displayProperties.name} - ${activityMode.displayProperties.name} - ${activity.displayProperties.name}`
            }

            return `${activityMode.displayProperties.name} - ${activity.displayProperties.name} - ${destination.displayProperties.name}`

            // if (activity.activityModeTypes.includes(6)) {
            //     return `Patrol - ${activity.originalDisplayProperties.name} - ${destination.displayProperties.name}`
            // }

            // // Offensive
            // if (activity.activityModeTypes.includes(86)) {
            //     return `Offensive - ${activity.originalDisplayProperties.name} - ${activity.selectionScreenDisplayProperties.name} - ${destination.displayProperties.name}`
            // }

            // // Lost sector
            // if (activity.activityModeTypes.includes(87)) {
            //     return `Lost sector - ${activity.originalDisplayProperties.name} - ${activity.selectionScreenDisplayProperties.name} - ${destination.displayProperties.name}`
            // }

            // // Strikes
            // if (activity.activityModeTypes.includes(18)) {
            //     return `${activity.originalDisplayProperties.name} - ${activity.originalDisplayProperties.description} - ${activity?.selectionScreenDisplayProperties?.name} - ${destination.displayProperties.name}`
            // }

            // if (activity.activityModeTypes.includes(40)) {
            //     const mainActivity = activity.displayProperties.name !== "" ? activity.displayProperties.name : destination.displayProperties.name
            //     const locationActivity = destination.displayProperties.name !== mainActivity ? ` - ${destination.displayProperties.name}` : ""
            //     const placeActivity = destination.displayProperties.name !== place.displayProperties.name ? ` - ${place.displayProperties.name}` : ""
            //     return `Social - ${activity.displayProperties.name}`
            // }
        }

        const mainActivity = activity.displayProperties.name !== "" ? activity.displayProperties.name : destination.displayProperties.name
        const locationActivity = destination.displayProperties.name !== mainActivity ? ` - ${destination.displayProperties.name}` : ""
        const placeActivity = destination.displayProperties.name !== place.displayProperties.name ? ` - ${place.displayProperties.name}` : ""
        return `${mainActivity}${placeActivity}${locationActivity}`
    }
}

export type fetchedData = {
    characters: any
    activities: any
}

export type ActivityDefinition = BaseDefinition & CustomActivity & {
    originalDisplayProperties?: {
        name: string
        description: string
    },
    isPvP?: boolean,
    activityModeTypes?: number[],
    directActivityModeType?: number
}

export type ActivityMode = BaseDefinition & {
    modeType: number
}

export type BaseDefinition = {
    displayProperties: {
        name: string
        description: string
    }
}

export type CustomActivity = {
    selectionScreenDisplayProperties?: {
        name: string
        description: string
    }
}

export enum ActivityModeType {
    STORY = 2,
    STRIKE = 3,
    RAID = 4,
    ALL_PVP = 5,
    PATROL = 6,
    ALL_PVE = 7,
    ALL_STRIKES = 18,
    SOCIAL = 40,
    SCORED_NIGHTFALL = 46,
    SCORED_HEROIC_NIGHTFALL = 47

}