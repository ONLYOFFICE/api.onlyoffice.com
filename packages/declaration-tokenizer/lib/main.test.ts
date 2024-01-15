import {equal as eq, is} from "uvu/assert"
import {test} from "uvu"
import {
  decoratorToken,
  identifierToken,
  keywordToken,
  referenceToken,
  textToken,
  tokenNode
} from "./main.ts"

test("creates a token node with correct order of keys", () => {
  const n = tokenNode()
  const a = Object.keys(n)
  eq(a, ["type", "text"])
})

test("creates a token node with defaults", () => {
  const n = tokenNode()
  is(n.type, "")
  is(n.text, "")
})

test("creates a text token with correct order of keys", () => {
  const n = tokenNode()
  const t = textToken(n)
  const a = Object.keys(t)
  eq(a, ["type", "text"])
})

test("creates a text token with correct type", () => {
  const n = tokenNode()
  const t = textToken(n)
  is(t.type, "text")
})

test("creates a reference token with correct order of keys", () => {
  const n = tokenNode()
  const t = referenceToken(n)
  const a = Object.keys(t)
  eq(a, ["type", "text", "id"])
})

test("creates a reference token with correct type", () => {
  const n = tokenNode()
  const t = referenceToken(n)
  is(t.type, "reference")
  is(t.id, "")
})

test("creates a keyword token with correct order of keys", () => {
  const n = tokenNode()
  const t = keywordToken(n)
  const a = Object.keys(t)
  eq(a, ["type", "text"])
})

test("creates a keyword token with correct type", () => {
  const n = tokenNode()
  const t = keywordToken(n)
  is(t.type, "keyword")
})

test("creates an identifier token with correct order of keys", () => {
  const n = tokenNode()
  const t = identifierToken(n)
  const a = Object.keys(t)
  eq(a, ["type", "text"])
})

test("creates an identifier token with correct type", () => {
  const n = tokenNode()
  const t = identifierToken(n)
  is(t.type, "identifier")
})

test("creates a decorator token with correct order of keys", () => {
  const n = tokenNode()
  const t = decoratorToken(n)
  const a = Object.keys(t)
  eq(a, ["type", "text"])
})

test("creates a decorator token with correct type", () => {
  const n = tokenNode()
  const t = decoratorToken(n)
  is(t.type, "decorator")
})

test.run()
