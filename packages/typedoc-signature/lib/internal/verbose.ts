// TODO: remove flat()
import {type Declaration, type DeclarationEntity} from "@onlyoffice/library-declaration/next.ts"
import {
  EntityToken,
  KeywordToken,
  NoopToken,
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
  isContainerReflection,
  isDeclarationReflection,
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
import {type ComputeRepository} from "../main.ts"

let indent = 0
const NEWLINE = "\n"
const LIMIT = 100

export function verbose(r: ComputeRepository, e: DeclarationEntity): void {
  let f = r.trailOf(e.declaration)
  if (!f) {
    return
  }
  const t = r.reflectionOf(f)
  f = f.slice(0, -1)
  const p = r.reflectionOf(f)

  if (isClassReflection(t)) {
    classDeclaration(t, e.declaration)
    return
  }
  if (isConstructorReflection(p) && isSignatureReflection(t)) {
    const s = constructorDeclaration(t)
    e.declaration.signature.verbose = s
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
    const s = methodDeclaration(t, p)
    e.declaration.signature.verbose = s
    return
  }
  if (isPropertyReflection(t)) {
    const s = propertyReflection(t)
    e.declaration.signature.verbose = s
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

  if (c.flags.isAbstract) {
    t = new KeywordToken()
    t.text = "abstract"
    s.push(t)

    t = new TextToken()
    t.text = " "
    s.push(t)
  }

  t = new KeywordToken()
  t.text = "class"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new EntityToken()
  t.text = c.name
  s.push(t)

  if (c.extendedTypes) {
    for (const e of c.extendedTypes) {
      t = new TextToken()
      t.text = " "
      s.push(t)

      t = new KeywordToken()
      t.text = "extends"
      s.push(t)

      t = new TextToken()
      t.text = " "
      s.push(t)

      const b = type(e)
      s.push(...b)
    }
  }

  const childrenSignatures: Signature = []
  if (c.children) {
    indent += 2

    t = new TextToken()
    t.text = " {"
    childrenSignatures.push(t, ...newline())

    for (const children of c.children) {
      if (isConstructorReflection(children) && children.signatures) {
        for (const signatures of children.signatures) {
          if (isSignatureReflection(signatures)) {
            const ts = constructorDeclaration(signatures)
            childrenSignatures.push(...ts, ...newline())
          }
        }
      }

      if (isPropertyReflection(children)) {
        const ts = propertyReflection(children)
        childrenSignatures.push(...ts, ...newline())
      }

      if (isMethodReflection(children) && children.signatures) {
        for (const signatures of children.signatures) {
          if (isSignatureReflection(signatures)) {
            const ts = methodDeclaration(signatures, children)
            childrenSignatures.push(...ts, ...newline())
          }
        }
      }
    }

    indent -= 2
    childrenSignatures.pop()

    t = new TextToken()
    t.text = "}"
    childrenSignatures.push(t)

    s.push(...childrenSignatures)
  }

  d.signature.verbose = s
}

export function constructorDeclaration(r: J.Reflection): Signature {
  const s: Signature = []

  if (!isSignatureReflection(r)) {
    return s
  }

  const t = new KeywordToken()
  t.text = "constructor"
  s.push(t)

  const b = parameters(r)
  s.push(...b)

  format(b)

  return s
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
    indent += 2
    for (const c of e.children) {
      if (c.type) {
        s.push(...newline())

        const b = value(c)
        s.push(...b)

        t = new TextToken()
        t.text = ", "
        s.push(t)
      }
    }
    indent -= 2
  }

  s.push(...newline())

  t = new TextToken()
  t.text = "}"
  s.push(t)

  d.signature.verbose = s
}

export function functionsDeclaration(f: J.Reflection, d: Declaration): void {
  if (!isCallSignatureReflection(f)) {
    return
  }

  const s: Signature = []
  let t: Token

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
  format(b)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (f.type) {
    const b = type(f.type)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "unknown"
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
    indent += 2
    for (const c of i.children) {
      s.push(...newline())

      if (c.type) {
        const b = value(c)
        s.push(...b)

        t = new TextToken()
        t.text = " "
        s.push(t)
      }
      if (c.signatures) {
        for (const v of c.signatures) {
          const ts: Signature = []
          t = new ParameterToken()
          t.text = v.name
          ts.push(t)

          const b = parameters(v)
          ts.push(...b)

          if (v.type) {
            t = new TextToken()
            t.text = ": "
            ts.push(t)

            const b = type(v.type)
            ts.push(...b)
          }

          format(ts)
          s.push(...ts)

          t = new TextToken()
          t.text = " "
          s.push(t)
        }
      }
    }
    indent -= 2
    s.pop()
  }

  s.push(...newline())

  t = new TextToken()
  t.text = "}"
  s.push(t)

  d.signature.verbose = s
}

export function methodDeclaration(r: J.Reflection, p: J.Reflection): Signature {
  const s: Signature = []

  if (!isSignatureReflection(r)) {
    return s
  }

  let t: Token

  const f = methodFlags(p.flags)
  if (f) {
    s.push(...f)

    t = new TextToken()
    t.text = " "
    s.push(t)
  }

  t = new EntityToken()
  t.text = r.name
  s.push(t)

  const b = parameters(r)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (r.type) {
    const b = type(r.type)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "unknown"
    s.push(t)
  }

  format(s)
  return s
}

export function propertyReflection(r: J.Reflection): Signature {
  const s: Signature = []

  if (!isPropertyReflection(r)) {
    return s
  }

  let t: Token

  const f = propertyFlags(r.flags)
  if (f) {
    s.push(...f)

    t = new TextToken()
    t.text = " "
    s.push(t)
  }

  t = new EntityToken()
  t.text = r.name
  s.push(t)

  t = new TextToken()
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
    indent += 2
    for (const f of r.parameters) {
      if (f.type) {
        t = new TextToken()
        t.text = "_NEWLINE_"
        s.push(t)

        t = new TextToken()
        t.text = `_INDENT-${indent}_`
        s.push(t)

        const b = value(f)
        s.push(...b)

        t = new TextToken()
        t.text = ", "
        s.push(t)
      }
    }
    indent -= 2
    s.pop()

    t = new TextToken()
    t.text = "_NEWLINE_"
    s.push(t)

    t = new TextToken()
    t.text = `_INDENT-${indent}_`
    s.push(t)
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

export function methodFlags(f: J.ReflectionFlags): Signature | undefined {
  const s: Signature = []
  let t: Token

  if (f.isPrivate) {
    t = new KeywordToken()
    t.text = "private"
    s.push(t)
  }
  if (f.isProtected) {
    t = new KeywordToken()
    t.text = "protected"
    s.push(t)
  }
  if (f.isPublic) {
    t = new KeywordToken()
    t.text = "public"
    s.push(t)
  }
  if (f.isStatic) {
    t = new KeywordToken()
    t.text = "static"
    s.push(t)
  }
  if (f.isAbstract) {
    t = new KeywordToken()
    t.text = "abstract"
    s.push(t)
  }

  if (s.length !== 0) {
    const r: Signature = []
    for (let i = 0; i < s.length; i = +1) {
      r.push(s[i])
      if (i < s.length - 1) {
        t = new TextToken()
        t.text = " "
        r.push(t)
      }
    }
    return r
  }

  return undefined
}

export function propertyFlags(f: J.ReflectionFlags): Signature | undefined {
  const s: Signature = []
  let t: Token

  if (f.isPrivate) {
    t = new KeywordToken()
    t.text = "private"
    s.push(t)
  }
  if (f.isProtected) {
    t = new KeywordToken()
    t.text = "protected"
    s.push(t)
  }
  if (f.isPublic) {
    t = new KeywordToken()
    t.text = "public"
    s.push(t)
  }
  if (f.isStatic) {
    t = new KeywordToken()
    t.text = "static"
    s.push(t)
  }
  if (f.isReadonly) {
    t = new KeywordToken()
    t.text = "readonly"
    s.push(t)
  }

  if (s.length !== 0) {
    const r: Signature = []
    for (let i = 0; i < s.length; i += 1) {
      r.push(s[i])
      if (i < s.length - 1) {
        t = new TextToken()
        t.text = " "
        r.push(t)
      }
    }
    return r
  }

  return undefined
}

export function flags(f: J.ReflectionFlags): KeywordToken | undefined {
  const t = new KeywordToken()
  if (f.isAbstract) {
    t.text = "abstract"
    return t
  }
  if (f.isConst) {
    t.text = "const"
    return t
  }
  if (f.isExternal) {
    t.text = "external"
    return t
  }
  if (f.isInherited) {
    t.text = "inherited"
    return t
  }
  if (f.isOptional) {
    t.text = "optional"
    return t
  }
  if (f.isPrivate) {
    t.text = "private"
    return t
  }
  if (f.isProtected) {
    t.text = "protected"
    return t
  }
  if (f.isPublic) {
    t.text = "public"
    return t
  }
  if (f.isReadonly) {
    t.text = "readonly"
    return t
  }
  if (f.isRest) {
    t.text = "rest"
    return t
  }
  if (f.isStatic) {
    t.text = "static"
    return t
  }
  return undefined
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
    case "templateLiteral":
      return templateLiteralType(t)
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
      const ts: Signature = []
      const b = parameters(c)
      ts.push(...b)

      if (c.type) {
        t = new TextToken()
        t.text = " => "
        ts.push(t)

        const b = type(c.type)
        ts.push(...b)
      }

      format(ts)
      s.push(...ts)
    }
  } else if (r.declaration.children) {
    t = new TextToken()
    t.text = "{"
    s.push(t)

    indent += 2
    for (const c of r.declaration.children) {
      if (c.type) {
        s.push(...newline())

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
      }
    }
    indent -= 2

    s.push(...newline())

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

export function templateLiteralType(tt: J.TemplateLiteralType): Signature {
  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = "`"
  s.push(t)
  for (const tl of tt.tail) {
    t = new TextToken()
    t.text = "${"
    s.push(t)
    for (const e of tl) {
      if (typeof e !== "string") {
        const b = type(e)
        s.push(...b)
      } else {
        const t = new TypeToken()
        t.text = String(e)
        s.push(t)
      }
    }
    t = new TextToken()
    t.text = "}"
    s.push(t)
  }
  t = new TextToken()
  t.text = "`"
  s.push(t)

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

  indent += 2
  for (const ts of u.types) {
    t = new TextToken()
    t.text = "_NEWLINE_"
    s.push(t)

    t = new TextToken()
    t.text = `_INDENT-${indent}_`
    s.push(t)

    const b = type(ts)
    s.push(...b)

    t = new TextToken()
    t.text = " | "
    s.push(t)
  }
  indent -= 2
  s.pop()

  format(s)
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

function format(s: Signature): void {
  let l = indent
  let f = false
  for (const t of s) {
    if (!(t instanceof Reference || t instanceof NoopToken)) {
      if (t.text !== "_NEWLINE_" && !/^_INDENT-\d+_/.test(t.text)) {
        l += t.text.length
      }
      if (t.text === " ".repeat(indent + 4)) {
        f = true
        break
      }
    }
  }

  for (const t of s) {
    if (t instanceof TextToken && t.text === "_NEWLINE_") {
      if (l > LIMIT || f) {
        t.text = NEWLINE
      } else {
        t.text = ""
      }
    }
    if (t instanceof TextToken && /^_INDENT-\d+_$/.test(t.text)) {
      const m = /_INDENT-(\d+)_/.exec(t.text)
      let i = 0
      if ((l > LIMIT || f) && m) {
        i = Number.parseInt(m[1])
      }
      t.text = " ".repeat(i)
    }
  }
}

function newline(): Signature {
  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = NEWLINE
  s.push(t)

  t = new TextToken()
  t.text = " ".repeat(indent)
  s.push(t)

  return s
}
