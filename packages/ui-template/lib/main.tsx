import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"
import {renderToString} from "preact-render-to-string"

export function Template(p: HTMLAttributes<HTMLTemplateElement>): JSX.Element {
  const {children, ...props} = p
  // @ts-ignore
  const s = renderToString(p.children)
  return <template dangerouslySetInnerHTML={{__html: s}} {...props} />
}
