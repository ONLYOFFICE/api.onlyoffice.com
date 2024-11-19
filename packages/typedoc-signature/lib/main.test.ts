import path from "node:path"
import {type Entity} from "@onlyoffice/library-declaration/next.ts"
import {Application, type JSONOutput as J} from "typedoc"
import {test} from "uvu"
import {equal as eq} from "uvu/assert"
import {compute} from "./main.ts"

test("900: ?", async () => {
  const [t, ac, ec] = await setup("900")

  for (const e of ac) {
    compute(t, e)
  }

  eq(ac, ec)
})

test.run()

async function setup(s: string): Promise<[J.ProjectReflection, Entity[], Entity[]]> {
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

  const o = a.serializer.projectToObject(p, d)

  const x = await import(`../fixtures/${s}/actual.ts`)
  const y = await import(`../fixtures/${s}/expected.ts`)

  return [o, x.collection, y.collection]
}
