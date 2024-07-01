import {Client} from "@onlyoffice/server-client"
import {ConfigFixture} from "@onlyoffice/site-config-fixtures"
import {type Meta} from "@storybook/preact"
import {useEffect} from "preact/hooks"
import {type JSX, h} from "preact"
import {DocumentEditorPlayground} from "./main.tsx"

export default {
  title: "Site/Document Editor Playground"
} satisfies Meta

export function Default(): JSX.Element {
  document.addEventListener("documentbuildererror", console.error)
  document.addEventListener("documenteditorerror", console.error)
  document.addEventListener("documenteditorplaygrounderror", console.error)

  useEffect(() => {
    setup()
  }, [])

  const c = new ConfigFixture()
  return <DocumentEditorPlayground config={c.playground} />
}

async function setup(): Promise<void> {
  const c = new Client()
  c.baseURL = "http://0.0.0.0:4000/"

  const sp = document.querySelector("document-editor-playground")
  if (sp) {
    sp.client = c
    await sp.connectedCallback()
  }
}