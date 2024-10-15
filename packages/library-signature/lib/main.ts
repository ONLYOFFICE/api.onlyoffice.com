import {type Declaration, type Type} from "@onlyoffice/library-declaration"
import {type Signature} from "@onlyoffice/signature"
import * as description from "./internal/description.ts"
import * as summary from "./internal/summary.ts"

export interface ComputeCallback {
  (this: void, s: Signature): void
}

export function computeDeclaration(d: Declaration, cb: ComputeCallback): void {
  computeType(d, cb)

  let s = description.declaration(d)
  cb(s)

  if (s.length !== 0) {
    d.signature = s
  }

  s = summary.declaration(d)
  cb(s)

  if (s.length !== 0) {
    let o = d.summary
    if (!o) {
      o = {}
      d.summary = o
    }
    o.signature = s
  }
}

export function computeType(u: Type, cb: ComputeCallback): void {
  if (!("id" in u) && u.type === "function") {
    if (u.parameters) {
      for (const p of u.parameters) {
        const s = description.type(p.type)
        cb(s)

        if (s.length !== 0) {
          p.signature = s
        }
      }
    }

    if (u.returns) {
      const s = description.type(u.returns.type)
      cb(s)

      if (s.length !== 0) {
        u.returns.signature = s
      }
    }
  }
}
