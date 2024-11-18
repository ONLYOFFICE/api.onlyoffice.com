import path from "node:path"
import {inspect} from "node:util"
import {Application, type JSONOutput as J} from "typedoc"
import {test} from "uvu"
import {createCollection} from "./internal2.ts"

test("900:", async () => {
  const o = await setup("900")
  console.log(inspect(o, {depth: null, colors: true}))
  console.log("\n\n")
  const [r] = await createCollection(o)
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
