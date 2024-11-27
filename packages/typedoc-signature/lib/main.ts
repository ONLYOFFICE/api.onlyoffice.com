// TODO: remove flat()
import {
  type Declaration,
  type Entity,
  GroupEntity,
} from "@onlyoffice/library-declaration/next.ts"
import {
  EntityToken,
  KeywordToken,
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
  isConstructorSignatureReflection,
  isContainerReflection,
  isDeclarationReflection,
  isEnumMemberReflection,
  isEnumReflection,
  isFunctionReflection,
  isInterfaceReflection,
  isMethodReflection,
  isParameterReflection,
  isProjectReflection,
  isPropertyReflection,
  isSignatureReflection,
  isTypeAliasReflection,
  isVariableReflection,
} from "@onlyoffice/typedoc-util-is-reflection"
import {type JSONOutput as J} from "typedoc"

export function compute(r: J.Reflection, e: Entity): void {
  if (!isProjectReflection(r)) {
    throw new Error("Expected a project reflection")
  }

  if (e instanceof GroupEntity) {
    return
  }

  const f = e.declaration.trail.flat(Infinity)
  const t = resolve(r, f)
  f.pop()
  const p = resolve(r, f)

  if (isClassReflection(t)) {
    classDeclaration(r, e.declaration)
    return
  }
  if (isConstructorReflection(p) && isConstructorSignatureReflection(t)) {
    constructorDeclaration(r, e.declaration)
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

export function classDeclaration(r: J.Reflection, d: Declaration): void {
  const s: Signature = []
  let t: Token

  t = new KeywordToken()
  t.text = "class"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  const e = resolve(r, d.trail.flat(Infinity))

  t = new EntityToken()
  t.text = e.name
  s.push(t)

  d.signature.verbose = s
}

export function constructorDeclaration(r: J.Reflection, d: Declaration): void {
  const s: Signature = []

  const e = resolve(r, d.trail.flat(Infinity))

  const t = new KeywordToken()
  t.text = "constructor"
  s.push(t)

  if (isSignatureReflection(e)) {
    const b = parameters(e)
    s.push(...b)
  }

  d.signature.verbose = s
}

export function enumMemberReflection(e: J.Reflection, d: Declaration): void {
  if (!isEnumMemberReflection(e)) {
    return
  }

  const s: Signature = []
  let t: Token

  t = new EntityToken()
  t.text = e.name
  s.push(t)

  t = new TextToken()
  t.text = " = "
  s.push(t)

  if (e.type) {
    const b = type(e.type)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "0"
    s.push(t)
  }

  d.signature.verbose = s
}

export function enumReflection(e: J.Reflection, d: Declaration): void {
  if (!isEnumReflection(e)) {
    return
  }

  const s: Signature = []
  let t: Token

  t = new KeywordToken()
  t.text = "enum"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new EntityToken()
  t.text = e.name
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new TextToken()
  t.text = "{"
  s.push(t)

  if (e.children) {
    for (const c of e.children) {
      if (c.type) {
        const b = value(c)
        s.push(...b)

        t = new TextToken()
        t.text = ", "
        s.push(t)
      }
    }
    s.pop()
  }

  t = new TextToken()
  t.text = "}"
  s.push(t)

  d.signature.verbose = s
}

export function functionsDeclaration(f: J.Reflection, d: Declaration): void {
  const s: Signature = []
  let t: Token

  if (!isCallSignatureReflection(f)) {
    return
  }

  t = new KeywordToken()
  t.text = "function"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new EntityToken()
  t.text = f.name
  s.push(t)

  const b = parameters(f)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (f.type) {
    const b = type(f.type)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "void"
    s.push(t)
  }

  d.signature.verbose = s
}

export function interfaceReflection(i: J.Reflection, d: Declaration): void {
  if (!isInterfaceReflection(i)) {
    return
  }

  const s: Signature = []
  let t: Token

  t = new KeywordToken()
  t.text = "interface"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new EntityToken()
  t.text = i.name
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new TextToken()
  t.text = "{"
  s.push(t)

  if (i.children) {
    for (const c of i.children) {
      if (c.type) {
        const b = value(c)
        s.push(...b)

        t = new TextToken()
        t.text = " "
        s.push(t)
      }
      if (c.signatures) {
        for (const v of c.signatures) {
          t = new ParameterToken()
          t.text = v.name
          s.push(t)

          const b = parameters(v)
          s.push(...b)

          if (v.type) {
            t = new TextToken()
            t.text = ": "
            s.push(t)

            const b = type(v.type)
            s.push(...b)
          }

          t = new TextToken()
          t.text = " "
          s.push(t)
        }
      }
    }
    s.pop()
  }

  t = new TextToken()
  t.text = "}"
  s.push(t)

  d.signature.verbose = s
}

export function methodDeclaration(m: J.Reflection, d: Declaration): void {
  const s: Signature = []
  let t: Token

  if (!isSignatureReflection(m)) {
    return
  }

  t = new KeywordToken()
  t.text = "function"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new EntityToken()
  t.text = m.name
  s.push(t)

  const b = parameters(m)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (m.type) {
    const b = type(m.type)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "void"
    s.push(t)
  }

  d.signature.verbose = s
}

export function propertyReflection(p: J.Reflection, d: Declaration): void {
  if (!isPropertyReflection(p)) {
    return
  }

  const s: Signature = []
  let t: Token

  t = new EntityToken()
  t.text = p.name
  s.push(t)

  t = new TextToken()
  t.text = ": "
  if (p.flags.isOptional) {
    t.text = `?${t.text}`
  }
  s.push(t)

  if (p.type) {
    const b = type(p.type)
    s.push(...b)
  }

  d.signature.verbose = s
}

export function typeAliasReflection(a: J.Reflection, d: Declaration): void {
  if (!isTypeAliasReflection(a)) {
    return
  }

  const s: Signature = []
  let t: Token

  t = new KeywordToken()
  t.text = "type"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new EntityToken()
  t.text = a.name
  s.push(t)

  t = new TextToken()
  t.text = " = "
  s.push(t)

  if (a.type) {
    const b = type(a.type)
    s.push(...b)
  }

  d.signature.verbose = s
}

export function variableDeclaration(v: J.Reflection, d: Declaration): void {
  if (!isVariableReflection(v)) {
    return
  }

  const s: Signature = []
  let t: Token

  t = new KeywordToken()
  t.text = "type"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new EntityToken()
  t.text = v.name
  s.push(t)

  t = new TextToken()
  t.text = " = "
  s.push(t)

  if (v.type) {
    const b = type(v.type)
    s.push(...b)
  }

  d.signature.verbose = s
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
  let t: Token

  if (
    !isDeclarationReflection(p) &&
    !isParameterReflection(p) &&
    !isSignatureReflection(p)
  ) {
    return s
  }

  t = new ParameterToken()
  t.text = p.name
  s.push(t)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (p.type) {
    const b = type(p.type)
    s.push(...b)
  }

  if (isSignatureReflection(p)) {
    return s
  }

  if (p.defaultValue) {
    t = new TextToken()
    t.text = " = "
    s.push(t)

    t = new TextToken()
    t.text = String(p.defaultValue)
    s.push(t)
  }

  return s
}

export function type(t: J.SomeType): Signature {
  if (t) {
    switch (t.type) {
    case "array":
      return arrayType(t)
    case "intrinsic":
      return intrinsicType(t)
    case "literal":
      return literalType(t)
    case "reference":
      return referenceType(t)
    case "reflection":
      return reflectionType(t)
    case "tuple":
      return tupleType(t)
    case "union":
      return unionType(t)
    default:
      return []
    }
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

  const t = new TypeToken()
  t.text = r.name
  s.push(t)

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
  }

  if (r.declaration.children) {
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
        t.text = " "
        s.push(t)
      }
    }
    s.pop()

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
    const b = type(ts)
    s.push(...b)

    t = new TextToken()
    t.text = " | "
    s.push(t)
  }
  s.pop()

  return s
}

export function resolve(o: J.Reflection, t: number[]): J.Reflection {
  for (const s of t) {
    const r = target(o)
    o = r[s]
  }
  return o
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
