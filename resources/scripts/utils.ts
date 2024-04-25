import {readFile, writeFile} from "node:fs/promises"
import {createRequire} from "node:module"
import {basename, dirname, extname, format, join, parse} from "node:path"
import {libDir} from "../utils/basedir.ts"

const {resolve} = createRequire(import.meta.url)

/**
 * Appends a postfix to the file path.
 * @param {string} f The file path.
 * @param {string} p The postfix to append.
 * @returns {string} The updated file path with the postfix.
 */
export function appendPathPostfix(f, p) {
  const o = parse(f)
  const n = o.name
  o.name += `.${p}`
  o.base = o.base.replace(n, o.name)
  return format(o)
}

/**
 * @param {string} n
 * @returns {Promise<void>}
 */
export async function writeComponents(n) {
  const f = join(libDir(), `${n}.components.json`)
  const c = "{}"
  await writeFile(f, c, "utf-8")
}

/**
 * @param {string} r
 * @returns {Promise<void>}
 */
export async function createREST(r) {
  await writeTemplate("rest", r)
}

export async function writeCode(r) {
  await writeTemplate("code", r)
}

/**
 * @param {"code" | "rest"} n
 * @param {string} r
 */
export async function writeTemplate(n, r) {
  const f = resolve(`@onlyoffice/documentation-declarations-fixtures/${n}.ts`)
  let c = await readFile(f, "utf-8")
  c = c.replaceAll(`const RESOURCE = "${n}"`, `const RESOURCE = "${r}"`)
  const t = join(libDir(), `${r}.ts`)
  await writeFile(t, c, "utf-8")
}

/**
 * Capitalizes the first letter of each word in a string.
 * @param {string} s The input string.
 * @returns {string} The capitalized string.
 */
export function capitalizeTitle(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((w) => {
      return w.charAt(0).toUpperCase() + w.slice(1)
    })
    .join(" ")
}

/**
 * @param {string} s
 * @param {number} n
 * @returns {string}
 */
export function num(s, n) {
  const e = extname(s)
  return join(dirname(s), `${basename(s, e)}${n}${e}`)
}
