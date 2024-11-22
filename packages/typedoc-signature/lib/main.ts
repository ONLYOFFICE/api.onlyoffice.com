// TODO: remove flat()
import {type Declaration, type Entity, GroupEntity} from "@onlyoffice/library-declaration/next.ts"
import {EntityToken, KeywordToken, ParameterToken, type Signature, TextToken, type Token, TypeToken} from "@onlyoffice/signature"
import {
  isCallSignatureReflection,
  isClassReflection,
  isConstructorReflection,
  isConstructorSignatureReflection,
  isContainerReflection,
  isDeclarationReflection,
  isFunctionReflection,
  isMethodReflection,
  isProjectReflection,
  isSignatureReflection,
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
  if (isMethodReflection(p) && isCallSignatureReflection(t)) {
    methodDeclaration(r, e.declaration)
    return
  }
  if (isFunctionReflection(p) && isCallSignatureReflection(t)) {
    functionsDeclaration(r, e.declaration)
    return
  }
  if (isVariableReflection(t)) {
    variableDeclaration(r, e.declaration)
  }
}

export function variableDeclaration(r: J.Reflection, d: Declaration): void {
  const s: Signature = []

  const e = resolve(r, d.trail.flat(Infinity))

  if (!isVariableReflection(e)) {
    return
  }

  if (e.type) {
    const b = type(e.type)
    s.push(...b)
  }

  d.signature.verbose = s
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

export function methodDeclaration(r: J.Reflection, d: Declaration): void {
  const s: Signature = []
  let t: Token

  t = new KeywordToken()
  t.text = "function"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  const e = resolve(r, d.trail.flat(Infinity))

  t = new EntityToken()
  t.text = e.name
  s.push(t)

  if (isSignatureReflection(e)) {
    const b = functionType(e)
    s.push(...b)
  }

  d.signature.verbose = s
}

export function constructorDeclaration(r: J.Reflection, d: Declaration): void {
  const s: Signature = []

  const e = resolve(r, d.trail.flat(Infinity))

  const t = new KeywordToken()
  t.text = "constructor"
  s.push(t)

  if (isSignatureReflection(e)) {
    const b = functionType(e)
    s.push(...b)
  }

  d.signature.verbose = s
}

export function functionsDeclaration(r: J.Reflection, d: Declaration): void {
  const s: Signature = []
  let t: Token

  t = new KeywordToken()
  t.text = "function"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  const e = resolve(r, d.trail.flat(Infinity))
  if (!isSignatureReflection(e)) {
    return
  }

  t = new EntityToken()
  t.text = e.name
  s.push(t)

  const b = functionType(e)
  s.push(...b)

  if (e.type) {
    t = new TextToken()
    t.text = ": "
    s.push(t)

    const b = type(e.type)
    s.push(...b)
  }

  d.signature.verbose = s
}

export function value(p: J.ParameterReflection): Signature {
  const s: Signature = []
  let t: Token

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
    case "conditional":
      return []
    case "indexedAccess":
      return []
    case "inferred":
      return []
    case "intersection":
      return []
    case "intrinsic":
      return literalType(t.name)
    case "literal":
      return literalType(t.value)
    case "mapped":
      return []
    case "optional":
      return []
    case "predicate":
      return []
    case "query":
      return []
    case "reference":
      return []
    case "reflection":
      return []
    case "rest":
      return []
    case "templateLiteral":
      return []
    case "tuple":
      return tupleType(t)
    case "namedTupleMember":
      return []
    case "typeOperator":
      return []
    case "union":
      return unionType(t)
    case "unknown":
      return []
    default:
      return []
    }
  }
  return []
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

export function literalType(l: unknown): Signature {
  const s: Signature = []

  const t = new TypeToken()
  t.text = String(l)
  s.push(t)

  return s
}

export function functionType(r: J.SignatureReflection): Signature {
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
      }

      t = new TextToken()
      t.text = ", "
      s.push(t)
    }

    s.pop()
  }

  t = new TextToken()
  t.text = ")"
  s.push(t)

  return s
}

export function unionType(u: J.UnionType): Signature {
  const s: Signature = []
  let t: Token

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
