import type {Library} from "@onlyoffice/documentation-declarations-types/library.ts"
import type {Tokenizer} from "@onlyoffice/documentation-declarations-types/tokenizer.js"

export function createData(list, retrieve) {
  return {
    layout: "code-declaration",

    items: list(),
    pagination: {
      data: "items",
      size: 1,
      addAllPagesToCollections: true
    },

    slug(data: any): string {
      const d: Library.Declaration = data.pagination.items[0]
      return d.id.split("#").join("/") + "/index"
    },

    onRetrieve(r: Library.Reference): Library.Declaration | undefined {
      return retrieve(r.id)
    },

    eleventyComputed: {
      title(data: any) {
        const d: Library.Declaration = data.pagination.items[0]
        return d.title
      },
      onLink(data: any) {
        return function onLink(t: Tokenizer.Token): string | undefined {
          if (t.type !== "reference") {
            return
          }

          const d = retrieve(t.id)
          if (!d) {
            return
          }

          const s = d.id.split("#").join("/")
          return data._link(data, s)
        }
      }
    }
  }
}
