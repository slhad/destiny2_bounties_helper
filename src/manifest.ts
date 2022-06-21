import axios from "axios"
import { getManifest } from "./api"

const cache: any = {}
const set = (name: string, value: any) => cache[name] = value
const get = (name: string) => cache[name]
class Manifest {
    urls: any = {}
    tables: any = {}
    ready = false


    async fetchManifest() {
        const res = await getManifest()
        this.urls = res.data.Response

        try {
            const ver = await get("ver")
            if (ver !== this.jsonUrl) throw "manifest is outdated"

            const cache = await get("destiny2Manifest")
            if (cache.DestinyInventoryItemDefinition) {
                console.log("load manifest from cache: ", cache)
                this.tables = cache
                this.ready = true
                return true
            }
        } catch (error) {
            console.log("error: ", error)
        }

        const res2 = await axios.get("https://www.bungie.net" + this.jsonUrl)
        console.log("fetched manifest: ", res2)
        this.ready = true
        this.tables.DestinyInventoryItemDefinition = res2.data
        set("destiny2Manifest", {
            DestinyInventoryItemDefinition: this.tables.DestinyInventoryItemDefinition
        })
        set("ver", this.jsonUrl)
        return true
    }

    get jsonUrl() {
        return this.urls["jsonWorldComponentContentPaths"]["en"]["DestinyInventoryItemDefinition"]
    }

    t(hash: string) {
        try {
            return this.tables.DestinyInventoryItemDefinition[hash]
        } catch (e) {
            return hash
        }
    }
}

export default new Manifest()