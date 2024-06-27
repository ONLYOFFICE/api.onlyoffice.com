import { extname } from "node:path"
import {
  type Template,
  type TemplateCollection,
  type UserConfig
} from "@onlyoffice/eleventy-types"

export type Pages = Page[]

export type Indexes = Partial<Record<string, number>>

export interface Page {
  title: string
  url?: string
  date: Date
  parent?: string
  children?: string[]
}

interface State {
  order: number
}

let pages: Pages = []
let indexes: Indexes = {}

export function eleventyPlugin(uc: UserConfig): void {
  uc.addCollection("sitemap", sitemap)
}

function sitemap(tc: TemplateCollection): [] {
  const l = tc.getAll()
  ;[pages, indexes] = collect(l)
  return []
}

export function list(): Pages {
  return pages
}

export function retrieve(u: string): Page | undefined {
  const i = indexes[u]
  if (i === undefined) {
    return undefined
  }
  return pages[i]
}

function collect(templates: Template[]): [Pages, Indexes] {
  const pages: Pages = []
  const states: State[] = []
  const indexes: Indexes = {}

  templates.forEach(pre)
  pages.forEach(peri)
  pages.forEach(post)

  return [pages, indexes]

  function pre(t: Template): void {
    if (!isSupported(t)) {
      return
    }

    let i = indexes[t.url]
    if (i === undefined) {
      i = setup(t.url)
    }

    if (t.data.title !== undefined) {
      pages[i].title = t.data.title
    }
    pages[i].date = t.date

    if (t.data.order !== undefined) {
      states[i].order = t.data.order
    }
  }

  function peri(p: Page): void {
    if (p.url === undefined) {
      return
    }

    const a = p.url.split("/")

    let e = a.length - 1
    if (a[e] === "") {
      e -= 1
    }

    let u = a.slice(0, e).join("/")
    u += "/"

    if (p.url === u) {
      return
    }

    let i = indexes[u]
    if (i === undefined) {
      i = setup(u)
      pages[i].title = title(u)
      delete pages[i].url
      // todo: warn.
    }

    p.parent = u

    let ch = pages[i].children
    if (ch === undefined) {
      ch = []
      pages[i].children = ch
    }
    ch.push(p.url)
  }

  function post(p: Page): void {
    if ("parent" in p && p.parent === undefined) {
      delete p.parent
    }
    if ("children" in p && p.children === undefined) {
      delete p.children
    }
    if (p.children !== undefined) {
      p.children = p.children.sort((a, b) => {
        const i = indexes[a]
        if (i === undefined) {
          throw new Error(`No index for ${a}`)
        }
        const j = indexes[b]
        if (j === undefined) {
          throw new Error(`No index for ${b}`)
        }
        const d = states[i].order - states[j].order
        if (d !== 0) {
          return d
        }
        return pages[i].title.localeCompare(pages[j].title)
      })
    }
  }

  function setup(u: string): number {
    const p = page()
    p.url = u
    pages.push(p)

    const s = state()
    states.push(s)

    const i = pages.length - 1
    indexes[u] = i

    return i
  }
}

function isSupported(t: Template): boolean {
  return extname(t.outputPath) === ".html"
}

function title(u: string): string {
  const a = u.split("/")
  let s = a[a.length - 1]
  if (s === "") {
    s = a[a.length - 2]
  }
  return s
}

function page(): Page {
  return {
    title: "",
    url: undefined,
    date: new Date(),
    parent: undefined,
    children: undefined
  }
}

function state(): State {
  return {
    order: 0
  }
}
