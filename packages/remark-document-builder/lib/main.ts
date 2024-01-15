import type {Root} from "mdast"
import {visit} from "unist-util-visit"

declare module "hast" {
  interface Properties {
    dataUseDocumentBuilder?: boolean
  }
}

export interface Transform {
  (tree: Root): void
}

export function remarkDocumentBuilder(): Transform {
  return function transform(tree) {
    visit(tree, "code", (node) => {
      if (!node.meta) {
        return
      }

      let has = false
      for (const el of node.meta.split(" ")) {
        if (el === "use-document-builder") {
          has = true
          break
        }
      }

      if (!has) {
        return
      }

      let d = node.data
      if (!d) {
        d = {}
        node.data = d
      }

      let p = d.hProperties
      if (!p) {
        p = {}
        d.hProperties = p
      }

      p.dataUseDocumentBuilder = true
    })
  }
}
