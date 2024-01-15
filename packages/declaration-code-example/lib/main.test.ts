import {equal as eq, is} from "uvu/assert"
import {test} from "uvu"
import {example} from "./main.ts"

test("creates an example with correct order of keys", () => {
  const e = example()
  const a = Object.keys(e)
  eq(a, ["syntax", "code"])
})

test("creates an example with defaults", () => {
  const e = example()
  is(e.syntax, "")
  is(e.code, "")
})

test.run()
