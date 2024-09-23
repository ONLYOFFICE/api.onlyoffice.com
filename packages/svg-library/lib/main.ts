import {existsSync} from "node:fs"
import {mkdir, readFile, readdir, stat, writeFile} from "node:fs/promises"
import path from "node:path"
import {argv} from "node:process"
import {pascalCase} from "@onlyoffice/strings"
import {toJsxFile} from "@onlyoffice/svg-preact"
import sade from "sade"
import {Console} from "./console.ts"

const console = Console.shared

function main(): void {
  sade("svg-library <src> <dest>", true)
    .action(build)
    .parse(argv)
}

async function build(src: string, dest: string): Promise<void> {
  if (!existsSync(src)) {
    throw new Error(`Source directory does not exist: ${src}`)
  }
  console.log("Start building")
  await walk(src, dest)
  console.log("Build complete")
}

async function walk(src: string, dest: string): Promise<string[]> {
  const m: string[] = []

  if (!existsSync(dest)) {
    await mkdir(dest, {recursive: true})
  }

  const a = await readdir(src)

  for (const n of a) {
    const p = path.join(src, n)
    const s = await stat(p)

    if (s.isDirectory()) {
      const d = path.join(dest, n)
      const m = await walk(p, d)

      let c = ""
      for (const x of m) {
        c += `export {${x}} from "./${n}/${x}.tsx";\n`
      }
      if (c.length === 0) {
        continue
      }

      const f = path.join(dest, `${n}.tsx`)
      console.log(`Writing ${f}`)
      await writeFile(f, c)
      continue
    }

    const e = path.extname(n)
    if (e !== ".svg") {
      continue
    }

    const b = path.basename(n, e)
    const x = pascalCase(b)
    const o = path.join(dest, `${x}.tsx`)

    let c = await readFile(p, "utf8")
    c = await toJsxFile(x, c)

    console.log(`Writing ${o}`)
    await writeFile(o, c)

    m.push(x)
  }

  return m
}

main()
