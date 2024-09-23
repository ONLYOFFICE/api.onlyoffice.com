import {existsSync} from "node:fs"
import {mkdir, readFile, readdir, rm, writeFile} from "node:fs/promises"
import path from "node:path"
import {argv} from "node:process"
import {URL, fileURLToPath} from "node:url"
import {pascalCase} from "@onlyoffice/strings"
import {toJsxFile} from "@onlyoffice/svg-preact"
import sade from "sade"

function main(): void {
  sade("ui-colors", true)
    .action(build)
    .parse(argv)
}

async function build(): Promise<void> {
  const rd = rootDir()

  const dd = distDir(rd)
  if (existsSync(dd)) {
    await rm(dd, {recursive: true})
  }

  await mkdir(dd)

  const sd = staticDir(rd)

  for (const vn of ["poor", "rich"]) {
    const dv = path.join(dd, vn)
    if (!existsSync(dv)) {
      await mkdir(dv)
    }

    const vd = path.join(sd, vn)
    const ls = await readdir(vd)

    for (const sn of ls) {
      const ds = path.join(dv, sn)
      if (!existsSync(ds)) {
        await mkdir(ds)
      }

      const se: string[] = []

      const sd = path.join(vd, sn)
      const lh = await readdir(sd)

      for (const hn of lh) {
        const he = path.extname(hn)
        let n = path.basename(hn, he)
        n = pascalCase(n)
        n += "Icon"

        let f = path.join(sd, hn)
        let c = await readFile(f, "utf8")
        c = await toJsxFile(n, c)

        f = path.join(ds, `${n}.tsx`)
        await writeFile(f, c)

        se.push(n)
      }

      let c = ""
      for (const n of se) {
        c += `export {${n}} from "./${sn}/${n}.tsx";\n`
      }

      const f = path.join(dv, `${sn}.tsx`)
      await writeFile(f, c)
    }
  }
}

function rootDir(): string {
  const u = new URL("..", import.meta.url)
  return fileURLToPath(u)
}

function distDir(d: string): string {
  return path.join(d, "dist")
}

function staticDir(d: string): string {
  return path.join(d, "static")
}

main()
