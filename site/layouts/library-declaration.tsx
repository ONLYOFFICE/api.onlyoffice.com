import type {Context, Data} from "@onlyoffice/eleventy-types"
import {LibraryDeclaration} from "@onlyoffice/site-kit"
import {type JSX, h} from "preact"
import {SyntaxHighlight} from "../components/syntax-highlight/syntax-highlight.ts"
import {Markdown} from "@/internal/markdown.tsx"

export function data(): Data {
  return {
    layout: "chapter"
  }
}

export function render(ctx: Context): JSX.Element {
  return <LibraryDeclaration
    declaration={ctx.pagination.items[0]}
    onHighlightSyntax={SyntaxHighlight}
    onLink={ctx.onLink}
    onProcessMarkdown={Markdown}
    onRetrieve={ctx.onRetrieve}
  />
}
