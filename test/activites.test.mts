import { expect, describe, it } from "vitest";
import { Activities } from "../src/activities.js";

const IN_ORBIT = {
    Activity: {
        displayProperties: {
            description: "",
            name: "",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        originalDisplayProperties: {
            description: "",
            name: "",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 2961497387,
        placeHash: 2961497387,
        activityTypeHash: 73015004,
        tier: -1,
        rewards: [],
        modifiers: [],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 12,
            maxPlayers: 12,
            requiresGuardianOath: false
        },
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 82913930,
        index: 0,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description: "En orbite",
            name: "Orbite",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 2961497387,
        index: 18,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description: "En orbite",
            name: "Orbite",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 2961497387,
        index: 18,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {}
};

const TOWER = {
    Activity: {
        displayProperties: {
            description:
                "C'est le foyer des Gardiens, où vous pouvez récupérer, vous réarmer et former de nouvelles alliances avant de repartir à l'aventure.",
            name: "La Tour",
            icon: "/common/destiny2_content/icons/a552ac10d78119cf518adec22982b174.png",
            hasIcon: true
        },
        originalDisplayProperties: {
            description:
                "C'est le foyer des Gardiens, où vous pouvez récupérer, vous réarmer et former de nouvelles alliances avant de repartir à l'aventure.",
            name: "La Tour",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 1737926756,
        placeHash: 3747705955,
        activityTypeHash: 1589650888,
        tier: 1,
        pgcrImage: "/img/destiny_content/pgcr/social_traveler.jpg",
        rewards: [],
        modifiers: [
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 }
        ],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        requirements: {
            leaderRequirementLabels: [
                { displayString: "" },
                { displayString: "" },
                { displayString: "" },
                { displayString: "Requires Full Version of Destiny 2" }
            ],
            fireteamRequirementLabels: [
                { displayString: "" },
                { displayString: "" },
                { displayString: "" },
                { displayString: "" },
                { displayString: "" },
                { displayString: "Requires Full Version of Destiny 2" }
            ]
        },
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 6,
            maxPlayers: 26,
            requiresGuardianOath: false
        },
        directActivityModeHash: 1589650888,
        directActivityModeType: 40,
        activityModeHashes: [1589650888],
        activityModeTypes: [40],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [
            {
                locationHash: 3743451003,
                activationSource: "quest",
                itemHash: 4222651348,
                objectiveHash: 1047295712,
                activityHash: 3737830648
            },
            {
                locationHash: 3743451003,
                activationSource: "quest",
                itemHash: 4222651348,
                objectiveHash: 1047295712,
                activityHash: 3737830648
            },
            {
                locationHash: 3743451003,
                activationSource: "quest",
                itemHash: 4222651348,
                objectiveHash: 1047295712,
                activityHash: 3737830648
            },
            {
                locationHash: 3298481793,
                activationSource: "lz",
                activityHash: 3737830648
            },
            {
                locationHash: 2540732786,
                activationSource: "lz",
                activityHash: 3737830648
            }
        ],
        hash: 3737830648,
        index: 136,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description: "La dernière Cité, Terre",
            name: "La dernière Cité",
            hasIcon: false
        },
        placeHash: 3747705955,
        defaultFreeroamActivityHash: 0,
        activityGraphEntries: [{ activityGraphHash: 1737926756 }],
        bubbleSettings: [
            {
                displayProperties: {
                    description: "",
                    name: "Annexe",
                    hasIcon: false
                }
            },
            {
                displayProperties: {
                    description: "",
                    name: "Bazar",
                    hasIcon: false
                }
            },
            {
                displayProperties: {
                    description: "",
                    name: "Cour",
                    hasIcon: false
                }
            },
            {
                displayProperties: {
                    description: "",
                    name: "Hangar",
                    hasIcon: false
                }
            }
        ],
        bubbles: [
            {
                hash: 4101540847,
                displayProperties: {
                    description: "",
                    name: "Annexe",
                    hasIcon: false
                }
            },
            {
                hash: 2372580540,
                displayProperties: {
                    description: "",
                    name: "Bazar",
                    hasIcon: false
                }
            },
            {
                hash: 2871560606,
                displayProperties: {
                    description: "",
                    name: "Cour",
                    hasIcon: false
                }
            },
            {
                hash: 2192450996,
                displayProperties: {
                    description: "",
                    name: "Hangar",
                    hasIcon: false
                }
            }
        ],
        hash: 1737926756,
        index: 6,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description:
                "Le berceau de l'humanité. Cimetière de nos gloires passées, ce monde est désormais à reconquérir.",
            name: "Terre",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3747705955,
        index: 0,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description: "",
            name: "Social",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_f6de6d95f600f199c9a674c73cbefbcc.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_crucible_1.jpg",
        modeType: 40,
        activityModeCategory: 0,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [],
        friendlyName: "social",
        supportsFeedFiltering: false,
        display: false,
        order: 1377,
        hash: 1589650888,
        index: 33,
        redacted: false,
        blacklisted: false
    }
};

const STRIKE_LIGHT_BLADE = {
    Activity: {
        displayProperties: {
            description:
                "Récupérez un artéfact sur un monument dédié à Oryx, situé dans les marais du monde du trône de Savathûn.",
            name: "La Lame-Lumière",
            icon: "/common/destiny2_content/icons/3642cf9e2acd174dcab5b5f9e3a3a45d.png",
            hasIcon: true
        },
        originalDisplayProperties: {
            description:
                "Récupérez un artéfact sur un monument dédié à Oryx, situé dans les marais du monde du trône de Savathûn.",
            name: "La Lame-Lumière",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 2244580325,
        placeHash: 2244580325,
        activityTypeHash: 3652020199,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/strike_lightblade.jpg",
        rewards: [],
        modifiers: [
            { activityModifierHash: 858319113 },
            { activityModifierHash: 2042632950 },
            { activityModifierHash: 38299602 },
            { activityModifierHash: 1279873648 },
            { activityModifierHash: 158678773 },
            { activityModifierHash: 1499411920 },
            { activityModifierHash: 2117382464 },
            { activityModifierHash: 1376889134 },
            { activityModifierHash: 1681061669 },
            { activityModifierHash: 745014575 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2691200658 },
            { activityModifierHash: 426976067 },
            { activityModifierHash: 3196075844 },
            { activityModifierHash: 3809788899 },
            { activityModifierHash: 3810297122 },
            { activityModifierHash: 186409259 },
            { activityModifierHash: 3517267764 },
            { activityModifierHash: 3652821947 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 }
        ],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        directActivityModeHash: 4110605575,
        directActivityModeType: 3,
        activityModeHashes: [4110605575, 2394616003, 1164760493],
        activityModeTypes: [3, 18, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 1012655911,
        index: 169,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description:
                "Les mécanismes internes de l'esprit de Savathûn, prenant vie dans un mystérieux monde du trône de sa propre création.",
            name: "Cour de Savathûn, monde du trône",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 2244580325,
        index: 21,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description:
                "Les mécanismes internes de l'esprit de Savathûn, prenant vie dans un mystérieux monde du trône de sa propre création.",
            name: "Cour de Savathûn, monde du trône",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 2244580325,
        index: 21,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description: "Statistiques pour les Assauts.",
            name: "Assaut",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_38e26baf417d26bb3548d97bf4872b54.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_strikes_1.jpg",
        modeType: 3,
        activityModeCategory: 1,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [2394616003],
        friendlyName: "strikes-normal",
        supportsFeedFiltering: false,
        display: true,
        order: 3000,
        hash: 4110605575,
        index: 9,
        redacted: false,
        blacklisted: false
    }
};

const STRIKE_BERCEAU_MAL = {
    Activity: {
        displayProperties: {
            description:
                "Avec l'aide du Témoin, les Infâmes ont obtenu le pouvoir d'infiltrer le monde du trône en passant par des zones intouchables par la Lumière.\n\nRepoussez-les.",
            name: "Berceau du mal",
            icon: "/common/destiny2_content/icons/3642cf9e2acd174dcab5b5f9e3a3a45d.png",
            hasIcon: true
        },
        originalDisplayProperties: {
            description:
                "Avec l'aide du Témoin, les Infâmes ont obtenu le pouvoir d'infiltrer le monde du trône en passant par des zones intouchables par la Lumière.\n\nRepoussez-les.",
            name: "Berceau du mal",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 2244580325,
        placeHash: 2244580325,
        activityTypeHash: 3652020199,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/strike_birthplace.jpg",
        rewards: [],
        modifiers: [
            { activityModifierHash: 858319113 },
            { activityModifierHash: 2042632950 },
            { activityModifierHash: 38299602 },
            { activityModifierHash: 1279873648 },
            { activityModifierHash: 158678773 },
            { activityModifierHash: 1499411920 },
            { activityModifierHash: 2117382464 },
            { activityModifierHash: 1376889134 },
            { activityModifierHash: 1681061669 },
            { activityModifierHash: 745014575 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2691200658 },
            { activityModifierHash: 426976067 },
            { activityModifierHash: 3196075844 },
            { activityModifierHash: 3809788899 },
            { activityModifierHash: 3810297122 },
            { activityModifierHash: 186409259 },
            { activityModifierHash: 3517267764 },
            { activityModifierHash: 3652821947 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 }
        ],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        directActivityModeHash: 4110605575,
        directActivityModeType: 3,
        activityModeHashes: [4110605575, 2394616003, 1164760493],
        activityModeTypes: [3, 18, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 2241536682,
        index: 170,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description:
                "Les mécanismes internes de l'esprit de Savathûn, prenant vie dans un mystérieux monde du trône de sa propre création.",
            name: "Cour de Savathûn, monde du trône",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 2244580325,
        index: 21,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description:
                "Les mécanismes internes de l'esprit de Savathûn, prenant vie dans un mystérieux monde du trône de sa propre création.",
            name: "Cour de Savathûn, monde du trône",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 2244580325,
        index: 21,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description: "Statistiques pour les Assauts.",
            name: "Assaut",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_38e26baf417d26bb3548d97bf4872b54.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_strikes_1.jpg",
        modeType: 3,
        activityModeCategory: 1,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [2394616003],
        friendlyName: "strikes-normal",
        supportsFeedFiltering: false,
        display: true,
        order: 3000,
        hash: 4110605575,
        index: 9,
        redacted: false,
        blacklisted: false
    }
};

const ROAMING_PALE_HEART = {
    Activity: {
        displayProperties: {
            description:
                "Un domaine mémoriel surréaliste à l'intérieur du Voyageur, corrompu par le Témoin.",
            name: "Le Cœur pâle",
            icon: "/common/destiny2_content/icons/9b8a4c7a07890778b929654716010b39.png",
            hasIcon: true
        },
        originalDisplayProperties: {
            description:
                "Un domaine mémoriel surréaliste à l'intérieur du Voyageur, corrompu par le Témoin.",
            name: "Le Cœur pâle",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 3998251206,
        placeHash: 3998251206,
        activityTypeHash: 3497767639,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/tfs_freeroam.jpg",
        rewards: [],
        modifiers: [{ activityModifierHash: 1783825372 }],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        directActivityModeHash: 3497767639,
        directActivityModeType: 6,
        activityModeHashes: [3497767639, 1164760493],
        activityModeTypes: [6, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [
            {
                locationHash: 2776222012,
                activationSource: "lz",
                activityHash: 3312889894
            },
            {
                locationHash: 3457625626,
                activationSource: "lz",
                activityHash: 3312889894
            },
            {
                locationHash: 870897194,
                activationSource: "lz",
                activityHash: 3312889894
            },
            {
                locationHash: 725108454,
                activationSource: "lz",
                activityHash: 3312889894
            },
            {
                locationHash: 245972680,
                activationSource: "lz",
                activityHash: 3312889894
            }
        ],
        hash: 3312889894,
        index: 306,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description: "Une entité déterminée au dessein insondable.",
            name: "Le Voyageur",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3998251206,
        index: 31,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description: "Une entité déterminée au dessein insondable.",
            name: "Le Voyageur",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3998251206,
        index: 31,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description:
                "Statistiques pour ces moments où vous parcourez les planètes en cherchant l'amour. Enfin, je parle de Patrouilles, d'Aventures... Peu importe le nom que leur donnent les jeunes aujourd'hui.",
            name: "Exploration",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_0aa1d7b0e0ac2c6820036b6b3dde3e5b.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_patrol_1.jpg",
        modeType: 6,
        activityModeCategory: 1,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [1164760493],
        friendlyName: "patrol",
        supportsFeedFiltering: false,
        display: true,
        order: 5000,
        hash: 3497767639,
        index: 3,
        redacted: false,
        blacklisted: false
    }
};

const ROAMING_PALE_HEART_LOST_SECTOR = {
    Activity: {
        displayProperties: {
            description:
                "Un domaine mémoriel surréaliste à l'intérieur du Voyageur, corrompu par le Témoin.",
            name: "Le Cœur pâle",
            icon: "/common/destiny2_content/icons/9b8a4c7a07890778b929654716010b39.png",
            hasIcon: true
        },
        originalDisplayProperties: {
            description:
                "Un domaine mémoriel surréaliste à l'intérieur du Voyageur, corrompu par le Témoin.",
            name: "Le Cœur pâle",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 3998251206,
        placeHash: 3998251206,
        activityTypeHash: 3497767639,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/tfs_freeroam.jpg",
        rewards: [],
        modifiers: [{ activityModifierHash: 1783825372 }],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        directActivityModeHash: 3497767639,
        directActivityModeType: 6,
        activityModeHashes: [3497767639, 1164760493],
        activityModeTypes: [6, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [
            {
                locationHash: 2776222012,
                activationSource: "lz",
                activityHash: 3312889894
            },
            {
                locationHash: 3457625626,
                activationSource: "lz",
                activityHash: 3312889894
            },
            {
                locationHash: 870897194,
                activationSource: "lz",
                activityHash: 3312889894
            },
            {
                locationHash: 725108454,
                activationSource: "lz",
                activityHash: 3312889894
            },
            {
                locationHash: 245972680,
                activationSource: "lz",
                activityHash: 3312889894
            }
        ],
        hash: 3312889894,
        index: 306,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description: "Une entité déterminée au dessein insondable.",
            name: "Le Voyageur",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3998251206,
        index: 31,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description: "Une entité déterminée au dessein insondable.",
            name: "Le Voyageur",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3998251206,
        index: 31,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description:
                "Statistiques pour ces moments où vous parcourez les planètes en cherchant l'amour. Enfin, je parle de Patrouilles, d'Aventures... Peu importe le nom que leur donnent les jeunes aujourd'hui.",
            name: "Exploration",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_0aa1d7b0e0ac2c6820036b6b3dde3e5b.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_patrol_1.jpg",
        modeType: 6,
        activityModeCategory: 1,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [1164760493],
        friendlyName: "patrol",
        supportsFeedFiltering: false,
        display: true,
        order: 5000,
        hash: 3497767639,
        index: 3,
        redacted: false,
        blacklisted: false
    }
};

const HAUNTED_SECTOR_EXPERT_MOON = {
    Activity: {
        displayProperties: {
            description:
                "Explorez les Secteurs hantés en difficulté « Expert » pour obtenir des bonbons, une meilleure chance d'obtention de butin premium et des pages provenant du Livre des Oublis. La position des Secteurs hantés change toutes les quelques heures.",
            name: "Secteurs hantés (Expert)",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        originalDisplayProperties: {
            description:
                "Explorez les Secteurs hantés en difficulté « Expert » pour obtenir des bonbons, une meilleure chance d'obtention de butin premium et des pages provenant du Livre des Oublis. La position des Secteurs hantés change toutes les quelques heures.",
            name: "Secteurs hantés (Expert)",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 2000,
        destinationHash: 677774031,
        placeHash: 677774031,
        activityTypeHash: 1686739444,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/fotl_haunted_sector_chasm.jpg",
        rewards: [],
        modifiers: [
            { activityModifierHash: 2475764450 },
            { activityModifierHash: 1598783516 },
            { activityModifierHash: 4226469317 },
            { activityModifierHash: 2567927655 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2691200658 },
            { activityModifierHash: 3809788899 },
            { activityModifierHash: 3196075844 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 941999846 }
        ],
        isPlaylist: false,
        challenges: [
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 301035436,
                dummyRewards: [
                    {
                        itemHash: 73143230,
                        quantity: 1,
                        hasConditionalVisibility: false
                    }
                ]
            }
        ],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        requirements: {
            leaderRequirementLabels: [{ displayString: "" }],
            fireteamRequirementLabels: [
                {
                    displayString:
                        "À déverrouiller en terminant la quête d'introduction, que vous pouvez obtenir auprès d'Eva Levante à la Tour."
                },
                {
                    displayString:
                        'Complete step 4 of the "A Spark of Hope" quest.'
                }
            ]
        },
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 1863428247,
        index: 738,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description: "",
            name: "La Lune",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 677774031,
        index: 15,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description: "",
            name: "La Lune",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 677774031,
        index: 15,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {}
};

const PATROL_THRONE_WORLD = {
    Activity: {
        displayProperties: {
            description:
                "Les mécanismes internes de l'esprit de Savathûn, prenant vie dans un mystérieux monde du trône de sa propre création.",
            name: "Monde du trône de Savathûn",
            icon: "/common/destiny2_content/icons/9b8a4c7a07890778b929654716010b39.png",
            hasIcon: true
        },
        originalDisplayProperties: {
            description:
                "Les mécanismes internes de l'esprit de Savathûn, prenant vie dans un mystérieux monde du trône de sa propre création.",
            name: "Monde du trône de Savathûn",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 2244580325,
        placeHash: 2244580325,
        activityTypeHash: 3497767639,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/throneworld_freeroam.jpg",
        rewards: [],
        modifiers: [{ activityModifierHash: 1783825372 }],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        directActivityModeHash: 3497767639,
        directActivityModeType: 6,
        activityModeHashes: [3497767639, 1164760493],
        activityModeTypes: [6, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [
            {
                locationHash: 1187551374,
                activationSource: "lz",
                activityHash: 359399753
            }
        ],
        hash: 359399753,
        index: 141,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description:
                "Les mécanismes internes de l'esprit de Savathûn, prenant vie dans un mystérieux monde du trône de sa propre création.",
            name: "Cour de Savathûn, monde du trône",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 2244580325,
        index: 21,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description:
                "Les mécanismes internes de l'esprit de Savathûn, prenant vie dans un mystérieux monde du trône de sa propre création.",
            name: "Cour de Savathûn, monde du trône",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 2244580325,
        index: 21,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description:
                "Statistiques pour ces moments où vous parcourez les planètes en cherchant l'amour. Enfin, je parle de Patrouilles, d'Aventures... Peu importe le nom que leur donnent les jeunes aujourd'hui.",
            name: "Exploration",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_0aa1d7b0e0ac2c6820036b6b3dde3e5b.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_patrol_1.jpg",
        modeType: 6,
        activityModeCategory: 1,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [1164760493],
        friendlyName: "patrol",
        supportsFeedFiltering: false,
        display: true,
        order: 5000,
        hash: 3497767639,
        index: 3,
        redacted: false,
        blacklisted: false
    }
};

const LOST_SECTOR_EXPERT_FORGOTTEN_ABYSS = {
    Activity: {
        displayProperties: {
            description:
                "Difficulté Expert : équipement verrouillé, boucliers supplémentaires\n\nChampions : [Perforation de bouclier] bloqueurs, [Chancellement] implacables\n\nMenace : [Cryo-électrique] cryo-électrique\n\nBoucliers : [Cryo-électrique] cryo-électrique\n\nModificateurs : Feu de camp, Inutile",
            name: "Les Profondeurs oubliées: Expert",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        originalDisplayProperties: {
            description:
                "Difficulté Expert : équipement verrouillé, boucliers supplémentaires\n\nChampions : [Perforation de bouclier] bloqueurs, [Chancellement] implacables\n\nMenace : [Cryo-électrique] cryo-électrique\n\nBoucliers : [Cryo-électrique] cryo-électrique\n\nModificateurs : Feu de camp, Inutile",
            name: "Les Profondeurs oubliées",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        selectionScreenDisplayProperties: {
            description:
                "Montrez tout votre talent. Une escouade puissante est recommandée pour surmonter ce défi.\n\nMatchmaking : NON",
            name: "Expert",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 3998251206,
        placeHash: 3998251206,
        activityTypeHash: 103143560,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/shire.jpg",
        rewards: [
            {
                rewardItems: [
                    {
                        itemHash: 3632457717,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 2284123716,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 3339998924,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            }
        ],
        modifiers: [
            { activityModifierHash: 3139381566 },
            { activityModifierHash: 3171609188 },
            { activityModifierHash: 4226469317 },
            { activityModifierHash: 1174869237 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1486810101 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 203094476 },
            { activityModifierHash: 438106166 },
            { activityModifierHash: 1806568190 },
            { activityModifierHash: 186409259 },
            { activityModifierHash: 3758645512 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2691200658 },
            { activityModifierHash: 3809788899 },
            { activityModifierHash: 3196075844 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2139004924 },
            { activityModifierHash: 1783825372 }
        ],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        requirements: {
            leaderRequirementLabels: [],
            fireteamRequirementLabels: [
                {
                    displayString:
                        "Vous devez terminer le Secteur oublié afin de pouvoir y accéder à une difficulté supérieure."
                },
                {
                    displayString:
                        'Complete step 4 of the "A Spark of Hope" quest.'
                }
            ]
        },
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        directActivityModeHash: 103143560,
        directActivityModeType: 87,
        activityModeHashes: [103143560, 1164760493],
        activityModeTypes: [87, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [
            {
                locationHash: 1454369718,
                activationSource: "patrol",
                activityHash: 699527776
            }
        ],
        hash: 699527776,
        index: 1279,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description: "Une entité déterminée au dessein insondable.",
            name: "Le Voyageur",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3998251206,
        index: 31,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description: "Une entité déterminée au dessein insondable.",
            name: "Le Voyageur",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3998251206,
        index: 31,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description: "Statistiques pour les Secteurs oubliés.",
            name: "Secteur oublié",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_7d11acd7d5a3daebc0a0c906452932d6.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_story_1.jpg",
        modeType: 87,
        activityModeCategory: 1,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [1164760493],
        friendlyName: "lost_sector",
        supportsFeedFiltering: false,
        display: true,
        order: 5002,
        hash: 103143560,
        index: 67,
        redacted: false,
        blacklisted: false
    }
};

const LOST_SECTOR_MASTER_FORGOTTEN_ABYSS = {
    Activity: {
        displayProperties: {
            description:
                "Difficulté Expert : équipement verrouillé, boucliers supplémentaires\n\nChampions : [Perforation de bouclier] bloqueurs, [Chancellement] implacables\n\nMenace : [Cryo-électrique] cryo-électrique\n\nBoucliers : [Cryo-électrique] cryo-électrique\n\nModificateurs : Feu de camp, Inutile",
            name: "Les Profondeurs oubliées: Maîtrise",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        originalDisplayProperties: {
            description:
                "Difficulté Expert : équipement verrouillé, boucliers supplémentaires\n\nChampions : [Perforation de bouclier] bloqueurs, [Chancellement] implacables\n\nMenace : [Cryo-électrique] cryo-électrique\n\nBoucliers : [Cryo-électrique] cryo-électrique\n\nModificateurs : Feu de camp, Inutile",
            name: "Les Profondeurs oubliées",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        selectionScreenDisplayProperties: {
            description:
                "Un chef-d'œuvre, comme tout ce que vous faites. Seuls les plus puissants ne trouveront pas là une mort instantanée.\n\nMatchmaking : NON",
            name: "Maîtrise",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 3998251206,
        placeHash: 3998251206,
        activityTypeHash: 103143560,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/shire.jpg",
        rewards: [
            {
                rewardItems: [
                    {
                        itemHash: 3632457717,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 4087193961,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 585074942,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            }
        ],
        modifiers: [
            { activityModifierHash: 3139381566 },
            { activityModifierHash: 3171609188 },
            { activityModifierHash: 4226469317 },
            { activityModifierHash: 501815068 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 203094476 },
            { activityModifierHash: 438106166 },
            { activityModifierHash: 1806568190 },
            { activityModifierHash: 186409259 },
            { activityModifierHash: 3758645512 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2691200658 },
            { activityModifierHash: 3809788899 },
            { activityModifierHash: 3196075844 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2139004924 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 3101164718 }
        ],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        requirements: {
            leaderRequirementLabels: [],
            fireteamRequirementLabels: [
                {
                    displayString:
                        "Vous devez terminer le Secteur oublié afin de pouvoir y accéder à une difficulté supérieure."
                },
                {
                    displayString:
                        'Complete step 4 of the "A Spark of Hope" quest.'
                }
            ]
        },
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        directActivityModeHash: 103143560,
        directActivityModeType: 87,
        activityModeHashes: [103143560, 1164760493],
        activityModeTypes: [87, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 699527783,
        index: 1280,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description: "Une entité déterminée au dessein insondable.",
            name: "Le Voyageur",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3998251206,
        index: 31,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description: "Une entité déterminée au dessein insondable.",
            name: "Le Voyageur",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3998251206,
        index: 31,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description: "Statistiques pour les Secteurs oubliés.",
            name: "Secteur oublié",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_7d11acd7d5a3daebc0a0c906452932d6.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_story_1.jpg",
        modeType: 87,
        activityModeCategory: 1,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [1164760493],
        friendlyName: "lost_sector",
        supportsFeedFiltering: false,
        display: true,
        order: 5002,
        hash: 103143560,
        index: 67,
        redacted: false,
        blacklisted: false
    }
};

const THE_BLOOMING_MASTER = {
    Activity: {
        displayProperties: {
            description:
                "Expert Difficulty: Locked Equipment, Extra Shields\n\nChampions: [Disruption] Overload, [Stagger] Unstoppable\n\nThreat: [Arc] Arc\n\nShields: [Arc] Arc, [Solar] Solar\n\nModifiers: Epitaph, Chaff",
            name: "The Blooming Deep: Master",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        originalDisplayProperties: {
            description:
                "Expert Difficulty: Locked Equipment, Extra Shields\n\nChampions: [Disruption] Overload, [Stagger] Unstoppable\n\nThreat: [Arc] Arc\n\nShields: [Arc] Arc, [Solar] Solar\n\nModifiers: Epitaph, Chaff",
            name: "The Blooming Deep",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        selectionScreenDisplayProperties: {
            description:
                "Masterful, like everything you do. Only the most powerful will not face instant defeat.\n\nMatchmaking: OFF",
            name: "Master",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 3998251206,
        placeHash: 3998251206,
        activityTypeHash: 103143560,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/lotus.jpg",
        rewards: [
            {
                rewardItems: [
                    {
                        itemHash: 3632457717,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 4087193961,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 585074942,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            }
        ],
        modifiers: [
            { activityModifierHash: 1651706850 },
            { activityModifierHash: 2288210988 },
            { activityModifierHash: 4226469317 },
            { activityModifierHash: 501815068 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 203094476 },
            { activityModifierHash: 3307318061 },
            { activityModifierHash: 40182179 },
            { activityModifierHash: 186409259 },
            { activityModifierHash: 795009574 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2691200658 },
            { activityModifierHash: 3809788899 },
            { activityModifierHash: 3196075844 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 998275325 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 3101164718 }
        ],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        requirements: {
            leaderRequirementLabels: [],
            fireteamRequirementLabels: [
                {
                    displayString:
                        "You must complete the Lost Sector once in order to access it at a higher difficulty."
                },
                {
                    displayString:
                        'Complete step 4 of the "A Spark of Hope" quest.'
                }
            ]
        },
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        directActivityModeHash: 103143560,
        directActivityModeType: 87,
        activityModeHashes: [103143560, 1164760493],
        activityModeTypes: [87, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 3995113183,
        index: 1278,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description: "A willful entity with inscrutable purpose.",
            name: "The Traveler",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3998251206,
        index: 31,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description: "A willful entity with inscrutable purpose.",
            name: "The Traveler",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3998251206,
        index: 31,
        redacted: false,
        blacklisted: false
    }
};

const NIGHTFALL_GRAND_MASTER_PROVING_GROUNDS = {
    Activity: {
        displayProperties: {
            description: "Terrain d'essai",
            name: "Nuit noire: Grand-maître",
            icon: "/common/destiny2_content/icons/3642cf9e2acd174dcab5b5f9e3a3a45d.png",
            hasIcon: true
        },
        originalDisplayProperties: {
            description: "Terrain d'essai",
            name: "Nuit noire",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        selectionScreenDisplayProperties: {
            description: "Bonne chance.\n\nMatchmaking : NON",
            name: "Grand-maître",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 3607432451,
        placeHash: 3607432451,
        activityTypeHash: 575572995,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/nessus_proving_grounds.jpg",
        rewards: [
            {
                rewardItems: [
                    {
                        itemHash: 470135362,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 771478467,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 1438123385,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 2119974556,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            }
        ],
        modifiers: [
            { activityModifierHash: 1651706850 },
            { activityModifierHash: 2288210988 },
            { activityModifierHash: 4226469317 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 438106166 },
            { activityModifierHash: 1806568190 },
            { activityModifierHash: 976277003 },
            { activityModifierHash: 3652821947 },
            { activityModifierHash: 1282934989 },
            { activityModifierHash: 745014575 },
            { activityModifierHash: 1171597537 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2691200658 },
            { activityModifierHash: 3809788899 },
            { activityModifierHash: 3196075844 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 791047754 },
            { activityModifierHash: 4265630562 },
            { activityModifierHash: 4239965093 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 3912996116 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 3101164718 },
            { activityModifierHash: 1783825372 }
        ],
        isPlaylist: false,
        challenges: [
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 1612424695,
                dummyRewards: [
                    {
                        itemHash: 73143230,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 1542299784,
                dummyRewards: [
                    {
                        itemHash: 2643364263,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 3794117631,
                dummyRewards: [
                    {
                        itemHash: 2643364263,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 1270593510,
                dummyRewards: [
                    {
                        itemHash: 2643364263,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            }
        ],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        requirements: {
            leaderRequirementLabels: [
                { displayString: "PlayStation®Plus Required" },
                { displayString: "Xbox Live Gold Required" },
                { displayString: "" },
                { displayString: "" },
                { displayString: "Reach Power Level 800" }
            ],
            fireteamRequirementLabels: [
                {
                    displayString: "Nécessite Destiny 2 : Au-delà de la Lumière"
                },
                {
                    displayString:
                        "La difficulté Grand-maître en Nuit noire sera disponible après la troisième semaine de l'épisode."
                },
                {
                    displayString:
                        "Tous les membres de l'escouade doivent avoir au moins {var:2219178142} de Puissance pour participer à cette activité."
                },
                { displayString: "PlayStation®Plus Required" },
                { displayString: "Xbox Live Gold Required" },
                { displayString: "" },
                { displayString: "" },
                {
                    displayString:
                        'Complete step 4 of the "A Spark of Hope" quest.'
                }
            ]
        },
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        directActivityModeHash: 547513715,
        directActivityModeType: 46,
        activityModeHashes: [547513715, 2394616003, 1164760493],
        activityModeTypes: [46, 18, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 2103025315,
        index: 1193,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description: "Un planétoïde instable de type centaure.",
            name: "Nessos",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3607432451,
        index: 3,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description: "Un planétoïde instable de type centaure.",
            name: "Nessos",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3607432451,
        index: 3,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description:
                "Combien de fois sommes-nous retournés en orbite en essayant d'améliorer notre score ?",
            name: "Nuit noire avec score",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_234e7e18549d5eae2ddb012f2bcb203a.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_strikes_1.jpg",
        modeType: 46,
        activityModeCategory: 1,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [2394616003],
        friendlyName: "scored_nightfall",
        supportsFeedFiltering: false,
        display: true,
        order: 3210,
        hash: 547513715,
        index: 12,
        redacted: false,
        blacklisted: false
    }
};

const NIGHTFALL_EXPERT_PROVING_GROUNDS = {
    Activity: {
        displayProperties: {
            description: "Terrain d'essai",
            name: "Nuit noire: Avancé",
            icon: "/common/destiny2_content/icons/3642cf9e2acd174dcab5b5f9e3a3a45d.png",
            hasIcon: true
        },
        originalDisplayProperties: {
            description: "Terrain d'essai",
            name: "Nuit noire",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        selectionScreenDisplayProperties: {
            description:
                "Faites progresser vos compétences pour réussir.\n\nMatchmaking : OUI",
            name: "Avancé",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 3607432451,
        placeHash: 3607432451,
        activityTypeHash: 575572995,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/nessus_proving_grounds.jpg",
        rewards: [
            {
                rewardItems: [
                    {
                        itemHash: 2791741337,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 3710069945,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 2422680742,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 3959886874,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            }
        ],
        modifiers: [
            { activityModifierHash: 1651706850 },
            { activityModifierHash: 2288210988 },
            { activityModifierHash: 4226469317 },
            { activityModifierHash: 3240131679 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 438106166 },
            { activityModifierHash: 1806568190 },
            { activityModifierHash: 3517267764 },
            { activityModifierHash: 1282934989 },
            { activityModifierHash: 745014575 },
            { activityModifierHash: 1171597537 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2691200658 },
            { activityModifierHash: 3809788899 },
            { activityModifierHash: 3196075844 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 941999846 },
            { activityModifierHash: 1783825372 }
        ],
        isPlaylist: false,
        challenges: [
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 1612424695,
                dummyRewards: [
                    {
                        itemHash: 73143230,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 1542299784,
                dummyRewards: [
                    {
                        itemHash: 2643364263,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 3794117631,
                dummyRewards: [
                    {
                        itemHash: 2643364263,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 1270593510,
                dummyRewards: [
                    {
                        itemHash: 2643364263,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            }
        ],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        requirements: {
            leaderRequirementLabels: [
                { displayString: "PlayStation®Plus Required" },
                { displayString: "Xbox Live Gold Required" },
                { displayString: "" },
                { displayString: "" },
                { displayString: "Reach Power Level 800" }
            ],
            fireteamRequirementLabels: [
                {
                    displayString: "Nécessite Destiny 2 : Au-delà de la Lumière"
                },
                {
                    displayString:
                        "Tous les membres de l'escouade doivent avoir au moins {var:1986309345} de Puissance pour participer à cette activité."
                },
                { displayString: "PlayStation®Plus Required" },
                { displayString: "Xbox Live Gold Required" },
                { displayString: "" },
                { displayString: "" },
                {
                    displayString:
                        'Complete step 4 of the "A Spark of Hope" quest.'
                }
            ]
        },
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        directActivityModeHash: 547513715,
        directActivityModeType: 46,
        activityModeHashes: [547513715, 2394616003, 1164760493],
        activityModeTypes: [46, 18, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 2103025316,
        index: 1190,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description: "Un planétoïde instable de type centaure.",
            name: "Nessos",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3607432451,
        index: 3,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description: "Un planétoïde instable de type centaure.",
            name: "Nessos",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3607432451,
        index: 3,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description:
                "Combien de fois sommes-nous retournés en orbite en essayant d'améliorer notre score ?",
            name: "Nuit noire avec score",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_234e7e18549d5eae2ddb012f2bcb203a.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_strikes_1.jpg",
        modeType: 46,
        activityModeCategory: 1,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [2394616003],
        friendlyName: "scored_nightfall",
        supportsFeedFiltering: false,
        display: true,
        order: 3210,
        hash: 547513715,
        index: 12,
        redacted: false,
        blacklisted: false
    }
};

const OFFENSIVE_WELLSPRING_DEFEND = {
    Activity: {
        displayProperties: {
            description:
                "Empêchez Zeerik, Écorche-Lumière, de gagner le contrôle de la Source.",
            name: "La Source : Défense",
            icon: "/common/destiny2_content/icons/1eef8c16956f4b2a0e5c11c84ee33490.png",
            hasIcon: true
        },
        originalDisplayProperties: {
            description:
                "Empêchez Zeerik, Écorche-Lumière, de gagner le contrôle de la Source.",
            name: "La Source : Défense",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        selectionScreenDisplayProperties: {
            description:
                "Empêchez Zeerik, Écorche-Lumière, de gagner le contrôle de la Source.",
            name: "La Source",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 2244580325,
        placeHash: 2244580325,
        activityTypeHash: 263019149,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/wellspring_defend_two.jpg",
        rewards: [
            {
                rewardItems: [
                    {
                        itemHash: 656972282,
                        quantity: 0,
                        hasConditionalVisibility: false
                    },
                    {
                        itemHash: 3008394696,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardItems: [
                    {
                        itemHash: 2124768546,
                        quantity: 0,
                        hasConditionalVisibility: false
                    }
                ]
            }
        ],
        modifiers: [
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 186409259 },
            { activityModifierHash: 3517267764 },
            { activityModifierHash: 3652821947 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2691200658 },
            { activityModifierHash: 426976067 },
            { activityModifierHash: 3196075844 },
            { activityModifierHash: 3809788899 },
            { activityModifierHash: 3810297122 }
        ],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        requirements: {
            leaderRequirementLabels: [
                { displayString: "PlayStation®Plus Required" },
                { displayString: "Xbox Live Gold Required" },
                { displayString: "Requires Destiny 2: The Witch Queen" }
            ],
            fireteamRequirementLabels: [
                {
                    displayString:
                        "Nécessite de progresser dans la campagne de La Reine Sorcière"
                },
                {
                    displayString:
                        "Les membres de l'escouade n'ont pas tous accès à la Source."
                },
                { displayString: "PlayStation®Plus Required" },
                { displayString: "Xbox Live Gold Required" },
                { displayString: "Requires Destiny 2: The Witch Queen" },
                {
                    displayString:
                        'Complete step 4 of the "A Spark of Hope" quest.'
                }
            ]
        },
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 6,
            maxPlayers: 6,
            requiresGuardianOath: false
        },
        directActivityModeHash: 992499158,
        directActivityModeType: 86,
        activityModeHashes: [992499158, 1164760493],
        activityModeTypes: [86, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 3333680772,
        index: 175,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description:
                "Les mécanismes internes de l'esprit de Savathûn, prenant vie dans un mystérieux monde du trône de sa propre création.",
            name: "Cour de Savathûn, monde du trône",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 2244580325,
        index: 21,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description:
                "Les mécanismes internes de l'esprit de Savathûn, prenant vie dans un mystérieux monde du trône de sa propre création.",
            name: "Cour de Savathûn, monde du trône",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 2244580325,
        index: 21,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description: "Statistiques pour les offensives",
            name: "Offensive",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_f6de6d95f600f199c9a674c73cbefbcc.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_story_1.jpg",
        modeType: 86,
        activityModeCategory: 1,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [1164760493],
        friendlyName: "offensive",
        supportsFeedFiltering: false,
        display: true,
        order: 5001,
        hash: 992499158,
        index: 66,
        redacted: false,
        blacklisted: false
    }
};

const ONSLAUGHT_EXPERT_VOSTOK = {
    Activity: {
        displayProperties: {
            description:
                "Défendez les forces de l'Avant-garde avec l'Unité de défense avancée contre des vagues de 50 combattants.",
            name: "Expert : Vostok: Agression",
            icon: "/common/destiny2_content/icons/1eef8c16956f4b2a0e5c11c84ee33490.png",
            hasIcon: true
        },
        originalDisplayProperties: {
            description:
                "Défendez les forces de l'Avant-garde avec l'Unité de défense avancée contre des vagues de 50 combattants.",
            name: "Expert : Vostok",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        selectionScreenDisplayProperties: {
            description:
                "Défendez les forces de l'Avant-garde avec l'Unité de défense avancée contre des vagues de 50 combattants.",
            name: "Agression",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 2000,
        destinationHash: 1700061161,
        placeHash: 3747705955,
        activityTypeHash: 1728319841,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/onslaught-vostok.jpg",
        rewards: [],
        modifiers: [
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2543520884 },
            { activityModifierHash: 1545596619 },
            { activityModifierHash: 2889256157 },
            { activityModifierHash: 941999846 },
            { activityModifierHash: 1743397814 },
            { activityModifierHash: 1894842396 },
            { activityModifierHash: 2160690722 },
            { activityModifierHash: 186409259 },
            { activityModifierHash: 3517267764 },
            { activityModifierHash: 3652821947 },
            { activityModifierHash: 2006149364 },
            { activityModifierHash: 4038464106 },
            { activityModifierHash: 703904464 },
            { activityModifierHash: 3021161702 },
            { activityModifierHash: 112345143 },
            { activityModifierHash: 2208550513 },
            { activityModifierHash: 2139004924 },
            { activityModifierHash: 1553444357 },
            { activityModifierHash: 3758645512 },
            { activityModifierHash: 795009574 },
            { activityModifierHash: 95459596 },
            { activityModifierHash: 1326581064 },
            { activityModifierHash: 3320777106 },
            { activityModifierHash: 2626834038 },
            { activityModifierHash: 2743796883 },
            { activityModifierHash: 3132780533 },
            { activityModifierHash: 1282934989 },
            { activityModifierHash: 2178457119 },
            { activityModifierHash: 3912996116 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2042632950 },
            { activityModifierHash: 1279873648 },
            { activityModifierHash: 1376889134 },
            { activityModifierHash: 1499411920 },
            { activityModifierHash: 2117382464 }
        ],
        isPlaylist: false,
        challenges: [
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 51472017,
                dummyRewards: [
                    {
                        itemHash: 3114385605,
                        quantity: 1,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 3236905278,
                dummyRewards: [
                    {
                        itemHash: 3114385605,
                        quantity: 1,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 1583650743,
                dummyRewards: [
                    {
                        itemHash: 3114385605,
                        quantity: 1,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 61205796,
                dummyRewards: [
                    {
                        itemHash: 3114385605,
                        quantity: 1,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 2171624875,
                dummyRewards: [
                    {
                        itemHash: 3114385605,
                        quantity: 1,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 101331170,
                dummyRewards: [
                    {
                        itemHash: 3114385605,
                        quantity: 1,
                        hasConditionalVisibility: false
                    }
                ]
            }
        ],
        optionalUnlockStrings: [{ displayString: "Escouade : 1-3 joueurs" }],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        requirements: {
            leaderRequirementLabels: [],
            fireteamRequirementLabels: [
                {
                    displayString:
                        'Complete step 4 of the "A Spark of Hope" quest.'
                }
            ]
        },
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        directActivityModeHash: 992499158,
        directActivityModeType: 86,
        activityModeHashes: [992499158, 1164760493],
        activityModeTypes: [86, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 3733482932,
        index: 752,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: { description: "", name: "Terre", hasIcon: false },
        placeHash: 3747705955,
        defaultFreeroamActivityHash: 0,
        activityGraphEntries: [],
        bubbleSettings: [],
        bubbles: [],
        hash: 1700061161,
        index: 77,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description:
                "Le berceau de l'humanité. Cimetière de nos gloires passées, ce monde est désormais à reconquérir.",
            name: "Terre",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 3747705955,
        index: 0,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description: "Statistiques pour les offensives",
            name: "Offensive",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_f6de6d95f600f199c9a674c73cbefbcc.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_story_1.jpg",
        modeType: 86,
        activityModeCategory: 1,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [1164760493],
        friendlyName: "offensive",
        supportsFeedFiltering: false,
        display: true,
        order: 5001,
        hash: 992499158,
        index: 66,
        redacted: false,
        blacklisted: false
    }
};

const ASSAULT_HEIST_BATTLEGROUND_EUROPA = {
    Activity: {
        displayProperties: {
            description:
                "Brave the cold winds of Europa to reclaim fragments of a hidden submind's code from the depths of Bray Exoscience.",
            name: "Heist Battleground: Europa",
            icon: "/common/destiny2_content/icons/3642cf9e2acd174dcab5b5f9e3a3a45d.png",
            hasIcon: true
        },
        originalDisplayProperties: {
            description:
                "Brave the cold winds of Europa to reclaim fragments of a hidden submind's code from the depths of Bray Exoscience.",
            name: "Heist Battleground: Europa",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 1729879943,
        placeHash: 1729879943,
        activityTypeHash: 4110605575,
        tier: -1,
        pgcrImage:
            "/img/destiny_content/pgcr/season_19_battleground_europa.jpg",
        rewards: [],
        modifiers: [
            { activityModifierHash: 1651706850 },
            { activityModifierHash: 2288210988 },
            { activityModifierHash: 858319113 },
            { activityModifierHash: 2042632950 },
            { activityModifierHash: 38299602 },
            { activityModifierHash: 1279873648 },
            { activityModifierHash: 158678773 },
            { activityModifierHash: 1499411920 },
            { activityModifierHash: 2117382464 },
            { activityModifierHash: 1376889134 },
            { activityModifierHash: 1681061669 },
            { activityModifierHash: 745014575 },
            { activityModifierHash: 186409259 },
            { activityModifierHash: 3517267764 },
            { activityModifierHash: 3652821947 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 2691200658 },
            { activityModifierHash: 3809788899 },
            { activityModifierHash: 3196075844 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 }
        ],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        directActivityModeHash: 4110605575,
        directActivityModeType: 3,
        activityModeHashes: [4110605575, 2394616003, 1164760493],
        activityModeTypes: [3, 18, 7],
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 1471566974,
        index: 932,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description:
                "A desolate and frozen moon, testament to humanity's ambition and hubris.",
            name: "Rathmore Chaos, Europa",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 1729879943,
        index: 1,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description:
                "A desolate and frozen moon, testament to humanity's ambition and hubris.",
            name: "Rathmore Chaos, Europa",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 1729879943,
        index: 1,
        redacted: false,
        blacklisted: false
    }
};

const AGGRESSION_DU_SALUT = {
    Activity: {
        displayProperties: {
            description:
                "Défendez les Éliksni avec l'Unité de défense avancée contre 50 vagues de combattants.",
            name: "La Cour de la Veuve: Agression : Salut",
            icon: "/common/destiny2_content/icons/1eef8c16956f4b2a0e5c11c84ee33490.png",
            hasIcon: true
        },
        originalDisplayProperties: {
            description:
                "Défendez les Éliksni avec l'Unité de défense avancée contre 50 vagues de combattants.",
            name: "La Cour de la Veuve",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        selectionScreenDisplayProperties: {
            description:
                "Défendez les Éliksni avec l'Unité de défense avancée contre 50 vagues de combattants.",
            name: "Agression : Salut",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 1800,
        destinationHash: 969538215,
        placeHash: 969538215,
        activityTypeHash: 1728319841,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/onslaught_widows_court.jpg",
        rewards: [],
        modifiers: [
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1096446210 },
            { activityModifierHash: 3320264005 },
            { activityModifierHash: 2081148033 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 1783825372 },
            { activityModifierHash: 941999846 },
            { activityModifierHash: 438106166 },
            { activityModifierHash: 1806568190 },
            { activityModifierHash: 3758645512 },
            { activityModifierHash: 795009574 },
            { activityModifierHash: 95459596 },
            { activityModifierHash: 1326581064 },
            { activityModifierHash: 3320777106 },
            { activityModifierHash: 2626834038 },
            { activityModifierHash: 2743796883 },
            { activityModifierHash: 3132780533 },
            { activityModifierHash: 1282934989 },
            { activityModifierHash: 2178457119 }
        ],
        isPlaylist: false,
        challenges: [
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 517631236,
                dummyRewards: [
                    {
                        itemHash: 73143230,
                        quantity: 1,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 969263262,
                dummyRewards: [
                    {
                        itemHash: 3114385607,
                        quantity: 1,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 3289280568,
                dummyRewards: [
                    {
                        itemHash: 3114385606,
                        quantity: 1,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 3231607125,
                dummyRewards: [
                    {
                        itemHash: 3114385607,
                        quantity: 1,
                        hasConditionalVisibility: false
                    }
                ]
            },
            {
                rewardSiteHash: 0,
                inhibitRewardsUnlockHash: 0,
                objectiveHash: 3800469031,
                dummyRewards: [
                    {
                        itemHash: 3114385606,
                        quantity: 1,
                        hasConditionalVisibility: false
                    }
                ]
            }
        ],
        optionalUnlockStrings: [
            { displayString: "Escouade : 1-3 joueurs" },
            { displayString: "Coopération" }
        ],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 3,
            requiresGuardianOath: false
        },
        isPvP: false,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 1618784039,
        index: 688,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: {
            description:
                "Rejoignez une escouade pour relever des défis et écraser vos ennemis.",
            name: "Activité saisonnière",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 969538215,
        index: 28,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description:
                "Rejoignez une escouade pour relever des défis et écraser vos ennemis.",
            name: "Activité saisonnière",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 969538215,
        index: 28,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {}
};

const CARNAGE_PRIVE = {
    Activity: {
        displayProperties: {
            description: "La dernière Cité, Terre",
            name: "Chute de l'étendard",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        originalDisplayProperties: {
            description: "La dernière Cité, Terre",
            name: "Chute de l'étendard",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        releaseIcon: "/img/misc/missing_icon_d2.png",
        releaseTime: 0,
        completionUnlockHash: 0,
        activityLightLevel: 0,
        destinationHash: 71557692,
        placeHash: 4088006058,
        activityTypeHash: 4088006058,
        tier: -1,
        pgcrImage: "/img/destiny_content/pgcr/crucible_bannerfall.jpg",
        rewards: [],
        modifiers: [],
        isPlaylist: false,
        challenges: [],
        optionalUnlockStrings: [],
        inheritFromFreeRoam: false,
        suppressOtherRewards: false,
        playlistItems: [],
        matchmaking: {
            isMatchmade: false,
            minParty: 1,
            maxParty: 3,
            maxPlayers: 6,
            requiresGuardianOath: false
        },
        directActivityModeHash: 1164760504,
        directActivityModeType: 5,
        activityModeHashes: [1164760504],
        activityModeTypes: [5],
        isPvP: true,
        insertionPoints: [],
        activityLocationMappings: [],
        hash: 1155926620,
        index: 360,
        redacted: false,
        blacklisted: false
    },
    Destination: {
        displayProperties: { description: "", name: "", hasIcon: false },
        placeHash: 4088006058,
        defaultFreeroamActivityHash: 0,
        activityGraphEntries: [],
        bubbleSettings: [],
        bubbles: [],
        hash: 71557692,
        index: 27,
        redacted: false,
        blacklisted: false
    },
    Place: {
        displayProperties: {
            description:
                "Exercez vos talents et remportez la gloire en affrontant d'autres Gardiens.",
            name: "L'Épreuve",
            icon: "/img/misc/missing_icon_d2.png",
            hasIcon: false
        },
        hash: 4088006058,
        index: 16,
        redacted: false,
        blacklisted: false
    },
    ActivityMode: {
        displayProperties: {
            description: "En chacun pour soi, Gardiens.",
            name: "Carnage",
            icon: "/common/destiny2_content/icons/DestinyActivityModeDefinition_5b371fef4ecafe733ad487a8fae3b9f5.png",
            hasIcon: true
        },
        pgcrImage: "/img/theme/destiny/bgs/stats/banner_crucible_1.jpg",
        modeType: 48,
        activityModeCategory: 2,
        isTeamBased: false,
        tier: 0,
        isAggregateMode: false,
        parentHashes: [1164760504],
        friendlyName: "rumble",
        supportsFeedFiltering: false,
        display: true,
        order: 1377,
        hash: 157639802,
        index: 38,
        redacted: false,
        blacklisted: false
    }
};

describe("Activity Tests", () => {
    describe("Chapter name", () => {
        it("IN_ORBIT", () => {
            const ACTIVITY = IN_ORBIT;
            const chapterText = Activities.computeChapterText(
                ACTIVITY.Activity,
                ACTIVITY.Destination,
                ACTIVITY.Place
            );
            expect(chapterText).toStrictEqual("Orbite");
        });

        it("TOWER", () => {
            const ACTIVITY = TOWER;
            const chapterText = Activities.computeChapterText(
                ACTIVITY.Activity,
                ACTIVITY.Destination,
                ACTIVITY.Place
            );
            expect(chapterText).toStrictEqual("Social - La Tour");
        });

        it("ROAMING_PALE_HEART", () => {
            const ACTIVITY = ROAMING_PALE_HEART;
            const chapterText = Activities.computeChapterText(
                ACTIVITY.Activity,
                ACTIVITY.Destination,
                ACTIVITY.Place
            );
            expect(chapterText).toStrictEqual(
                "Patrouile - The Pale Heart - The Traveler"
            );
        });

        it("THE_BLOOMING_MASTER", () => {
            const ACTIVITY = THE_BLOOMING_MASTER;
            const chapterText = Activities.computeChapterText(
                ACTIVITY.Activity,
                ACTIVITY.Destination,
                ACTIVITY.Place
            );
            expect(chapterText).toStrictEqual(
                "Lost sector - The Blooming Deep - Master - The Traveler"
            );
        });

        it("NIGHTFALL_GRAND_MASTER_PROVING_GROUNDS", () => {
            const ACTIVITY = NIGHTFALL_GRAND_MASTER_PROVING_GROUNDS;
            const chapterText = Activities.computeChapterText(
                ACTIVITY.Activity,
                ACTIVITY.Destination,
                ACTIVITY.Place
            );
            expect(chapterText).toStrictEqual(
                "Nightfall - Proving Grounds - Grandmaster - Nessus"
            );
        });

        it("ONSLAUGHT_EXPERT_VOSTOK", () => {
            const ACTIVITY = ONSLAUGHT_EXPERT_VOSTOK;
            const chapterText = Activities.computeChapterText(
                ACTIVITY.Activity,
                ACTIVITY.Destination,
                ACTIVITY.Place
            );
            expect(chapterText).toStrictEqual(
                "Offensive - Expert: Vostok - Onslaught - Earth"
            );
        });

        it("ASSAULT_HEIST_BATTLEGROUND_EUROPA", () => {
            const ACTIVITY = ASSAULT_HEIST_BATTLEGROUND_EUROPA;
            const chapterText = Activities.computeChapterText(
                ACTIVITY.Activity,
                ACTIVITY.Destination,
                ACTIVITY.Place
            );
            expect(chapterText).toStrictEqual("Orbit");
        });
    });
});
