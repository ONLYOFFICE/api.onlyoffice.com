import type {UserConfig} from "@onlyoffice/eleventy-types"
import type {createStarryNight} from "@wooorm/starry-night"

export type StarryNight = Awaited<ReturnType<typeof createStarryNight>>

export let starryNight: StarryNight

export function eleventyStarryNight(uc: UserConfig): void {
  uc.on("eleventy.before", async () => {
    const {all, createStarryNight} = await import("@wooorm/starry-night")
    starryNight = await createStarryNight(all)
  })
}
