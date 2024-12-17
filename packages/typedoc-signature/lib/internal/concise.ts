/* eslint-disable unicorn/no-array-push-push */
import {
  type Declaration,
  type Fragment,
} from "@onlyoffice/library-declaration/next.ts"
import {
  ParameterToken,
  Reference,
  type Signature,
  StringToken,
  TextToken,
  type Token,
  TypeToken,
} from "@onlyoffice/signature"
import {
  isCallSignatureReflection,
  isClassReflection,
  isEnumMemberReflection,
  isEnumReflection,
  isInterfaceReflection,
  isParameterReflection,
  isPropertyReflection,
  isSignatureReflection,
  isTypeAliasReflection,
  isVariableReflection,
} from "@onlyoffice/typedoc-util-is-reflection"
import {
  isArrayType,
  isIntrinsicType,
  isLiteralType,
  isReferenceType,
  isReflectionType,
  isTemplateLiteralType,
  isTupleType,
  isUnionType,
} from "@onlyoffice/typedoc-util-is-type"
import {type JSONOutput as J} from "typedoc"
import {type Context} from "./context.ts"
import {type Formatter} from "./formatter.ts"

export interface ContextFormat {
  context: Context
  formatter: Formatter
  trailOf(t: Declaration | Fragment): FlatTrail | undefined
  reflectionOf(t: FlatTrail): J.Reflection | undefined
  idOf(id: number): number | undefined
}

export type FlatTrail = number[]

export function classDeclaration(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isClassReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = "  "
  s.push(t)

  s.push(reference(r.id, r.name, cf))

  return s
}

export function constructorDeclaration(r: J.Reflection): Signature {
  const s: Signature = []

  if (!isSignatureReflection(r)) {
    return s
  }

  const b = parameters(r)
  s.push(...b)

  return s
}

export function enumMemberReflection(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isEnumMemberReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = ": "
  s.push(t)

  if (r.type) {
    const b = type(r.type, cf)
    s.push(...b)
  } else {
    s.push(reference(r.id, "0", cf))
  }

  return s
}

export function enumReflection(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isEnumReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = "  "
  s.push(t)

  s.push(reference(r.id, r.name, cf))

  return s
}

export function functionsDeclaration(f: J.Reflection): Signature {
  const s: Signature = []

  if (!isCallSignatureReflection(f)) {
    return s
  }

  let t: Token

  t = new TextToken()
  t.text = "  "
  s.push(t)

  const b = parameters(f)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  return s
}

export function interfaceReflection(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isInterfaceReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = "  "
  s.push(t)

  s.push(reference(r.id, r.name, cf))

  return s
}

export function methodDeclaration(m: J.Reflection): Signature {
  const s: Signature = []

  if (!isSignatureReflection(m)) {
    return s
  }

  const b = parameters(m)
  s.push(...b)

  const t = new TextToken()
  t.text = ": "
  s.push(t)

  return s
}

export function propertyReflection(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isPropertyReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = ": "
  if (r.flags.isOptional) {
    t.text = `?${t.text}`
  }
  s.push(t)

  if (r.type) {
    const b = type(r.type, cf)
    s.push(...b)
  }

  return s
}

export function typeAliasReflection(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isTypeAliasReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = "  "
  s.push(t)

  s.push(reference(r.id, r.name, cf))

  return s
}

export function variableDeclaration(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isVariableReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = "  "
  s.push(t)

  if (r.type) {
    const b = type(r.type, cf)
    s.push(...b)
  }

  return s
}

export function parameters(r: J.SignatureReflection): Signature {
  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = "("
  s.push(t)

  if (r.parameters && r.parameters.length !== 0) {
    for (const f of r.parameters) {
      if (f.type) {
        const b = value(f)
        s.push(...b)

        t = new TextToken()
        t.text = ", "
        s.push(t)
      }
    }

    s.pop()
  }

  t = new TextToken()
  t.text = ")"
  s.push(t)

  return s
}

export function value(p: J.Reflection): Signature {
  const s: Signature = []

  const t = new TextToken()
  t.text = p.name
  s.push(t)

  return s
}

export function type(t: J.SomeType, cf: ContextFormat): Signature {
  if (isArrayType(t)) {
    return arrayType(t, cf)
  }
  if (isIntrinsicType(t)) {
    return intrinsicType(t)
  }
  if (isLiteralType(t)) {
    return literalType(t)
  }
  if (isReferenceType(t)) {
    return referenceType(t, cf)
  }
  if (isReflectionType(t)) {
    return reflectionType(t, cf)
  }
  if (isTemplateLiteralType(t)) {
    return templateLiteralType(t, cf)
  }
  if (isTupleType(t)) {
    return tupleType(t, cf)
  }
  if (isUnionType(t)) {
    return unionType(t, cf)
  }
  return []
}

export function arrayType(a: J.ArrayType, cf: ContextFormat): Signature {
  const s: Signature = []
  let t: Token

  if (isUnionType(a.elementType.type)) {
    t = new TextToken()
    t.text = "("
    s.push(t)
  }

  const b = type(a.elementType, cf)
  s.push(...b)

  if (isUnionType(a.elementType.type)) {
    const t = new TextToken()
    t.text = ")"
    s.push(t)
  }

  t = new TextToken()
  t.text = "[]"
  s.push(t)

  return s
}

export function intrinsicType(i: J.IntrinsicType): Signature {
  const s: Signature = []

  const t = new TypeToken()
  t.text = i.name
  s.push(t)

  return s
}

export function literalType(l: J.LiteralType): Signature {
  const s: Signature = []

  if (typeof l.value === "string") {
    const t = new StringToken()
    t.text = `"${l.value}"`
    s.push(t)
  } else {
    const t = new TypeToken()
    t.text = String(l.value)
    s.push(t)
  }

  return s
}

export function referenceType(r: J.ReferenceType, cf: ContextFormat): Signature {
  const s: Signature = []
  let t: Token

  if (typeof r.target === "number") {
    s.push(reference(r.target, r.name, cf))
  }

  if (r.typeArguments) {
    t = new TextToken()
    t.text = "<"
    s.push(t)

    if (r.typeArguments) {
      for (const a of r.typeArguments) {
        const b = type(a, cf)
        cf.formatter.preprocess(b)
        s.push(...b)

        t = new TextToken()
        t.text = ", "
        s.push(t)
      }
      s.pop()
    } else {
      t = new TypeToken()
      t.text = "unknown"
      s.push(t)
    }

    t = new TextToken()
    t.text = ">"
    s.push(t)
  }

  if (s.length === 0) {
    t = new TextToken()
    t.text = "<"
    s.push(t)

    t = new TypeToken()
    t.text = r.name
    s.push(t)

    t = new TextToken()
    t.text = ">"
    s.push(t)
  }

  return s
}

export function reflectionType(r: J.ReflectionType, cf: ContextFormat): Signature {
  const s: Signature = []
  let t: Token

  if (r.declaration.signatures) {
    for (const c of r.declaration.signatures) {
      const b = parameters(c)
      s.push(...b)

      if (c.type) {
        t = new TextToken()
        t.text = " => "
        s.push(t)

        const b = type(c.type, cf)
        s.push(...b)
      }
    }
  } else if (r.declaration.children) {
    t = new TextToken()
    t.text = "{"
    s.push(t)

    for (const c of r.declaration.children) {
      if (c.type) {
        t = new ParameterToken()
        t.text = c.name
        s.push(t)

        t = new TextToken()
        t.text = ": "
        if (c.flags.isOptional) {
          t.text = `?${t.text}`
        }
        s.push(t)

        const b = type(c.type, cf)
        s.push(...b)
        t = new TextToken()
        t.text = "; "
        s.push(t)
      }
    }
    s.pop()

    t = new TextToken()
    t.text = "}"
    s.push(t)
  } else {
    t = new TextToken()
    t.text = "{"
    s.push(t)

    t = new TextToken()
    t.text = "}"
    s.push(t)
  }

  return s
}

export function templateLiteralType(tt: J.TemplateLiteralType, cf: ContextFormat): Signature {
  const s: Signature = []
  let t: Token

  t = new StringToken()
  t.text = "`"
  s.push(t)

  if (tt.head) {
    t = new StringToken()
    t.text = tt.head
    s.push(t)
  }

  for (const tl of tt.tail) {
    for (const e of tl) {
      if (typeof e !== "string") {
        t = new TextToken()
        t.text = "${"
        s.push(t)

        const b = type(e, cf)
        cf.formatter.preprocess(b)
        s.push(...b)

        t = new TextToken()
        t.text = "}"
        s.push(t)
      } else {
        t = new StringToken()
        t.text = String(e)
        s.push(t)
      }
    }
  }
  t = new StringToken()
  t.text = "`"
  s.push(t)

  return s
}

export function tupleType(tt: J.TupleType, cf: ContextFormat): Signature {
  const s: Signature = []
  let t: Token

  if (!tt.elements) {
    return s
  }

  t = new TextToken()
  t.text = "["
  s.push(t)

  for (const e of tt.elements) {
    const b = type(e, cf)
    s.push(...b)

    t = new TextToken()
    t.text = ", "
    s.push(t)
  }
  s.pop()

  t = new TextToken()
  t.text = "]"
  s.push(t)

  return s
}

export function unionType(u: J.UnionType, cf: ContextFormat): Signature {
  const s: Signature = []
  let t: Token

  if (!u.types) {
    return s
  }

  for (const ts of u.types) {
    if (isReferenceType(ts.type)) {
      t = new TextToken()
      t.text = "("
      s.push(t)
    }

    const b = type(ts, cf)
    s.push(...b)

    if (isReferenceType(ts.type)) {
      t = new TextToken()
      t.text = ")"
      s.push(t)
    }

    t = new TextToken()
    t.text = " | "
    s.push(t)
  }
  s.pop()

  return s
}

export function fragment(f: Fragment[], cf: ContextFormat): void {
  for (const e of f) {
    const ft = cf.trailOf(e)
    if (ft) {
      const t = cf.reflectionOf(ft)
      if (!isParameterReflection(t)) {
        return
      }
      if (t.type) {
        const b = type(t.type, cf)
        e.signature.concise.push(...b)
      }
    }
  }
}

export function returns(r: (J.SomeType | undefined), cf: ContextFormat): Signature {
  const s: Signature = []

  if (r && r.type) {
    const b = type(r, cf)
    s.push(...b)
  } else {
    const t = new TypeToken()
    t.text = "unknown"
    s.push(t)
  }

  return s
}

function reference(t: number, n: string, cf: ContextFormat): Token | Reference {
  let r: Token | Reference
  const id = cf.idOf(t)

  if (id) {
    r = new Reference()
    r.id = String(id)
    r.token = new TypeToken()
    r.token.text = n
  } else {
    r = new TypeToken()
    r.text = n
  }

  return r
}
