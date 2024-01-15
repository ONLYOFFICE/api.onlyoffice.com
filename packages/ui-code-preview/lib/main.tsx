import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"

export function CodePreview(p: HTMLAttributes<HTMLDivElement>): JSX.Element {
  const {children, ...props} = p
  return <div class="code-preview" {...props}>{p.children}</div>
}
