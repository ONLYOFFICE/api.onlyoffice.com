import {is} from "uvu/assert"
import {test} from "uvu"
import {firstParagraph, firstSentence, selectSection} from "./main.ts"

test("firstParagraph() returns an empty string for an empty content", () => {
  const e = firstParagraph("")
  is(e, "")
})

test("firstParagraph() returns a first paragraph for a content with a single paragraph", () => {
  const e = firstParagraph("a")
  is(e, "a")
})

test("firstParagraph() returns a first paragraph for a content with multiple paragraphs", () => {
  const e = firstParagraph("a\n\nb")
  is(e, "a")
})

test("firstParagraph() returns a first paragraph for a content with a heading", () => {
  const e = firstParagraph("# h\n\na\n\nb")
  is(e, "a")
})

test("selectSection() returns an empty string for an empty title", () => {
  const e = selectSection("", "c")
  is(e, "")
})

test("selectSection() returns an empty string for an empty content", () => {
  const e = selectSection("t", "")
  is(e, "")
})

test("selectSection() returns an empty string for a title not found in the content", () => {
  const e = selectSection("t", "c")
  is(e, "")
})

test("selectSection() returns a section for a title found in the content", () => {
  const e = selectSection("t", "## t\n\nc")
  is(e, "c")
})

test("selectSection() returns a section for a title found in the content with multiple sections", () => {
  const e = selectSection("t", "## t\n\nc\n\n## g\n\nd")
  is(e, "c")
})

test("selectSection() returns the first section for a title found multiple times in the content", () => {
  const e = selectSection("t", "## t\n\nc\n\n## t\n\nd")
  is(e, "c")
})

test("firstSentence() returns an empty string for an empty content", () => {
  const e = firstSentence("")
  is(e, "")
})

test("firstSentence() returns a first sentence for a content with a single sentence", () => {
  const e = firstSentence("a.")
  is(e, "a.")
})

test("firstSentence() returns a first sentence for a content with multiple sentences", () => {
  const e = firstSentence("a. b.")
  is(e, "a.")
})

test.run()
