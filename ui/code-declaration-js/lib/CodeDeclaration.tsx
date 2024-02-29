import { Content } from "@onlyoffice/documentation-ui-content-js"
import { Fragment, JSX, h } from "preact"
import { CodeDeclarationSection } from "./CodeDeclarationSection.tsx"
import { CodeDeclarationSignature } from "./CodeDeclarationSignature.tsx"

export interface CodeDeclarationParameters {
  declaration: any
  onProcessMarkdown: any
  onHighlightSyntax: any
  onRetrieve: any
  onLink: any
}

export function CodeDeclaration(
  {
    declaration: d,
    onProcessMarkdown: Markdown,
    onHighlightSyntax: SyntaxHighlight,
    onRetrieve: retrieve,
    onLink: link
  }: CodeDeclarationParameters
): JSX.Element {
  return (
    <Content>
      <h1>{d.title}</h1>
      {d.signature && (
        <CodeDeclarationSignature tokens={d.signature} onLink={link} />
      )}
      {d.description && (
        <>
          <h2>Description</h2>
          <Markdown>{d.description}</Markdown>
        </>
      )}
      {d.sections && d.sections.map((s) => (
        <CodeDeclarationSection
          section={s}
          onProcessMarkdown={Markdown}
          onHighlightSyntax={SyntaxHighlight}
          onRetrieve={retrieve}
          onLink={link}
        />
      ))}
    </Content>
  )
}