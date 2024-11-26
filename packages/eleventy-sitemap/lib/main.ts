import {randomUUID} from "node:crypto"
import path from "node:path"
import {type Data, type UserConfig} from "@onlyoffice/eleventy-types"
import {isEmpty} from "@onlyoffice/objects"
import * as next from "./next.ts"

declare module "@onlyoffice/eleventy-types" {
  interface Data {
    sitemap?: SitemapData
  }

  interface EleventyComputed {
    sitemap?(data: Data): SitemapData | undefined
  }
}

export interface SitemapData {
  title: string
  url: string
  path: string
  order: number
  groups: {
    title?: string
    order?: number
  }[]
  group: string
  data: Data
}

export class SitemapDatum implements SitemapData {
  title = ""
  url = ""
  path = ""
  order = 0
  groups: SitemapData["groups"] = []
  group = ""
  data: SitemapData["data"] = {}

  static merge(a: SitemapData, b: SitemapData): SitemapData {
    const c = new SitemapDatum()

    if (b.title) {
      c.title = b.title
    } else if (a.title) {
      c.title = a.title
    }

    if (b.url) {
      c.url = b.url
    } else if (a.url) {
      c.url = a.url
    }

    if (b.path) {
      c.path = b.path
    } else if (a.path) {
      c.path = a.path
    }

    if (b.order) {
      c.order = b.order
    } else if (a.order) {
      c.order = a.order
    }

    if (b.groups.length !== 0) {
      c.groups = b.groups
    } else if (a.groups.length !== 0) {
      c.groups = a.groups
    }

    if (b.group) {
      c.group = b.group
    } else if (a.group) {
      c.group = a.group
    }

    if (!isEmpty(b.data)) {
      c.data = b.data
    } else if (!isEmpty(a.data)) {
      c.data = a.data
    }

    return c
  }
}

export interface SitemapAccessible {
  get indexes(): SitemapIndexes
  get entities(): SitemapEntity[]
  trace(e: SitemapEntity): string[]
  find(t: string, b: keyof SitemapIndexes): SitemapEntity | undefined
}

export type SitemapEntity = SitemapEntityMap[keyof SitemapEntityMap]

export interface SitemapEntityMap {
  page: SitemapPage
  group: SitemapGroup
}

export class SitemapPage {
  id = ""
  type = "page" as const
  title = ""
  url = ""
  path = ""
  order = 0
  parent = ""
  children: string[] = []
  data: Data = {}
}

export class SitemapGroup {
  id = ""
  type = "group" as const
  title = ""
  order = -1
  parent = ""
  children: string[] = []
}

export class Sitemap implements SitemapAccessible {
  static shared: SitemapAccessible

  indexes: SitemapIndexes = new SitemapIndexes()
  entities: SitemapEntity[] = []

  trace(e: SitemapEntity): string[] {
    const p: string[] = []
    let t: SitemapEntity | undefined = e
    while (t) {
      p.push(t.id)
      t = this.find(t.parent, "id")
    }
    return p.reverse()
  }

  find(t: string, b: keyof SitemapIndexes): SitemapEntity | undefined {
    const i = this.indexes[b][t]
    if (i === undefined) {
      return
    }
    return this.entities[i]
  }
}

export class SitemapIndexes {
  id: Record<string, number> = {}
  url: Record<string, number> = {}
  path: Record<string, number> = {}
  group: Record<string, number> = {}
}

export function eleventySitemap(uc: UserConfig): void {
  // next.eleventySitemap(uc)

  uc.addCollection("sitemap", (tc) => {
    const ts = tc.getAll()

    const c = new Map<string, string>()
    const s = new Sitemap()

    for (const te of ts) {
      // console.log(te.url, te.data.url)
      if (!te.outputPath) {
        continue
      }

      const n = path.extname(te.outputPath)
      if (n !== ".html") {
        continue
      }

      if (!te.data.sitemap) {
        continue
      }

      const d = te.data.sitemap
      if (!d) {
        continue
      }

      const p = new SitemapPage()
      p.id = randomUUID()
      p.title = d.title
      p.url = d.url
      p.path = d.path
      if (d.order) {
        p.order = d.order
      }
      p.data = d.data

      let i = s.indexes.id[p.id]
      if (i !== undefined) {
        throw new Error(`Duplicate ID '${p.id}'`)
      }

      i = s.indexes.url[p.url]
      if (i !== undefined) {
        throw new Error(`Duplicate URL '${p.url}'`)
      }

      s.entities.push(p)
      s.indexes.id[p.id] = s.entities.length - 1
      s.indexes.url[p.url] = s.entities.length - 1

      i = s.indexes.path[p.path]
      if (i !== undefined) {
        s.indexes.path[p.path] = -1
      } else {
        s.indexes.path[p.path] = s.entities.length - 1
      }

      if (d.groups) {
        const a = d.groups
        for (const d of a) {
          if (!d.title) {
            throw new Error("No title")
          }

          const g = new SitemapGroup()
          g.id = randomUUID()
          g.title = d.title
          g.parent = p.id

          const k = `${g.parent};${g.title}`

          let i = s.indexes.id[g.id]
          if (i !== undefined) {
            throw new Error(`Duplicate ID '${g.id}'`)
          }

          i = s.indexes.group[k]
          if (i !== undefined) {
            throw new Error(`Duplicate group '${g.title}'`)
          }

          s.entities.push(g)
          s.indexes.id[g.id] = s.entities.length - 1
          s.indexes.group[k] = s.entities.length - 1
        }
      }

      if (d.group) {
        c.set(p.id, d.group)
      }
    }

    for (const e of s.entities) {
      if (e.type !== "page") {
        continue
      }

      const a = e.url.split("/")

      let t = a.length - 1
      if (!a[t]) {
        t -= 1
      }

      // eslint-disable-next-line prefer-template
      const u = a.slice(0, t).join("/") + "/"

      if (e.url === u) {
        continue
      }

      const h: SitemapGroup[] = []

      let i = -1
      let k = t
      let x = u
      let n = ""

      while (true) {
        i = s.indexes.url[x]
        if (i !== undefined) {
          break
        }

        k -= 1
        // eslint-disable-next-line prefer-template
        x = a.slice(0, k).join("/") + "/"
        n = a[k]

        let g: SitemapGroup

        const j = s.indexes.url[x]
        if (j !== undefined) {
          const p = s.entities[j]
          if (!p || p.type !== "page") {
            throw new Error(`Not a page '${p.id}'`)
          }

          const k = `${p.id};${n}`

          const i = s.indexes.group[k]
          if (i === undefined) {
            g = new SitemapGroup()
            g.id = randomUUID()
            g.title = n
          } else {
            const e = s.entities[i]
            if (e.type !== "group") {
              throw new Error(`Not a group '${e.id}'`)
            }
            g = e
          }
        } else {
          g = new SitemapGroup()
          g.id = randomUUID()
          g.title = n
        }

        h.push(g)
      }

      let m = s.entities[i]
      if (!m || m.type !== "page") {
        throw new Error(`Not a page '${e.id}'`)
      }

      if (h.length !== 0) {
        let p = h[h.length - 1]
        for (let i = h.length - 2; i >= 0; i -= 1) {
          const n = h[i]
          if (!n.parent) {
            n.parent = p.id
          }
          if (n.parent !== p.id) {
            throw new Error(`Parent mismatch '${n.id}'`)
          }
          if (!p.children.includes(n.id)) {
            p.children.push(n.id)
          }
          p = n
        }

        const g = h[h.length - 1]
        if (!g.parent) {
          g.parent = m.id
        }
        if (g.parent !== m.id) {
          throw new Error(`Parent mismatch '${g.id}'`)
        }

        for (const g of h) {
          const k = `${g.parent};${g.title}`
          if (s.indexes.group[k] === undefined) {
            s.entities.push(g)
            s.indexes.id[g.id] = s.entities.length - 1
            s.indexes.group[k] = s.entities.length - 1
          }
        }

        m = g
      }

      e.parent = m.id
      m.children.push(e.id)
    }

    for (const e of s.entities) {
      if (e.type !== "page") {
        continue
      }

      const n = c.get(e.id)
      if (!n) {
        continue
      }

      const j = s.indexes.id[e.parent]
      if (j === undefined) {
        throw new Error(`No parent for '${e.url}'`)
      }

      const p = s.entities[j]
      if (!p) {
        throw new Error(`No entity for '${e.parent}'`)
      }

      const k = `${p.id};${n}`
      let i = s.indexes.group[k]

      if (i === undefined) {
        const g = new SitemapGroup()
        g.id = randomUUID()
        g.title = n
        s.entities.push(g)
        i = s.entities.length - 1
        s.indexes.id[g.id] = i
        s.indexes.group[k] = i
      }

      const m = s.entities[i]
      if (!m) {
        throw new Error(`No entity for '${i}'`)
      }

      for (const [i, id] of p.children.entries()) {
        if (id === e.id) {
          p.children.splice(i, 1)
        }
      }

      e.parent = m.id
      m.children.push(e.id)
      m.parent = p.id

      if (!p.children.includes(m.id)) {
        p.children.push(m.id)
      }
    }

    for (const e of s.entities) {
      e.children.sort((a, b) => {
        const i = s.indexes.id[a]
        if (i === undefined) {
          throw new Error(`No index for '${a}'`)
        }
        const x = s.entities[i]
        if (!x) {
          throw new Error(`No entity for '${a}'`)
        }
        const j = s.indexes.id[b]
        if (j === undefined) {
          throw new Error(`No index for '${b}'`)
        }
        const y = s.entities[j]
        if (!y) {
          throw new Error(`No entity for '${b}'`)
        }
        const d = x.order - y.order
        if (d !== 0) {
          return d
        }
        return x.title.localeCompare(y.title)
      })
    }

    Sitemap.shared = s

    return []
  })
}
