import {type UserConfig} from "@onlyoffice/eleventy-types"
import {type Options, minify} from "html-minifier-terser"
import pack from "../package.json" with {type: "json"}

export interface EleventyHtmlMinifierTerserOptions extends Options {
  minify?: boolean
}

export function eleventyHtmlMinifierTerser(
  u: UserConfig,
  o: EleventyHtmlMinifierTerserOptions
): void {
  if (!o.minify) {
    return
  }
  u.addTransform(pack.name, async (c, f) => {
    if (typeof c === "string" && f &&
      (f.endsWith(".html") || f.endsWith(".xml"))) {
      return await minify(c, o)
    }
    return c
  })
}
