/* eslint-disable */

import {type Template, type UserConfig} from "@onlyoffice/eleventy-types"

declare module "@onlyoffice/eleventy-types" {
  interface Data {
    sitemap2?: SitemapData
  }

  interface EleventyComputed {
    sitemap2?(data: Data): SitemapData | undefined
  }
}

export interface SitemapData {
  type: EntityType
  title: string
  url: string
  path: string
}

export class SitemapDatum implements SitemapData {
  type: EntityType = "noop"
  title = ""
  url = ""
  path = ""
  // order = -1

  static merge(a: SitemapData, b: SitemapData): SitemapData {
    const c = new SitemapDatum()

    if (b.type) {
      c.type = b.type
    } else if (a.type) {
      c.type = a.type
    }

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

    return c
  }
}

export function eleventySitemap(uc: UserConfig): void {
  uc.addCollection("sitemap2", (tc) => {
    const at = tc.getAll()
    Sitemap.shared = Sitemap.from(at)
    return []
  })
}







export interface SitemapAccessible {
  // get indexes(): SitemapIndexes
  // get entities(): SitemapEntity[]
  // trace(e: SitemapEntity): string[] // rename to trailOf
  // find(t: string, b: keyof SitemapIndexes): SitemapEntity | undefined
}

export class Sitemap implements SitemapAccessible {
  static shared: SitemapAccessible

  static from(at: Template[]): Sitemap {
    const st = new Sitemap()
    st.#templates = at

    for (const [ti, te] of st.#templates.entries()) {
      const sd = te.data.sitemap2
      if (!sd) {
        continue
      }

      if (sd.type === "group") {
        const ed = new EntityData()
        ed.title = sd.title
        ed.url = sd.url
        ed.path = sd.path

        const ge = new GroupEntity()
        ge.id = st.#entities.length
        ge.templateId = ti
        ge.data = ed

        st.#entities.push(ge)
        st.#idIndex[ge.id] = st.#entities.length - 1
        st.#urlIndex[ed.url] = st.#entities.length - 1
        st.#pathIndex[ed.path] = st.#entities.length - 1
        continue
      }

      if (sd.type === "noop") {
        continue
      }

      if (sd.type === "page") {
        const ed = new EntityData()
        ed.title = sd.title
        ed.url = sd.url
        ed.path = sd.path

        const pe = new PageEntity()
        pe.id = st.#entities.length
        pe.templateId = ti
        pe.data = ed

        st.#entities.push(pe)
        st.#idIndex[pe.id] = st.#entities.length - 1
        st.#urlIndex[ed.url] = st.#entities.length - 1
        st.#pathIndex[ed.path] = st.#entities.length - 1
        continue
      }

      throw new Error(`Unknown type: ${sd.type}`)
    }

    for (const en of st.#entities) {
      let pe: Entity | undefined
      let ce: Entity | undefined = en

      while (true) {
        if (ce.data.url === "/") {
          break
        }

        const ac = ce.data.url.split("/")
        if (ac.length === 1) {
          break
        }

        let ur = ""
        for (let i = 0; i < ac.length - 2; i += 1) {
          ur += ac[i] + "/"
        }

        pe = st.findByUrl(ur)
        if (!pe) {
          const ed = new EntityData()
          ed.title = "Unknown Page"
          ed.url = ur

          const ge = new PageEntity()
          ge.id = st.#entities.length
          ge.data = ed

          st.#entities.push(ge)
          st.#idIndex[ge.id] = st.#entities.length - 1
          st.#urlIndex[ed.url] = st.#entities.length - 1
          st.#pathIndex[ed.path] = st.#entities.length - 1

          pe = ge
          // todo: const e = new Error
        }

        if (ce.parentId === -1) {
          ce.parentId = pe.id
          pe.children.push(ce.id)
        }

        ce = pe
        pe = undefined
      }
    }

    // console.log(st.#entities)

    return st
  }

  #idIndex: Record<number, number> = {}

  #urlIndex: Record<string, number> = {}

  #pathIndex: Record<string, number> = {}

  #entities: Entity[] = []

  // get entities(): Entity[] {
  //   return this.#entities
  // }

  #templates: Template[] = []

  findById(id: number): Entity | undefined {
    const n = this.#idIndex[id]
    return this.#entities[n]
  }

  findByUrl(u: string): Entity | undefined {
    const n = this.#urlIndex[u]
    return this.#entities[n]
  }

  findByPath(p: string): Entity | undefined {
    const n = this.#pathIndex[p]
    return this.#entities[n]
  }

  // resolveTemplateId(id: number): Template
}






























export type Entity = EntityMap[EntityType]

export type EntityType = keyof EntityMap

export interface EntityMap {
  group: GroupEntity
  noop: NoopEntity
  page: PageEntity
}

export class GroupEntity implements EntityNode {
  id = -1
  type = "group" as const
  templateId = -1
  parentId = -1
  children: number[] = []
  data = new EntityData()
}

export class NoopEntity implements EntityNode {
  id = -1
  type = "noop" as const
  templateId = -1
  parentId = -1
  children: number[] = []
  data = new EntityData()
}

export class PageEntity implements EntityNode {
  id = -1
  type = "page" as const
  templateId = -1
  parentId = -1
  children: number[] = []
  data = new EntityData()
}

export interface EntityNode {
  id: number
  type: string
  templateId: number
  parentId: number
  children: number[]
  data: EntityData
}

export class EntityData {
  title = ""
  url = ""
  path = ""
  // order = -1

  get external(): boolean {
    return this.url.startsWith("http")
  }
}

// export class Group {
//   title = ""
//   // order = -1
// }

// export class Page {
//   title = ""
//   url = ""
//   path = ""
//   // order = -1

//   get external(): boolean {
//     return this.url.startsWith("http")
//   }
// }
