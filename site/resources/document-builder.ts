import {createRequire} from "node:module"
import type {Library} from "@onlyoffice/documentation-declarations-types/library.ts"
import {isBuild, isPreview} from "../config/mode.ts"

const require = createRequire(import.meta.url)

export const document = createModule("document-builder.document")
export const form = createModule("document-builder.form")
export const presentation = createModule("document-builder.presentation")
export const spreadsheet = createModule("document-builder.spreadsheet")
export const pluginCommon = createModule("document-builder-plugin.common")
export const pluginDocument = createModule("document-builder-plugin.document")
export const pluginForm = createModule("document-builder-plugin.form")
export const pluginPresentation = createModule("document-builder-plugin.presentation")
export const pluginSpreadsheet = createModule("document-builder-plugin.spreadsheet")

function createModule(n: string) {
  const r = isBuild() || isPreview()
    ? require(`@onlyoffice/documentation-resources/${n}.ts`)
    : require(`@onlyoffice/documentation-declarations-fixtures/code.ts`)

  function list(): Library.Declaration[] {
    return r.list()
  }

  function retrieve(id: string): Library.Declaration | undefined {
    return r.retrieve(id)
  }

  return {list, retrieve}
}
