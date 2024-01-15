import {type ChildrenIncludable} from "@onlyoffice/preact-types"
import {clsx} from "clsx"
import {useContext} from "preact/hooks"
import {type JSX, createContext, h} from "preact"

interface Contextual {
  for: string
}

const Context = createContext<Contextual>({for: ""})

export interface FormControlProperties extends ChildrenIncludable {
  class?: string
  for?: string
}

export function FormControl(p: FormControlProperties): JSX.Element {
  const {children, ...props} = p

  return <Context.Provider value={ctx()}>
    <div class={cls()}>{children}</div>
  </Context.Provider>

  function ctx(): Contextual {
    const c: Contextual = {for: ""}
    if (props.for) {
      c.for = props.for
    }
    return c
  }

  function cls(): string {
    return clsx("form-control", props.class)
  }
}

export function FormControlLabel(p: ChildrenIncludable): JSX.Element {
  const ctx = useContext(Context)
  return <label class="form-control__label" for={ctx.for}>{p.children}</label>
}

export function FormControlControl(p: ChildrenIncludable): JSX.Element {
  return <div class="form-control__control">{p.children}</div>
}
