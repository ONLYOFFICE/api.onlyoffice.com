import {Transport} from "@onlyoffice/typedoc-transport"
import {Declaration, Fragment, Group} from "../../lib/processor.ts"

export const name = "transforms a parameter with a default value"

export function cb(t: Transport): void {
  let d = new Declaration()
  d.id = 0
  d.name = "013"
  d.children = [1]
  t.entities.push(d.to())

  let g = new Group()
  g.id = 1
  g.parentId = 0
  g.name = "Functions"
  g.children = [2]
  t.entities.push(g.to())

  d = new Declaration()
  d.id = 2
  d.parentId = 1
  d.name = "f"

  let f = new Fragment()
  f.name = "a"
  f.default = "s"
  d.parameters.push(f)

  f = new Fragment()
  f.name = "b"
  f.default = "0"
  d.parameters.push(f)

  t.entities.push(d.to())
}