import {rm} from "node:fs/promises"
import type {UserConfig} from "@onlyoffice/eleventy-types"

export function eleventyClean(uc: UserConfig): void {
  let done = false
  uc.on("eleventy.before", async (ctx: any) => {
    if (!done) {
      await rm(ctx.dir.output, {recursive: true, force: true})
      done = true
    }
  })
}
