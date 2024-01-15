import type * as T from "./Tree.tsx"
import * as C from "./Tree.tsx"

export type TreeProperties = T.RootProperties
export type TreeGroupProperties = T.GroupProperties
export type TreeItemProperties = T.ItemProperties
export type TreeLinkProperties = T.LinkProperties

export const Tree = Object.assign(C.Root, {
  Group: C.Group,
  Item: C.Item,
  Link: C.Link
})
