import * as E from "@onlyoffice/preact-elements"
import {clsx} from "clsx"
import {type JSX, h} from "preact"

export interface ThemeGuardProperties extends E.DivProperties {
  mode?: "regular"
  scheme?: "light" | "dark"
}

export function ThemeGuard(p: ThemeGuardProperties): JSX.Element {
  const {mode, scheme, ...o} = p

  o.class = clsx(
    "tg",
    mode && `tg_mode_${mode}`,
    scheme && `tg_scheme_${scheme}`,
    o.class,
  )

  return <E.Div asChild {...o} />
}
