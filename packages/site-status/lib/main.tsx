import {Button, SrOnly} from "@onlyoffice/ui-kit"
import {type JSX, type PreactDOMAttributes, h} from "preact"

export function Status(p: PreactDOMAttributes): JSX.Element {
  return <div class="status">{p.children}</div>
}

export function StatusHeading(p: PreactDOMAttributes): JSX.Element {
  return <SrOnly>
    <h1 class="status__heading">{p.children}</h1>
  </SrOnly>
}

export function StatusPicture(p: PreactDOMAttributes): JSX.Element {
  return <div class="status__picture">{p.children}</div>
}

export function StatusDescription(p: PreactDOMAttributes): JSX.Element {
  return <p class="status__description">{p.children}</p>
}

export function StatusButton(p: PreactDOMAttributes): JSX.Element {
  return <Button class="status__button">{p.children}</Button>
}
