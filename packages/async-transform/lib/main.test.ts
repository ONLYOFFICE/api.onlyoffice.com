import {Readable, pipeline} from "node:stream"
import {setTimeout} from "node:timers/promises"
import {promisify} from "node:util"
import {StringWritable} from "@onlyoffice/stream-string"
import {is, unreachable} from "uvu/assert"
import {test} from "uvu"
import {AsyncTransform} from "./main.ts"

test("throws an error if _atransform is not implemented", async () => {
  try {
    const t = new AsyncTransform()
    await t._atransform(null)
    unreachable("Expected an error to be thrown")
  } catch (e) {
    is(e instanceof Error && e.message, "Not implemented")
  }
})

test("transforms chunks asynchronously", async () => {
  const r = Readable.from("there")
  const w = new StringWritable()
  const t = new class extends AsyncTransform {
    async _atransform(ch: unknown): Promise<void> {
      await setTimeout(0)
      this.push("hi ")
      this.push(ch)
    }
  }()
  const p = promisify(pipeline)
  await p(r, t, w)
  is(w.buf, "hi there")
})

test.run()
