// TODO: remove flat()
import {type Entity, GroupEntity} from "@onlyoffice/library-declaration/next.ts"
import {isProjectReflection} from "@onlyoffice/typedoc-util-is-reflection"
import {type JSONOutput as J} from "typedoc"
import {concise} from "./internal/concise.ts"
import {verbose} from "./internal/verbose.ts"

export function compute(r: J.Reflection, e: Entity): void {
  if (!isProjectReflection(r)) {
    throw new Error("Expected a project reflection")
  }

  if (e instanceof GroupEntity) {
    return
  }

  verbose(r, e)
  concise(r, e)
}
