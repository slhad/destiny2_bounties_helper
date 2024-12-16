import axios from "axios"
import { getManifest } from "./api"

export enum Lang {
    EN = "en",
    FR = "fr"
}

class Manifest {
    urls: any = {}
    tables: any = {}

    definitions = [
        "DestinyInventoryItemDefinition",
        "DestinyClassDefinition",
        "DestinyActivityDefinition",
        "DestinyActivityModeDefinition",
        "DestinyPlaceDefinition",
        "DestinyDestinationDefinition"
    ]


    async fetchManifest() {
        const res = await getManifest()
        this.urls = (res && res.data || { Responce: {} }).Response

        for (const definition of this.definitions) {
            for (const lang of Object.values(Lang)) {
                const manifestUrl = "https://www.bungie.net" + this.jsonUrl(definition, lang)
                try {
                    const res2 = await axios.get(manifestUrl)
                    console.log(`fetched manifest: ${manifestUrl}`)
                    if (!this.tables[definition]) {
                        this.tables[definition] = {}
                    }
                    this.tables[definition][lang] = res2.data
                }
                catch (e) {
                    console.error("error manifest", e)
                }
            }
        }
    }

    jsonUrl(
        definition = "DestinyInventoryItemDefinition",
        lang = "en",
        path = "jsonWorldComponentContentPaths"
    ) {
        return this.urls[path][lang][definition]
    }

    t(hash: string, lang = Lang.EN) {
        try {
            for (const definition of this.definitions) {
                const defO = this.tables[definition]
                if (!defO) continue
                const defLO = defO[lang]
                if (!defLO) continue
                const defined = defLO[hash]
                if (defined) {
                    return defined
                }
            }
        } catch (e) {
            return hash
        }
        return hash
    }
}

export default new Manifest()