import {type HTMLAttributes} from "preact/compat"
import {type JSX, h} from "preact"

export interface ButtonProperties extends HTMLAttributes<HTMLButtonElement> {
  variant?: "accent" | "default"
}

export function Button(p: ButtonProperties): JSX.Element {
  const {children, type = "button", variant, ...props} = p
  return <button class={cls()} type={type} {...props}>{children}</button>

  function cls(): string {
    let s = "button"
    switch (variant) {
    case "accent":
      s += " button_accent"
      break
    case undefined:
    case "default":
      break
    default:
      throw new Error(`Unknown variant: ${variant}`)
    }
    return s
  }
}
