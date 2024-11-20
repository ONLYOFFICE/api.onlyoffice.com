import path from "node:path"
import {inspect} from "node:util"
import {Application, type JSONOutput as J} from "typedoc"
import {test} from "uvu"
// import {Console} from "./console.ts"
import {process} from "./internal.ts"

// const console = Console.shared.copy()

// test.before(() => {
//   Console.shared.mute()
// })

// test.after(() => {
//   Console.shared.restore(console)
// })

test("900:", async () => {
  const o = await setup("900")
  console.log(inspect(o, {depth: null, colors: true}))
  console.log("\n\n")
  const r = await process(o)
  console.log("\n\n")
  console.log(inspect(r, {depth: null, colors: true}))
})

test.run()

async function setup(s: string): Promise<J.ProjectReflection> {
  const d = path.join("fixtures", s)
  const e = path.join(d, "main.ts")
  const c = path.join(d, "tsconfig.json")

  const a = await Application.bootstrapWithPlugins({
    entryPoints: [e],
    readme: "none",
    tsconfig: c,
  })

  const p = await a.convert()
  if (!p) {
    throw new Error("Project is missing")
  }

  return a.serializer.projectToObject(p, d)
}
