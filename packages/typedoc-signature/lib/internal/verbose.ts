/* eslint-disable unicorn/no-array-push-push */
import {
  type Declaration,
  type Fragment,
} from "@onlyoffice/library-declaration/next.ts"
import {
  EntityToken,
  KeywordToken,
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
  isDeclarationReflection,
  isEnumMemberReflection,
  isEnumReflection,
  isInterfaceReflection,
  isMethodReflection,
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

  let t: Token

  if (r.flags.isAbstract) {
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
  t.text = r.name
  s.push(t)

  if (r.extendedTypes) {
    for (const e of r.extendedTypes) {
      t = new TextToken()
      t.text = " "
      s.push(t)

      t = new KeywordToken()
      t.text = "extends"
      s.push(t)

      t = new TextToken()
      t.text = " "
      s.push(t)

      const b = type(e, cf)
      cf.formatter.preprocess(b)
      s.push(...b)
    }
  }

  const ss: Signature = []
  if (r.children) {
    cf.context.in()

    t = new TextToken()
    t.text = " {"
    ss.push(t)

    ss.push(...newline(cf))

    for (const c of r.children) {
      if (isConstructorReflection(c) && c.signatures) {
        for (const cs of c.signatures) {
          if (isSignatureReflection(cs)) {
            const cd = constructorDeclaration(cs, cf)
            ss.push(...cd)
            ss.push(...newline(cf))
          }
        }
      }

      if (isPropertyReflection(c)) {
        const pr = propertyReflection(c, cf)
        const ts: Signature = []
        for (const e of pr) {
          if (e instanceof EntityToken) {
            t = new ParameterToken()
            t.text = e.text
            ts.push(t)
          } else {
            ts.push(e)
          }
        }
        ss.push(...ts)

        ss.push(...newline(cf))
      }

      if (isMethodReflection(c) && c.signatures) {
        for (const cs of c.signatures) {
          if (isSignatureReflection(cs)) {
            const md = methodDeclaration(cs, c, cf)
            const ts: Signature = []
            for (const e of md) {
              if (e instanceof EntityToken) {
                t = new ParameterToken()
                t.text = e.text
                ts.push(t)
              } else {
                ts.push(e)
              }
            }
            ss.push(...ts)
            ss.push(...newline(cf))
          }
        }
      }
    }
    cf.context.out()

    ss.pop()

    t = new TextToken()
    t.text = "}"
    ss.push(t)

    s.push(...ss)
  }

  return s
}

export function constructorDeclaration(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isSignatureReflection(r)) {
    return s
  }

  const t = new KeywordToken()
  t.text = "constructor"
  s.push(t)

  const b = parameters(r, cf)
  s.push(...b)

  cf.formatter.preprocess(s)

  return s
}

export function enumMemberReflection(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isEnumMemberReflection(r)) {
    return s
  }

  let t: Token

  t = new EntityToken()
  t.text = r.name
  s.push(t)

  t = new TextToken()
  t.text = " = "
  s.push(t)

  if (r.type) {
    const b = type(r.type, cf)
    cf.formatter.preprocess(b)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "0"
    s.push(t)
  }

  return s
}

export function enumReflection(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isEnumReflection(r)) {
    return s
  }

  let t: Token

  t = new KeywordToken()
  t.text = "enum"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new EntityToken()
  t.text = r.name
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new TextToken()
  t.text = "{"
  s.push(t)

  if (r.children) {
    cf.context.in()
    for (const c of r.children) {
      if (c.type) {
        s.push(...newline(cf))

        const b = value(c, cf)
        s.push(...b)

        t = new TextToken()
        t.text = ", "
        s.push(t)
      }
    }
    cf.context.out()
  }

  s.push(...newline(cf))

  t = new TextToken()
  t.text = "}"
  s.push(t)

  return s
}

export function functionsDeclaration(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isCallSignatureReflection(r)) {
    return s
  }

  let t: Token

  t = new KeywordToken()
  t.text = "function"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new EntityToken()
  t.text = r.name
  s.push(t)

  const b = parameters(r, cf)
  cf.formatter.preprocess(b)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (r.type) {
    const b = type(r.type, cf)
    cf.formatter.preprocess(b)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "unknown"
    s.push(t)
  }

  return s
}

export function interfaceReflection(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isInterfaceReflection(r)) {
    return s
  }

  let t: Token

  t = new KeywordToken()
  t.text = "interface"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new EntityToken()
  t.text = r.name
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new TextToken()
  t.text = "{"
  s.push(t)

  if (r.children) {
    cf.context.in()
    for (const c of r.children) {
      s.push(...newline(cf))

      if (c.type) {
        const b = value(c, cf)
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

          const b = parameters(v, cf)
          ts.push(...b)

          if (v.type) {
            t = new TextToken()
            t.text = ": "
            ts.push(t)

            const b = type(v.type, cf)
            ts.push(...b)
          }

          cf.formatter.preprocess(ts)
          s.push(...ts)

          t = new TextToken()
          t.text = " "
          s.push(t)
        }
      }
    }
    cf.context.out()
    s.pop()
  }

  s.push(...newline(cf))

  t = new TextToken()
  t.text = "}"
  s.push(t)

  return s
}

export function methodDeclaration(
  r: J.Reflection,
  p: J.Reflection,
  cf: ContextFormat,
): Signature {
  const s: Signature = []

  if (!isSignatureReflection(r)) {
    return s
  }

  let t: Token

  const f = flags(p.flags)
  if (f) {
    s.push(...f)

    t = new TextToken()
    t.text = " "
    s.push(t)
  }

  t = new EntityToken()
  t.text = r.name
  s.push(t)

  const b = parameters(r, cf)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (r.type) {
    const b = type(r.type, cf)
    cf.formatter.preprocess(b)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "unknown"
    s.push(t)
  }

  cf.formatter.preprocess(s)
  return s
}

export function propertyReflection(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isPropertyReflection(r)) {
    return s
  }

  let t: Token

  const f = flags(r.flags)
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
    const b = type(r.type, cf)
    s.push(...b)
  }

  cf.formatter.preprocess(s)
  return s
}

export function typeAliasReflection(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isTypeAliasReflection(r)) {
    return s
  }

  let t: Token

  t = new KeywordToken()
  t.text = "type"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new EntityToken()
  t.text = r.name
  s.push(t)

  t = new TextToken()
  t.text = " = "
  s.push(t)

  if (r.type) {
    const b = type(r.type, cf)
    cf.formatter.preprocess(b)
    s.push(...b)
  }

  return s
}

export function variableDeclaration(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []

  if (!isVariableReflection(r)) {
    return s
  }

  let t: Token

  t = new KeywordToken()
  t.text = "type"
  s.push(t)

  t = new TextToken()
  t.text = " "
  s.push(t)

  t = new EntityToken()
  t.text = r.name
  s.push(t)

  t = new TextToken()
  t.text = " = "
  s.push(t)

  if (r.type) {
    const b = type(r.type, cf)
    s.push(...b)
  }

  cf.formatter.preprocess(s)
  return s
}

export function parameters(r: J.SignatureReflection, cf: ContextFormat): Signature {
  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = "("
  s.push(t)

  if (r.parameters && r.parameters.length !== 0) {
    cf.context.in()
    for (const f of r.parameters) {
      if (f.type) {
        t = cf.context.nt()
        s.push(t)

        t = cf.context.it()
        s.push(t)

        const b = value(f, cf)
        s.push(...b)

        t = new TextToken()
        t.text = ", "
        s.push(t)
      }
    }
    cf.context.out()
    s.pop()

    t = cf.context.nt()
    s.push(t)

    t = cf.context.it()
    s.push(t)
  }

  t = new TextToken()
  t.text = ")"
  s.push(t)

  return s
}

export function value(r: J.Reflection, cf: ContextFormat): Signature {
  const s: Signature = []
  let t: Token

  if (
    !isDeclarationReflection(r) &&
    !isParameterReflection(r) &&
    !isSignatureReflection(r)
  ) {
    return s
  }

  t = new ParameterToken()
  t.text = r.name
  s.push(t)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (r.type) {
    const b = type(r.type, cf)
    s.push(...b)
  }

  if (isSignatureReflection(r)) {
    return s
  }

  if (r.defaultValue) {
    t = new TextToken()
    t.text = " = "
    s.push(t)

    t = new TextToken()
    t.text = String(r.defaultValue)
    s.push(t)
  }

  cf.formatter.preprocess(s)
  return s
}

export function flags(f: J.ReflectionFlags): Signature | undefined {
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
  if (f.isReadonly) {
    t = new KeywordToken()
    t.text = "readonly"
    s.push(t)
  }

  if (s.length !== 0) {
    const r: Signature = []
    for (const e of s) {
      r.push(e)
      const t = new TextToken()
      t.text = " "
      r.push(t)
    }
    r.pop()
    return r
  }

  return undefined
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
    t = cf.context.nt()
    s.push(t)

    t = cf.context.it()
    s.push(t)

    t = new TextToken()
    t.text = ")"
    s.push(t)
  }

  t = new TextToken()
  t.text = "[]"
  s.push(t)

  cf.formatter.preprocess(s)
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
    const id = cf.idOf(r.target)
    if (id) {
      const rt = new Reference()
      rt.id = String(id)
      rt.token = new TypeToken()
      rt.token.text = r.name
      s.push(rt)
    }
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
      const ts: Signature = []
      const b = parameters(c, cf)
      ts.push(...b)

      if (c.type) {
        t = new TextToken()
        t.text = " => "
        ts.push(t)

        const b = type(c.type, cf)
        ts.push(...b)
      }

      cf.formatter.preprocess(ts)
      s.push(...ts)
    }
  } else if (r.declaration.children) {
    t = new TextToken()
    t.text = "{"
    s.push(t)

    cf.context.in()
    for (const c of r.declaration.children) {
      if (c.type) {
        s.push(...newline(cf))

        const ts: Signature = []
        t = new ParameterToken()
        t.text = c.name
        ts.push(t)

        t = new TextToken()
        t.text = ": "
        if (c.flags.isOptional) {
          t.text = `?${t.text}`
        }
        ts.push(t)

        const b = type(c.type, cf)
        ts.push(...b)

        cf.formatter.preprocess(ts)
        s.push(...ts)
      }
    }
    cf.context.out()

    s.push(...newline(cf))

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
    cf.formatter.preprocess(b)
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

  cf.context.in()
  for (const ts of u.types) {
    t = cf.context.nt()
    s.push(t)

    t = cf.context.it()
    s.push(t)

    if (isReflectionType(ts.type)) {
      t = new TextToken()
      t.text = "("
      s.push(t)
    }

    const b = type(ts, cf)
    cf.formatter.preprocess(b)
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
  cf.context.out()
  s.pop()

  return s
}

function newline(cf: ContextFormat): Signature {
  const s: Signature = []

  const nt = cf.context.nt()
  nt.processed = true
  s.push(nt)

  const it = cf.context.it()
  it.processed = true
  s.push(it)

  return s
}
