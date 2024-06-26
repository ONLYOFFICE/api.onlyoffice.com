import type {ChildrenIncludable} from "@onlyoffice/preact-types"
import {type JSX, h} from "preact"

export interface ContentProperties extends ChildrenIncludable {}

export function Content({children}: ContentProperties): JSX.Element {
  return <div class="content">{children}</div>
}
