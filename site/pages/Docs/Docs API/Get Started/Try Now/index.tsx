import type {Context, Data} from "@onlyoffice/eleventy-types"
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

export function render({config}: Context): JSX.Element {
  return <Playground>
    <PlaygroundBefore>
      <Content>
        <h1>Document Editor Playground</h1>
      </Content>
    </PlaygroundBefore>
    <PlaygroundContent>
      <DocumentEditorPlayground config={config.playground} />
    </PlaygroundContent>
  </Playground>
}
