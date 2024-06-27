import {basename, extname} from "node:path"
import {useSuspense} from "@onlyoffice/preact-suspense"
import image, {type ImageOptions, type MetadataEntry} from "@11ty/eleventy-img"
import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"

interface Result {
  s: MetadataEntry[]
  i?: MetadataEntry
}

export function EleventyImage(p: HTMLAttributes<HTMLImageElement> & ImageOptions): JSX.Element {
  const {
    alt,
    decoding = "async",
    height,
    loading = "lazy",
    src,
    width,

    outputDir,
    urlPath,
    // todo: widths,

    ...props
  } = p

  if (!alt && alt !== "") {
    throw new Error("The 'alt' attribute is required, but missing.")
  }
  if (!src) {
    throw new Error("The 'src' attribute is required, but missing.")
  }
  if (typeof src !== "string") {
    throw new Error("The 'src' attribute must be a string.")
  }
  if (!urlPath) {
    throw new Error("The 'urlPath' attribute is required, but missing.")
  }
  if (!outputDir) {
    throw new Error("The 'outputDir' attribute is required, but missing.")
  }

  const r: Result = {s: []}

  const Suspense = useSuspense(async () => {
    const o: ImageOptions = {
      formats: ["webp"],
      urlPath,
      outputDir,
      filenameFormat(id: string, s: string, w: number, f: string) {
        const e = extname(s)
        const n = basename(s, e)
        return `${n}-${w}w-${id}.${f}`
      }
    }

    const e = extname(src)
    if (e === ".svg") {
      o.formats = ["svg"]
    }

    const m = await image(src, o)

    if (m.webp) {
      r.s = m.webp
      ;[r.i] = m.webp
      return
    }

    if (m.svg) {
      r.s = m.svg
      ;[r.i] = m.svg
      return
    }

    throw new Error("No image formats found.")
  })

  return <Suspense>
    {() => <picture>
      {r.s.map((e) => <source type={e.sourceType} srcset={e.srcset} />)}
      {r.i && <img
        alt={alt}
        aria-hidden={true}
        decoding={decoding}
        height={r.i.height}
        loading={loading}
        src={r.i.url}
        width={r.i.width}
        {...props}
      />}
    </picture>}
  </Suspense>
}
