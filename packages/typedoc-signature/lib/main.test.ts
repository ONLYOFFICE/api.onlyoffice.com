import path from "node:path"
import {type Entity} from "@onlyoffice/library-declaration/next.ts"
import {process} from "@onlyoffice/typedoc-declaration"
import {Application, type JSONOutput as J} from "typedoc"
import {test} from "uvu"
import {equal as eq} from "uvu/assert"
import {compute} from "./main.ts"

/*
test("902: ?", async () => {
  const [t, ac, ec] = await setup("902")

  for (const e of ac) {
    compute(t, e)
  }

  eq(ac, ec)
})

test("903: ?", async () => {
  const [t, ac, ec] = await setup("903")

  for (const e of ac) {
    compute(t, e)
  }

  eq(ac, ec)
})

test("905: ?", async () => {
  const [t, ac, ec] = await setup("905")

  for (const e of ac) {
    compute(t, e)
  }

  eq(ac, ec)
})
*/

test("906: ?", async () => {
  const [t, ac, ec] = await setup("906")

  for (const x of ac) {
    for (const y of ec) {
      if (y.id === x.id) {
        compute(t, x)
        if ("declaration" in x && "declaration" in y) {
          eq(x.declaration.signature.verbose, y.declaration.signature.verbose)
        }
      }
    }
  }
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
  const ac = await process(o)
  const y = await import(`../fixtures/${s}/expected.ts`)

  return [o, ac, y.collection]
}
