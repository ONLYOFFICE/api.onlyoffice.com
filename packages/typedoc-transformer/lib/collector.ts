import {Transform, type TransformCallback} from "node:stream"
import * as L from "@onlyoffice/library-declaration/next.ts"
import {Declaration, type Entity} from "./processor.ts"
import {type FlatTrail, flatTrail} from "./trail.ts"

export interface CollectorTransport {
  trailFor(t: L.Definition, f: FlatTrail): void
  idFor(s: number, e: number): void
}

export class Collector extends Transform {
  #ct: CollectorTransport

  constructor(ct: CollectorTransport) {
    super({objectMode: true})
    this.#ct = ct
  }

  _transform(e: Entity, _: BufferEncoding, cb: TransformCallback): void {
    const l = e.to()
    this.push(l)

    if (e instanceof Declaration && l instanceof L.DeclarationEntity) {
      const d = l.declaration
      const f = flatTrail(e.trail.real)
      this.#ct.trailFor(d, f)
      this.#ct.idFor(e.sourceId, l.id)

      for (const [i, p] of e.parameters.entries()) {
        const l = d.parameters[i]
        const f = flatTrail(p.trail.real)
        this.#ct.trailFor(l, f)
      }
    }

    cb()
  }
}
