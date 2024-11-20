import {type Trail} from "@onlyoffice/library-declaration/next.ts"
import {
  isContainerReflection,
  isDeclarationReflection,
  isSignatureReflection,
} from "@onlyoffice/typedoc-util-is-reflection"
import {type JSONOutput as J} from "typedoc"

export function depth(t: Trail): number {
  // if (t.length === 0) {
  //   return -1
  // }

  let d = 0

  for (const s of t) {
    if (Array.isArray(s)) {
      d = Math.max(d, depth(s) + 1)
    }
  }

  return d
}

export function pair(t: Trail): [number, number] {
  return p(t, 0)

  function p(t: Trail, c: number): [number, number] {
    let m = c
    let i = -1

    if (t.length === 0) {
      return [m, i]
    }

    for (const s of t) {
      if (Array.isArray(s)) {
        const n = c + 1
        const [d, j] = p(s, n)

        if (d > m) {
          m = d
          i = j
        }

        continue
      }

      if (c >= m) {
        m = c
        i = s
      }
    }

    return [m, i]
  }
}

export function resolve(o: J.Reflection, t: Trail): J.Reflection | undefined {
  let c: J.Reflection | undefined = o

  for (const s of t) {
    if (!c) {
      break
    }

    if (Array.isArray(s)) {
      c = resolve(c, s)
      continue
    }

    const t = target(c)

    if (t.length !== 0) {
      c = t[s]
      continue
    }

    break
  }

  return c
}

function target(o: J.Reflection): J.Reflection[] {
  if (isSignatureReflection(o) && o.parameters) {
    return o.parameters
  }

  if (isDeclarationReflection(o) && o.signatures) {
    return o.signatures
  }

  if (isContainerReflection(o) && o.children) {
    return o.children
  }

  return []
}
