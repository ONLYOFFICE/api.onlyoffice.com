import {tmpdir} from "node:os"
import process from "node:process"
import {AsyncTransform} from "@onlyoffice/async-transform"
import {Console} from "@onlyoffice/console"
import {type UserConfig} from "@onlyoffice/eleventy-types"
import {build} from "esbuild"
import pack from "../package.json" with {type: "json"}

// In the future, we should replace our custom logger with the eleventy one
// (see for the ConsoleLogger type for the @onlyoffice/eleventy-types).
const console = new Console(pack.name, process.stdout, process.stderr)

export interface EleventyEsbuildOptions {
  input: string
  target: string
  minify?: boolean
  rename?(): string
}

export function eleventyEsbuild(uc: UserConfig, op: EleventyEsbuildOptions): void {
  const o: Record<string, unknown> = {
    transform() {
      return new Build(op)
    }
  }
  if (op.rename) {
    // todo: wrap the rename function to be able to pass the content to a hash function
    o.rename = op.rename
  }
  uc.addPassthroughCopy({[op.input]: op.target}, o)
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
        entryPoints: [this._o.input],
        minify: this._o.minify,
        outdir: tmpdir(),
        write: false
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
