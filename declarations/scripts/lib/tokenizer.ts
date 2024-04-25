// todo: add double quotes for string literals.

import type {Library} from "@onlyoffice/documentation-declarations-types/library.js"
import type {Tokenizer} from "@onlyoffice/documentation-declarations-types/tokenizer.ts"

export function toDeclarationTokens(d: Library.Declaration): Tokenizer.Token[] {
  switch (d.kind) {
  case "class":
    return toClassDeclarationTokens(d)
  case "constructor":
    return toConstructorDeclarationTokens(d)
  case "event":
    return toEventDeclarationTokens(d)
  case "method":
    return toMethodDeclarationTokens(d)
  case "property":
    return toPropertyDeclarationTokens(d)
  case "type":
    return toTypeDeclarationTokens(d)
  default:
    return []
  }
}

export function toClassDeclarationTokens(d: Library.ClassDeclaration): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let t: Tokenizer.Token

  t = toKeywordToken()
  t.text = "class"
  a.push(t)

  t = toTextToken()
  t.text = " "
  a.push(t)

  t = toIdentifierToken()
  t.text = d.identifier
  a.push(t)

  if (d.extends) {
    t = toTextToken()
    t.text = " "
    a.push(t)

    t = toKeywordToken()
    t.text = "extends"
    a.push(t)

    t = toTextToken()
    t.text = " "
    a.push(t)

    for (const e of d.extends) {
      t = toReferenceToken()
      t.id = e.id
      a.push(t)

      t = toTextToken()
      t.text = ", "
      a.push(t)
    }

    a.pop()
  }

  return a
}

export function toConstructorDeclarationTokens(d: Library.ConstructorDeclaration): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let t: Tokenizer.Token

  t = toIdentifierToken()
  t.text = d.identifier
  a.push(t)

  const b = toFunctionTypeTokens(d.type)
  a.push(...b)

  return a
}

export function toEventDeclarationTokens(d: Library.EventDeclaration): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let t: Tokenizer.Token

  t = toDecoratorToken()
  t.text = "(event)"
  a.push(t)

  t = toTextToken()
  t.text = " "
  a.push(t)

  t = toIdentifierToken()
  t.text = d.identifier
  a.push(t)

  const b = toFunctionTypeTokens(d.type)
  a.push(...b)

  return a
}

export function toMethodDeclarationTokens(d: Library.MethodDeclaration): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let t: Tokenizer.Token

  t = toDecoratorToken()
  t.text = "(method)"
  a.push(t)

  t = toTextToken()
  t.text = " "
  a.push(t)

  t = toIdentifierToken()
  t.text = d.identifier
  a.push(t)

  const b = toFunctionTypeTokens(d.type)
  a.push(...b)

  return a
}

export function toPropertyDeclarationTokens(d: Library.PropertyDeclaration): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let t: Tokenizer.Token

  t = toDecoratorToken()
  t.text = "(property)"
  a.push(t)

  t = toTextToken()
  t.text = " "
  a.push(t)

  const b = toValueTokens(d)
  a.push(...b)

  return a
}

export function toTypeDeclarationTokens(d: Library.TypeDeclaration): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let t: Tokenizer.Token

  t = toDecoratorToken()
  t.text += "("
  if ("id" in d.type) {
    t.text += d.type.id
  } else {
    t.text += d.type.type
  }
  t.text += ")"
  a.push(t)

  t = toTextToken()
  t.text = " "
  a.push(t)

  t = toIdentifierToken()
  t.text = d.identifier
  a.push(t)

  t = toTextToken()
  t.text = ": "
  a.push(t)

  const b = toTypeTokens(d.type)
  a.push(...b)

  return a
}

export function toValueTokens(v: Library.Value): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let u: Tokenizer.Token

  u = toTextToken()
  u.text = v.identifier
  a.push(u)

  u = toTextToken()
  u.text = ": "
  a.push(u)

  const b = toTypeTokens(v.type)
  a.push(...b)

  if (v.default) {
    u = toTextToken()
    u.text = " = "
    a.push(u)

    u = toTextToken()
    u.text = String(v.default.value)
    a.push(u)
  }

  return a
}

export function toTypeTokens(t: Library.Type): Tokenizer.Token[] {
  if ("id" in t) {
    const u = toReferenceToken()
    u.id = t.id
    return [u]
  }

  switch (t.type) {
  case "any":
    return toLiteralTokens({type: "literal", value: t.type})
  case "array":
    return toArrayTypeTokens(t)
  case "function":
    return toFunctionTypeTokens(t)
  case "literal":
    return toLiteralTokens(t)
  case "object":
    return toLiteralTokens({type: "literal", value: t.type})
  case "passthrough":
    return toLiteralTokens({type: "literal", value: t.value})
  case "union":
    return toUnionTypeTokens(t)
  case "unknown":
    return toLiteralTokens({type: "literal", value: t.type})
  case "void":
    return toLiteralTokens({type: "literal", value: t.type})
  default:
    return []
  }
}

export function toArrayTypeTokens(t: Library.ArrayType): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let u: Tokenizer.Token

  if (t.items) {
    for (const e of t.items) {
      const b = toTypeTokens(e)
      a.push(...b)

      const u = toTextToken()
      u.text = ", "
      a.push(u)
    }

    a.pop()

    if (t.items.length > 1) {
      u = toTextToken()
      u.text = "("
      a.unshift(u)

      u = toTextToken()
      u.text = ")"
      a.push(u)
    }
  }

  u = toTextToken()
  u.text = "[]"
  a.push(u)

  return a
}

export function toFunctionTypeTokens(t: Library.FunctionType): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let u: Tokenizer.Token

  u = toTextToken()
  u.text = "("
  a.push(u)

  if (t.parameters) {
    for (const e of t.parameters) {
      const b = toValueTokens(e)
      a.push(...b)

      const u = toTextToken()
      u.text = ", "
      a.push(u)
    }

    a.pop()
  }

  u = toTextToken()
  u.text = ")"
  a.push(u)

  if (t.returns) {
    u = toTextToken()
    u.text = ": "
    a.push(u)

    const b = toTypeTokens(t.returns.type)
    a.push(...b)
  }

  return a
}

export function toLiteralTokens(t: Library.LiteralType): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  const u = toTextToken()
  u.text = String(t.value)
  a.push(u)

  return a
}

export function toUnionTypeTokens(t: Library.UnionType): Tokenizer.Token[] {
  const a: Tokenizer.Token[] = []

  let u: Tokenizer.Token

  for (const e of t.types) {
    const b = toTypeTokens(e)
    if (b.length > 1) {
      u = toTextToken()
      u.text = "("
      b.unshift(u)

      u = toTextToken()
      u.text = ")"
      b.push(u)
    }

    a.push(...b)

    u = toTextToken()
    u.text = " | "
    a.push(u)
  }

  a.pop()

  return a
}

export function toDecoratorToken(): Tokenizer.DecoratorToken {
  const t = tokenNode()
  return decoratorToken(t)
}

export function decoratorToken(t: Tokenizer.TokenNode): Tokenizer.DecoratorToken {
  return {...t, type: "decorator"}
}

export function toIdentifierToken(): Tokenizer.IdentifierToken {
  const t = tokenNode()
  return identifierToken(t)
}

export function identifierToken(t: Tokenizer.TokenNode): Tokenizer.IdentifierToken {
  return {...t, type: "identifier"}
}

export function toKeywordToken(): Tokenizer.KeywordToken {
  const t = tokenNode()
  return keywordToken(t)
}

export function keywordToken(t: Tokenizer.TokenNode): Tokenizer.KeywordToken {
  return {...t, type: "keyword"}
}

export function toTextToken(): Tokenizer.TextToken {
  const t = tokenNode()
  return textToken(t)
}

export function textToken(t: Tokenizer.TokenNode): Tokenizer.TextToken {
  return {...t, type: "text"}
}

export function toReferenceToken(): Tokenizer.ReferenceToken {
  const t = tokenNode()
  return referenceToken(t)
}

export function referenceToken(t: Tokenizer.TokenNode): Tokenizer.ReferenceToken {
  return {...t, type: "reference", id: ""}
}

export function tokenNode(): Tokenizer.TokenNode {
  return {type: "", text: ""}
}
