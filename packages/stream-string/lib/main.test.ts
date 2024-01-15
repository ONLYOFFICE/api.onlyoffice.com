import {Readable} from "node:stream"
import {is} from "uvu/assert"
import {test} from "uvu"
import {StringReadable, StringWritable} from "./main.ts"

test("allows to write to writable", async () => {
  const s = new StringWritable()
  await new Promise((res, rej) => {
    Readable.from("hi").pipe(s)
    s.on("error", rej)
    s.on("finish", res)
  })
  is(s.buf, "hi")
})

test("creates readable from writable", () => {
  const w = new StringWritable("hi")
  const r = w.toReadable()
  is(r instanceof StringReadable, true)
  is(r.buf, "hi")
})

test("allows to read from readable", async () => {
  const s = new StringReadable("hi")
  let buf = ""
  await new Promise((res, rej) => {
    s.on("data", (ch) => {
      buf += String(ch)
    })
    s.on("error", rej)
    s.on("end", res)
  })
  is(buf, "hi")
})

test("creates writable from readable", () => {
  const r = new StringReadable("hi")
  const w = r.toWritable()
  is(w instanceof StringWritable, true)
  is(w.buf, "hi")
})

test.run()
