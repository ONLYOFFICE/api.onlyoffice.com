import process from "node:process"
import {AsyncTransform} from "@onlyoffice/async-transform"
import {Console} from "@onlyoffice/console"
import {type UserConfig} from "@onlyoffice/eleventy-types"
import {type BundleAsyncOptions, type CustomAtRules, bundleAsync} from "lightningcss"
import pack from "../package.json" with {type: "json"}

// In the future, we should replace our custom logger with the eleventy one
// (see for the ConsoleLogger type for the @onlyoffice/eleventy-types).
const console = new Console(pack.name, process.stdout, process.stderr)

export function eleventyLightningcss(uc: UserConfig, p: BundleAsyncOptions<CustomAtRules>): void {
  uc.addPassthroughCopy(p.filename, {
    // todo: support the rename function to be able to add a hash to the filename
    transform() {
      return new Build(p)
    }
  })
}

class Build extends AsyncTransform {
  _p: BundleAsyncOptions<CustomAtRules>

  constructor(p: BundleAsyncOptions<CustomAtRules>) {
    super()
    this._p = p
  }

  async _atransform(_: unknown): Promise<void> {
    try {
      const r = await bundleAsync(this._p)
      if (r.warnings) {
        for (const w of r.warnings) {
          console.warn(w.message)
        }
      }
      this.push(r.code)
    } catch (e) {
      let m = "Unknown error"
      if (e instanceof Error) {
        // I could not find a right lightning interface.
        // @ts-ignore
        m = `${e.fileName}: ${e.message} (${e.loc.line}:${e.loc.column})`
      }
      console.error(m)
    }
  }
}
