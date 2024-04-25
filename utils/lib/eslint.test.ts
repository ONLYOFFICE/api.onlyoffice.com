import {is} from "uvu/assert"
import {test} from "uvu"
import {ESLint} from "./eslint.ts"

test("lintText() lints JavaScript source", async () => {
  const e = new ESLint()
  const [r] = await e.lintText("var x = 1", {filePath: "example.js"})
  is(r.output, "const x = 1")
})

test("lintText() lints JSON source", async () => {
  const e = new ESLint()
  const [r] = await e.lintText("{'x': 1}", {filePath: "example.json"})
  is(r.output, '{"x": 1}')
})

test.run()
