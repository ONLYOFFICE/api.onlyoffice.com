import {type Trail} from "@onlyoffice/library-declaration/next.ts"
import {
  isContainerReflection,
  isDeclarationReflection,
  isSignatureReflection,
} from "@onlyoffice/typedoc-util-is-reflection"
import {type JSONOutput as J} from "typedoc"

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
  if (isSignatureReflection(o)) {
    if (o.parameters) {
      return o.parameters
    }
    return []
  }

  if (isDeclarationReflection(o)) {
    if (o.signatures) {
      return o.signatures
    }
    return []
  }

  if (isContainerReflection(o)) {
    if (o.children) {
      return o.children
    }
    return []
  }

  return []
}
