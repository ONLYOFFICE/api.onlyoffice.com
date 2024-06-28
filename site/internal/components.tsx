import {basename, extname, join} from "node:path"
import {type ImageOptions} from "@11ty/eleventy-img"
import {EleventyImage as PreactEleventyImage} from "@onlyoffice/preact-eleventy-img"
import * as rich32 from "@onlyoffice/ui-icons/rich/32.tsx"
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

type InternalIcon = typeof rich32.DesktopEditorsIcon
type InternalIconProperties = Parameters<InternalIcon>[0]

export interface IconProperties extends InternalIconProperties {
  src: "rich32"
  name: string
}

export function Icon(p: IconProperties): JSX.Element {
  const {src, name, ...props} = p

  const s = icons[src]
  if (!s) {
    throw new Error(`The icon set '${src}' does not exist.`)
  }

  const I = s[name]
  if (!I) {
    throw new Error(`The icon '${name}' does not exist in the '${src}' icon set.`)
  }

  return <I {...props} />
}

const icons: Record<IconProperties["src"], Record<string, InternalIcon>> = {
  rich32: {
    "desktop-editors": rich32.DesktopEditorsIcon,
    "docs-api": rich32.DocsApiIcon,
    "docspace-api": rich32.DocspaceApiIcon,
    "document-builder": rich32.DocumentBuilderIcon,
    "javascript-sdk": rich32.JavascriptSdkIcon,
    "plugins": rich32.PluginsIcon,
    "self-hosted": rich32.SelfHostedIcon,
    "workspace-api": rich32.WorkspaceApiIcon
  }
}
