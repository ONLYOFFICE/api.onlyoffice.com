/* eslint-disable unicorn/no-array-push-push */
import {type Declaration, type DeclarationEntity} from "@onlyoffice/library-declaration/next.ts"
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
  isConstructorReflection,
  isEnumMemberReflection,
  isEnumReflection,
  isFunctionReflection,
  isInterfaceReflection,
  isMethodReflection,
  isParameterReflection,
  isPropertyReflection,
  isSignatureReflection,
  isTypeAliasReflection,
  isVariableReflection,
} from "@onlyoffice/typedoc-util-is-reflection"
import {type JSONOutput as J} from "typedoc"
import {
  isArrayType,
  isIntrinsicType,
  isLiteralType,
  isReferenceType,
  isReflectionType,
  isTupleType,
  isUnionType,
} from "../../../typedoc-util-is-type/lib/main.ts"
import {type ComputeRepository} from "../main.ts"

let idOf: (id: number) => number | undefined

export function concise(r: ComputeRepository, e: DeclarationEntity): void {
  idOf = r.idOf.bind(r)
  let f = r.trailOf(e.declaration)
  if (!f) {
    return
  }
  const t = r.reflectionOf(f)
  f = f.slice(0, -1)
  const p = r.reflectionOf(f)

  if (e.declaration.parameters.length !== 0) {
    fragment(r, e.declaration)
  }
  if (isClassReflection(t)) {
    const s = classDeclaration(t)
    e.declaration.signature.concise.push(...s)
    return
  }
  if (isConstructorReflection(p) && isSignatureReflection(t)) {
    const s = constructorDeclaration(t)
    e.declaration.signature.concise.push(...s)
    return
  }
  if (isEnumMemberReflection(t)) {
    const s = enumMemberReflection(t)
    e.declaration.signature.concise.push(...s)
    return
  }
  if (isEnumReflection(t)) {
    const s = enumReflection(t)
    e.declaration.signature.concise.push(...s)
    return
  }
  if (isFunctionReflection(p) && isCallSignatureReflection(t)) {
    const s = functionsDeclaration(t)
    e.declaration.signature.concise.push(...s)
    const r = returns(t.type)
    e.declaration.returns.signature.concise.push(...r)
    return
  }
  if (isInterfaceReflection(t)) {
    const s = interfaceReflection(t)
    e.declaration.signature.concise.push(...s)
    return
  }
  if (isMethodReflection(p) && isCallSignatureReflection(t)) {
    const s = methodDeclaration(t)
    e.declaration.signature.concise.push(...s)
    const r = returns(t.type)
    e.declaration.returns.signature.concise.push(...r)
    return
  }
  if (isPropertyReflection(t)) {
    const s = propertyReflection(t)
    e.declaration.signature.concise.push(...s)
    return
  }
  if (isTypeAliasReflection(t)) {
    const s = typeAliasReflection(t)
    e.declaration.signature.concise.push(...s)
    return
  }
  if (isVariableReflection(t)) {
    const s = variableDeclaration(t)
    e.declaration.signature.concise.push(...s)
  }
}

export function classDeclaration(r: J.Reflection): Signature {
  const s: Signature = []

  if (!isClassReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = "  "
  s.push(t)

  s.push(reference(r.id, r.name))

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

export function enumMemberReflection(r: J.Reflection): Signature {
  const s: Signature = []

  if (!isEnumMemberReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = ": "
  s.push(t)

  if (r.type) {
    const b = type(r.type)
    s.push(...b)
  } else {
    s.push(reference(r.id, "0"))
  }

  return s
}

export function enumReflection(r: J.Reflection): Signature {
  const s: Signature = []

  if (!isEnumReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = "  "
  s.push(t)

  s.push(reference(r.id, r.name))

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

export function interfaceReflection(r: J.Reflection): Signature {
  const s: Signature = []

  if (!isInterfaceReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = "  "
  s.push(t)

  s.push(reference(r.id, r.name))

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

export function propertyReflection(r: J.Reflection): Signature {
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
    const b = type(r.type)
    s.push(...b)
  }

  return s
}

export function typeAliasReflection(r: J.Reflection): Signature {
  const s: Signature = []

  if (!isTypeAliasReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = "  "
  s.push(t)

  s.push(reference(r.id, r.name))

  return s
}

export function variableDeclaration(r: J.Reflection): Signature {
  const s: Signature = []

  if (!isVariableReflection(r)) {
    return s
  }

  const t = new TextToken()
  t.text = "  "
  s.push(t)

  if (r.type) {
    const b = type(r.type)
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

export function type(t: J.SomeType): Signature {
  if (isArrayType(t)) {
    return arrayType(t)
  }
  if (isIntrinsicType(t)) {
    return intrinsicType(t)
  }
  if (isLiteralType(t)) {
    return literalType(t)
  }
  if (isReferenceType(t)) {
    return referenceType(t)
  }
  if (isReflectionType(t)) {
    return reflectionType(t)
  }
  if (isTupleType(t)) {
    return tupleType(t)
  }
  if (isUnionType(t)) {
    return unionType(t)
  }
  return []
}

export function arrayType(a: J.ArrayType): Signature {
  const s: Signature = []
  let t: Token

  if (a.elementType.type === "union") {
    t = new TextToken()
    t.text = "("
    s.push(t)
  }

  const b = type(a.elementType)
  s.push(...b)

  if (a.elementType.type === "union") {
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

export function referenceType(r: J.ReferenceType): Signature {
  const s: Signature = []
  let t: Token

  if (typeof r.target === "number") {
    s.push(reference(r.target, r.name))
  } else {
    t = new TypeToken()
    t.text = r.name
    s.push(t)
  }

  if (r.name === "Promise") {
    t = new TextToken()
    t.text = "<"
    s.push(t)

    if (r.typeArguments) {
      for (const a of r.typeArguments) {
        const b = type(a)
        s.push(...b)

        t = new TextToken()
        t.text = " | "
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

  return s
}

export function reflectionType(r: J.ReflectionType): Signature {
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

        const b = type(c.type)
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

        const b = type(c.type)
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

export function tupleType(tt: J.TupleType): Signature {
  const s: Signature = []
  let t: Token

  if (!tt.elements) {
    return s
  }

  t = new TextToken()
  t.text = "["
  s.push(t)

  for (const e of tt.elements) {
    const b = type(e)
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

export function unionType(u: J.UnionType): Signature {
  const s: Signature = []
  let t: Token

  if (!u.types) {
    return s
  }

  for (const ts of u.types) {
    if (ts.type === "reflection") {
      t = new TextToken()
      t.text = "("
      s.push(t)
    }

    const b = type(ts)
    s.push(...b)

    if (ts.type === "reflection") {
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

function fragment(r: ComputeRepository, d: Declaration): void {
  for (const f of d.parameters) {
    const tt = r.trailOf(f)
    if (tt) {
      const e = r.reflectionOf(tt)
      if (!isParameterReflection(e)) {
        return
      }
      if (e.type) {
        const b = type(e.type)
        f.signature.concise.push(...b)
      }
    }
  }
}

function returns(r: J.SomeType | undefined): Signature {
  const s: Signature = []

  if (r && r.type) {
    const b = type(r)
    s.push(...b)
  } else {
    const t = new TypeToken()
    t.text = "unknown"
    s.push(t)
  }

  return s
}

function reference(t: number, n: string): Token | Reference {
  let r: Token | Reference

  const id = idOf(t)

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
