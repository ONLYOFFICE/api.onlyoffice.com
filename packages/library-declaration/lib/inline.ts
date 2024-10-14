import type * as Tokenizer from "@onlyoffice/declaration-tokenizer"
// eslint-disable-next-line no-duplicate-imports
import * as tokenizer from "@onlyoffice/declaration-tokenizer"
import type * as Library from "./main.ts"

export function declaration(d: Library.Declaration): Tokenizer.Token[] {
  switch (d.kind) {
  case "class":
    return classDeclaration(d)
  case "constructor":
    return constructorDeclaration(d)
  case "event":
    return eventDeclaration(d)
  case "method":
    return methodDeclaration(d)
  case "property":
    return propertyDeclaration(d)
  case "type":
    return typeDeclaration(d)
  default:
    return []
  }
}

export function classDeclaration(d: Library.ClassDeclaration): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let t: Tokenizer.Token

  t = new tokenizer.KeywordToken()
  t.text = "class"
  a.push(t)

  t = new tokenizer.TextToken()
  t.text = " "
  a.push(t)

  t = new tokenizer.IdentifierToken()
  t.text = d.identifier
  a.push(t)

  if (d.extends) {
    t = new tokenizer.TextToken()
    t.text = " "
    a.push(t)

    t = new tokenizer.KeywordToken()
    t.text = "extends"
    a.push(t)

    t = new tokenizer.TextToken()
    t.text = " "
    a.push(t)

    for (const e of d.extends) {
      t = new tokenizer.ReferenceToken()
      t.id = e.id
      a.push(t)

      t = new tokenizer.TextToken()
      t.text = ", "
      a.push(t)
    }

    a.pop()
  }

  return a
}

export function constructorDeclaration(d: Library.ConstructorDeclaration): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let t: Tokenizer.Token

  // For consistency
  // eslint-disable-next-line prefer-const
  t = new tokenizer.IdentifierToken()
  t.text = d.identifier
  a.push(t)

  const b = functionType(d.type)
  a.push(...b)

  return a
}

export function eventDeclaration(d: Library.EventDeclaration): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let t: Tokenizer.Token

  t = new tokenizer.DecoratorToken()
  t.text = "(event)"
  a.push(t)

  t = new tokenizer.TextToken()
  t.text = " "
  a.push(t)

  t = new tokenizer.IdentifierToken()
  t.text = d.identifier
  a.push(t)

  const b = functionType(d.type)
  a.push(...b)

  return a
}

export function methodDeclaration(d: Library.MethodDeclaration): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let t: Tokenizer.Token

  t = new tokenizer.TextToken()
  t.text = " "
  a.push(t)

  t = new tokenizer.IdentifierToken()
  t.text = d.identifier
  a.push(t)

  const b = functionType(d.type)
  a.push(...b)

  return a
}

export function propertyDeclaration(d: Library.PropertyDeclaration): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let t: Tokenizer.Token

  t = new tokenizer.DecoratorToken()
  t.text = "(property)"
  a.push(t)

  t = new tokenizer.TextToken()
  t.text = " "
  a.push(t)

  t = new tokenizer.TextToken()
  t.text = d.identifier
  a.push(t)

  return a
}

export function typeDeclaration(d: Library.TypeDeclaration): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let t: Tokenizer.Token

  t = new tokenizer.DecoratorToken()
  t.text += "("
  if ("id" in d.type) {
    t.text += d.type.id
  } else {
    t.text += d.type.type
  }
  t.text += ")"
  a.push(t)

  t = new tokenizer.TextToken()
  t.text = " "
  a.push(t)

  t = new tokenizer.IdentifierToken()
  t.text = d.identifier
  a.push(t)

  t = new tokenizer.TextToken()
  t.text = ": "
  a.push(t)

  const b = type(d.type)
  a.push(...b)

  return a
}

export function type(t: Library.Type): Tokenizer.Token[] {
  if ("id" in t) {
    const u = new tokenizer.ReferenceToken()
    u.id = t.id
    return [u]
  }

  switch (t.type) {
  case "any":
    return anyType(t)
  case "array":
    return arrayType(t)
  case "function":
    return functionType(t)
  case "literal":
    return literalType(t)
  case "object":
    return objectType(t)
  case "passthrough":
    return passthroughType(t)
  case "union":
    return unionType(t)
  case "unknown":
    return unknownType(t)
  case "void":
    return voidType(t)
  default:
    return []
  }
}

export function anyType(t: Library.AnyType): Tokenizer.Token[] {
  return literalType({type: "literal", value: t.type})
}

export function arrayType(t: Library.ArrayType): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let u: Tokenizer.Token

  if (t.items) {
    for (const e of t.items) {
      const b = type(e)
      a.push(...b)

      const u = new tokenizer.TextToken()
      u.text = ", "
      a.push(u)
    }

    a.pop()

    if (t.items.length > 1 || "type" in t.items[0] && t.items[0].type === "union") {
      u = new tokenizer.TextToken()
      u.text = "("
      a.unshift(u)

      u = new tokenizer.TextToken()
      u.text = ")"
      a.push(u)
    }
  }

  u = new tokenizer.TextToken()
  u.text = "[]"
  a.push(u)

  return a
}

export function functionType(t: Library.FunctionType): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let u: Tokenizer.Token

  u = new tokenizer.TextToken()
  u.text = "("
  a.push(u)

  if (t.parameters) {
    for (const e of t.parameters) {
      let u = new tokenizer.TextToken()
      u.text = e.identifier
      a.push(u)

      u = new tokenizer.TextToken()
      u.text = ", "
      a.push(u)
    }

    a.pop()
  }

  u = new tokenizer.TextToken()
  u.text = ")"
  a.push(u)

  if (t.returns) {
    u = new tokenizer.TextToken()
    u.text = ": "
    a.push(u)

    const b = type(t.returns.type)
    a.push(...b)
  }

  return a
}

export function literalType(t: Library.LiteralType): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  const u = new tokenizer.TextToken()
  if (t.value === "string") {
    u.text = `"${String(t.value)}"`
  } else {
    u.text = String(t.value)
  }
  a.push(u)

  return a
}

export function objectType(t: Library.ObjectType): Tokenizer.Token[] {
  return literalType({type: "literal", value: t.type})
}

export function passthroughType(t: Library.PassthroughType): Tokenizer.Token[] {
  return literalType({type: "literal", value: t.value})
}

export function unionType(t: Library.UnionType): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let u: Tokenizer.Token

  for (const e of t.types) {
    const b = type(e)
    a.push(...b)

    u = new tokenizer.TextToken()
    u.text = " | "
    a.push(u)
  }

  a.pop()

  return a
}

export function unknownType(t: Library.UnknownType): Tokenizer.Token[] {
  return literalType({type: "literal", value: t.type})
}

export function voidType(t: Library.VoidType): Tokenizer.Token[] {
  return literalType({type: "literal", value: t.type})
}
