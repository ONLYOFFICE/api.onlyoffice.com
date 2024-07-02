import {type Data} from "@onlyoffice/eleventy-types"
import {Config} from "@onlyoffice/site-config"
import {
  DocumentEditorPlayground,
  Playground,
  PlaygroundBefore,
  PlaygroundContent
} from "@onlyoffice/site-kit"
import {Content} from "@onlyoffice/ui-kit"
import {type JSX, h} from "preact"

export function data(): Data {
  return {
    layout: "page"
  }
}

export function render(): JSX.Element {
  const c = Config.read()
  return <Playground>
    <PlaygroundBefore>
      <Content>
        <h1>Document Editor Playground</h1>
      </Content>
    </PlaygroundBefore>
    <PlaygroundContent>
      <DocumentEditorPlayground config={c.playground} />
    </PlaygroundContent>
  </Playground>
}
