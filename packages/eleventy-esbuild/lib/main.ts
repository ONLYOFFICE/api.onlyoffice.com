import {tmpdir} from "node:os"
import process from "node:process"
import {AsyncTransform} from "@onlyoffice/async-transform"
import {Console} from "@onlyoffice/console"
import {type RecursiveCopyOptions, type UserConfig} from "@onlyoffice/eleventy-types"
import {type BuildOptions, build} from "esbuild"
import pack from "../package.json" with {type: "json"}

// In the future, we should replace our custom logger with the eleventy one
// (see for the ConsoleLogger type for the @onlyoffice/eleventy-types).
const console = new Console(pack.name, process.stdout, process.stderr)

export interface EleventyEsbuildCallback {
  (): EleventyEsbuildOptions
}

export interface EleventyEsbuildOptions {
  passthrough: {
    input: string
    target: string
  }
  copy: RecursiveCopyOptions
  esbuild: BuildOptions
}

export function eleventyEsbuild(uc: UserConfig, cb: EleventyEsbuildCallback): void {
  const o = cb()
  uc.addPassthroughCopy({[o.passthrough.input]: o.passthrough.target}, {
    transform() {
      return new Build(o)
    },
    ...o.copy,
  })
}

class Build extends AsyncTransform {
  _o: EleventyEsbuildOptions

  constructor(o: EleventyEsbuildOptions) {
    super()
    this._o = o
  }

  async _atransform(_: unknown): Promise<void> {
    try {
      // Esbuild populates the console itself.
      const r = await build({
        bundle: true,
        entryPoints: [this._o.passthrough.input],
        outdir: tmpdir(),
        write: false,
        ...this._o.esbuild,
      })
      if (r.errors.length !== 0) {
        return
      }
      const s = Buffer.from(r.outputFiles[0].contents)
      this.push(s)
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
