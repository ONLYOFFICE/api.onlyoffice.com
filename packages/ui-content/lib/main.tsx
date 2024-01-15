import {type ChildrenIncludable} from "@onlyoffice/preact-types"
import {type JSX, h} from "preact"

export function Content(p: ChildrenIncludable): JSX.Element {
  return <div class="content">{p.children}</div>
}

export function ContentTabContainer(p: ChildrenIncludable): JSX.Element {
  return <tab-container class="content-tab-container">{p.children}</tab-container>
}

export interface ContentTabListParameters extends ChildrenIncludable {
  label?: string
}

export function ContentTabList(p: ContentTabListParameters): JSX.Element {
  return <div slot="tablist-wrapper">
    <div role="tablist" aria-label={p.label}>{p.children}</div>
  </div>
}

export interface ContentTabParameters extends ChildrenIncludable {
  id?: string
}

export function ContentTab(p: ContentTabParameters): JSX.Element {
  return <button type="button" id={p.id} role="tab">{p.children}</button>
}

export interface ContentTabPanelParameters extends ChildrenIncludable {
  // todo: rename to labelledby
  by?: string
}

export function ContentTabPanel(p: ContentTabPanelParameters): JSX.Element {
  return <div role="tabpanel" aria-labelledby={p.by}>{p.children}</div>
}
