import {clsx} from "clsx"
import {useContext} from "preact/hooks"
import type {JSX} from "preact"
import {createContext, h} from "preact"

interface Contextual {
  for: string
}

const Context = createContext<Contextual>({for: ""})

export interface FormControlParameters {
  children?: any
  class?: string
  for?: string
}

export function FormControl(
  {children, ...props}: FormControlParameters
): JSX.Element {
  return <Context.Provider value={ctx()}>
    <div class={cls()}>{children}</div>
  </Context.Provider>

  function ctx(): Contextual {
    if (!props.for) {
      props.for = ""
    }
    return {for: props.for}
  }

  function cls(): string {
    return clsx("form-control", props.class)
  }
}

export interface FormControlLabelParameters {
  children?: any
}

export function FormControlLabel(
  {children}: FormControlLabelParameters
): JSX.Element {
  const ctx = useContext(Context)
  return <label class="form-control__label" for={ctx.for}>{children}</label>
}

export interface FormControlControlParameters {
  children?: any
}

export function FormControlControl(
  {children}: FormControlControlParameters
): JSX.Element {
  return <div class="form-control__control">{children}</div>
}