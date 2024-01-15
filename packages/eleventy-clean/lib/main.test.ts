import {mkdir, rm, writeFile} from "node:fs/promises"
import {existsSync} from "node:fs"
import {join} from "node:path"
import process from "node:process"
import {URL, fileURLToPath} from "node:url"
import Eleventy from "@11ty/eleventy"
import {is} from "uvu/assert"
import {test} from "uvu"

test.before.each(() => {
  process.chdir(rootDir())
})

test("cleans an output directory with default paths", async () => {
  process.chdir("./fixtures")
  const e = new Eleventy()
  await mkdir(e.config.dir.output, {recursive: true})
  const f = join(e.config.dir.output, "robots.txt")
  await writeFile(f, "")
  await e.write()
  is(existsSync(f), false)
  await rm(e.config.dir.output, {recursive: true})
})

test("cleans an output directory with custom path to config file", async () => {
  const e = new Eleventy("./fixtures", "", {
    configPath: "./fixtures/eleventy.config.js"
  })
  await mkdir(e.config.dir.output, {recursive: true})
  const f = join(e.config.dir.output, "robots.txt")
  await writeFile(f, "")
  await e.write()
  is(existsSync(f), false)
  await rm(e.config.dir.output, {recursive: true})
})

test.skip("cleans an output directory with custom path to it", async () => {
  // todo: https://github.com/11ty/eleventy/issues/2729/
  const e = new Eleventy("./fixtures", "./fixtures/dist", {
    configPath: "./fixtures/eleventy.config.js"
  })
  await mkdir(e.config.dir.output, {recursive: true})
  const f = join(e.config.dir.output, "robots.txt")
  await writeFile(f, "")
  await e.write()
  is(existsSync(f), false)
  await rm(e.config.dir.output, {recursive: true})
})

test.run()

function rootDir(): string {
  const u = new URL("..", import.meta.url)
  return fileURLToPath(u)
}
