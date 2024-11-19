import type * as L from "@onlyoffice/library-declaration/next.ts"
import {type JSONOutput as J} from "typedoc"
import * as lib from "./internal.ts"

export async function process(o: J.Reflection): Promise<L.Entity[]> {
  return await lib.process(o)
}
