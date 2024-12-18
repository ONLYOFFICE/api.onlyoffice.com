import {fromMarkdown} from "mdast-util-from-markdown"
import {toMarkdown} from "mdast-util-to-markdown"
import {test} from "uvu"
import {is} from "uvu/assert"
import {extractSection} from "./main.ts"

const sc: [string, string, string][] = [
  ["", "", ""],
  ["", "h", ""],
  ["h", "h", ""],
  ["## h", "h", ""],
  [j("## h", "a"), "h", "a"],
  [j("## H", "a"), "h", "a"],
  [j("## h", "a"), " h ", "a"],
  [j("## h", "a", "b"), "h", j("a", "b")],
  [j("## h", "a", "## h", "b"), "h", "a"],
  [j("# h", "a", "## h", "b"), "h", "b"],
]

for (const [a, h, e] of sc) {
  test(`extractSection(): selects section '${h}' from '${a}'`, () => {
    const x = fromMarkdown(a)
    const y = extractSection(h, x)

    let z = toMarkdown(y)
    if (z.endsWith("\n")) {
      z = z.slice(0, -1)
    }

    is(z, e)
  })
}

const rs: [string, string, string][] = [
  ["## h", "h", ""],
  [j("## h", "a", "## D", "d"), "h", j("## D", "d")],
  [j("## D", "d", "## h", "a"), "h", j("## D", "d")],
  [j("## D", "d", "## h", "a", "## E", "e"), "h", j("## D", "d", "## E", "e")],
]

for (const [a, h, e] of rs) {
  test(`extractSection(): removes section '${h}' from '${a}'`, () => {
    const x = fromMarkdown(a)

    extractSection(h, x)

    let z = toMarkdown(x)
    if (z.endsWith("\n")) {
      z = z.slice(0, -1)
    }

    is(z, e)
  })
}

test.run()

function j(...a: string[]): string {
  return a.join("\n\n")
}
