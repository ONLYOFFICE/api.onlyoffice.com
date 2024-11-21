/* eslint-disable @typescript-eslint/no-unused-vars */
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
import {depth, pair, resolve} from "./typedoc-util-resolve.ts"
import {inspect} from "util"

export const console = Console.shared

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

export class Context {
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

  huh(): L.Trail {
    const r = this.trail

    let t = r

    while (true) {
      if (Array.isArray(t) && t.length === 0) {
        t.push(0.5)
        break
      }

      if (Array.isArray(t) && Array.isArray(t[t.length - 1])) {
        t = t[t.length - 1]
        continue
      }

      if (Array.isArray(t)) {
        t[t.length - 1] += 0.5
        break
      }

      break
    }

    return r

    // function test() {
    //   let c: J.Reflection | undefined = o

    //   for (const s of t) {
    //     if (!c) {
    //       break
    //     }

    //     if (Array.isArray(s)) {
    //       c = resolve(c, s)
    //       continue
    //     }

    //     const t = target(c)

    //     if (t.length !== 0) {
    //       c = t[s]
    //       continue
    //     }

    //     break
    //   }

    //   return c
    // }
  }

  push(i: number): void {
    this.#c.push(i)
  }

  pop(): void {
    this.#c.pop()
  }
}

export async function process(o: J.Reflection): Promise<L.Entity[]> {
  let err: E
  let c: Item[] = []

  // The functions for working with the collection are far from efficient.
  // However, they are also not the primary bottleneck in the entire
  // documentation. Therefore, optimizing them may not be worthwhile.

  const ctx = new Context()

  const [d, de] = await Declaration.from(o)
  err = errors.join(err, de)
  c.push(d)

  const [tc, te] = await createItems(ctx, o)
  err = errors.join(err, te)
  c.push(...tc)

  c = sortItems(c)
  c = shakeItems(o, c)

  // return convertItems(c)
  return c
}

export type Item = Group | Declaration | Fragment
export type E = Error | undefined
export type R<T> = Promise<Result<T, Error>>

export async function createItems(ctx: Context, o: J.Reflection): R<Item[]> {
  let err: E
  const c: Item[] = []

  const [gc, ge] = await createGroups(ctx, o)
  err = errors.join(err, ge)
  c.push(...gc)

  ctx.in()

  const [dc, de] = await createDeclarations(ctx, o)
  err = errors.join(err, de)
  c.push(...dc)

  const [fc, fe] = await createFragments(ctx, o)
  err = errors.join(err, fe)
  c.push(...fc)

  if (isSignatureReflection(o) && o.parameters) {
    for (const [i, r] of o.parameters.entries()) {
      ctx.push(i)

      const [nc, ne] = await createItems(ctx, r)
      err = errors.join(err, ne)
      c.push(...nc)

      ctx.pop()
    }
  }

  if (isDeclarationReflection(o) && o.signatures) {
    for (const [i, r] of o.signatures.entries()) {
      ctx.push(i)

      const [nc, ne] = await createItems(ctx, r)
      err = errors.join(err, ne)
      c.push(...nc)

      ctx.pop()
    }
  }

  if (isContainerReflection(o) && o.children) {
    for (const [i, r] of o.children.entries()) {
      ctx.push(i)

      const [nc, ne] = await createItems(ctx, r)
      err = errors.join(err, ne)
      c.push(...nc)

      ctx.pop()
    }
  }

  ctx.out()

  return [c, err]
}

export async function createDeclarations(ctx: Context, o: J.Reflection): R<Declaration[]> {
  let err: E
  const c: Declaration[] = []

  if (isDeclarationReflection(o) && o.signatures) {
    for (const [i, r] of o.signatures.entries()) {
      const [d, de] = await Declaration.from(r)
      err = errors.join(err, de)
      d.trail = ctx.with(i)
      d._depth = depth(d.trail) + 1
      c.push(d)
    }
  }

  if (isContainerReflection(o) && o.children) {
    for (const [i, r] of o.children.entries()) {
      const [d, de] = await Declaration.from(r)
      err = errors.join(err, de)
      d.trail = ctx.with(i)
      d._depth = depth(d.trail) + 1
      c.push(d)
    }
  }

  return [c, err]
}

export async function createFragments(ctx: Context, o: J.Reflection): R<Fragment[]> {
  let err: E
  const c: Fragment[] = []

  if (isSignatureReflection(o) && o.parameters) {
    for (const [i, r] of o.parameters.entries()) {
      const [f, fe] = await Fragment.from(r)
      err = errors.join(err, fe)
      f.trail = ctx.with(i)
      f._depth = depth(f.trail) + 1
      c.push(f)
    }
  }

  return [c, err]
}

export async function createGroups(ctx: Context, o: J.Reflection): R<Group[]> {
  let err: E
  const c: Group[] = []

  if (!isContainerReflection(o)) {
    return [c, err]
  }

  // let i = 0

  if (o.categories) {
    for (const r of o.categories) {
      const [n, ne] = await Group.from(r)
      err = errors.join(err, ne)
      n.trail = ctx.trail
      n._huh = ctx.huh()
      n._depth = (depth(n.trail) + 1) / 2

      // todo: add a test case to prove this
      // If an entity contains a custom category and has a child entity that
      // is not included in any category, the latter will be added to the
      // "Other" built-in category. This category cannot be added manually.

      if (n.name === "Other") {
        continue
      }

      if (n.sourceChildren.length !== 0) {
        // n.order = next()
        c.push(n)
      }
    }
  }

  const a: Group[] = []

  if (o.groups) {
    for (const r of o.groups) {
      const [n, ne] = await Group.from(r)
      err = errors.join(err, ne)
      n.trail = ctx.trail
      n._huh = ctx.huh()
      n._depth = (depth(n.trail) + 1) / 2

      if (n.sourceChildren.length !== 0) {
        // n.order = next()
        a.push(n)
      }
    }
  }

  const p = new Group()
  p.name = "Type Properties"
  p.trail = ctx.trail
  p._depth = (depth(p.trail) + 1) / 2

  const m = new Group()
  m.name = "Type Methods"
  m.trail = ctx.trail
  m._depth = (depth(m.trail) + 1) / 2

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
    // p.order = next()
    a.push(p)
  }

  if (m.sourceChildren.length !== 0) {
    // m.order = next()
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

  // function next(): number {
  //   const j = o.id + (i + 1) / 10
  //   i += 1
  //   return j
  // }
}

export function sortItems(c: Item[]): Item[] {
  // return c.sort((a, b) => {
  //   return a.order - b.order
  // })
  return c.sort((a, b) => {
    for (let i = 0; i < Math.max(a.trail.length, b.trail.length); i += 1) {
      const x = Array.isArray(a.trail[i]) ? a.trail[i][0] : a.trail[i]
      const y = Array.isArray(b.trail[i]) ? b.trail[i][0] : b.trail[i]
      if (x !== y) {
        return (x || 0) - (y || 0)
      }
    }
    return 0
  })
}

// export function shakeItems2(o: J.Reflection, c: Item[]): Item[] {
//   const rc: Item[] = []

//   const gc: Group[] = []
//   const dc: Declaration[] = []
//   const fc: Fragment[] = []

//   const g = new Group()
//   gc.push(g)

//   const d = new Declaration()
//   dc.push(d)

//   const f = new Fragment()
//   fc.push(f)

//   let i = 0

//   for (const t of c) {
//     if (t instanceof Fragment) {
//       continue
//     }

//     f0(t)
//     f1(t)
//     f2(t)
//     f4(t)
//   }

//   return rc

//   function f0(t: Item): void {
//     let c: Item[] = []

//     if (t instanceof Group) {
//       c = gc
//     } else if (t instanceof Declaration) {
//       c = dc
//     } else if (t instanceof Fragment) {
//       c = fc
//     } else {
//       throw new Error("Unknown item")
//     }

//     const [cd] = pair(t.trail)

//     while (true) {
//       const p = c[c.length - 1]
//       const [pd] = pair(p.trail)

//       if (cd < pd) {
//         c.pop()
//         f3(p)
//         continue
//       }

//       break
//     }
//   }

//   function f1(t: Item): void {
//     let c: Item[] = []

//     if (t instanceof Group) {
//       c = gc
//     } else if (t instanceof Declaration) {
//       c = dc
//     } else if (t instanceof Fragment) {
//       c = fc
//     } else {
//       throw new Error("Unknown item")
//     }

//     c.push(t)
//   }

//   function f2(t: Item): void {
//     if (t instanceof Group) {
//       t.id = next()
//       return
//     }

//     if (t instanceof Declaration && isContainer(t)) {
//       return
//     }

//     if (t instanceof Declaration) {
//       t.id = next()
//       return
//     }

//     if (t instanceof Fragment) {
//       return
//     }

//     throw new Error("Unknown item")
//   }

//   function f3(t: Item): void {}

//   function exit(t: Item): void {
//     if (t instanceof Group) {
//       for (let i = tc.length - 1; i >= 0; i -= 1) {
//         const p = tc[i]

//         if (p instanceof Fragment) {
//           throw new Error("how?")
//         }

//         if (p instanceof Group) {
//           continue
//         }

//         const [cd, ci] = pair(t.trail)
//         const [pd, pi] = pair(p.trail)

//         if (cd === pd && ci === pi) {
//           p.children.unshift(t.id)
//         }

//         break
//       }

//       return
//     }

//     if (t instanceof Declaration && t.id === -1) {
//       for (let i = tc.length - 1; i >= 0; i -= 1) {
//         const p = tc[i]

//         if (p instanceof Fragment) {
//           throw new Error("how?")
//         }

//         if (!p.sourceChildren.includes(t.sourceId)) {
//           continue
//         }

//         p.children.push(...t.children)
//         break
//       }

//       return
//     }

//     if (t instanceof Declaration) {
//       for (let i = tc.length - 1; i >= 0; i -= 1) {
//         const p = tc[i]

//         if (p instanceof Fragment) {
//           throw new Error("how?")
//         }

//         if (!p.sourceChildren.includes(t.sourceId)) {
//           continue
//         }

//         p.children.push(t.id)
//         break
//       }

//       return
//     }

//     if (t instanceof Fragment) {
//       return
//     }

//     throw new Error("Unknown item")
//   }

//   function f4(t: Item): void {
//     if (t instanceof Group) {
//       rc.push(t)
//       return
//     }

//     if (t instanceof Declaration && t.id === -1) {
//       return
//     }

//     if (t instanceof Declaration) {
//       rc.push(t)
//       return
//     }

//     if (t instanceof Fragment) {
//       return
//     }

//     throw new Error("Unknown item")
//   }

//   function isContainer(t: Declaration): boolean {
//     const s = resolve(o, t.trail)
//     if (!s) {
//       throw new Error(`The trail '${t.trail}' could not be resolved`)
//     }

//     return isFunctionReflection(s) ||
//       isConstructorReflection(s) ||
//       isMethodReflection(s)
//   }

//   function next(): number {
//     const j = i
//     i += 1
//     return j
//   }
// }

export function shakeItems(o: J.Reflection, c: Item[]): Item[] {
  global.console.log(inspect(c, {depth: null, colors: true}), "\n\n")
  const rc: Item[] = []
  // const tc: (Group | Declaration)[] = []
  const tc: Item[] = []

  const d = new Group()
  tc.push(d)

  let i = 0

  // add if current depth >= previous

  for (const t of c) {
    if (t instanceof Fragment) {
      continue
    }

    global.console.log("before f", tc.map((t) => `${t.name} ${t.sourceId}`).join(", "), "/", t.name, t.sourceId)
    enter(t)
    free(t)
    loc(t)
    release(t)
    global.console.log("after  f", tc.map((t) => `${t.name} ${t.sourceId}`).join(", "), "/", t.name, t.sourceId, "\n\n")
  }

  while (true) {
    const p = tc[tc.length - 1]

    if (p === d) {
      break
    }

    global.console.log("before w", tc.map((t) => `${t.name} ${t.sourceId}`).join(", "), "/", p.name, p.sourceId)
    tc.pop()
    exit(p)
    global.console.log("after  w", tc.map((t) => `${t.name} ${t.sourceId}`).join(", "), "/", p.name, p.sourceId, "\n\n")
  }

  return rc

  function enter(t: Item): void {
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

  function free(t: Item): void {
    if (t instanceof Group) {
      const [cd] = pair(t.trail)

      while (true) {
        const p = tc[tc.length - 1]
        const [pd] = pair(p.trail)

        if (
          cd < pd
          // cd === pd && t instanceof Group && p instanceof Group ||
          // cd === pd && t instanceof Declaration && p instanceof Declaration
        ) {
          tc.pop()
          exit(p)
          continue
        }

        break
      }

      return
    }

    if (t instanceof Declaration) {
      const [cd, ci] = pair(t.trail)

      while (true) {
        const p = tc[tc.length - 1]
        const [pd, pi] = pair(p.trail)

        if (
          cd < pd
          // cd === pd && t instanceof Group && p instanceof Group ||
          // cd === pd && t instanceof Declaration && p instanceof Declaration
          // cd < pd ||
          // cd === pd && p instanceof Declaration ||
          // cd === pd && ci > pi && p !== d
        ) {
          tc.pop()
          exit(p)
          continue
        }

        break
      }

      return
    }

    if (t instanceof Fragment) {
      return
    }

    throw new Error("Unknown item")
  }

  function loc(t: Item): void {
    if (t instanceof Group) {
      tc.push(t)
      return
    }

    if (t instanceof Declaration) {
      tc.push(t)
      return
    }

    if (t instanceof Fragment) {
      tc.push(t)
      return
    }

    throw new Error("Unknown item")
  }

  function exit(t: Item): void {
    if (t instanceof Group) {
      for (let i = tc.length - 1; i >= 0; i -= 1) {
        const p = tc[i]

        if (p instanceof Fragment) {
          throw new Error("how?")
        }

        if (p instanceof Group) {
          continue
        }

        const [cd, ci] = pair(t.trail)
        const [pd, pi] = pair(p.trail)

        if (cd === pd && ci === pi) {
          p.children.unshift(t.id)
        }

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

        // const j = p.sourceChildren.indexOf(t.sourceId)
        // if (j === -1) {
        //   continue
        // }

        if (!p.sourceChildren.includes(t.sourceId)) {
          continue
        }

        p.children.push(...t.children)
        // p.sourceChildren.splice(j, 1, ...t.sourceChildren)
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

        p.children.push(t.id)
        break
      }

      return
    }

    if (t instanceof Fragment) {
      // global.console.log("exit t", t)

      // // for (let i = tc.length - 1; i >= 0; i -= 1) {
      // //   const p = tc[i]
      // //   global.console.log("check p", p)
      // // }

      // for (let i = tc.length - 1; i >= 0; i -= 1) {
      //   const p = tc[i]
      //   global.console.log("exit p", p)

      //   if (p instanceof Fragment) {
      //     continue
      //   }

      //   if (p instanceof Group) {
      //     throw new Error("how?")
      //   }

      //   global.console.log("inside p", p, p.sourceChildren.includes(t.sourceId))

      //   if (!p.sourceChildren.includes(t.sourceId)) {
      //     continue
      //   }

      //   const s = resolve(o, p.trail)
      //   if (!s) {
      //     throw new Error(`The trail '${p.trail}' could not be resolved`)
      //   }

      //   // if (
      //   //   isCallSignatureReflection(s) ||
      //   //   isConstructorSignatureReflection(s)
      //   // ) {
      //     p.parameters.push(t)
      //   // }

      //   break
      // }

      return
    }

    throw new Error("Unknown item")
  }

  function release(t: Item): void {
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
    const s = resolve(o, t.trail)
    if (!s) {
      throw new Error(`The trail '${t.trail}' could not be resolved`)
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

export function convertItems(c: Item[]): L.Entity[] {
  const r: L.Entity[] = []

  for (const t of c) {
    if (t instanceof Fragment) {
      throw new Error("allo")
    }

    const e = t.to()
    r.push(e)
  }

  return r
}

export class Group {
  id = -1
  sourceId = -1
  name = ""
  // order = -1
  trail: L.Trail = []
  description = ""
  children: number[] = []
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

  to(): L.GroupEntity {
    const g = new L.Group()
    g.name = this.name
    g.description = this.description

    const e = new L.GroupEntity()
    e.group = g

    return e
  }
}

export class Declaration {
  id = -1
  sourceId = -1
  name = ""
  // order = -1
  trail: L.Trail = []
  narrative = new Narrative()
  properties: Fragment[] = []
  members: Fragment[] = []
  parameters: Fragment[] = []
  children: number[] = []
  sourceChildren: number[] = []

  static async from(o: J.Reflection): R<Declaration> {
    let err: E
    const d = new Declaration()

    d.sourceId = o.id
    d.name = o.name
    // d.order = o.id

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
    d.trail = this.trail
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
    e.declaration = d

    return e
  }
}

export class Fragment {
  sourceId = -1
  name = ""
  // order = -1
  trail: L.Trail = []
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
    // f.order = o.id

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
    f.trail = this.trail
    f.description = this.narrative.description

    // for (const p of )

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

// This function is too small to be separated into its own package. If another
// package requires this function in the future, it can be moved out.

export function kindToString(n: number): string {
  if (n in ReflectionKind) {
    return ReflectionKind[n]
  }
  return "Unknown"
}
