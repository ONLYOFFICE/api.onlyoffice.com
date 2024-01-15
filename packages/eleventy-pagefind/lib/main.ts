import {join} from "node:path"
import type {UserConfig} from "@onlyoffice/eleventy-types"

export function eleventyPagefind(uc: UserConfig): void {
  // todo: support for rebuilding after each event, not just the first one
  let done = false

  uc.on("eleventy.after", async (ctx: any) => {
    if (done) {
      return
    }

    done = true

    const {createIndex} = await import("pagefind")

    // todo: https://github.com/CloudCannon/pagefind/pull/642/
    const {index} = await createIndex({})
    if (!index) {
      throw new Error("Failed to create Pagefind index")
    }

    let d = ctx.dir.output
    await index.addDirectory({path: d})

    d = join(d, "pagefind")
    await index.writeFiles({outputPath: d})
  })
}
