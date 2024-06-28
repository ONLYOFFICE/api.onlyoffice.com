import {basename, extname, join} from "node:path"
import {type ImageOptions} from "@11ty/eleventy-img"
import {modify} from "@onlyoffice/hast-util-eleventy-img"
import {generate} from "@onlyoffice/preact-eleventy-img"
import {useSuspense} from "@onlyoffice/preact-suspense"
import {type Root} from "hast"
import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"
import {visit} from "unist-util-visit"

export function Image(p: HTMLAttributes<HTMLImageElement>): JSX.Element {
  let r: JSX.Element | null = null

  const s = path(p.src)
  const o = options(s)

  const Suspense = useSuspense(async () => {
    const c = <img decoding="async" loading="lazy" {...p} src={s} />
    r = await generate({...o, children: c})
  })

  return <Suspense>{() => r}</Suspense>
}

export function rehypeImage() {
  return async function (t: Root) {
    let r = Promise.resolve()

    visit(t, "element", (n, i, p) => {
      if (n.tagName !== "img") {
        return
      }

      const s = path(n.properties.src)
      const o = options(s)

      n.properties = {
        decoding: "async",
        loading: "lazy",
        ...n.properties,
        src: s
      }

      // @ts-ignore conflict with mdx extensions
      r = modify(o, n, i, p)
    })

    await r
    return t
  }
}

function path(s: unknown): string {
  if (!s) {
    throw new Error("The 'src' attribute is required, but missing.")
  }
  if (typeof s !== "string") {
    throw new Error("The 'src' attribute must be a string.")
  }
  if (!s.startsWith("/")) {
    s = join("assets/images/", s)
  }
  // @ts-ignore false positive
  return s
}

function options(s: string): ImageOptions {
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

  const e = extname(s)
  if (e === ".svg") {
    o.formats = ["svg"]
  }

  return o
}
