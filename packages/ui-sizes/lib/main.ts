import {mkdir, readFile, rm, writeFile} from "node:fs/promises"
import {existsSync} from "node:fs"
import {join} from "node:path"
import {argv} from "node:process"
import {URL, fileURLToPath} from "node:url"
import sade from "sade"
import {Sizes} from "./sizes.js"

function main(): void {
  sade("ui-sizes", true)
    .action(build)
    .parse(argv)
}

async function build(): Promise<void> {
  await prepare()
  const c = await readSizes()
  await writeStyles(c)
}

async function prepare(): Promise<void> {
  const rd = rootDir()
  const dd = distDir(rd)
  if (existsSync(dd)) {
    await rm(dd, {recursive: true})
  }
  await mkdir(dd)
}

async function readSizes(): Promise<Sizes> {
  const rd = rootDir()
  const dd = dataDir(rd)
  const ef = entryFile(dd)
  const ec = await readFile(ef, "utf8")
  return Sizes.fromYaml(ec)
}

async function writeStyles(c: Sizes): Promise<void> {
  const rd = rootDir()
  const dd = distDir(rd)
  const of = outputFile(dd)
  const oc = Sizes.toStyles(c)
  await writeFile(of, oc)
}

function rootDir(): string {
  const u = new URL("..", import.meta.url)
  return fileURLToPath(u)
}

function dataDir(d: string): string {
  return join(d, "data")
}

function entryFile(d: string): string {
  return join(d, "sizes.yml")
}

function distDir(d: string): string {
  return join(d, "dist")
}

function outputFile(d: string): string {
  return join(d, "main.css")
}

main()