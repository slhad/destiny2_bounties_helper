import axios from "axios"
import { getManifest } from "./api"
class Manifest {
    urls: any = {}
    tables: any = {}

    definitions = [
        "DestinyInventoryItemDefinition",
        "DestinyClassDefinition"
    ]


    async fetchManifest() {
        const res = await getManifest()
        this.urls = res.data.Response

        for (const definition of this.definitions) {
            const res2 = await axios.get("https://www.bungie.net" + this.jsonUrl(definition))
            console.log("fetched manifest: ", res2)
            this.tables[definition] = res2.data
        }
    }

    jsonUrl(
        definition = "DestinyInventoryItemDefinition",
        lang = "en",
        path = "jsonWorldComponentContentPaths"
    ) {
        return this.urls[path][lang][definition]
    }

    t(hash: string) {
        try {
            for (const definition of this.definitions) {
                const defined = this.tables[definition][hash]
                if (defined) {
                    return defined
                }
            }
        } catch (e) {
            return hash
        }
    }
}

export default new Manifest()