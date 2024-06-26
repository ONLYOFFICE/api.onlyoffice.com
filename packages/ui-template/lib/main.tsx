import type {HTMLAttributes} from "preact/compat"
import {renderToString} from "preact-render-to-string"
import {type JSX, h} from "preact"

export function Template({children, ...props}: HTMLAttributes<HTMLTemplateElement>): JSX.Element {
  return <template dangerouslySetInnerHTML={{__html: renderToString(children)}} {...props} />
}
