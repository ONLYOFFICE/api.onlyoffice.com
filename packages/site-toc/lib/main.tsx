import {type JSX, type PreactDOMAttributes, h} from "preact"
import {type HTMLAttributes} from "preact/compat"

export function Toc(p: PreactDOMAttributes): JSX.Element {
  return <toc-container>
    <div class="toc">{p.children}</div>
  </toc-container>
}

export function TocHeading(p: PreactDOMAttributes): JSX.Element {
  return <h2 class="toc__heading">{p.children}</h2>
}

export function TocList(p: PreactDOMAttributes): JSX.Element {
  return <ul class="toc__list">{p.children}</ul>
}

export function TocItem(p: PreactDOMAttributes): JSX.Element {
  return <li class="toc__item">{p.children}</li>
}

export function TocLink(p: HTMLAttributes<HTMLAnchorElement>): JSX.Element {
  const {children, ...o} = p
  return <a class="toc__link" {...o}>{children}</a>
}
