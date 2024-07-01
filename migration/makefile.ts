import {mkdir, readFile, rm, writeFile} from "node:fs/promises"
import {existsSync} from "node:fs"
import {dirname, join} from "node:path"
import {URL, fileURLToPath} from "node:url"
import html from "node-html-parser"
import rehypeParse from "rehype-parse"
import rehypeRemark from "rehype-remark"
import remarkGfm from "remark-gfm"
import remarkStringify from "remark-stringify"
import {unified} from "unified"
import {visit} from "unist-util-visit"
import yaml from "yaml"

interface Page {
  from: string
  to: string
}

async function make(): Promise<void> {
  const cd = currentDir()
  const dd = distDir(cd)
  if (existsSync(dd)) {
    await rm(dd, {force: true, recursive: true})
  }
  await mkdir(dd, {recursive: true})
  const df = dataFile(cd)
  const dc = await readFile(df, "utf8")
  const ad = assetsDir(dd)
  await mkdir(ad)
  const da = yaml.parse(dc)
  const pd = pagesDir(dd)
  await mkdir(pd)
  for (const p of da) {
    console.log("Start pulling page:", p.from)
    await pullPage(ad, pd, p)
    console.log("End pulling page:", p.from)
  }
}

async function pullPage(ad: string, pd: string, p: Page): Promise<void> {
  const u = p.from.replace("https://api.onlyoffice.com/", "https://api.teamlab.info/")
  const r = await fetch(u)
  const t = await r.text()
  const h = html.parse(t)
  const d = join(pd, p.to)
  await mkdir(d, {recursive: true})
  const f = join(d, "index.md")
  let c = ""
  const e = h.querySelector(".layout-content")
  if (e) {
    const v = await unified()
      .use(rehypeParse)
      .use(rehypeRemark)
      .use(remarkGfm)
      .use(() => {
        return async (t) => {
          const a: Promise<void>[] = []
          visit(t, "heading", (n, i, p) => {
            if (n.depth === 1) {
              p.children.splice(i, 1)
            }
          })
          visit(t, "image", (n) => {
            console.log("Start pulling image:", n.url)
            const u = new URL(n.url, "https://api.teamlab.info/")
            const p = fetch(u)
              .then(async (r) => {
                const f = join(ad, u.pathname)
                const d = dirname(f)
                await mkdir(d, {recursive: true})
                const a = await r.arrayBuffer()
                const b = Buffer.from(a)
                await writeFile(f, b)
                return
              })
              .catch(console.error)
              .finally(() => {
                console.log("End pulling image:", n.url)
              })
            a.push(p)
          })
          await Promise.all(a)
        }
      })
      .use(remarkStringify)
      .process(e.toString())
    c = v.toString()
  }
  await writeFile(f, c, "utf8")
}

function currentDir(): string {
  const u = new URL(".", import.meta.url)
  return fileURLToPath(u)
}

function distDir(d: string): string {
  return join(d, "dist")
}

function assetsDir(d: string): string {
  return join(d, "assets")
}

function pagesDir(d: string): string {
  return join(d, "pages")
}

function dataFile(d: string): string {
  return join(d, "data.yml")
}

await make()
