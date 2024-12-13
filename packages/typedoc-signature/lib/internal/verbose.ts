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
import {type JSONOutput as J} from "typedoc"
import {
  isArrayType,
  isIntrinsicType,
  isLiteralType,
  isReferenceType,
  isReflectionType,
  isTemplateLiteralType,
  isTupleType,
  isUnionType,
} from "../../../typedoc-util-is-type/lib/main.ts"
import {type ComputeFormat} from "../main.ts"

export function classDeclaration(r: J.Reflection, ct: ComputeFormat): Signature {
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

      const b = type(e, ct)
      ct.formatter.format(b)
      s.push(...b)
    }
  }

  const childrenSignatures: Signature = []
  if (r.children) {
    ct.formatter.i += 2

    t = new TextToken()
    t.text = " {"
    childrenSignatures.push(t, ...newline(ct))

    for (const c of r.children) {
      if (isConstructorReflection(c) && c.signatures) {
        for (const cs of c.signatures) {
          if (isSignatureReflection(cs)) {
            const cd = constructorDeclaration(cs, ct)
            childrenSignatures.push(...cd, ...newline(ct))
          }
        }
      }

      if (isPropertyReflection(c)) {
        const pr = propertyReflection(c, ct)
        const ts: Signature = []
        for (const e of pr) {
          if ("type" in e && e.type === "entity") {
            t = new ParameterToken()
            t.text = e.text
            ts.push(t)
          } else {
            ts.push(e)
          }
        }
        childrenSignatures.push(...ts, ...newline(ct))
      }

      if (isMethodReflection(c) && c.signatures) {
        for (const cs of c.signatures) {
          if (isSignatureReflection(cs)) {
            const md = methodDeclaration(cs, c, ct)
            const ts: Signature = []
            for (const e of md) {
              if ("type" in e && e.type === "entity") {
                t = new ParameterToken()
                t.text = e.text
                ts.push(t)
              } else {
                ts.push(e)
              }
            }
            childrenSignatures.push(...ts, ...newline(ct))
          }
        }
      }
    }

    ct.formatter.i -= 2
    childrenSignatures.pop()

    t = new TextToken()
    t.text = "}"
    childrenSignatures.push(t)

    s.push(...childrenSignatures)
  }

  return s
}

export function constructorDeclaration(r: J.Reflection, ct: ComputeFormat): Signature {
  const s: Signature = []

  if (!isSignatureReflection(r)) {
    return s
  }

  const t = new KeywordToken()
  t.text = "constructor"
  s.push(t)

  const b = parameters(r, ct)
  s.push(...b)

  ct.formatter.format(b)

  return s
}

export function enumMemberReflection(r: J.Reflection, ct: ComputeFormat): Signature {
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
    const b = type(r.type, ct)
    ct.formatter.format(b)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "0"
    s.push(t)
  }

  return s
}

export function enumReflection(r: J.Reflection, ct: ComputeFormat): Signature {
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
    ct.formatter.i += 2
    for (const c of r.children) {
      if (c.type) {
        s.push(...newline(ct))

        const b = value(c, ct)
        s.push(...b)

        t = new TextToken()
        t.text = ", "
        s.push(t)
      }
    }
    ct.formatter.i -= 2
  }

  s.push(...newline(ct))

  t = new TextToken()
  t.text = "}"
  s.push(t)

  return s
}

export function functionsDeclaration(r: J.Reflection, ct: ComputeFormat): Signature {
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

  const b = parameters(r, ct)
  ct.formatter.format(b)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (r.type) {
    const b = type(r.type, ct)
    ct.formatter.format(b)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "unknown"
    s.push(t)
  }

  return s
}

export function interfaceReflection(r: J.Reflection, ct: ComputeFormat): Signature {
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
    ct.formatter.i += 2
    for (const c of r.children) {
      s.push(...newline(ct))

      if (c.type) {
        const b = value(c, ct)
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

          const b = parameters(v, ct)
          ts.push(...b)

          if (v.type) {
            t = new TextToken()
            t.text = ": "
            ts.push(t)

            const b = type(v.type, ct)
            ts.push(...b)
          }

          ct.formatter.format(ts)
          s.push(...ts)

          t = new TextToken()
          t.text = " "
          s.push(t)
        }
      }
    }
    ct.formatter.i -= 2
    s.pop()
  }

  s.push(...newline(ct))

  t = new TextToken()
  t.text = "}"
  s.push(t)

  return s
}

export function methodDeclaration(
  r: J.Reflection,
  p: J.Reflection,
  ct: ComputeFormat,
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

  const b = parameters(r, ct)
  s.push(...b)

  t = new TextToken()
  t.text = ": "
  s.push(t)

  if (r.type) {
    const b = type(r.type, ct)
    ct.formatter.format(b)
    s.push(...b)
  } else {
    t = new TypeToken()
    t.text = "unknown"
    s.push(t)
  }

  ct.formatter.format(s)
  return s
}

export function propertyReflection(r: J.Reflection, ct: ComputeFormat): Signature {
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
    const b = type(r.type, ct)
    s.push(...b)
  }

  ct.formatter.format(s)
  return s
}

export function typeAliasReflection(r: J.Reflection, ct: ComputeFormat): Signature {
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
    const b = type(r.type, ct)
    ct.formatter.format(b)
    s.push(...b)
  }

  return s
}

export function variableDeclaration(r: J.Reflection, ct: ComputeFormat): Signature {
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
    const b = type(r.type, ct)
    s.push(...b)
  }

  ct.formatter.format(s)
  return s
}

export function parameters(r: J.SignatureReflection, ct: ComputeFormat): Signature {
  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = "("
  s.push(t)

  if (r.parameters && r.parameters.length !== 0) {
    ct.formatter.i += 2
    for (const f of r.parameters) {
      if (f.type) {
        t = new TextToken()
        t.text = "_NEWLINE_"
        s.push(t)

        t = new TextToken()
        t.text = `_INDENT-${ct.formatter.i}_`
        s.push(t)

        const b = value(f, ct)
        s.push(...b)

        t = new TextToken()
        t.text = ", "
        s.push(t)
      }
    }
    ct.formatter.i -= 2
    s.pop()

    t = new TextToken()
    t.text = "_NEWLINE_"
    s.push(t)

    t = new TextToken()
    t.text = `_INDENT-${ct.formatter.i}_`
    s.push(t)
  }

  t = new TextToken()
  t.text = ")"
  s.push(t)

  return s
}

export function value(r: J.Reflection, ct: ComputeFormat): Signature {
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
    const b = type(r.type, ct)
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

  ct.formatter.format(s)
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
    for (const char of s) {
      r.push(char)
      const t = new TextToken()
      t.text = " "
      r.push(t)
    }
    r.pop()
    return r
  }

  return undefined
}

export function type(t: J.SomeType, ct: ComputeFormat): Signature {
  if (isArrayType(t)) {
    return arrayType(t, ct)
  }
  if (isIntrinsicType(t)) {
    return intrinsicType(t)
  }
  if (isLiteralType(t)) {
    return literalType(t)
  }
  if (isReferenceType(t)) {
    return referenceType(t, ct)
  }
  if (isReflectionType(t)) {
    return reflectionType(t, ct)
  }
  if (isTemplateLiteralType(t)) {
    return templateLiteralType(t, ct)
  }
  if (isTupleType(t)) {
    return tupleType(t, ct)
  }
  if (isUnionType(t)) {
    return unionType(t, ct)
  }
  return []
}

export function arrayType(a: J.ArrayType, ct: ComputeFormat): Signature {
  const s: Signature = []
  let t: Token

  if (a.elementType.type === "union") {
    t = new TextToken()
    t.text = "("
    s.push(t)
  }

  const b = type(a.elementType, ct)
  s.push(...b)

  if (a.elementType.type === "union") {
    t = new TextToken()
    t.text = "_NEWLINE_"
    s.push(t)

    t = new TextToken()
    t.text = `_INDENT-${ct.formatter.i}_`
    s.push(t)

    t = new TextToken()
    t.text = ")"
    s.push(t)
  }

  t = new TextToken()
  t.text = "[]"
  s.push(t)

  ct.formatter.format(s)
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

export function referenceType(r: J.ReferenceType, ct: ComputeFormat): Signature {
  const s: Signature = []
  let t: Token

  if (typeof r.target === "number") {
    const id = ct.idOf(r.target)
    if (id) {
      const rt = new Reference()
      rt.id = String(id)
      rt.token = new TypeToken()
      rt.token.text = r.name
      s.push(rt)
    }
  }
  if (s.length === 0) {
    t = new TypeToken()
    t.text = r.name
    s.push(t)
  }

  if (r.name === "Promise" || r.name === "Record") {
    t = new TextToken()
    t.text = "<"
    s.push(t)

    if (r.typeArguments) {
      for (const a of r.typeArguments) {
        const b = type(a, ct)
        ct.formatter.format(b)
        s.push(...b)

        t = new TextToken()
        if (r.name === "Promise") {
          t.text = " | "
        }
        if (r.name === "Record") {
          t.text = ", "
        }

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

export function reflectionType(r: J.ReflectionType, ct: ComputeFormat): Signature {
  const s: Signature = []
  let t: Token

  if (r.declaration.signatures) {
    for (const c of r.declaration.signatures) {
      const ts: Signature = []
      const b = parameters(c, ct)
      ts.push(...b)

      if (c.type) {
        t = new TextToken()
        t.text = " => "
        ts.push(t)

        const b = type(c.type, ct)
        ts.push(...b)
      }

      ct.formatter.format(ts)
      s.push(...ts)
    }
  } else if (r.declaration.children) {
    t = new TextToken()
    t.text = "{"
    s.push(t)

    ct.formatter.i += 2
    for (const c of r.declaration.children) {
      if (c.type) {
        s.push(...newline(ct))

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

        const b = type(c.type, ct)
        ts.push(...b)

        ct.formatter.format(ts)
        s.push(...ts)
      }
    }
    ct.formatter.i -= 2

    s.push(...newline(ct))

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

export function templateLiteralType(tt: J.TemplateLiteralType, ct: ComputeFormat): Signature {
  const s: Signature = []
  let t: Token

  t = new StringToken()
  t.text = "`"
  s.push(t)
  for (const tl of tt.tail) {
    t = new TextToken()
    t.text = "${"
    s.push(t)
    for (const e of tl) {
      if (typeof e !== "string") {
        const b = type(e, ct)
        ct.formatter.format(b)
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
  t = new StringToken()
  t.text = "`"
  s.push(t)

  return s
}

export function tupleType(tt: J.TupleType, ct: ComputeFormat): Signature {
  const s: Signature = []
  let t: Token

  if (!tt.elements) {
    return s
  }

  t = new TextToken()
  t.text = "["
  s.push(t)

  for (const e of tt.elements) {
    const b = type(e, ct)
    ct.formatter.format(b)
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

export function unionType(u: J.UnionType, ct: ComputeFormat): Signature {
  const s: Signature = []
  let t: Token

  if (!u.types) {
    return s
  }

  ct.formatter.i += 2
  for (const ts of u.types) {
    t = new TextToken()
    t.text = "_NEWLINE_"
    s.push(t)

    t = new TextToken()
    t.text = `_INDENT-${ct.formatter.i}_`
    s.push(t)

    if (ts.type === "reflection") {
      t = new TextToken()
      t.text = "("
      s.push(t)
    }

    const b = type(ts, ct)
    ct.formatter.format(b)
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
  ct.formatter.i -= 2
  s.pop()

  return s
}

function newline(ct: ComputeFormat): Signature {
  const s: Signature = []
  let t: Token

  t = new TextToken()
  t.text = ct.formatter.n
  s.push(t)

  t = new TextToken()
  t.text = " ".repeat(ct.formatter.i)
  s.push(t)

  return s
}
