import {documentBuilder} from "@onlyoffice/document-builder-hast-element"
import {fileType} from "@onlyoffice/document-builder-utils"
import {template} from "@onlyoffice/template-hast-element"
import {toText} from "hast-util-to-text"
import type {Root} from "hast"
import {visit} from "unist-util-visit"
import {documentBuilderContainer} from "./hast.ts"

interface Transform {
  (tree: Root): void
}

export function rehypeDocumentBuilderContainer(): Transform {
  return function transform(tree) {
    visit(tree, "element", (node, index, parent) => {
      if (!(
        node.tagName === "pre" &&
        index !== undefined &&
        parent
      )) {
        return
      }

      const [code] = node.children
      if (!(
        code &&
        code.type === "element" &&
        code.tagName === "code" &&
        code.properties.dataUseDocumentBuilder
      )) {
        return
      }

      const c = toText(code, {whitespace: "pre-wrap"})
      const t = fileType(c)
      if (!t) {
        // todo?: throw error
        return
      }

      const dc = documentBuilderContainer()
      const te = template()
      const db = documentBuilder()
      db.data.config = {document: {fileType: t}}
      te.children = [db]
      dc.children = [node, te]
      parent.children[index] = dc

      delete code.properties.dataUseDocumentBuilder
    })
  }
}
