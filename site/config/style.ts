import { join, parse } from "node:path"
import type { UserConfig } from "@11ty/eleventy"
import {isBuild, isPreview} from "@onlyoffice/site-env"
import { bundleAsync } from "lightningcss"
import {Transform} from "node:stream"

export function stylePlugin(uc: UserConfig): void {
  uc.addWatchTarget("./**/*.css")
  uc.addPassthroughCopy("./main.css", {
    transform(f: string) {
      return new Transform({
        transform(_, __, cb) {
          buildStyle(f).then((c) => {
            this.push(c)
            cb(null)
          })
        }
      })
    }
  })

  // uc.addTemplateFormats("css")
  // uc.addExtension("css", {
  //   outputFileExtension: "css",
  //   // read: false,
  //   compile(_: string, f: string): (() => Promise<Uint8Array>) | undefined {
  //     const { name } = parse(f)
  //     if (name !== "main") {
  //       return
  //     }
  //     return () => {
  //       return buildStyle(f)
  //     }
  //   }
  // })
}

export async function buildRegularTheme(): Promise<string> {
  const src = join(__dirname, "../src")
  const regular = join(src, "regular.css")
  const s = await buildStyle(regular)
  return s.toString()
}

/**
 * @param f The entry point file path.
 * @returns The bundled content.
 */
export async function buildStyle(f: string): Promise<Uint8Array> {
  const r = await bundleAsync({
    filename: f,
    minify: isBuild() || isPreview()
  })
  return r.code
}
