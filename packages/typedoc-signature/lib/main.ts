import {type Declaration, type Entity, type Fragment, GroupEntity} from "@onlyoffice/library-declaration/next.ts"
import {type JSONOutput as J} from "typedoc"
import {concise} from "./internal/concise.ts"
import {verbose} from "./internal/verbose.ts"

type FlatTrail = number[]

export interface ComputeTransport extends Transport {
  entities: Entity[]
}

export interface Transport {
  trailOf(t: Declaration | Fragment): FlatTrail | undefined
  reflectionOf(t: FlatTrail): J.Reflection | undefined
  idOf(id: number): number | undefined
}

export function compute(ct: ComputeTransport): void {
  const tr: Transport = {
    trailOf: ct.trailOf.bind(ct),
    reflectionOf: ct.reflectionOf.bind(ct),
    idOf: ct.idOf.bind(ct),
  }

  for (const e of ct.entities) {
    if (e instanceof GroupEntity) {
      continue
    }
    verbose(tr, e)
    concise(tr, e)
  }
}
