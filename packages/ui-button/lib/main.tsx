import * as Elements from "@onlyoffice/preact-elements"
import {clsx} from "clsx"
import {type JSX, h} from "preact"

export interface ButtonProperties extends Elements.ButtonProperties {
  variant?: "default" | "accent" | "neutral"
}

export function Button(p: ButtonProperties): JSX.Element {
  const {variant, ...o} = p
  o.class = clsx("button", variant && `button_${variant}`, o.class)
  return <Elements.Button {...o} />
}
