import {SpikyWow} from "@onlyoffice/ui-mascots"
import {type JSX, h} from "preact"
import {Picture404Overflow, Picture404Underflow} from "../dist/main.tsx"

export interface Picture404Properties {
  label?: string
  size?: "default" | "small" | "medium" | "large"
}

export function Picture404(p: Picture404Properties): JSX.Element {
  const a: JSX.HTMLAttributes<HTMLDivElement> = {
    class: "picture-404",
  }

  if (p.label) {
    a["aria-label"] = p.label
  } else {
    a["aria-label"] = "Picture of a 404 error"
  }

  // The error mentioned below is a false positive.
  // eslint-disable-next-line unicorn/explicit-length-check
  if (typeof a.class === "string" && p.size) {
    a.class += ` picture-404_size_${p.size}`
  }

  return <div {...a}>
    <Picture404Underflow width={587} />
    <SpikyWow width={165} />
    <Picture404Overflow width={587} />
  </div>
}
