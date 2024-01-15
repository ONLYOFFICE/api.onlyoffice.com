import {type ChildrenIncludable} from "@onlyoffice/preact-types"

export function Callback(p: ChildrenIncludable): null {
  if (typeof p.children === "function") {
    p.children()
  }
  return null
}
