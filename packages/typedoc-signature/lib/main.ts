import {type Entity, GroupEntity} from "@onlyoffice/library-declaration/next.ts"
import {isProjectReflection} from "@onlyoffice/typedoc-util-is-reflection"
import {type JSONOutput as J} from "typedoc"

export function compute(t: J.Reflection, e: Entity): void {
  if (!isProjectReflection(t)) {
    throw new Error("Expected a project reflection")
  }

  if (e instanceof GroupEntity) {
    return
  }

  console.log(t, e)
}
