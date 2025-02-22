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

        if (typeof activity !== "object") {
            return {}
        }

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
            activityName: activity?.displayProperties?.name || "",
            activityLocation: activity?.displayProperties?.description || "",
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
        const chapterText: string[] = []
        if (activityMode?.displayProperties?.name) {

            switch (true) {
                case activityMode.modeType === ActivityModeType.GAMBIT: {
                    chapterText.push(
                        activityMode.displayProperties.name,
                        activity.displayProperties.name,
                        activity.displayProperties.description
                    )
                    break
                }
                case [ActivityModeType.SCORED_HEROIC_NIGHTFALL, ActivityModeType.SCORED_NIGHTFALL].includes(activity.directActivityModeType as ActivityModeType): {
                    chapterText.push(
                        activity.originalDisplayProperties?.name ?? "",
                        activity.displayProperties.description,
                        activity.selectionScreenDisplayProperties?.name ?? "",
                        destination.displayProperties.name
                    )
                    break
                }
                case activityMode.modeType === ActivityModeType.OFFENSIVE: {
                    chapterText.push(activityMode.displayProperties.name)
                    if (activity.originalDisplayProperties?.name.includes(activity.selectionScreenDisplayProperties?.name || "")) {
                        chapterText.push(activity.originalDisplayProperties?.name)
                    } else {
                        chapterText.push(
                            activity.selectionScreenDisplayProperties?.name ?? "",
                            activity.originalDisplayProperties?.name ?? ""
                        )
                    } break
                }
                case !!activity.selectionScreenDisplayProperties?.name: {
                    chapterText.push(
                        activityMode.displayProperties.name,
                        activity.originalDisplayProperties?.name ?? "",
                        activity.selectionScreenDisplayProperties.name ?? "",
                        place.displayProperties.name
                    )
                    break
                }
                case activityMode.modeType === ActivityModeType.SOCIAL: {
                    chapterText.push(
                        activityMode.displayProperties.name,
                        activity.displayProperties?.name
                    )
                    break
                }
                case activity.isPvP: {
                    chapterText.push(
                        place.displayProperties.name,
                        activityMode.displayProperties.name,
                        activity.displayProperties.name
                    )
                    break
                }
                default:
                    chapterText.push(
                        activityMode.displayProperties.name,
                        activity.displayProperties.name,
                        destination.displayProperties.name
                    )
            }
        } else {
            const mainActivity = activity.displayProperties?.name !== "" ? activity.displayProperties?.name : destination.displayProperties?.name
            chapterText.push(
                mainActivity,
                destination.displayProperties?.name !== mainActivity ? destination.displayProperties?.name : "",
                destination.displayProperties?.name !== place.displayProperties?.name ? place.displayProperties?.name : ""
            )
        }


        return chapterText.filter(a => typeof a === "string").filter(a => a.trim() !== "").join(" - ")
    }
}

export interface fetchedData {
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

export interface BaseDefinition {
    displayProperties: {
        name: string
        description: string
    }
}

export interface CustomActivity {
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
    SCORED_HEROIC_NIGHTFALL = 47,
    GAMBIT = 63,
    All_PVE_COMPETITIVE = 64,
    OFFENSIVE = 86,
    LOST_SECTOR = 87

}