import {SitemapDatum} from "@onlyoffice/eleventy-sitemap/next.ts"
// import {SitemapDatum} from "@onlyoffice/eleventy-sitemap"
import {type Data} from "@onlyoffice/eleventy-types"
import {type Entity} from "@onlyoffice/library-declaration/next.ts"
import {cutSuffix} from "@onlyoffice/strings"
import {slug} from "github-slugger"
import {LibraryDatum} from "../internal/library.tsx"
import {type Resource} from "../resources/docspace-plugin-sdk.ts"

export function data(r: Resource): Data {
  const rs = new ResourceSlugger()

  return {
    layout: "library",

    items: r.list(),
    pagination: {
      data: "items",
      size: 1,
      addAllPagesToCollections: true,
    },

    // _exclude(data) {
    //   if (!data.pagination || !data.pagination.items) {
    //     throw new Error("No pagination")
    //   }

    //   const [e]: Entity[] = data.pagination.items

    //   if (e.type === "group") {
    //     return true
    //   }

    //   if (e.type === "declaration") {
    //     return false
    //   }

    //   throw new Error("Unknown entity type")
    // },

    slug(data) {
      if (!data.pagination || !data.pagination.items) {
        throw new Error("No pagination")
      }
      const [e]: Entity[] = data.pagination.items
      const s = rs.slug(r, e)
      return `${s}/index`
    },

    eleventyComputed: {
      title(data) {
        if (!data.pagination || !data.pagination.items) {
          throw new Error("No pagination")
        }

        const [e]: Entity[] = data.pagination.items

        if (e.type === "group") {
          return e.group.name
        }

        if (e.type === "declaration") {
          return e.declaration.name
        }

        throw new Error("Unknown entity type")
      },

      // sitemap(data) {
      //   if (!data.pagination || !data.pagination.items) {
      //     throw new Error("No pagination")
      //   }

      //   const a = data.defaultSitemap

      //   if (!a) {
      //     return
      //   }

      //   // const b = new SitemapDatum()

      //   const [e]: Entity[] = data.pagination.items

      //   if (e.type === "group") {
      //     return
      //   }

      //   return a
      // },

      // sitemap2(data) {
      //   if (!data.pagination || !data.pagination.items) {
      //     throw new Error("No pagination")
      //   }

      //   const a = data.defaultSitemap2
      //   if (!a) {
      //     return
      //   }

      //   const b = new SitemapDatum()

      //   const [e]: Entity[] = data.pagination.items

      //   if (e.type === "group") {
      //     b.type = "group"
      //   } else if (e.type === "declaration") {
      //     b.type = "page"
      //   } else {
      //     throw new Error("Unknown entity type")
      //   }

      //   return SitemapDatum.merge(a, b)
      // },

      library(data) {
        if (!data.pagination || !data.pagination.items) {
          throw new Error("No pagination")
        }

        const [e]: Entity[] = data.pagination.items

        const d = new LibraryDatum()
        d.declaration = e

        // d.onLink = function onLink(t) {
        //   if (!data || !data.crosslink) {
        //     return ""
        //   }

        //   const r = retrieve(t.id)
        //   if (!r) {
        //     return ""
        //   }

        //   const s = r.id.split("#").join("/")
        //   const u = data.crosslink(data, `${s}/`)
        //   if (!u) {
        //     return ""
        //   }

        //   return u
        // }

        d.onRetrieve = function onRetrieve(id) {
          return r.retrieve(id)
        }

        return d
      },
    },

    // eleventyComputed: {
    //   title(data) {
    //     if (!data || !data.pagination || !data.pagination.items) {
    //       throw new Error("No pagination")
    //     }
    //     return data.pagination.items[0].title
    //   },

    //   sitemap(data) {
    //     if (!data.pagination || !data.pagination.items) {
    //       return
    //     }

    //     const a = data.defaultSitemap
    //     if (!a) {
    //       return
    //     }

    //     const b = new SitemapDatum()

    //     const [d]: Declaration[] = data.pagination.items
    //     switch (d.kind) {
    //     case "class":
    //       b.groups = [
    //         {title: "Constructors"},
    //         {title: "Events"},
    //         {title: "Methods"},
    //         {title: "Properties"},
    //       ]
    //       break
    //     case "constructor":
    //       b.group = "Constructors"
    //       break
    //     case "event":
    //       b.group = "Events"
    //       break
    //     case "method":
    //       b.group = "Methods"
    //       break
    //     case "property":
    //       b.group = "Properties"
    //       break
    //     }

    //     return SitemapDatum.merge(a, b)
    //   },

    //   library(data) {
    //     if (!data.pagination || !data.pagination.items) {
    //       return
    //     }

    //     const d = new LibraryDatum()
    //     ;[d.declaration] = data.pagination.items

    //     d.onLink = function onLink(t) {
    //       if (!data || !data.crosslink) {
    //         return ""
    //       }

    //       const r = retrieve(t.id)
    //       if (!r) {
    //         return ""
    //       }

    //       const s = r.id.split("#").join("/")
    //       const u = data.crosslink(data, `${s}/`)
    //       if (!u) {
    //         return ""
    //       }

    //       return u
    //     }

    //     d.onRetrieve = function onRetrieve(r) {
    //       return retrieve(r.id)
    //     }

    //     return d
    //   },
    // },
  }
}

class ResourceSlugger {
  #m = new Map<string, number>()

  slug(r: Resource, e: Entity): string {
    let s = ""
    let i = 0

    let c: Entity | undefined = e

    while (c) {
      // if (c.type === "group") {
      //   c = r.retrieve(c.parentId)
      //   continue
      // }

      if (c.type === "group") {
        s = `${slug(c.group.name)}/${s}`
      }

      if (c.type === "declaration") {
        s = `${slug(c.declaration.name)}/${s}`
      }

      // s = `${slug(c.declaration.name)}/${s}`
      c = r.retrieve(c.parentId)
    }

    [s] = cutSuffix(s, "/")

    while (true) {
      const id = this.#m.get(s)

      if (!id) {
        this.#m.set(s, e.id)
        break
      }

      if (id === e.id) {
        break
      }

      i += 1
      s = `${s}-${i}`
    }

    return s
  }
}
