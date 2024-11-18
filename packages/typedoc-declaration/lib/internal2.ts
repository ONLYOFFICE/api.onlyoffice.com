/* eslint-disable */

// https://typedoc.org/tags/category/
// https://typedoc.org/tags/example/

import {eslint} from "@onlyoffice/mdast-util-eslint"
import {firstSentence} from "@onlyoffice/mdast-util-first-sentence"
import {fromMarkdown} from "mdast-util-from-markdown"
import {toMarkdown} from "mdast-util-to-markdown"
import remarkStripHtml from "remark-strip-html"
import {type JSONOutput as J} from "typedoc"
import {Console} from "./console.ts"
import * as errors from "./errors.ts"
import * as L from "./typedoc-declaration.ts"
import {type Result} from "./result.ts"
import {kindToString} from "./typedoc-util-kind-to-string.ts"
import {
  isContainerReflection,
  isDeclarationReflection,
  isProjectReflection,
  isModuleReflection,
  isNamespaceReflection,
  isEnumReflection,
  isEnumMemberReflection,
  isVariableReflection,
  isFunctionReflection,
  isClassReflection,
  isInterfaceReflection,
  isConstructorReflection,
  isPropertyReflection,
  isMethodReflection,
  isCallSignatureReflection,
  isIndexSignatureReflection,
  isConstructorSignatureReflection,
  isParameterReflection,
  isTypeLiteralReflection,
  isTypeParameterReflection,
  isAccessorReflection,
  isGetSignatureReflection,
  isSetSignatureReflection,
  isTypeAliasReflection,
  isReferenceReflection,
  isDocumentReflection,
  isSignatureReflection,
} from "./typedoc-util-is-reflection.ts"

const console = Console.shared

const groups: Record<string, number> = {
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

type R<T> = Promise<Result<T, Error>>
type E = Error | undefined

type Trail = (number | Trail)[]

class Context {
  #r: Trail
  #p: Trail
  #c: Trail

  get trail() {
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
    this.#p = this.#r
    this.#c = this.#r
  }

  in() {
    this.#p = this.#c
    this.#c = []
    this.#p.push(this.#c)
  }

  out() {
    this.#p.pop()
    this.#c = this.#p
  }

  push(i: number) {
    this.#c.push(i)
  }

  pop() {
    this.#c.pop()
  }
}

type Entity = unknown

export async function process(o: J.Reflection): Promise<Entity[]> {
  const ctx = new Context()

  ctx.in()

  const [c] = await createCollection(ctx, o)

  ctx.out()

  return [c]
}

export async function createCollection(ctx: Context, o: J.Reflection): R<Entity[]> {
  let err: E
  const c: Entity[] = []

  const [gc, ge] = await createGroups(o)
  err = errors.join(err, ge)
  c.push(...gc)

  const [dc, de] = await createDeclarations(ctx, o)
  err = errors.join(err, de)
  c.push(...dc)

  const [fc, fe] = await createFragments(ctx, o)
  err = errors.join(err, fe)
  c.push(...fc)

  shake(o, c)

  if (isSignatureReflection(o)) {
    if (o.parameters) {
      ctx.in()

      for (const r of o.parameters) {
        const [nc, ne] = await createCollection(ctx, r)
        err = errors.join(err, ne)
        c.push(...nc)
      }

      ctx.out()
    }
  }

  if (isDeclarationReflection(o)) {
    if (o.signatures) {
      ctx.in()

      for (const r of o.signatures) {
        const [nc, ne] = await createCollection(ctx, r)
        err = errors.join(err, ne)
        c.push(...nc)
      }

      ctx.out()
    }
  }

  if (isContainerReflection(o)) {
    if (o.children) {
      ctx.in()

      for (const r of o.children) {
        const [nc, ne] = await createCollection(ctx, r)
        err = errors.join(err, ne)
        c.push(...nc)
      }

      ctx.out()
    }
  }

  return [c, err]
}

export async function createDeclarations(ctx: Context, o: J.Reflection): R<Declaration[]> {
  let err: E
  const c: Declaration[] = []

  if (!isContainerReflection(o)) {
    return [c, err]
  }

  if (isDeclarationReflection(o)) {
    if (o.signatures) {
      for (const [i, r] of o.signatures.entries()) {
        ctx.push(i)

        const [d, de] = await Declaration.from(r)
        err = errors.join(err, de)
        d.trail = ctx.trail
        c.push(d)

        ctx.pop()
      }
    }
  }

  if (o.children) {
    for (const [i, r] of o.children.entries()) {
      ctx.push(i)

      const [d, de] = await Declaration.from(r)
      err = errors.join(err, de)
      d.trail = ctx.trail
      c.push(d)

      ctx.pop()
    }
  }

  return [c, err]
}

export async function createFragments(ctx: Context, o: J.Reflection): R<Fragment[]> {
  let err: E
  const c: Fragment[] = []

  if (isSignatureReflection(o)) {
    if (o.parameters) {
      for (const [i, r] of o.parameters.entries()) {
        ctx.push(i)

        const [f, fe] = await Fragment.from(r)
        err = errors.join(err, fe)
        f.trail = ctx.trail
        c.push(f)

        ctx.pop()
      }
    }
  }

  return [c, err]
}

export async function createGroups(o: J.Reflection): R<Group[]> {
  let err: E
  const c: Group[] = []

  if (!isContainerReflection(o)) {
    return [c, err]
  }

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
    a.push(p)
  }

  if (m.sourceChildren.length !== 0) {
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
}

function shake(o: J.Reflection, c: Entity[]): void {
  // console.log(o, c)
}

export class Group {
  id = -1
  name = ""
  description = ""
  sourceChildren: number[] = []

  static async from(o: J.ReflectionGroup | J.ReflectionCategory): R<Group> {
    let err: E
    const g = new Group()

    g.name = o.title

    if (o.description) {
      const [n, ne] = await Narrative.from(o.description)
      err = errors.join(ne)
      g.description = n.description
    }

    if (o.children) {
      for (const c of o.children) {
        g.sourceChildren.push(c)
      }
    }

    return [g, err]
  }
}

export class Declaration {
  id = -1
  sourceId = -1
  name = ""
  trail: Trail = []
  narrative = new Narrative()
  // properties: Fragment[] = []
  // members: Fragment[] = []
  // parameters: Fragment[] = []

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

    return [d, err]
  }
}

export class Fragment {
  sourceId = -1
  name = ""
  trail: Trail = []
  default = ""
  narrative = new Narrative()
  // properties: Fragment[] = []

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
      t = await sanitize(t)
    }

    if (s) {
      s = await sanitize(s)
      if (!s.endsWith(".")) {
        s += "."
      }
    }

    if (e) {
      e = await sanitize(e)
    }

    if (r) {
      r = await sanitize(r)
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
      t = await sanitize(t)
    }

    return [n]
  }
}

async function sanitize(s: string): Promise<string> {
  const r = fromMarkdown(s)
  remarkStripHtml()(r)
  await eslint(r)

  let c = toMarkdown(r)
  if (c.endsWith("\n")) {
    c = c.slice(0, -1)
  }

  return c
}
