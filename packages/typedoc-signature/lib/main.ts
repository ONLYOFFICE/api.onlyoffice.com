// TODO: remove flat()
import {type Declaration, type Entity, type Fragment, GroupEntity} from "@onlyoffice/library-declaration/next.ts"
import {type JSONOutput as J} from "typedoc"
import {concise} from "./internal/concise.ts"
import {verbose} from "./internal/verbose.ts"

type FlatTrail = number[]

export interface ComputeRepository {
  trailOf(t: Declaration | Fragment): FlatTrail | undefined
  reflectionOf(t: FlatTrail): J.Reflection | undefined
}

export function compute(r: ComputeRepository, e: Entity): void {
  if (e instanceof GroupEntity) {
    return
  }

  verbose(r, e)
  concise(r, e)
}
