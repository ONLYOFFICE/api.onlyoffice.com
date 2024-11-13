import {test} from "uvu"
import {equal as eq, is} from "uvu/assert"
import * as errors from "./errors.ts"
import {Document} from "./internal.ts"

test("Document: creates a Document with default values", () => {
  const e = new Document()
  const k = Object.keys(e)
  eq(k, ["summary", "description", "examples"])
  is(e.summary, "")
  is(e.description, "")
  is(e.examples, "")
})

test("Document.from(): creates a Document from an empty JSONOutput.Comment", async () => {
  const [a, err] = await Document.from({summary: []})
  is(err, undefined)

  const e = new Document()
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment with a summary of a single node", async () => {
  const [a, err] = await Document.from({
    summary: [
      {kind: "text", text: "a. b"},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.summary = "a."
  e.description = "a. b"
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment with a summary of multiple nodes", async () => {
  const [a, err] = await Document.from({
    summary: [
      {kind: "text", text: "a\n\n"},
      {kind: "code", text: "```ts\nb\n```"},
      {kind: "text", text: "\n\nc"},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.summary = "a."
  e.description = "a\n\n```ts\nb\n\n```\n\nc"
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment with a single @summary block tag", async () => {
  const [a, err] = await Document.from({
    summary: [],
    blockTags: [
      {tag: "@summary", content: [{kind: "text", text: "a"}]},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.summary = "a."
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment with a first @summary block tag only", async () => {
  const [a, err] = await Document.from({
    summary: [],
    blockTags: [
      {tag: "@summary", content: [{kind: "text", text: "a"}]},
      {tag: "@summary", content: [{kind: "text", text: "b"}]},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.summary = "a."
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment preferring @summary block tag over summary nodes", async () => {
  const [a, err] = await Document.from({
    summary: [
      {kind: "text", text: "a"},
    ],
    blockTags: [
      {tag: "@summary", content: [{kind: "text", text: "b"}]},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.summary = "b."
  e.description = "a"
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment with a single @example block tag", async () => {
  const [a, err] = await Document.from({
    summary: [],
    blockTags: [
      {tag: "@example", content: [{kind: "text", text: "a"}]},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.examples = "a"
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment with multiple @example block tags", async () => {
  const [a, err] = await Document.from({
    summary: [],
    blockTags: [
      {tag: "@example", content: [{kind: "text", text: "a"}]},
      {tag: "@example", content: [{kind: "text", text: "b"}]},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.examples = "ab"
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment stripping HTML tags from summary nodes", async () => {
  const [a, err] = await Document.from({
    summary: [
      {kind: "text", text: "a<b>b</b>c"},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.summary = "abc."
  e.description = "abc"
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment stripping HTML tags from @summary block tag", async () => {
  const [a, err] = await Document.from({
    summary: [],
    blockTags: [
      {tag: "@summary", content: [{kind: "text", text: "a<b>b</b>c"}]},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.summary = "abc."
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment stripping HTML tags from @example block tag", async () => {
  const [a, err] = await Document.from({
    summary: [],
    blockTags: [
      {tag: "@example", content: [{kind: "text", text: "a<b>b</b>c"}]},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.examples = "abc"
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment linting fenced code blocks in summary nodes", async () => {
  const [a, err] = await Document.from({
    summary: [
      {kind: "code", text: "```ts\n'hi'\n```"},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.description = '```ts\n"hi"\n\n```'
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment linting fenced code blocks in @summary block tag", async () => {
  const [a, err] = await Document.from({
    summary: [],
    blockTags: [
      {tag: "@summary", content: [{kind: "code", text: "```ts\n'hi'\n```"}]},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.summary = '```ts\n"hi"\n\n```.'
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment linting fenced code blocks in @example block tag", async () => {
  const [a, err] = await Document.from({
    summary: [],
    blockTags: [
      {tag: "@example", content: [{kind: "code", text: "```ts\n'hi'\n```"}]},
    ],
  })
  is(err, undefined)

  const e = new Document()
  e.examples = '```ts\n"hi"\n\n```'
  eq(a, e)
})

test("Document.from(): creates a Document from a JSONOutput.Comment with an error if a block tag is not supported", async () => {
  const [a, err] = await Document.from({
    summary: [],
    blockTags: [
      {tag: "@unknown", content: []},
    ],
  })

  const ae = errors.split(err)
  const er = new Error("The block tag '@unsupported' is not supported.")
  eq(ae, [er])

  const e = new Document()
  eq(a, e)
})

test.run()
