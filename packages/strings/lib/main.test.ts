import {equal as eq, is, unreachable as un} from "uvu/assert"
import {test} from "uvu"
import {
  cutPrefix,
  cutSuffix,
  isStringLiteral,
  substringPosition,
  uniqueString
} from "./main.ts"

test("cutPrefix(): returns an empty string when both strings are empty", () => {
  const s = cutPrefix("", "")
  is(s, "")
})

test("cutPrefix(): does not cut when a prefix is empty", () => {
  const s = cutPrefix("ab", "")
  is(s, "ab")
})

test("cutPrefix(): does not cut when the string does not start with a prefix", () => {
  const s = cutPrefix("ab", "c")
  is(s, "ab")
})

test("cutPrefix(): cuts when the string starts with a prefix", () => {
  const s = cutPrefix("ab", "a")
  is(s, "b")
})

test("cutPrefix(): cuts the length of the prefix when the string starts with a prefix", () => {
  const s = cutPrefix("aab", "a")
  is(s, "ab")
})

test("cutSuffix(): returns an empty string when both strings are empty", () => {
  const s = cutSuffix("", "")
  is(s, "")
})

test("cutSuffix(): does not cut when a suffix is empty", () => {
  const s = cutSuffix("ab", "")
  is(s, "ab")
})

test("cutSuffix(): does not cut when the string does not end with a suffix", () => {
  const s = cutSuffix("ab", "c")
  is(s, "ab")
})

test("cutSuffix(): cuts when the string ends with a suffix", () => {
  const s = cutSuffix("ab", "b")
  is(s, "a")
})

test("cutSuffix(): cuts the length of the suffix when the string ends with a suffix", () => {
  const s = cutSuffix("abb", "b")
  is(s, "ab")
})

test("isStringLiteral() returns false for an empty string", () => {
  const e = isStringLiteral("")
  is(e, false)
})

test("isStringLiteral() returns false for a string without quotes", () => {
  const e = isStringLiteral("s")
  is(e, false)
})

test("isStringLiteral() returns true for a string with double quotes", () => {
  const e = isStringLiteral('"s"')
  is(e, true)
})

test("isStringLiteral() returns true for a string with single quotes", () => {
  const e = isStringLiteral("'s'")
  is(e, true)
})

test("substringPosition(): returns the zero position for an empty string", () => {
  const r = substringPosition("", "")
  eq(r, [1, 0])
})

test("substringPosition(): returns the negative position for a string that does not contain the substring", () => {
  const r = substringPosition("foo", "bar")
  eq(r, [-1, -1])
})

test("substringPosition(): returns the position for a string that contains the substring", () => {
  const r = substringPosition("foo", "o")
  eq(r, [1, 1])
})

test("substringPosition(): returns the position for a multiline string that contains the substring", () => {
  const r = substringPosition("foo\nbar", "a")
  eq(r, [2, 1])
})

test("uniqueString(): generates a string", () => {
  const s = uniqueString()
  is(typeof s, "string")
})

test("uniqueString(): generates a string with 12 characters", () => {
  const s = uniqueString()
  is(s.length, 12)
})

test("uniqueString(): generates a unique string", () => {
  const t = new Set()
  for (let i = 0; i < 100_000; i += 1) {
    const s = uniqueString()
    if (t.has(s)) {
      un(`string ${s} already exists with ${i} iterations`)
      return
    }
    t.add(s)
  }
})

test.run()
