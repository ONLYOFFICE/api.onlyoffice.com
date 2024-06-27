import type { JSX } from "preact"
import { Fragment, h } from "preact"
import code from "./fixtures/code.js?raw"
import syntaxHighlight from "./syntax-highlight.css?inline"
import syntaxHighlightRegular from "./syntax-highlight.regular.css?inline"
import { register } from "./syntax-highlight.config.ts"
import { SyntaxHighlight } from "./syntax-highlight.ts"

const styles: string[] = [
  syntaxHighlight,
  syntaxHighlightRegular
]

export default {
  title: "Site/SyntaxHighlight",
  loaders: [
    register
  ],
  decorators: [
    (Story: any): JSX.Element => (
      <>
        {styles.map((s) => (
          <style key={s} dangerouslySetInnerHTML={{ __html: s }} />
        ))}
        <Story />
      </>
    )
  ]
}

export function Composition(): JSX.Element {
  return (
    <pre><code><SyntaxHighlight syntax="javascript">{code}</SyntaxHighlight></code></pre>
  )
}
