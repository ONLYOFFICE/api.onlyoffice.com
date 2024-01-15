import {equal as eq, is} from "uvu/assert"
import {test} from "uvu"
import {template} from "./main.ts"

test("initializes a template with correct order of properties", () => {
  const t = template()
  const a = Object.keys(t)
  eq(a, ["type", "tagName", "properties", "children"])
})

test("initializes a template with defaults", () => {
  const t = template()
  is(t.type, "element")
  is(t.tagName, "template")
  eq(t.properties, {})
  eq(t.children, [])
})

test.run()
