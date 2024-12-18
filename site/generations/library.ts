import {SitemapDatum} from "@onlyoffice/eleventy-sitemap"
import {type Data} from "@onlyoffice/eleventy-types"
import {type Declaration} from "@onlyoffice/library-declaration"
import {type Resource} from "@onlyoffice/library-resource"
import {LibraryDatum} from "../internal/library.tsx"

export function data({list, retrieve}: Resource): Data {
  return {
    layout: "library",

    items: list(),
    pagination: {
      data: "items",
      size: 1,
      addAllPagesToCollections: true,
    },

    slug(data): string {
      if (!data.pagination || !data.pagination.items) {
        throw new Error("No pagination")
      }
      const [d]: Declaration[] = data.pagination.items
      const p = d.id.split("#").join("/")
      return `${p}/index`
    },

    eleventyComputed: {
      title(data) {
        if (!data || !data.pagination || !data.pagination.items) {
          throw new Error("No pagination")
        }
        return data.pagination.items[0].title
      },

      sitemap(data) {
        if (!data.pagination || !data.pagination.items) {
          return
        }

        const a = data.defaultSitemap
        if (!a) {
          return
        }

        const b = new SitemapDatum()

        const [d]: Declaration[] = data.pagination.items
        switch (d.kind) {
        case "class":
          b.groups = [
            {title: "Constructors"},
            {title: "Events"},
            {title: "Methods"},
            {title: "Properties"},
          ]
          break
        case "constructor":
          b.group = "Constructors"
          break
        case "event":
          b.group = "Events"
          break
        case "method":
          b.group = "Methods"
          break
        case "property":
          b.group = "Properties"
          break
        }

        return SitemapDatum.merge(a, b)
      },

      library(data) {
        if (!data.pagination || !data.pagination.items) {
          return
        }

        const d = new LibraryDatum()
        ;[d.declaration] = data.pagination.items

        d.onLink = function onLink(t) {
          if (!data || !data.crosslink) {
            return ""
          }

          const r = retrieve(t.id)
          if (!r) {
            return ""
          }

          const s = r.id.split("#").join("/")
          const u = data.crosslink(data, `${s}/`)
          if (!u) {
            return ""
          }

          return u
        }

        d.onRetrieve = function onRetrieve(r) {
          return retrieve(r.id)
        }

        return d
      },
    },
  }
}
