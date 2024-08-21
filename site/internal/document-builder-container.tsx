import {documentBuilder} from "@onlyoffice/document-builder-hast-element"
import {type DocumentEditorConfig} from "@onlyoffice/document-editor-html-element"
import {mergeConfig} from "@onlyoffice/document-server-utils"
import {fromKeys} from "@onlyoffice/keyed-json"
import {Config} from "@onlyoffice/site-config"
import {template} from "@onlyoffice/template-hast-element"
import {type Element, type Root} from "hast"
import {toText} from "hast-util-to-text"
import {visit} from "unist-util-visit"

export interface RehypeDocumentBuilderContainerTransform {
  (tree: Root): void
}

export function rehypeDocumentBuilderContainer(): RehypeDocumentBuilderContainerTransform {
  const c = Config.shared

  return function transform(t) {
    visit(t, "element", (n, i, p) => {
      if (n.tagName !== "pre" || i === undefined || !p) {
        return
      }

      const [e] = n.children
      if (!e || e.type !== "element" || e.tagName !== "code") {
        return
      }

      const m = e.properties.metastring
      if (!m) {
        return
      }

      const o = fromKeys(m)
      const b = o["document-builder"] as DocumentEditorConfig | undefined
      if (!b) {
        return
      }

      const dc = documentBuilderContainer()
      const te = template()

      const db = documentBuilder()
      db.data.documentServerUrl = c.playground.documentEditor.documentServerUrl
      db.data.config = mergeConfig(config(), b)
      db.data.command = toText(e, {whitespace: "pre-wrap"}).trim()

      te.children = [db]
      dc.children = [n, te]
      p.children[i] = dc
    })
  }
}

interface DocumentBuilderContainerElement extends Element {
  tagName: "document-builder-container"
}

function documentBuilderContainer(): DocumentBuilderContainerElement {
  return {
    type: "element",
    tagName: "document-builder-container",
    properties: {},
    children: [],
  }
}

function config(): DocumentEditorConfig {
  return {
    document: {
      fileType: "",
      key: "",
      title: "",
      url: "",
    },
    editorConfig: {
      customization: {
        anonymous: {
          request: false,
          label: "Guest",
        },
        compactHeader: true,
        compactToolbar: true,
        hideRightMenu: true,
        hideRulers: true,
        integrationMode: "embed",
        toolbarHideFileName: true,
        toolbarNoTabs: true,
      },
      callbackUrl: "",
    },
  }
}