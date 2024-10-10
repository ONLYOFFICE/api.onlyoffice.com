import {test} from "uvu"
import {equal as eq, is} from "uvu/assert"
import {
  DecoratorToken,
  IdentifierToken,
  KeywordToken,
  ReferenceToken,
  TextToken,
} from "./main.ts"

test("creates a text token with correct order of keys", () => {
  const t = new TextToken()
  const a = Object.keys(t)
  eq(a, ["type", "text"])
})

test("creates a text token with correct type", () => {
  const t = new TextToken()
  is(t.type, "text")
})

test("creates a reference token with correct order of keys", () => {
  const t = new ReferenceToken()
  const a = Object.keys(t)
  eq(a, ["type", "id", "text"])
})

test("creates a reference token with correct type", () => {
  const t = new ReferenceToken()
  is(t.type, "reference")
  is(t.id, "")
})

test("creates a keyword token with correct order of keys", () => {
  const t = new KeywordToken()
  const a = Object.keys(t)
  eq(a, ["type", "text"])
})

test("creates a keyword token with correct type", () => {
  const t = new KeywordToken()
  is(t.type, "keyword")
})

test("creates an identifier token with correct order of keys", () => {
  const t = new IdentifierToken()
  const a = Object.keys(t)
  eq(a, ["type", "text"])
})

test("creates an identifier token with correct type", () => {
  const t = new IdentifierToken()
  is(t.type, "identifier")
})

test("creates a decorator token with correct order of keys", () => {
  const t = new DecoratorToken()
  const a = Object.keys(t)
  eq(a, ["type", "text"])
})

test("creates a decorator token with correct type", () => {
  const t = new DecoratorToken()
  is(t.type, "decorator")
})

test.run()
