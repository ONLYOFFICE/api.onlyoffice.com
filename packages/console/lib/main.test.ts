import {StringWritable} from "@onlyoffice/stream-string"
import {is, match} from "uvu/assert"
import {test} from "uvu"
import {Console} from "./main.ts"

test("logs to stdout", () => {
  const o = new StringWritable()
  const e = new StringWritable()
  const c = new Console("", o, e)
  c.log("")
  const r = reg(" info: ")
  match(o.buf, r)
  is(e.buf, "")
})

test("logs a string", () => {
  const s = new StringWritable()
  const c = new Console("", s, s)
  c.log("hello")
  const r = reg(" info: hello")
  match(s.buf, r)
})

test("warns to stderr", () => {
  const o = new StringWritable()
  const e = new StringWritable()
  const c = new Console("", o, e)
  c.warn("")
  is(o.buf, "")
  const r = reg(" warn: ")
  match(e.buf, r)
})

test("warns a string", () => {
  const s = new StringWritable()
  const c = new Console("", s, s)
  c.warn("hello")
  const r = reg(" warn: hello")
  match(s.buf, r)
})

test("errors to stderr", () => {
  const o = new StringWritable()
  const e = new StringWritable()
  const c = new Console("", o, e)
  c.error("")
  is(o.buf, "")
  const r = reg(" error: ")
  match(e.buf, r)
})

test("errors a string", () => {
  const s = new StringWritable()
  const c = new Console("", s, s)
  c.error("hello")
  const r = reg(" error: hello")
  match(s.buf, r)
})

test.run()

function reg(s: string): RegExp {
  return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z ${s}\n$`)
}
