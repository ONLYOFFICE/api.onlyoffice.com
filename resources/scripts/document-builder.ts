import {rm} from "node:fs/promises"
import {createWriteStream} from "node:fs"
import {join} from "node:path"
import {Readable} from "node:stream"
import {Cache, FirstIteration, SecondIteration, ThirdIteration} from "@onlyoffice/documentation-declarations-scripts/jsdoc.ts"
import {prettifyJSON} from "@onlyoffice/documentation-utils/jq.ts"
import StreamArray from "stream-json/streamers/StreamArray.js"
import Disassembler from "stream-json/Disassembler.js"
import Parser from "stream-json/Parser.js"
import Stringer from "stream-json/Stringer.js"
import {console} from "../utils/console.ts"
import {download} from "../utils/net.ts"
import {StringWritable, chain, createIndexes2} from "../utils/stream.ts"
import {writeCode} from "./utils.ts"

const config = [
  {
    name: "document-builder.document",
    variant: "master",
    source: {
      owner: "vanyauhalin",
      repo: "onlyoffice-document-builder-test",
      branch: "main",
      path: "document-builder/master/document.json"
    }
  },
  {
    name: "document-builder.form",
    variant: "master",
    source: {
      owner: "vanyauhalin",
      repo: "onlyoffice-document-builder-test",
      branch: "main",
      path: "document-builder/master/form.json"
    }
  },
  {
    name: "document-builder.presentation",
    variant: "master",
    source: {
      owner: "vanyauhalin",
      repo: "onlyoffice-document-builder-test",
      branch: "main",
      path: "document-builder/master/presentation.json"
    }
  },
  {
    name: "document-builder.spreadsheet",
    variant: "master",
    source: {
      owner: "vanyauhalin",
      repo: "onlyoffice-document-builder-test",
      branch: "main",
      path: "document-builder/master/spreadsheet.json"
    }
  },

  {
    name: "document-builder-plugin.common",
    variant: "master",
    source: {
      owner: "vanyauhalin",
      repo: "onlyoffice-document-builder-test",
      branch: "main",
      path: "document-builder-plugin/master/common.json"
    }
  },
  {
    name: "document-builder-plugin.document",
    variant: "master",
    source: {
      owner: "vanyauhalin",
      repo: "onlyoffice-document-builder-test",
      branch: "main",
      path: "document-builder-plugin/master/document.json"
    }
  },
  {
    name: "document-builder-plugin.form",
    variant: "master",
    source: {
      owner: "vanyauhalin",
      repo: "onlyoffice-document-builder-test",
      branch: "main",
      path: "document-builder-plugin/master/form.json"
    }
  },
  {
    name: "document-builder-plugin.presentation",
    variant: "master",
    source: {
      owner: "vanyauhalin",
      repo: "onlyoffice-document-builder-test",
      branch: "main",
      path: "document-builder-plugin/master/presentation.json"
    }
  },
  {
    name: "document-builder-plugin.spreadsheet",
    variant: "master",
    source: {
      owner: "vanyauhalin",
      repo: "onlyoffice-document-builder-test",
      branch: "main",
      path: "document-builder-plugin/master/spreadsheet.json"
    }
  }
]

export async function build(tempDir: string, distDir: string): Promise<void> {
  for (const c of config) {
    const m = JSON.stringify({name: c.name, variant: c.variant})
    console.log(`Start building '${m}'`)

    const w = new StringWritable()
    const u = sourceDownloadURL(c.source)
    await download(w, u)

    const cache = new Cache()
    cache.setup()

    await chain(
      w.toReadable(),
      new Parser(),
      new StreamArray(),
      new FirstIteration(cache),
      cache.toWritable()
    )
    cache.step()

    await chain(
      cache.toReadable(),
      new SecondIteration(cache),
      cache.toWritable()
    )
    cache.step()

    await chain(
      cache.toReadable(),
      new ThirdIteration(cache),
      cache.toWritable()
    )
    cache.step()

    const f = join(tempDir, `${c.name}.json`)

    await chain(
      Readable.from(cache.current.declarations),
      new Disassembler(),
      new Stringer({makeArray: true}),
      createWriteStream(f)
    )

    await Promise.all([
      (async () => {
        const t = join(distDir, `${c.name}.declarations.json`)
        await prettifyJSON(f, t)
      })(),

      (async () => {
        const n = `${c.name}.indexes.json`

        // todo: use cache.current.indexes
        const r = Readable.from(cache.current.declarations)
        const f = join(tempDir, n)
        await createIndexes2(r, f, "id")

        const t = join(distDir, n)
        await prettifyJSON(f, t)

        await rm(f)
      })()
    ])

    await rm(f)
    await writeCode(c.name)

    console.log(`Finish building '${m}'`)
  }
}

function sourceDownloadURL(s: typeof config[0]["source"]) {
  return `https://raw.githubusercontent.com/${s.owner}/${s.repo}/${s.branch}/${s.path}`
}
