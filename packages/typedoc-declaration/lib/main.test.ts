import path from "node:path"
import {Application, type JSONOutput} from "typedoc"
import {test} from "uvu"

test("900:", async () => {
  const o = await setup("900")
  for (const c of o.children) {
    console.log(c)
    console.log(c.typeParameters)
    console.log(c.type)
  }
  // console.log(o.children[0].comment.blockTags[2].content)
})

test.run()

async function setup(s: string): Promise<JSONOutput.ProjectReflection> {
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
