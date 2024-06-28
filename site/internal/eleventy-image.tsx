import {basename, extname, join} from "node:path"
import {type ImageOptions} from "@11ty/eleventy-img"
import {EleventyImage as PreactEleventyImage} from "@onlyoffice/preact-eleventy-img"
import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"

export function EleventyImage(p: HTMLAttributes<HTMLImageElement>): JSX.Element {
  if (!p.src) {
    throw new Error("The 'src' attribute is required, but missing.")
  }
  if (typeof p.src !== "string") {
    throw new Error("The 'src' attribute must be a string.")
  }

  const img = useImage(p)

  const o: ImageOptions = {
    formats: ["jpg", "webp"],
    urlPath: "/assets/",
    outputDir: "dist/assets/",
    filenameFormat(id: string, s: string, w: number, f: string) {
      const e = extname(s)
      const n = basename(s, e)
      return `${n}-${w}w-${id}.${f}`
    }
  }

  const e = extname(p.src)
  if (e === ".svg") {
    o.formats = ["svg"]
  }

  return <PreactEleventyImage {...o}>{img}</PreactEleventyImage>
}

export function useImage(p: HTMLAttributes<HTMLImageElement>): JSX.Element {
  let s = p.src
  if (s && typeof s === "string" && !s.startsWith("/")) {
    s = join("assets/images/", s)
  }
  return <img decoding="async" loading="lazy" {...p} src={s} />
}
