/* eslint-disable @typescript-eslint/no-unused-vars */

// The functions for working with the collection are far from efficient.
// However, they are also not the primary bottleneck in the entire
// documentation. Therefore, optimizing them may not be worthwhile.

import * as errors from "@onlyoffice/errors"
import * as L from "@onlyoffice/library-declaration/next.ts"
import {eslint} from "@onlyoffice/mdast-util-eslint"
import {firstSentence} from "@onlyoffice/mdast-util-first-sentence"
import {type Result} from "@onlyoffice/result"
import {
  isCallSignatureReflection,
  isConstructorReflection,
  isConstructorSignatureReflection,
  isContainerReflection,
  isDeclarationReflection,
  isEnumReflection,
  isFunctionReflection,
  isMethodReflection,
  isParameterReflection,
  isPropertyReflection,
  isSignatureReflection,
} from "@onlyoffice/typedoc-util-is-reflection"
import {fromMarkdown} from "mdast-util-from-markdown"
import {toMarkdown} from "mdast-util-to-markdown"
import remarkStripHtml from "remark-strip-html"
import {type JSONOutput as J, ReflectionKind} from "typedoc"
import {Console} from "./console.ts"

const console = Console.shared

export const groups: Record<string, number> = {
  "Classes": 0,
  "Interfaces": 1,
  "Type Aliases": 2,
  "Enumerations": 3,
  "Variables": 4,
  "Functions": 5,
  "Constructors": 6,
  "Type Properties": 7,
  "Type Methods": 8,
  "Instance Properties": 9,
  "Instance Methods": 10,
}

export type Entity = Group | Declaration
export type Item = Entity | Fragment
export type E = Error | undefined
export type R<T> = Promise<Result<T, Error>>

export async function process(o: J.Reflection): Promise<L.Entity[]> {
  let err: E
  const c: Item[] = []

  const ctx = new Context()

  ctx.v.in()
  ctx.v.push(0)

  const [d, de] = await Declaration.from(o)
  err = errors.join(err, de)
  d.trail.virtual = ctx.v.trail
  d.trail.real = ctx.r.trail
  c.push(d)

  const [tc, te] = await processItems(ctx, o)
  err = errors.join(err, te)
  c.push(...tc)

  ctx.v.pop()
  ctx.v.out()

  const r = shakeItems(o, c)
  return convertItems(r)
}

export async function processItems(ctx: Context, o: J.Reflection): R<Item[]> {
  console.log(`Start processing the #${o.id} reflection`)

  let err: E
  const c: Item[] = []

  ctx.v.in()
  ctx.r.in()

  const [gc, ge] = await processGroups(ctx, o)
  err = errors.join(err, ge)
  c.push(...gc)

  if (isSignatureReflection(o) && o.parameters) {
    for (const [i, r] of o.parameters.entries()) {
      for (const [i, g] of gc.entries()) {
        if (g.sourceChildren.includes(r.id)) {
          ctx.v.push(i)
          ctx.v.in()
          break
        }
      }

      ctx.v.push(i)
      ctx.r.push(i)

      const [f, fe] = await Fragment.from(r)
      err = errors.join(err, fe)
      f.trail.virtual = ctx.v.trail
      f.trail.real = ctx.r.trail
      c.push(f)

      const [tc, te] = await processItems(ctx, r)
      err = errors.join(err, te)
      c.push(...tc)

      ctx.r.pop()
      ctx.v.pop()

      for (const g of gc) {
        if (g.sourceChildren.includes(r.id)) {
          ctx.v.out()
          ctx.v.pop()
          break
        }
      }
    }
  }

  if (isDeclarationReflection(o) && o.signatures) {
    for (const [i, r] of o.signatures.entries()) {
      for (const [i, g] of gc.entries()) {
        if (g.sourceChildren.includes(r.id)) {
          ctx.v.push(i)
          ctx.v.in()
          break
        }
      }

      ctx.v.push(i)
      ctx.r.push(i)

      const [d, de] = await Declaration.from(r)
      err = errors.join(err, de)
      d.trail.virtual = ctx.v.trail
      d.trail.real = ctx.r.trail
      c.push(d)

      const [tc, te] = await processItems(ctx, r)
      err = errors.join(err, te)
      c.push(...tc)

      ctx.r.pop()
      ctx.v.pop()

      for (const g of gc) {
        if (g.sourceChildren.includes(r.id)) {
          ctx.v.out()
          ctx.v.pop()
          break
        }
      }
    }
  }

  if (isContainerReflection(o) && o.children) {
    for (const [i, r] of o.children.entries()) {
      for (const [i, g] of gc.entries()) {
        if (g.sourceChildren.includes(r.id)) {
          ctx.v.push(i)
          ctx.v.in()
          break
        }
      }

      ctx.v.push(i)
      ctx.r.push(i)

      const [d, de] = await Declaration.from(r)
      err = errors.join(err, de)
      d.trail.virtual = ctx.v.trail
      d.trail.real = ctx.r.trail
      c.push(d)

      const [tc, te] = await processItems(ctx, r)
      err = errors.join(err, te)
      c.push(...tc)

      ctx.r.pop()
      ctx.v.pop()

      for (const g of gc) {
        if (g.sourceChildren.includes(r.id)) {
          ctx.v.out()
          ctx.v.pop()
          break
        }
      }
    }
  }

  ctx.r.out()
  ctx.v.out()

  console.log(`Finish processing the #${o.id} reflection`)

  return [c, err]
}

export async function processGroups(ctx: Context, o: J.Reflection): R<Group[]> {
  let err: E
  const c: Group[] = []

  if (!isContainerReflection(o)) {
    return [c, err]
  }

  let i = 0

  if (o.categories) {
    for (const r of o.categories) {
      const [n, ne] = await Group.from(r)
      err = errors.join(err, ne)

      // todo: add a test case to prove this
      // If an entity contains a custom category and has a child entity that
      // is not included in any category, the latter will be added to the
      // "Other" built-in category. This category cannot be added manually.

      if (n.name === "Other") {
        continue
      }

      if (n.sourceChildren.length !== 0) {
        const i = next()
        n.trail.virtual = ctx.v.with(i)
        c.push(n)
      }
    }
  }

  const a: Group[] = []

  if (o.groups) {
    for (const r of o.groups) {
      const [n, ne] = await Group.from(r)
      err = errors.join(err, ne)

      if (n.sourceChildren.length !== 0) {
        const i = next()
        n.trail.virtual = ctx.v.with(i)
        a.push(n)
      }
    }
  }

  const p = new Group()
  p.name = "Type Properties"

  const m = new Group()
  m.name = "Type Methods"

  if (o.children) {
    for (const r of o.children) {
      if (isPropertyReflection(r)) {
        if (r.flags.isStatic) {
          p.sourceChildren.push(r.id)
        }
        continue
      }

      if (isMethodReflection(r)) {
        if (r.flags.isStatic) {
          m.sourceChildren.push(r.id)
        }
        continue
      }
    }
  }

  if (p.sourceChildren.length !== 0) {
    const i = next()
    p.trail.virtual = ctx.v.with(i)
    a.push(p)
  }

  if (m.sourceChildren.length !== 0) {
    const i = next()
    m.trail.virtual = ctx.v.with(i)
    a.push(m)
  }

  const b: Group[] = []

  for (const x of a) {
    for (const y of c) {
      for (const c of y.sourceChildren) {
        const i = x.sourceChildren.indexOf(c)
        if (i !== -1) {
          x.sourceChildren.splice(i, 1)
        }
      }
    }

    if (x.sourceChildren.length !== 0) {
      b.push(x)
    }
  }

  for (const x of b) {
    let f = false

    for (let i = 0; i < c.length; i += 1) {
      const y = c[i]

      const a = groups[x.name]
      const b = groups[y.name]

      if (a < b) {
        f = true
        c.splice(i, 0, x)
        break
      }
    }

    if (!f) {
      c.push(x)
    }
  }

  return [c, err]

  function next(): number {
    const j = i
    i += 1
    return j
  }
}

export function shakeItems(o: J.Reflection, c: Item[]): Entity[] {
  const rc: Entity[] = []
  const tc: Item[] = []

  const g = new Group()
  tc.push(g)

  let i = 0

  for (const t of c) {
    f0(t)
    f1(t)
    tc.push(t)
    f4(t)
  }

  while (true) {
    const p = tc[tc.length - 1]

    if (p === g) {
      break
    }

    tc.pop()
    f3(p)
  }

  return rc

  function f0(t: Item): void {
    if (t instanceof Group) {
      t.id = next()
      return
    }

    if (t instanceof Declaration && isContainer(t)) {
      return
    }

    if (t instanceof Declaration) {
      t.id = next()
      return
    }

    if (t instanceof Fragment) {
      return
    }

    throw new Error("Unknown item")
  }

  function f1(t: Item): void {
    if (t instanceof Group) {
      const cd = trailDepth(t.trail.virtual)

      while (true) {
        const p = tc[tc.length - 1]
        const pd = trailDepth(p.trail.virtual)

        if (cd < pd && p !== g) {
          tc.pop()
          f3(p)
          continue
        }

        break
      }

      return
    }

    if (t instanceof Declaration) {
      const cd = trailDepth(t.trail.virtual)

      while (true) {
        const p = tc[tc.length - 1]
        const pd = trailDepth(p.trail.virtual)

        if (cd <= pd && p !== g) {
          tc.pop()
          f3(p)
          continue
        }

        break
      }

      return
    }

    if (t instanceof Fragment) {
      const cd = trailDepth(t.trail.virtual)

      while (true) {
        const p = tc[tc.length - 1]
        const pd = trailDepth(p.trail.virtual)

        if (cd <= pd && p !== g) {
          tc.pop()
          f3(p)
          continue
        }

        break
      }

      return
    }

    throw new Error("Unknown item")
  }

  function f3(t: Item): void {
    if (t instanceof Group) {
      for (let i = tc.length - 1; i >= 0; i -= 1) {
        const p = tc[i]

        if (p instanceof Group) {
          continue
        }

        if (p instanceof Fragment) {
          throw new Error("how?")
        }

        t.parentId = p.id
        p.children.unshift(t.id)
        break
      }

      return
    }

    if (t instanceof Declaration && t.id === -1) {
      for (let i = tc.length - 1; i >= 0; i -= 1) {
        const p = tc[i]

        if (p instanceof Fragment) {
          throw new Error("how?")
        }

        if (!p.sourceChildren.includes(t.sourceId)) {
          continue
        }

        for (const c of t.children) {
          const r = rc[c]
          r.parentId = p.id
        }

        p.children.push(...t.children)
        break
      }

      return
    }

    if (t instanceof Declaration) {
      for (let i = tc.length - 1; i >= 0; i -= 1) {
        const p = tc[i]

        if (p instanceof Fragment) {
          throw new Error("how?")
        }

        if (!p.sourceChildren.includes(t.sourceId)) {
          continue
        }

        t.parentId = p.id
        p.children.push(t.id)
        break
      }

      return
    }

    if (t instanceof Fragment) {
      for (let i = tc.length - 1; i >= 0; i -= 1) {
        const p = tc[i]

        if (p instanceof Group) {
          throw new Error("how?")
        }

        if (p instanceof Fragment) {
          throw new Error("how?")
        }

        if (!p.sourceChildren.includes(t.sourceId)) {
          continue
        }

        const s = resolveTrail(o, p.trail.real)

        if (!s) {
          throw new Error(`The trail '${p.trail.real}' could not be resolved`)
        }

        if (
          isCallSignatureReflection(s) ||
          isConstructorSignatureReflection(s)
        ) {
          p.parameters.push(t)
          break
        }

        throw new Error("how?")
      }

      return
    }

    throw new Error("Unknown item")
  }

  function f4(t: Item): void {
    if (t instanceof Group) {
      rc.push(t)
      return
    }

    if (t instanceof Declaration && t.id === -1) {
      return
    }

    if (t instanceof Declaration) {
      rc.push(t)
      return
    }

    if (t instanceof Fragment) {
      return
    }

    throw new Error("Unknown item")
  }

  function isContainer(t: Declaration): boolean {
    const s = resolveTrail(o, t.trail.real)

    if (!s) {
      throw new Error(`The trail '${t.trail.real}' could not be resolved`)
    }

    return isFunctionReflection(s) ||
      isConstructorReflection(s) ||
      isMethodReflection(s)
  }

  function next(): number {
    const j = i
    i += 1
    return j
  }
}

export function convertItems(c: Entity[]): L.Entity[] {
  const r: L.Entity[] = []

  for (const t of c) {
    const e = t.to()
    r.push(e)
  }

  return r
}

export class Group {
  id = -1
  name = ""
  trail = new Trail()
  narrative = new Narrative()
  parentId = -1
  children: number[] = []
  sourceChildren: number[] = []

  static async from(o: J.ReflectionGroup | J.ReflectionCategory): R<Group> {
    let err: E
    const g = new Group()

    g.name = o.title

    if (o.description) {
      const [n, ne] = await Narrative.from(o.description)
      err = errors.join(ne)
      g.narrative = n
    }

    if (o.children) {
      for (const c of o.children) {
        g.sourceChildren.push(c)
      }
    }

    return [g, err]
  }

  to(): L.GroupEntity {
    const g = new L.Group()
    g.name = this.name
    g.description = this.narrative.description

    const e = new L.GroupEntity()
    e.id = this.id
    e.parentId = this.parentId

    for (const c of this.children) {
      e.children.push(c)
    }

    e.group = g

    return e
  }
}

export class Declaration {
  id = -1
  sourceId = -1
  name = ""
  trail = new Trail()
  narrative = new Narrative()
  properties: Fragment[] = []
  members: Fragment[] = []
  parameters: Fragment[] = []
  parentId = -1
  children: number[] = []
  sourceChildren: number[] = []

  static async from(o: J.Reflection): R<Declaration> {
    let err: E
    const d = new Declaration()

    d.sourceId = o.id
    d.name = o.name

    if (o.comment) {
      const [n, ne] = await Narrative.from(o.comment)
      err = errors.join(ne)
      d.narrative = n
    }

    if (isSignatureReflection(o) && o.parameters) {
      for (const r of o.parameters) {
        d.sourceChildren.push(r.id)
      }
    }

    if (isDeclarationReflection(o) && o.signatures) {
      for (const r of o.signatures) {
        d.sourceChildren.push(r.id)
      }
    }

    if (isContainerReflection(o) && o.children) {
      for (const r of o.children) {
        d.sourceChildren.push(r.id)
      }
    }

    return [d, err]
  }

  to(): L.DeclarationEntity {
    const d = new L.Declaration()
    d.name = this.name
    d.trail = this.trail.real
    d.summary = this.narrative.summary
    d.description = this.narrative.description

    for (const f of this.properties) {
      const t = f.to()
      d.properties.push(t)
    }

    for (const f of this.members) {
      const t = f.to()
      d.members.push(t)
    }

    for (const f of this.parameters) {
      const t = f.to()
      d.parameters.push(t)
    }

    d.returns.description = this.narrative.returns
    d.examples = this.narrative.examples

    const e = new L.DeclarationEntity()
    e.id = this.id
    e.parentId = this.parentId

    for (const c of this.children) {
      e.children.push(c)
    }

    e.declaration = d

    return e
  }
}

export class Fragment {
  sourceId = -1
  name = ""
  trail = new Trail()
  default = ""
  narrative = new Narrative()

  static async from(o: J.Reflection): R<Fragment> {
    if (isDeclarationReflection(o)) {
      return await this.fromDeclarationReflection(o)
    }

    if (isParameterReflection(o)) {
      return await this.fromParameterReflection(o)
    }

    const e = new Error(`The creation of a fragment from the '${kindToString(o.kind)}' reflection is not supported`)
    return [new Fragment(), e]
  }

  static async fromDeclarationReflection(o: J.DeclarationReflection): R<Fragment> {
    return await this.fromReflection(o)
  }

  static async fromParameterReflection(o: J.ParameterReflection): R<Fragment> {
    const [f, fe] = await Fragment.fromReflection(o)

    if (o.defaultValue !== undefined) {
      // todo: if (isStringLiteral(o.defaultValue)) {}
      f.default = o.defaultValue
    }

    return [f, fe]
  }

  static async fromReflection(o: J.Reflection): R<Fragment> {
    let err: E
    const f = new Fragment()

    f.sourceId = o.id
    f.name = o.name

    if (o.comment) {
      const [n, ne] = await Narrative.from(o.comment)
      err = errors.join(ne)
      f.narrative = n
    }

    return [f, err]
  }

  to(): L.Fragment {
    const f = new L.Fragment()
    f.name = this.name
    f.trail = this.trail.real
    f.description = this.narrative.description
    return f
  }
}

export class Narrative {
  summary = ""
  description = ""
  examples = ""
  returns = ""

  static async from(o: J.Comment | J.CommentDisplayPart[]): R<Narrative> {
    if (!Array.isArray(o)) {
      return await this.fromComment(o)
    }
    return await this.fromCommentDisplayParts(o)
  }

  static async fromComment(o: J.Comment): R<Narrative> {
    // https://github.com/TypeStrong/typedoc/issues/2763/

    let err: E
    const n = new Narrative()

    let t = ""
    for (const e of o.summary) {
      t += e.text
    }

    let s = ""
    let e = ""
    let r = ""

    if (o.blockTags) {
      for (const t of o.blockTags) {
        if (t.tag === "@summary" && s) {
          continue
        }

        if (t.tag === "@summary") {
          for (const c of t.content) {
            s += c.text
          }
          continue
        }

        if (t.tag === "@example") {
          for (const c of t.content) {
            e += c.text
          }
          continue
        }

        if (t.tag === "@returns") {
          for (const c of t.content) {
            r += c.text
          }
          continue
        }

        const er = new Error(`The block tag '${t.tag}' is not supported`)
        err = errors.join(err, er)
      }
    }

    if (t && !s) {
      const r = fromMarkdown(t)
      const p = firstSentence(r)
      s = toMarkdown(p)
    }

    if (t) {
      t = await sanitizeMarkdown(t)
    }

    if (s) {
      s = await sanitizeMarkdown(s)
      if (!s.endsWith(".")) {
        s += "."
      }
    }

    if (e) {
      e = await sanitizeMarkdown(e)
    }

    if (r) {
      r = await sanitizeMarkdown(r)
    }

    n.summary = s
    n.description = t
    n.examples = e
    n.returns = r

    return [n, err]
  }

  static async fromCommentDisplayParts(o: J.CommentDisplayPart[]): R<Narrative> {
    const n = new Narrative()

    let t = ""
    for (const e of o) {
      t += e.text
    }

    if (t) {
      t = await sanitizeMarkdown(t)
    }

    return [n]
  }
}

export async function sanitizeMarkdown(s: string): Promise<string> {
  const r = fromMarkdown(s)
  remarkStripHtml()(r)
  await eslint(r)

  let c = toMarkdown(r)
  if (c.endsWith("\n")) {
    c = c.slice(0, -1)
  }

  return c
}

export class Context {
  v = new ContextTrail()
  r = new ContextTrail()
}

export class ContextTrail {
  #c: L.Trail
  #r: L.Trail

  get trail(): L.Trail {
    if (this.#r.length === 0) {
      return []
    }

    const [t] = this.#r

    if (!Array.isArray(t)) {
      throw new Error("The method 'in' has not been called")
    }

    return structuredClone(t)
  }

  constructor() {
    this.#r = []
    this.#c = this.#r
  }

  in(): void {
    let p = this.#r

    while (true) {
      if (p.length === 0) {
        break
      }

      const u = p[p.length - 1]

      if (!Array.isArray(u)) {
        break
      }

      p = u
    }

    this.#c = []
    p.push(this.#c)
  }

  out(): void {
    let p = this.#r

    while (true) {
      if (p.length === 0) {
        break
      }

      const u = p[p.length - 1]

      if (!Array.isArray(u)) {
        break
      }

      if (u === this.#c) {
        break
      }

      p = u
    }

    p.pop()
    this.#c = p
  }

  with(i: number): L.Trail {
    this.push(i)
    const t = this.trail
    this.pop()
    return t
  }

  push(i: number): void {
    this.#c.push(i)
  }

  pop(): void {
    this.#c.pop()
  }
}

export class Trail {
  virtual: L.Trail = []
  real: L.Trail = []
}

export function trailDepth(t: L.Trail): number {
  let d = 0

  for (const s of t) {
    if (Array.isArray(s)) {
      d = Math.max(d, trailDepth(s) + 1)
    }
  }

  return d
}

export function resolveTrail(o: J.Reflection, t: L.Trail): J.Reflection | undefined {
  let c: J.Reflection | undefined = o

  for (const s of t) {
    if (!c) {
      break
    }

    if (Array.isArray(s)) {
      c = resolveTrail(c, s)
      continue
    }

    let t: J.Reflection[] = []

    if (isSignatureReflection(o) && o.parameters) {
      t = o.parameters
    }

    if (isDeclarationReflection(o) && o.signatures) {
      t = o.signatures
    }

    if (isContainerReflection(o) && o.children) {
      t = o.children
    }

    if (t.length !== 0) {
      c = t[s]
      continue
    }

    break
  }

  return c
}

// This function is too small to be separated into its own package. If another
// package requires this function in the future, it can be moved out.

export function kindToString(n: number): string {
  if (n in ReflectionKind) {
    return ReflectionKind[n]
  }
  return "Unknown"
}
