/// <reference types="@onlyoffice/document-builder-html-element" />
/// <reference types="@onlyoffice/document-editor-html-element" />
/// <reference types="@onlyoffice/xml-types" />

interface ImportMeta {
  readonly env?: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly DEV?: boolean
  readonly CONFIG_SERVER_BASE_URL?: string
}
