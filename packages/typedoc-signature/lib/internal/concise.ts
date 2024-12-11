import {type Declaration, type DeclarationEntity} from "@onlyoffice/library-declaration/next.ts"
import {
  ParameterToken,
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

export function concise(r: ComputeRepository, e: DeclarationEntity): void {
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
    classDeclaration(t, e.declaration)
    return
  }
  if (isConstructorReflection(p) && isSignatureReflection(t)) {
    constructorDeclaration(t, e.declaration)
    return
  }
  if (isEnumMemberReflection(t)) {
    enumMemberReflection(t, e.declaration)
    return
  }
  if (isEnumReflection(t)) {
    enumReflection(t, e.declaration)
    return
  }
  if (isFunctionReflection(p) && isCallSignatureReflection(t)) {
    functionsDeclaration(t, e.declaration)
    return
  }
  if (isInterfaceReflection(t)) {
    interfaceReflection(t, e.declaration)
    return
  }
  if (isMethodReflection(p) && isCallSignatureReflection(t)) {
    methodDeclaration(t, e.declaration)
    return
  }
  if (isPropertyReflection(t)) {
    propertyReflection(t, e.declaration)
    return
  }
  if (isTypeAliasReflection(t)) {
    typeAliasReflection(t, e.declaration)
    return
  }
  if (isVariableReflection(t)) {
    variableDeclaration(t, e.declaration)
  }
}

export function classDeclaration(c: J.Reflection, d: Declaration): void {
  if (!isClassReflection(c)) {
    return
  }

  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = "  "
  s.push(t)

  t = new TypeToken()
  t.text = c.name
  s.push(t)

  d.signature.concise.push(...s)
}

export function constructorDeclaration(c: J.Reflection, d: Declaration): void {
  if (!isSignatureReflection(c)) {
    return
  }

  const s: Signature = []

  const b = parameters(c)
  s.push(...b)

  d.signature.concise.push(...s)
}

export function enumMemberReflection(e: J.Reflection, d: Declaration): void {
  if (!isEnumMemberReflection(e)) {
    return
  }

  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (e.type) {
    const b = type(e.type)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "0"
    s.push(t)
  }

  d.signature.concise.push(...s)
}

export function enumReflection(e: J.Reflection, d: Declaration): void {
  if (!isEnumReflection(e)) {
    return
  }

  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = "  "
  s.push(t)

  t = new TypeToken()
  t.text = e.name
  s.push(t)

  d.signature.concise.push(...s)
}

export function functionsDeclaration(f: J.Reflection, d: Declaration): void {
  if (!isCallSignatureReflection(f)) {
    return
  }

  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = "  "
  s.push(t)

  const b = parameters(f)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (f.type) {
    const b = type(f.type)
    s.push(...b)
    d.returns.signature.concise.push(...b)
  } else {
    t = new TypeToken()
    t.text = "unknown"
    s.push(t)
    d.returns.signature.concise.push(t)
  }

  d.signature.concise.push(...s)
}

export function interfaceReflection(i: J.Reflection, d: Declaration): void {
  if (!isInterfaceReflection(i)) {
    return
  }

  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = "  "
  s.push(t)

  t = new TypeToken()
  t.text = i.name
  s.push(t)

  d.signature.concise.push(...s)
}

export function methodDeclaration(m: J.Reflection, d: Declaration): void {
  if (!isSignatureReflection(m)) {
    return
  }

  const s: Signature = []
  let t: Token

  const b = parameters(m)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (m.type) {
    const b = type(m.type)
    s.push(...b)
    d.returns.signature.concise.push(...b)
  } else {
    t = new TypeToken()
    t.text = "unknown"
    s.push(t)
    d.returns.signature.concise.push(t)
  }

  d.signature.concise.push(...s)
}

export function propertyReflection(p: J.Reflection, d: Declaration): void {
  if (!isPropertyReflection(p)) {
    return
  }

  const s: Signature = []

  const t = new TextToken()
  t.text = ": "
  if (p.flags.isOptional) {
    t.text = `?${t.text}`
  }
  s.push(t)

  if (p.type) {
    const b = type(p.type)
    s.push(...b)
  }

  d.signature.concise.push(...s)
}

export function typeAliasReflection(a: J.Reflection, d: Declaration): void {
  if (!isTypeAliasReflection(a)) {
    return
  }

  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = "  "
  s.push(t)

  t = new TypeToken()
  t.text = a.name
  s.push(t)

  d.signature.concise.push(...s)
}

export function variableDeclaration(v: J.Reflection, d: Declaration): void {
  if (!isVariableReflection(v)) {
    return
  }

  const s: Signature = []

  const t = new TextToken()
  t.text = "  "
  s.push(t)

  if (v.type) {
    const b = type(v.type)
    s.push(...b)
  }

  d.signature.concise.push(...s)
}

export function fragment(r: ComputeRepository, d: Declaration): void {
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
  // TODO
  const s: Signature = []
  let t: Token

  t = new TypeToken()
  t.text = r.name
  s.push(t)

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
