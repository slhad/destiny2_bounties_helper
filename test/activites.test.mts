import { expect, describe, it } from "vitest"
import { Activities } from "../src/activities.js"

const IN_ORBIT = {
    Activity: {
        "displayProperties": {
            "description": "",
            "name": "",
            "icon": "/img/misc/missing_icon_d2.png",
            "hasIcon": false
        }, "originalDisplayProperties": {
            "description": "",
            "name": "",
            "icon": "/img/misc/missing_icon_d2.png",
            "hasIcon": false
        },
        "releaseIcon": "/img/misc/missing_icon_d2.png",
        "releaseTime": 0,
        "completionUnlockHash": 0,
        "activityLightLevel": 0,
        "destinationHash": 2961497387,
        "placeHash": 2961497387,
        "activityTypeHash": 73015004,
        "tier": -1,
        "rewards": [],
        "modifiers": [],
        "isPlaylist": false,
        "challenges": [],
        "optionalUnlockStrings": [],
        "inheritFromFreeRoam": false,
        "suppressOtherRewards": false,
        "playlistItems": [],
        "matchmaking": {
            "isMatchmade": false, "minParty": 1, "maxParty": 12, "maxPlayers": 12, "requiresGuardianOath": false
        },
        "isPvP": false
        , "insertionPoints": [], "activityLocationMappings": [], "hash": 82913930, "index": 0, "redacted": false, "blacklisted": false
    },
    Destination: {
        "displayProperties": { "description": "In orbit", "name": "Orbit", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false },
        "hash": 2961497387,
        "index": 18,
        "redacted": false,
        "blacklisted": false
    },
    Place: {
        "displayProperties": { "description": "In orbit", "name": "Orbit", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false },
        "hash": 2961497387,
        "index": 18,
        "redacted": false,
        "blacklisted": false
    }
}

const TOWER = {
    "Activity": {
        "displayProperties": {
            "description": "Home of the Guardians, where you can regroup, rearm, and form new alliances before venturing beyond.",
            "name": "Tower", "icon": "/common/destiny2_content/icons/a552ac10d78119cf518adec22982b174.png", "hasIcon": true
        }, "originalDisplayProperties": {
            "description": "Home of the Guardians, where you can regroup, rearm, and form new alliances before venturing beyond.",
            "name": "Tower", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false
        }, "releaseIcon": "/img/misc/missing_icon_d2.png", "releaseTime": 0, "completionUnlockHash": 0, "activityLightLevel": 0,
        "destinationHash": 1737926756, "placeHash": 3747705955, "activityTypeHash": 1589650888, "tier": 1,
        "pgcrImage": "/img/destiny_content/pgcr/social_traveler.jpg", "rewards": [],
        "modifiers": [{ "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }],
        "isPlaylist": false, "challenges": [], "optionalUnlockStrings": [], "inheritFromFreeRoam": false,
        "suppressOtherRewards": false,
        "requirements": {
            "leaderRequirementLabels": [{ "displayString": "" }, { "displayString": "" }, { "displayString": "" }, { "displayString": "Requires Full Version of Destiny 2" }],
            "fireteamRequirementLabels": [{ "displayString": "" }, { "displayString": "" }, { "displayString": "" }, { "displayString": "" }, { "displayString": "" }, { "displayString": "Requires Full Version of Destiny 2" }]
        }, "playlistItems": [],
        "matchmaking": { "isMatchmade": false, "minParty": 1, "maxParty": 6, "maxPlayers": 26, "requiresGuardianOath": false },
        "directActivityModeHash": 1589650888, "directActivityModeType": 40,
        "activityModeHashes": [1589650888], "activityModeTypes": [40], "isPvP": false, "insertionPoints": [], "activityLocationMappings": [{ "locationHash": 3743451003, "activationSource": "quest", "itemHash": 4222651348, "objectiveHash": 1047295712, "activityHash": 3737830648 }, { "locationHash": 3743451003, "activationSource": "quest", "itemHash": 4222651348, "objectiveHash": 1047295712, "activityHash": 3737830648 }, { "locationHash": 3743451003, "activationSource": "quest", "itemHash": 4222651348, "objectiveHash": 1047295712, "activityHash": 3737830648 }, { "locationHash": 3298481793, "activationSource": "lz", "activityHash": 3737830648 }, { "locationHash": 2540732786, "activationSource": "lz", "activityHash": 3737830648 }], "hash": 3737830648, "index": 136, "redacted": false, "blacklisted": false
    },
    "Destination": {
        "displayProperties": {
            "description": "Last City, Earth",
            "name": "The Last City", "hasIcon": false
        },
        "placeHash": 3747705955,
        "defaultFreeroamActivityHash": 0,
        "activityGraphEntries": [{ "activityGraphHash": 1737926756 }], "bubbleSettings": [{ "displayProperties": { "description": "", "name": "Annex", "hasIcon": false } }, { "displayProperties": { "description": "", "name": "Bazaar", "hasIcon": false } }, { "displayProperties": { "description": "", "name": "Courtyard", "hasIcon": false } }, { "displayProperties": { "description": "", "name": "Hangar", "hasIcon": false } }], "bubbles": [{ "hash": 4101540847, "displayProperties": { "description": "", "name": "Annex", "hasIcon": false } }, { "hash": 2372580540, "displayProperties": { "description": "", "name": "Bazaar", "hasIcon": false } }, { "hash": 2871560606, "displayProperties": { "description": "", "name": "Courtyard", "hasIcon": false } }, { "hash": 2192450996, "displayProperties": { "description": "", "name": "Hangar", "hasIcon": false } }], "hash": 1737926756, "index": 6, "redacted": false, "blacklisted": false
    },
    "Place": {
        "displayProperties": {
            "description": "Mankind's cradle, full of shattered glory, ready to be reclaimed.",
            "name": "Earth", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false
        }, "hash": 3747705955, "index": 0, "redacted": false, "blacklisted": false
    }
}

const ROAMING_PALE_HEART = {
    "Activity": { "displayProperties": { "description": "A surreal domain of memory within the Traveler, corrupted by the Witness.", "name": "The Pale Heart", "icon": "/common/destiny2_content/icons/9b8a4c7a07890778b929654716010b39.png", "hasIcon": true }, "originalDisplayProperties": { "description": "A surreal domain of memory within the Traveler, corrupted by the Witness.", "name": "The Pale Heart", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false }, "releaseIcon": "/img/misc/missing_icon_d2.png", "releaseTime": 0, "completionUnlockHash": 0, "activityLightLevel": 0, "destinationHash": 3998251206, "placeHash": 3998251206, "activityTypeHash": 3497767639, "tier": -1, "pgcrImage": "/img/destiny_content/pgcr/tfs_freeroam.jpg", "rewards": [], "modifiers": [{ "activityModifierHash": 1783825372 }], "isPlaylist": false, "challenges": [], "optionalUnlockStrings": [], "inheritFromFreeRoam": false, "suppressOtherRewards": false, "playlistItems": [], "matchmaking": { "isMatchmade": false, "minParty": 1, "maxParty": 3, "maxPlayers": 3, "requiresGuardianOath": false }, "directActivityModeHash": 3497767639, "directActivityModeType": 6, "activityModeHashes": [3497767639, 1164760493], "activityModeTypes": [6, 7], "isPvP": false, "insertionPoints": [], "activityLocationMappings": [{ "locationHash": 2776222012, "activationSource": "lz", "activityHash": 3312889894 }, { "locationHash": 3457625626, "activationSource": "lz", "activityHash": 3312889894 }, { "locationHash": 870897194, "activationSource": "lz", "activityHash": 3312889894 }, { "locationHash": 725108454, "activationSource": "lz", "activityHash": 3312889894 }, { "locationHash": 245972680, "activationSource": "lz", "activityHash": 3312889894 }], "hash": 3312889894, "index": 306, "redacted": false, "blacklisted": false },
    "Destination": { "displayProperties": { "description": "A willful entity with inscrutable purpose.", "name": "The Traveler", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false }, "hash": 3998251206, "index": 31, "redacted": false, "blacklisted": false },
    "Place": { "displayProperties": { "description": "A willful entity with inscrutable purpose.", "name": "The Traveler", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false }, "hash": 3998251206, "index": 31, "redacted": false, "blacklisted": false }
}

const THE_BLOOMING_MASTER = {
    "Activity": {
        "displayProperties": {
            "description": "Expert Difficulty: Locked Equipment, Extra Shields\n\nChampions: [Disruption] Overload, [Stagger] Unstoppable\n\nThreat: [Arc] Arc\n\nShields: [Arc] Arc, [Solar] Solar\n\nModifiers: Epitaph, Chaff",
            "name": "The Blooming Deep: Master", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false
        }, "originalDisplayProperties": {
            "description": "Expert Difficulty: Locked Equipment, Extra Shields\n\nChampions: [Disruption] Overload, [Stagger] Unstoppable\n\nThreat: [Arc] Arc\n\nShields: [Arc] Arc, [Solar] Solar\n\nModifiers: Epitaph, Chaff",
            "name": "The Blooming Deep", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false
        }, "selectionScreenDisplayProperties": {
            "description": "Masterful, like everything you do. Only the most powerful will not face instant defeat.\n\nMatchmaking: OFF",
            "name": "Master", "hasIcon": false
        },
        "releaseIcon": "/img/misc/missing_icon_d2.png",
        "releaseTime": 0,
        "completionUnlockHash": 0,
        "activityLightLevel": 0,
        "destinationHash": 3998251206,
        "placeHash": 3998251206,
        "activityTypeHash": 103143560,
        "tier": -1,
        "pgcrImage": "/img/destiny_content/pgcr/lotus.jpg",
        "rewards": [{
            "rewardItems": [
                { "itemHash": 3632457717, "quantity": 0, "hasConditionalVisibility": false },
                { "itemHash": 4087193961, "quantity": 0, "hasConditionalVisibility": false },
                { "itemHash": 585074942, "quantity": 0, "hasConditionalVisibility": false }
            ]
        }],
        "modifiers": [
            { "activityModifierHash": 1651706850 },
            { "activityModifierHash": 2288210988 },
            { "activityModifierHash": 4226469317 },
            { "activityModifierHash": 501815068 },
            { "activityModifierHash": 1783825372 },
            { "activityModifierHash": 1783825372 },
            { "activityModifierHash": 1783825372 },
            { "activityModifierHash": 203094476 },
            { "activityModifierHash": 3307318061 },
            { "activityModifierHash": 40182179 },
            { "activityModifierHash": 186409259 },
            { "activityModifierHash": 795009574 },
            { "activityModifierHash": 1783825372 },
            { "activityModifierHash": 2691200658 },
            { "activityModifierHash": 3809788899 },
            { "activityModifierHash": 3196075844 },
            { "activityModifierHash": 1783825372 },
            { "activityModifierHash": 1783825372 },
            { "activityModifierHash": 1783825372 },
            { "activityModifierHash": 998275325 },
            { "activityModifierHash": 1783825372 },
            { "activityModifierHash": 3101164718 }
        ],
        "isPlaylist": false, "challenges": [],
        "optionalUnlockStrings": [], "inheritFromFreeRoam": false,
        "suppressOtherRewards": false,
        "requirements": {
            "leaderRequirementLabels": [],
            "fireteamRequirementLabels": [
                { "displayString": "You must complete the Lost Sector once in order to access it at a higher difficulty." },
                { "displayString": "Complete step 4 of the \"A Spark of Hope\" quest." }
            ]
        },
        "playlistItems": [],
        "matchmaking": {
            "isMatchmade": false, "minParty": 1, "maxParty": 3, "maxPlayers": 3, "requiresGuardianOath": false
        },
        "directActivityModeHash": 103143560,
        "directActivityModeType": 87,
        "activityModeHashes": [103143560, 1164760493],
        "activityModeTypes": [87, 7],
        "isPvP": false,
        "insertionPoints": [],
        "activityLocationMappings": [],
        "hash": 3995113183,
        "index": 1278,
        "redacted": false,
        "blacklisted": false
    },
    "Destination": {
        "displayProperties": {
            "description": "A willful entity with inscrutable purpose.",
            "name": "The Traveler",
            "icon": "/img/misc/missing_icon_d2.png",
            "hasIcon": false
        },
        "hash": 3998251206,
        "index": 31,
        "redacted": false,
        "blacklisted": false
    },
    "Place": {
        "displayProperties": {
            "description": "A willful entity with inscrutable purpose.",
            "name": "The Traveler",
            "icon": "/img/misc/missing_icon_d2.png",
            "hasIcon": false
        },
        "hash": 3998251206,
        "index": 31,
        "redacted": false,
        "blacklisted": false
    }
}

const NIGHTFALL_GRAND_MASTER_PROVING_GROUNDS = {
    "Activity": {
        "displayProperties": {
            "description": "Proving Grounds", "name": "Nightfall: Grandmaster", "icon": "/common/destiny2_content/icons/3642cf9e2acd174dcab5b5f9e3a3a45d.png", "hasIcon": true
        }, "originalDisplayProperties": {
            "description": "Proving Grounds", "name": "Nightfall", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false
        }, "selectionScreenDisplayProperties": {
            "description": "Good luck.\n\nMatchmaking: OFF", "name": "Grandmaster", "hasIcon": false
        }, "releaseIcon": "/img/misc/missing_icon_d2.png",
        "releaseTime": 0,
        "completionUnlockHash": 0,
        "activityLightLevel": 0,
        "destinationHash": 3607432451,
        "placeHash": 3607432451,
        "activityTypeHash": 575572995,
        "tier": -1,
        "pgcrImage": "/img/destiny_content/pgcr/nessus_proving_grounds.jpg",
        "rewards": [{
            "rewardItems": [{ "itemHash": 470135362, "quantity": 0, "hasConditionalVisibility": false },
            { "itemHash": 771478467, "quantity": 0, "hasConditionalVisibility": false },
            { "itemHash": 1438123385, "quantity": 0, "hasConditionalVisibility": false },
            { "itemHash": 2119974556, "quantity": 0, "hasConditionalVisibility": false }]
        }],
        "modifiers": [{ "activityModifierHash": 1651706850 }, { "activityModifierHash": 2288210988 },
        { "activityModifierHash": 4226469317 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 },
        { "activityModifierHash": 438106166 }, { "activityModifierHash": 1806568190 }, { "activityModifierHash": 976277003 },
        { "activityModifierHash": 3652821947 }, { "activityModifierHash": 1282934989 }, { "activityModifierHash": 745014575 },
        { "activityModifierHash": 1171597537 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 2691200658 },
        { "activityModifierHash": 3809788899 }, { "activityModifierHash": 3196075844 }, { "activityModifierHash": 1783825372 },
        { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 },
        { "activityModifierHash": 791047754 }, { "activityModifierHash": 4265630562 }, { "activityModifierHash": 4239965093 },
        { "activityModifierHash": 1783825372 }, { "activityModifierHash": 3912996116 }, { "activityModifierHash": 1783825372 },
        { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 },
        { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 },
        { "activityModifierHash": 3101164718 }, { "activityModifierHash": 1783825372 }],
        "isPlaylist": false,
        "challenges": [
            {
                "rewardSiteHash": 0, "inhibitRewardsUnlockHash": 0, "objectiveHash": 1612424695,
                "dummyRewards": [{
                    "itemHash": 73143230, "quantity": 0, "hasConditionalVisibility": false
                }
                ]
            },
            {
                "rewardSiteHash": 0, "inhibitRewardsUnlockHash": 0, "objectiveHash": 1542299784,
                "dummyRewards": [{
                    "itemHash": 2643364263, "quantity": 0, "hasConditionalVisibility": false
                }
                ]
            },
            {
                "rewardSiteHash": 0, "inhibitRewardsUnlockHash": 0, "objectiveHash": 3794117631,
                "dummyRewards": [{ "itemHash": 2643364263, "quantity": 0, "hasConditionalVisibility": false }]
            },
            {
                "rewardSiteHash": 0, "inhibitRewardsUnlockHash": 0, "objectiveHash": 1270593510,
                "dummyRewards": [{ "itemHash": 2643364263, "quantity": 0, "hasConditionalVisibility": false }]
            }],
        "optionalUnlockStrings": [], "inheritFromFreeRoam": false,
        "suppressOtherRewards": false,
        "requirements": {
            "leaderRequirementLabels": [
                { "displayString": "PlayStation®Plus Required" },
                { "displayString": "Xbox Live Gold Required" }, { "displayString": "" }, { "displayString": "" },
                { "displayString": "Reach Power Level 800" }
            ],
            "fireteamRequirementLabels": [
                { "displayString": "Requires Destiny 2: Beyond Light" },
                { "displayString": "Grandmaster difficulty in Nightfall opens after the third week of the Episode." },
                { "displayString": "All fireteam members must be at or above {var:2219178142} Power to play this activity." },
                { "displayString": "PlayStation®Plus Required" }, { "displayString": "Xbox Live Gold Required" }, { "displayString": "" },
                { "displayString": "" }, { "displayString": "Complete step 4 of the \"A Spark of Hope\" quest." }
            ]
        },
        "playlistItems": [], "matchmaking": { "isMatchmade": false, "minParty": 1, "maxParty": 3, "maxPlayers": 3, "requiresGuardianOath": false },
        "directActivityModeHash": 547513715, "directActivityModeType": 46, "activityModeHashes": [547513715, 2394616003, 1164760493],
        "activityModeTypes": [46, 18, 7],
        "isPvP": false,
        "insertionPoints": [],
        "activityLocationMappings": [],
        "hash": 2103025315, "index": 1193, "redacted": false, "blacklisted": false
    },
    "Destination": { "displayProperties": { "description": "An unstable Centaur planetoid.", "name": "Nessus", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false }, "hash": 3607432451, "index": 3, "redacted": false, "blacklisted": false },
    "Place": { "displayProperties": { "description": "An unstable Centaur planetoid.", "name": "Nessus", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false }, "hash": 3607432451, "index": 3, "redacted": false, "blacklisted": false }
}

const ONSLAUGHT_EXPERT_VOSTOK = {
    "Activity": {
        "displayProperties": {
            "description": "Defend Vanguard forces with the Advanced Defensive Unit against an onslaught of 50 combatant waves.", "name": "Expert: Vostok: Onslaught", "icon": "/common/destiny2_content/icons/1eef8c16956f4b2a0e5c11c84ee33490.png", "hasIcon": true
        }, "originalDisplayProperties": {
            "description": "Defend Vanguard forces with the Advanced Defensive Unit against an onslaught of 50 combatant waves.", "name": "Expert: Vostok", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false
        }, "selectionScreenDisplayProperties": {
            "description": "Defend Vanguard forces with the Advanced Defensive Unit against an onslaught of 50 combatant waves.", "name": "Onslaught", "hasIcon": false
        }, "releaseIcon": "/img/misc/missing_icon_d2.png", "releaseTime": 0, "completionUnlockHash": 0, "activityLightLevel": 2000, "destinationHash": 1700061161, "placeHash": 3747705955, "activityTypeHash": 1728319841, "tier": -1, "pgcrImage": "/img/destiny_content/pgcr/onslaught-vostok.jpg", "rewards": [], "modifiers": [{ "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 2543520884 }, { "activityModifierHash": 1545596619 }, { "activityModifierHash": 2889256157 }, { "activityModifierHash": 941999846 }, { "activityModifierHash": 1743397814 }, { "activityModifierHash": 1894842396 }, { "activityModifierHash": 2160690722 }, { "activityModifierHash": 186409259 }, { "activityModifierHash": 3517267764 }, { "activityModifierHash": 3652821947 }, { "activityModifierHash": 2006149364 }, { "activityModifierHash": 4038464106 }, { "activityModifierHash": 703904464 }, { "activityModifierHash": 3021161702 }, { "activityModifierHash": 112345143 }, { "activityModifierHash": 2208550513 }, { "activityModifierHash": 2139004924 }, { "activityModifierHash": 1553444357 }, { "activityModifierHash": 3758645512 }, { "activityModifierHash": 795009574 }, { "activityModifierHash": 95459596 }, { "activityModifierHash": 1326581064 }, { "activityModifierHash": 3320777106 }, { "activityModifierHash": 2626834038 }, { "activityModifierHash": 2743796883 }, { "activityModifierHash": 3132780533 }, { "activityModifierHash": 1282934989 }, { "activityModifierHash": 2178457119 }, { "activityModifierHash": 3912996116 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 2042632950 }, { "activityModifierHash": 1279873648 }, { "activityModifierHash": 1376889134 }, { "activityModifierHash": 1499411920 }, { "activityModifierHash": 2117382464 }], "isPlaylist": false, "challenges": [{ "rewardSiteHash": 0, "inhibitRewardsUnlockHash": 0, "objectiveHash": 51472017, "dummyRewards": [{ "itemHash": 3114385605, "quantity": 1, "hasConditionalVisibility": false }] }, { "rewardSiteHash": 0, "inhibitRewardsUnlockHash": 0, "objectiveHash": 3236905278, "dummyRewards": [{ "itemHash": 3114385605, "quantity": 1, "hasConditionalVisibility": false }] }, { "rewardSiteHash": 0, "inhibitRewardsUnlockHash": 0, "objectiveHash": 1583650743, "dummyRewards": [{ "itemHash": 3114385605, "quantity": 1, "hasConditionalVisibility": false }] }, { "rewardSiteHash": 0, "inhibitRewardsUnlockHash": 0, "objectiveHash": 61205796, "dummyRewards": [{ "itemHash": 3114385605, "quantity": 1, "hasConditionalVisibility": false }] }, { "rewardSiteHash": 0, "inhibitRewardsUnlockHash": 0, "objectiveHash": 2171624875, "dummyRewards": [{ "itemHash": 3114385605, "quantity": 1, "hasConditionalVisibility": false }] }, { "rewardSiteHash": 0, "inhibitRewardsUnlockHash": 0, "objectiveHash": 101331170, "dummyRewards": [{ "itemHash": 3114385605, "quantity": 1, "hasConditionalVisibility": false }] }], "optionalUnlockStrings": [{ "displayString": "Fireteam: 1-3 Players" }], "inheritFromFreeRoam": false, "suppressOtherRewards": false, "requirements": { "leaderRequirementLabels": [], "fireteamRequirementLabels": [{ "displayString": "Complete step 4 of the \"A Spark of Hope\" quest." }] }, "playlistItems": [], "matchmaking": { "isMatchmade": false, "minParty": 1, "maxParty": 3, "maxPlayers": 3, "requiresGuardianOath": false }, "directActivityModeHash": 992499158, "directActivityModeType": 86, "activityModeHashes": [992499158, 1164760493], "activityModeTypes": [86, 7], "isPvP": false, "insertionPoints": [], "activityLocationMappings": [], "hash": 3733482932, "index": 752, "redacted": false, "blacklisted": false
    },
    "Destination": { "displayProperties": { "description": "", "name": "Earth", "hasIcon": false }, "placeHash": 3747705955, "defaultFreeroamActivityHash": 0, "activityGraphEntries": [], "bubbleSettings": [], "bubbles": [], "hash": 1700061161, "index": 77, "redacted": false, "blacklisted": false },
    "Place": { "displayProperties": { "description": "Mankind's cradle, full of shattered glory, ready to be reclaimed.", "name": "Earth", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false }, "hash": 3747705955, "index": 0, "redacted": false, "blacklisted": false }
}

const ASSAULT_HEIST_BATTLEGROUND_EUROPA = {
    "Activity": { "displayProperties": { "description": "Brave the cold winds of Europa to reclaim fragments of a hidden submind's code from the depths of Bray Exoscience.", "name": "Heist Battleground: Europa", "icon": "/common/destiny2_content/icons/3642cf9e2acd174dcab5b5f9e3a3a45d.png", "hasIcon": true }, "originalDisplayProperties": { "description": "Brave the cold winds of Europa to reclaim fragments of a hidden submind's code from the depths of Bray Exoscience.", "name": "Heist Battleground: Europa", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false }, "releaseIcon": "/img/misc/missing_icon_d2.png", "releaseTime": 0, "completionUnlockHash": 0, "activityLightLevel": 0, "destinationHash": 1729879943, "placeHash": 1729879943, "activityTypeHash": 4110605575, "tier": -1, "pgcrImage": "/img/destiny_content/pgcr/season_19_battleground_europa.jpg", "rewards": [], "modifiers": [{ "activityModifierHash": 1651706850 }, { "activityModifierHash": 2288210988 }, { "activityModifierHash": 858319113 }, { "activityModifierHash": 2042632950 }, { "activityModifierHash": 38299602 }, { "activityModifierHash": 1279873648 }, { "activityModifierHash": 158678773 }, { "activityModifierHash": 1499411920 }, { "activityModifierHash": 2117382464 }, { "activityModifierHash": 1376889134 }, { "activityModifierHash": 1681061669 }, { "activityModifierHash": 745014575 }, { "activityModifierHash": 186409259 }, { "activityModifierHash": 3517267764 }, { "activityModifierHash": 3652821947 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 2691200658 }, { "activityModifierHash": 3809788899 }, { "activityModifierHash": 3196075844 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }, { "activityModifierHash": 1783825372 }], "isPlaylist": false, "challenges": [], "optionalUnlockStrings": [], "inheritFromFreeRoam": false, "suppressOtherRewards": false, "playlistItems": [], "matchmaking": { "isMatchmade": false, "minParty": 1, "maxParty": 3, "maxPlayers": 3, "requiresGuardianOath": false }, "directActivityModeHash": 4110605575, "directActivityModeType": 3, "activityModeHashes": [4110605575, 2394616003, 1164760493], "activityModeTypes": [3, 18, 7], "isPvP": false, "insertionPoints": [], "activityLocationMappings": [], "hash": 1471566974, "index": 932, "redacted": false, "blacklisted": false },
    "Destination": { "displayProperties": { "description": "A desolate and frozen moon, testament to humanity's ambition and hubris.", "name": "Rathmore Chaos, Europa", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false }, "hash": 1729879943, "index": 1, "redacted": false, "blacklisted": false },
    "Place": { "displayProperties": { "description": "A desolate and frozen moon, testament to humanity's ambition and hubris.", "name": "Rathmore Chaos, Europa", "icon": "/img/misc/missing_icon_d2.png", "hasIcon": false }, "hash": 1729879943, "index": 1, "redacted": false, "blacklisted": false }
}


describe("Activity Tests", () => {
    describe("Chapter name", () => {
        it("IN_ORBIT", () => {
            const ACTIVITY = IN_ORBIT
            const chapterText = Activities.computeChapterText(ACTIVITY.Activity, ACTIVITY.Destination, ACTIVITY.Place)
            expect(chapterText).toStrictEqual("Orbit")
        })

        it("TOWER", () => {
            const ACTIVITY = TOWER
            const chapterText = Activities.computeChapterText(ACTIVITY.Activity, ACTIVITY.Destination, ACTIVITY.Place)
            expect(chapterText).toStrictEqual("Social - Tower")
        })

        it("ROAMING_PALE_HEART", () => {
            const ACTIVITY = ROAMING_PALE_HEART
            const chapterText = Activities.computeChapterText(ACTIVITY.Activity, ACTIVITY.Destination, ACTIVITY.Place)
            expect(chapterText).toStrictEqual("Patrol - The Pale Heart - The Traveler")
        })

        it("THE_BLOOMING_MASTER", () => {
            const ACTIVITY = THE_BLOOMING_MASTER
            const chapterText = Activities.computeChapterText(ACTIVITY.Activity, ACTIVITY.Destination, ACTIVITY.Place)
            expect(chapterText).toStrictEqual("Lost sector - The Blooming Deep - Master - The Traveler")
        })

        it("NIGHTFALL_GRAND_MASTER_PROVING_GROUNDS", () => {
            const ACTIVITY = NIGHTFALL_GRAND_MASTER_PROVING_GROUNDS
            const chapterText = Activities.computeChapterText(ACTIVITY.Activity, ACTIVITY.Destination, ACTIVITY.Place)
            expect(chapterText).toStrictEqual("Nightfall - Proving Grounds - Grandmaster - Nessus")
        })

        it("ONSLAUGHT_EXPERT_VOSTOK", () => {
            const ACTIVITY = ONSLAUGHT_EXPERT_VOSTOK
            const chapterText = Activities.computeChapterText(ACTIVITY.Activity, ACTIVITY.Destination, ACTIVITY.Place)
            expect(chapterText).toStrictEqual("Offensive - Expert: Vostok - Onslaught - Earth")
        })

        it("ASSAULT_HEIST_BATTLEGROUND_EUROPA", () => {
            const ACTIVITY = ASSAULT_HEIST_BATTLEGROUND_EUROPA
            const chapterText = Activities.computeChapterText(ACTIVITY.Activity, ACTIVITY.Destination, ACTIVITY.Place)
            expect(chapterText).toStrictEqual("Orbit")
        })
    })
})