import { describe, expect, it } from "vitest"
import { cleanDuplicate, removeTooMuchData } from "../src/constants.js"

describe("constants", () => {
    describe("removeTooMuchData", () => {
        it("remove nothing", () => {
            expect(removeTooMuchData("tt", "ggg")).toStrictEqual({
                "changed": false,
                "result": []
            })
        })

        it("remove left", () => {
            expect(removeTooMuchData("tt", "ggg tt")).toStrictEqual({
                "changed": true,
                "result": ["ggg tt"]
            })
        })

        it("remove right", () => {
            expect(removeTooMuchData("aaaaaa jjjjjjjjjjjj", "jjjjjjjjjjjj")).toStrictEqual({
                "changed": true,
                "result": ["aaaaaa jjjjjjjjjjjj"]
            })
        })
    })

    describe("cleanDuplicate", () => {
        it("remove nothing", () => {
            expect(cleanDuplicate(["aa", "bb", "cc"])).toStrictEqual([
                "aa",
                "bb",
                "cc",
            ])
        })

        it("remove middle", () => {
            expect(cleanDuplicate(["aa", "bb", "bb - cc"])).toStrictEqual([
                "aa",
                "bb - cc",
            ])
        })

        it("remove duplicate", () => {
            expect(cleanDuplicate(["aa - cc", "bb", "aa - cc"])).toStrictEqual([
                "aa - cc",
                "bb",
            ])
        })

        it("remove duplicates", () => {
            expect(cleanDuplicate(["aa", "aa - cc", "bb", "aa - cc", "ff", "cc", "dd", "ee", "ee", "ff"])).toStrictEqual([
                "aa - cc",
                "bb",
                "ff",
                "dd",
                "ee"
            ])
        })

        it("remove last", () => {
            expect(cleanDuplicate(["aa", "bb", "bb - cc"])).toStrictEqual([
                "aa",
                "bb - cc",
            ])
        })
    })
})