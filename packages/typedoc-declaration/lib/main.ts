import {pipeline} from "node:stream"
import {promisify} from "node:util"
import type * as L from "@onlyoffice/library-declaration/next.ts"
import {Transformer} from "@onlyoffice/typedoc-transformer"
import {Transport} from "@onlyoffice/typedoc-transport"
import {type JSONOutput as J} from "typedoc"

const pipe = promisify(pipeline)

export async function process(o: J.Reflection): Promise<L.Entity[]> {
  const tp = new Transport(o)
  const tf = new Transformer(tp)

  await pipe(tp.toReadable(), tf, tp.toWritable())

  return tp.entities
}
