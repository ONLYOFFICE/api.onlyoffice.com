/* eslint-disable unicorn/no-array-push-push */
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
import {Console} from "../console.ts"
import {type Context} from "./context.ts"

const console = Console.shared

export function classDeclaration(ctx: Context, r: J.Reflection): Signature {
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

      let b = type(ctx, e)
      b = ctx.f.preprocess(b)
      s.push(...b)
    }
  }

  const ss: Signature = []
  if (r.children) {
    ctx.s.in()

    t = new TextToken()
    t.text = " {"
    ss.push(t)

    ss.push(...newline(ctx))

    for (const c of r.children) {
      if (isConstructorReflection(c) && c.signatures) {
        for (const cs of c.signatures) {
          if (isSignatureReflection(cs)) {
            const cd = constructorDeclaration(ctx, cs)
            ss.push(...cd)
            ss.push(...newline(ctx))
          }
        }
      }

      if (isPropertyReflection(c)) {
        const pr = propertyReflection(ctx, c)
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

        ss.push(...newline(ctx))
      }

      if (isMethodReflection(c) && c.signatures) {
        for (const cs of c.signatures) {
          if (isSignatureReflection(cs)) {
            const md = methodDeclaration(ctx, cs, c)
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
            ss.push(...newline(ctx))
          }
        }
      }
    }
    ctx.s.out()

    ss.pop()

    t = new TextToken()
    t.text = "}"
    ss.push(t)

    s.push(...ss)
  }

  return s
}

export function constructorDeclaration(ctx: Context, r: J.Reflection): Signature {
  let s: Signature = []

  if (!isSignatureReflection(r)) {
    return s
  }

  const t = new KeywordToken()
  t.text = "constructor"
  s.push(t)

  const b = parameters(r, ctx)
  s.push(...b)

  s = ctx.f.preprocess(s)

  return s
}

export function enumMemberReflection(ctx: Context, r: J.Reflection): Signature {
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
    let b = type(ctx, r.type)
    b = ctx.f.preprocess(b)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "0"
    s.push(t)
  }

  return s
}

export function enumReflection(ctx: Context, r: J.Reflection): Signature {
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
    ctx.s.in()
    for (const c of r.children) {
      if (c.type) {
        s.push(...newline(ctx))

        const b = value(ctx, c)
        s.push(...b)

        t = new TextToken()
        t.text = ", "
        s.push(t)
      }
    }
    ctx.s.out()
  }

  s.push(...newline(ctx))

  t = new TextToken()
  t.text = "}"
  s.push(t)

  return s
}

export function functionsDeclaration(ctx: Context, r: J.Reflection): Signature {
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

  let b = parameters(r, ctx)
  b = ctx.f.preprocess(b)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (r.type) {
    let b = type(ctx, r.type)
    b = ctx.f.preprocess(b)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "unknown"
    s.push(t)
  }

  return s
}

export function interfaceReflection(ctx: Context, r: J.Reflection): Signature {
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
    ctx.s.in()
    for (const c of r.children) {
      s.push(...newline(ctx))

      if (c.type) {
        const b = value(ctx, c)
        s.push(...b)

        t = new TextToken()
        t.text = " "
        s.push(t)
      }
      if (c.signatures) {
        for (const v of c.signatures) {
          let ts: Signature = []
          t = new ParameterToken()
          t.text = v.name
          ts.push(t)

          const b = parameters(v, ctx)
          ts.push(...b)

          if (v.type) {
            t = new TextToken()
            t.text = ": "
            ts.push(t)

            const b = type(ctx, v.type)
            ts.push(...b)
          }

          ts = ctx.f.preprocess(ts)
          s.push(...ts)

          t = new TextToken()
          t.text = " "
          s.push(t)
        }
      }
    }
    ctx.s.out()
    s.pop()
  }

  s.push(...newline(ctx))

  t = new TextToken()
  t.text = "}"
  s.push(t)

  return s
}

export function methodDeclaration(
  ctx: Context,
  r: J.Reflection,
  p: J.Reflection,
): Signature {
  let s: Signature = []

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

  const b = parameters(r, ctx)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (r.type) {
    let b = type(ctx, r.type)
    b = ctx.f.preprocess(b)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "unknown"
    s.push(t)
  }

  s = ctx.f.preprocess(s)
  return s
}

export function propertyReflection(ctx: Context, r: J.Reflection): Signature {
  let s: Signature = []

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
    const b = type(ctx, r.type)
    s.push(...b)
  }

  s = ctx.f.preprocess(s)
  return s
}

export function typeAliasReflection(ctx: Context, r: J.Reflection): Signature {
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
    let b = type(ctx, r.type)
    b = ctx.f.preprocess(b)
    s.push(...b)
  }

  return s
}

export function variableDeclaration(ctx: Context, r: J.Reflection): Signature {
  let s: Signature = []

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
    const b = type(ctx, r.type)
    s.push(...b)
  }

  s = ctx.f.preprocess(s)
  return s
}

export function parameters(r: J.SignatureReflection, ctx: Context): Signature {
  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = "("
  s.push(t)

  if (r.parameters && r.parameters.length !== 0) {
    ctx.s.in()
    for (const f of r.parameters) {
      if (f.type) {
        t = ctx.s.nt()
        s.push(t)

        t = ctx.s.it()
        s.push(t)

        const b = value(ctx, f)
        s.push(...b)

        t = new TextToken()
        t.text = ", "
        s.push(t)
      }
    }
    ctx.s.out()
    s.pop()

    t = ctx.s.nt()
    s.push(t)

    t = ctx.s.it()
    s.push(t)
  }

  t = new TextToken()
  t.text = ")"
  s.push(t)

  return s
}

export function value(ctx: Context, r: J.Reflection): Signature {
  let s: Signature = []
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
  if (r.flags.isOptional) {
    t.text = `?${t.text}`
  }
  s.push(t)

  if (r.type) {
    const b = type(ctx, r.type)
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

  s = ctx.f.preprocess(s)
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

export function type(ctx: Context, t: J.SomeType): Signature {
  if (isArrayType(t)) {
    return arrayType(ctx, t)
  }
  if (isIntrinsicType(t)) {
    return intrinsicType(t)
  }
  if (isLiteralType(t)) {
    return literalType(t)
  }
  if (isReferenceType(t)) {
    return referenceType(ctx, t)
  }
  if (isReflectionType(t)) {
    return reflectionType(ctx, t)
  }
  if (isTemplateLiteralType(t)) {
    return templateLiteralType(ctx, t)
  }
  if (isTupleType(t)) {
    return tupleType(ctx, t)
  }
  if (isUnionType(t)) {
    return unionType(ctx, t)
  }
  return []
}

export function arrayType(ctx: Context, a: J.ArrayType): Signature {
  let s: Signature = []
  let t: Token

  if (isUnionType(a.elementType)) {
    t = new TextToken()
    t.text = "("
    s.push(t)
  }

  const b = type(ctx, a.elementType)
  s.push(...b)

  if (isUnionType(a.elementType)) {
    t = ctx.s.nt()
    s.push(t)

    t = ctx.s.it()
    s.push(t)

    t = new TextToken()
    t.text = ")"
    s.push(t)
  }

  t = new TextToken()
  t.text = "[]"
  s.push(t)

  s = ctx.f.preprocess(s)
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

export function referenceType(ctx: Context, r: J.ReferenceType): Signature {
  const s: Signature = []
  let t: Token

  if (typeof r.target === "number") {
    const id = ctx.t.idOf(r.target)
    if (id) {
      const rt = new Reference()
      rt.id = String(id)
      rt.token = new TypeToken()
      rt.token.text = r.name
      s.push(rt)
    } else {
      console.log(`Reflection id not found for ${r.name} typedoc reference id = ${r.target}`)
    }
  }

  if (r.typeArguments) {
    if (s.length === 0) {
      t = new TypeToken()
      t.text = r.name
      s.push(t)
    }

    t = new TextToken()
    t.text = "<"
    s.push(t)

    for (const a of r.typeArguments) {
      let b = type(ctx, a)
      b = ctx.f.preprocess(b)
      s.push(...b)

      t = new TextToken()
      t.text = ", "
      s.push(t)
    }
    s.pop()

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

export function reflectionType(ctx: Context, r: J.ReflectionType): Signature {
  const s: Signature = []
  let t: Token

  if (r.declaration.signatures) {
    for (const c of r.declaration.signatures) {
      let ts: Signature = []
      const b = parameters(c, ctx)
      ts.push(...b)

      if (c.type) {
        t = new TextToken()
        t.text = " => "
        ts.push(t)

        const b = type(ctx, c.type)
        ts.push(...b)
      }

      ts = ctx.f.preprocess(ts)
      s.push(...ts)
    }
  } else if (r.declaration.children) {
    t = new TextToken()
    t.text = "{"
    s.push(t)

    ctx.s.in()
    for (const c of r.declaration.children) {
      if (c.type) {
        s.push(...newline(ctx))

        let ts: Signature = []
        t = new ParameterToken()
        t.text = c.name
        ts.push(t)

        t = new TextToken()
        t.text = ": "
        if (c.flags.isOptional) {
          t.text = `?${t.text}`
        }
        ts.push(t)

        const b = type(ctx, c.type)
        ts.push(...b)

        ts = ctx.f.preprocess(ts)
        s.push(...ts)
      }
    }
    ctx.s.out()

    s.push(...newline(ctx))

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

export function templateLiteralType(ctx: Context, tt: J.TemplateLiteralType): Signature {
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

        let b = type(ctx, e)
        b = ctx.f.preprocess(b)
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

export function tupleType(ctx: Context, tt: J.TupleType): Signature {
  const s: Signature = []
  let t: Token

  if (!tt.elements) {
    return s
  }

  t = new TextToken()
  t.text = "["
  s.push(t)

  for (const e of tt.elements) {
    let b = type(ctx, e)
    b = ctx.f.preprocess(b)
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

export function unionType(ctx: Context, u: J.UnionType): Signature {
  const s: Signature = []
  let t: Token

  if (!u.types) {
    return s
  }

  ctx.s.in()
  for (const ts of u.types) {
    t = ctx.s.nt()
    s.push(t)

    t = ctx.s.it()
    s.push(t)

    if (isReflectionType(ts.type)) {
      t = new TextToken()
      t.text = "("
      s.push(t)
    }

    let b = type(ctx, ts)
    b = ctx.f.preprocess(b)
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
  ctx.s.out()
  s.pop()

  return s
}

function newline(ctx: Context): Signature {
  const s: Signature = []

  const nt = ctx.s.nt()
  nt.processed = true
  s.push(nt)

  const it = ctx.s.it()
  it.processed = true
  s.push(it)

  return s
}
