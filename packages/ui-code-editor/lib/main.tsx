import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"

export function CodeEditor(p: HTMLAttributes<HTMLTextAreaElement>): JSX.Element {
  const {children, ...props} = p
  return <textarea
    class="code-editor"
    rows={4}
    autocomplete="off"
    autocorrect="off"
    autocapitalize="none"
    spellcheck={false}
    {...props}
  >
    {children}
  </textarea>
}
