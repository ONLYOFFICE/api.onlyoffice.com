// import type {DocumentBuilderCommand} from "@onlyoffice/document-builder-html-element"
import type {DocumentEditor, DocumentEditorData, DocumentEditorProperties} from "@onlyoffice/document-editor-hast-element"
import {documentEditor} from "@onlyoffice/document-editor-hast-element"

interface DocumentBuilder extends Omit<DocumentEditor, "tagName"> {
  tagName: "document-builder"
  properties: DocumentBuilderProperties
  data: DocumentBuilderData
}

interface DocumentBuilderProperties extends DocumentEditorProperties {
  command?: string
}

interface DocumentBuilderData extends DocumentEditorData {
  // todo?: DocumentBuilderCommand
  command?: string
}

export function documentBuilder(): DocumentBuilder {
  // todo?: Object.getOwnPropertyDescriptor
  const e = documentEditor() as DocumentBuilder
  e.tagName = "document-builder"
  Object.defineProperty(e.data, "command", {
    configurable: true,
    enumerable: true,
    get(): string | undefined {
      return e.properties.command
    },
    set(c: string | undefined) {
      if (!c) {
        delete e.properties.command
        return
      }
      e.properties.command = c
    }
  })
  return e
}
