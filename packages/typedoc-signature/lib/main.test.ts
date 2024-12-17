import {readdir} from "node:fs/promises"
import path from "node:path"
import {pipeline} from "node:stream"
import {promisify} from "node:util"
import {type Entity, GroupEntity} from "@onlyoffice/library-declaration/next.ts"
import {Transformer} from "@onlyoffice/typedoc-transformer"
import {Transport} from "@onlyoffice/typedoc-transport"
import {Application, type JSONOutput as J, type TypeDocOptions} from "typedoc"
import {test} from "uvu"
import {equal as eq} from "uvu/assert"
import {Console} from "./console.ts"
import {compute} from "./main.ts"

const pipe = promisify(pipeline)

test.before(() => {
  Console.shared.mute()
})

test.after(() => {
  Console.shared.unmute()
})

for (const f of await readdir("fixtures")) {
  const t = await setupTest(f)

  test(`${f}: ${t.name}`, async () => {
    const o = await setupReflection(f, t.options)

    const a = t.collection
    const e = await process(o)

    // TODO: handling cases where the equality test has not been met
    for (const x of a) {
      for (const y of e) {
        if (x instanceof GroupEntity || y instanceof GroupEntity) {
          continue // TODO
        }
        if (y.id === x.id) {
          eq(x.declaration.signature.verbose, y.declaration.signature.verbose)
        }
      }
    }
  })
}

test.run()

interface Test {
  name: string
  options: Partial<TypeDocOptions>
  collection: Entity[]
}

async function setupTest(n: string): Promise<Test> {
  const m = await import(`../fixtures/${n}/test.ts`)
  const t: Test = {name: m.name, options: {}, collection: m.collection}
  if (m.options) {
    t.options = m.options
  }
  return t
}

async function setupReflection(n: string, opts: Partial<TypeDocOptions>): Promise<J.ProjectReflection> {
  const d = path.join("fixtures", n)
  const e = path.join(d, "main.ts")
  const c = path.join(d, "tsconfig.json")

  const a = await Application.bootstrapWithPlugins({
    entryPoints: [e],
    logLevel: "None",
    name: path.basename(d),
    tsconfig: c,
    ...opts,
  })

  const p = await a.convert()
  if (!p) {
    throw new Error("Project is missing")
  }

  return a.serializer.projectToObject(p, d)
}

export async function process(o: J.ProjectReflection): Promise<Entity[]> {
  const tp = new Transport(o)
  const tf = new Transformer(tp)

  await pipe(tp.toReadable(), tf, tp.toWritable())

  compute(tp)
  return tp.entities
}
