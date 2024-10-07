import {Button, type ButtonProperties, SrOnly} from "@onlyoffice/ui-kit"
import {Fragment, type JSX, type PreactDOMAttributes, h} from "preact"

export interface StatusProperties extends PreactDOMAttributes {
  size?: "default" | "small" | "medium" | "large"
}

export function Status(p: StatusProperties): JSX.Element {
  const a: JSX.HTMLAttributes<HTMLDivElement> = {
    class: "status",
  }

  // The error mentioned below is a false positive.
  // eslint-disable-next-line unicorn/explicit-length-check
  if (typeof a.class === "string" && p.size) {
    a.class += ` status_size_${p.size}`
  }

  return <div {...a}>{p.children}</div>
}

export function StatusHeading(p: PreactDOMAttributes): JSX.Element {
  return <SrOnly>
    <h1>{p.children}</h1>
  </SrOnly>
}

export function StatusPicture(p: PreactDOMAttributes): JSX.Element {
  return <>{p.children}</>
}

export function StatusDescription(p: PreactDOMAttributes): JSX.Element {
  return <p class="status__description">{p.children}</p>
}

export function StatusButton(p: ButtonProperties): JSX.Element {
  // todo: append class="status__button"
  return <Button variant="accent" {...p} />
}
