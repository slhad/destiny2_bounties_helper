import { getInventory, getLinkedProfile } from "./api"
import { AllCharacters, backup, bountiesType, bungiePath, CharacterBounties, CharacterWithBounties, findItemComponentObjective, getCookie, RWC, sortByLastPlayed } from "./constants"
import manifest from "./manifest"

export class Bounties {

    static async fetchBounties(refreshedToken: any, q: RWC) {
        const profileResponse = await getLinkedProfile(refreshedToken.data.membership_id)
        const profile = profileResponse.data.Response.profiles.sort(sortByLastPlayed)[0]
        const inventoryResponse = await getInventory(profile.membershipId, profile.membershipType, refreshedToken.data.access_token)
        const characters = inventoryResponse.data.Response.characters.data
        const inventories = inventoryResponse.data.Response.characterInventories.data
        const objectives = inventoryResponse.data.Response.itemComponents.objectives.data

        const data: AllCharacters = {
            characters: []
        }

        for (const characterId of Object.keys(characters)) {
            const character = characters[characterId]
            const classCharacter = manifest.t(character.classHash).displayProperties.name
            const inventory = inventories[characterId].items
            const characterBounties: CharacterWithBounties = {
                class: classCharacter,
                groups: {},
                total: { complete: 0, count: 0, needed: 0, remaining: 0, todo: 0, done: false }
            }
            const items = []
            for (const item of inventory) {
                try {
                    const _item = manifest.t(item.itemHash)
                    if (_item
                        && _item.inventory
                        && _item.inventory.stackUniqueLabel
                        && _item.inventory.stackUniqueLabel.indexOf("bounties.") === 0
                        && bountiesType.indexOf(_item.inventory.stackUniqueLabel.split(".")[1]) >= 0
                    ) {
                        const objectiveHashes = _item.objectives.objectiveHashes
                        const objective = findItemComponentObjective(objectives, item.itemInstanceId, objectiveHashes)
                        items.push({ item: item, definition: _item, objective: objective })
                    }
                } catch ({ message, stack }) {
                    console.warn(`skipping ${message} : ${stack}`, item, manifest.t(item.itemHash))
                    continue
                }
            }

            for (const key in backup.icon) {
                const needed = getCookie<number>(q, "bountyNeedCount")
                const allowedGroup = getCookie(q, key as any)
                if (!allowedGroup) {
                    continue
                }
                characterBounties.groups[key] = {
                    count: 0,
                    complete: 0,
                    needed: needed,
                    todo: 0,
                    remaining: 0,
                    done: false,
                    icon: bungiePath + (backup.icon as any)[key],
                }
            }

            const bountiesGroup: CharacterBounties = items.reduce((bounties, bounty) => {
                const bountyType = bounty.definition.inventory.stackUniqueLabel.split(".")[1]
                const allowedGroup = getCookie(q, bountyType)
                if (allowedGroup) {
                    if (bounties[bountyType].count === 0) {
                        bounties[bountyType].icon = bungiePath + bounty.definition.displayProperties.icon
                    }
                    bounties[bountyType].count++
                    if (bounty.objective.complete) {
                        bounties[bountyType].complete++
                    } else {
                        bounties[bountyType].todo++
                    }
                }
                return bounties
            }, characterBounties.groups)

            characterBounties.groups = bountiesGroup

            for (const bountyGroupName in bountiesGroup) {
                const bountyGroup = bountiesGroup[bountyGroupName]
                const remaining = getCookie<number>(q, "bountyNeedCount") - bountyGroup.complete
                bountyGroup.remaining = remaining > 0 ? remaining : 0
                bountyGroup.done = bountyGroup.remaining === 0
                characterBounties.total.complete += bountyGroup.complete
                characterBounties.total.count += bountyGroup.count
                characterBounties.total.needed += getCookie<number>(q, "bountyNeedCount")
                characterBounties.total.todo += bountyGroup.todo
                characterBounties.total.remaining += bountyGroup.remaining
                characterBounties.total.done = characterBounties.total.remaining === 0
            }
            data.characters.push(characterBounties)
        }

        return data
    }


}