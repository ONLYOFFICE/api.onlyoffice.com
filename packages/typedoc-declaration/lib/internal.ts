/* eslint-disable */
// https://typedoc.org/tags/category/
// https://typedoc.org/tags/example/

import {eslint} from "@onlyoffice/mdast-util-eslint"
import {firstSentence} from "@onlyoffice/mdast-util-first-sentence"
import {fromMarkdown} from "mdast-util-from-markdown"
import {toMarkdown} from "mdast-util-to-markdown"
import remarkStripHtml from "remark-strip-html"
import {type JSONOutput as J} from "typedoc"
import * as errors from "./errors.ts"
import * as L from "./next.ts"
import * as N from "./next2.ts"

export type R<T> = Promise<Result<T, Error>>

export async function process(o: J.ProjectReflection): Promise<unknown[]> {
  // if (o.children) {
  //   for (const [i, c] of o.children.entries()) {
  //     // this.ctx.location.push(i)

  //     const d = new DeclarationEntity()
  //     d.l.id = String(c.id)
  //     d.l.declaration.name = c.name
  //     // d.l.declaration.location = structuredClone(this.ctx.location)
  //     d.l.declaration.summary = ""
  //     d.l.declaration.signature = []
  //     d.l.declaration.description = ""

  //     // this.ctx.location.pop()
  //   }
  // }

  const [a, err] = await processAnyReflection(o)

  const errs = errors.split(err)
  for (const err of errs) {
    console.error(err.message)
  }

  return a
}

async function processAnyReflection(o: J.Reflection): R<unknown[]> {
  let ae: Error | undefined
  const a: unknown[] = []

  if (isProjectReflection(o)) {
    const [b, be] = await processProjectReflection(o)
    ae = errors.join(ae, be)
    a.push(...b)
  } else if (isModuleReflection(o)) {
    const e = new Error("Module reflections are not supported")
    ae = errors.join(ae, e)
  } else if (isNamespaceReflection(o)) {
    const e = new Error("Namespace reflections are not supported")
    ae = errors.join(ae, e)
  } else if (isEnumReflection(o)) {

  } else if (isEnumMemberReflection(o)) {

  } else if (isVariableReflection(o)) {

  } else if (isFunctionReflection(o)) {

  } else if (isClassReflection(o)) {
    const [b, be] = await processClassReflection(o)
    ae = errors.join(ae, be)
    a.push(...b)
  } else if (isInterfaceReflection(o)) {

  } else if (isConstructorReflection(o)) {
    const [b, be] = await processConstructorReflection(o)
    ae = errors.join(ae, be)
    a.push(...b)
  } else if (isPropertyReflection(o)) {
    const [b, be] = await processPropertyReflection(o)
    ae = errors.join(ae, be)
    a.push(...b)
  } else if (isMethodReflection(o)) {
    const [b, be] = await processMethodReflection(o)
    ae = errors.join(ae, be)
    a.push(...b)
  } else if (isCallSignatureReflection(o)) {

  } else if (isIndexSignatureReflection(o)) {

  } else if (isConstructorSignatureReflection(o)) {

  } else if (isParameterReflection(o)) {

  } else if (isTypeLiteralReflection(o)) {

  } else if (isTypeParameterReflection(o)) {

  } else if (isAccessorReflection(o)) {

  } else if (isGetSignatureReflection(o)) {

  } else if (isSetSignatureReflection(o)) {

  } else if (isTypeAliasReflection(o)) {

  } else if (isReferenceReflection(o)) {

  } else if (isDocumentReflection(o)) {
    const e = new Error("Document reflections are not supported")
    ae = errors.join(ae, e)
  }

  return [a, ae]
}

async function processProjectReflection(o: J.ProjectReflection): R<unknown[]> {
  let ae: Error | undefined
  const a: unknown[] = []

  const [b, be] = await processContainerReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)
  // a.shift()

  return [a, ae]
}

async function processClassReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: Error | undefined
  const a: unknown[] = []

  const [b, be] = await processContainerReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)

  return [a, ae]
}

async function processConstructorReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: Error | undefined
  const a: unknown[] = []

  const [b, be] = await processContainerReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)

  return [a, ae]
}

async function processPropertyReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: Error | undefined
  const a: unknown[] = []

  const [b, be] = await processContainerReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)

  return [a, ae]
}

async function processMethodReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: Error | undefined
  const a: unknown[] = []

  const [b, be] = await processContainerReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)

  return [a, ae]
}

async function processContainerReflection(o: J.ContainerReflection): R<unknown[]> {
  let ae: Error | undefined
  const a: unknown[] = []

  const [b, be] = await createDeclaration(o)
  ae = errors.join(ae, be)
  a.push(b)

  // if (o.categories) {}

  // if (o.groups) {}

  if (o.children) {
    for (const c of o.children) {
      const [b, be] = await processAnyReflection(c)
      ae = errors.join(ae, be)
      a.push(...b)
    }
  }

  return [a, ae]
}

async function createDeclaration(o: J.Reflection): R<N.Declaration> {
  let err: Error | undefined
  const d = new N.Declaration()

  d.name = o.name

  if (o.comment) {
    const [a, ae] = await Abstract.from(o.comment)
    err = errors.join(ae)

    d.summary = a.summary
    d.description = a.description
    d.examples = a.examples
  }

  return [d, err]
}



async function processDeclaration(o: J.DeclarationReflection): R<N.Entity> {
  let err: Error | undefined
  const a: unknown[] = []

  const d = new N.Declaration()
  a.push(d)

  d.name = o.name

  if (o.comment) {
    const [a, ae] = await Abstract.from(o.comment)
    err = errors.join(ae)

    d.summary = a.summary
    d.description = a.description
    d.examples = a.examples
  }

  if (o.signatures) {
    for (const s of o.signatures) {
      if (s.comment) {
        const [a, ae] = await Abstract.from(s.comment)
        err = errors.join(ae)

        d.returns.description = a.returns
      }

      if (s.parameters) {
        for (const p of s.parameters) {
          const f = new N.Fragment()
          d.parameters.push(f)

          f.name = p.name

          if (p.comment) {
            const [a, ae] = await Abstract.from(p.comment)
            err = errors.join(ae)

            f.description = a.description
          }

          if (p.defaultValue !== undefined) {
            f.default = p.defaultValue
          }
        }
      }

      break
    }
  }

  if (o.type && isReflectionType(o.type)) {
    if (o.type.declaration.children) {
      for (const c of o.type.declaration.children) {
        if (isReferenceReflection(c)) {
          continue
        }
      }
    }
  }

  if (o.children) {
    for (const c of o.children) {
      if (isReferenceReflection(c)) {
        continue
      }

      const [d, de] = await processDeclaration(c)
      err = errors.join(err, de)
      a.push(d)
    }
  }

  return [a, err]
}

class Abstract {
  summary = ""
  description = ""
  examples = ""
  returns = ""

  static async from(o: J.Comment): R<Abstract> {
    // https://github.com/TypeStrong/typedoc/issues/2763/

    const a = new Abstract()
    let err: Error | undefined

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

    a.summary = s
    a.description = t
    a.examples = e
    a.returns = r

    return [a, err]
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

function isReflectionType(t: unknown): t is J.ReflectionType {
  return isObject(t) && "type" in t && typeof t.type === "string" && t.type === "reflection"
}










function isProjectReflection(r: unknown): r is J.ProjectReflection {
  return isReflection(r) && r.kind === 1
}

function isModuleReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 2
}

function isNamespaceReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 4
}

function isEnumReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 8
}

function isEnumMemberReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 16
}

function isVariableReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 32
}

function isFunctionReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 64
}

function isClassReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 128
}

function isInterfaceReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 256
}

function isConstructorReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 512
}

function isPropertyReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 1024
}

function isMethodReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 2048
}

function isCallSignatureReflection(r: unknown): r is J.SignatureReflection {
  return isReflection(r) && r.kind === 4096
}

function isIndexSignatureReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 8192
}

function isConstructorSignatureReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 16384
}

function isParameterReflection(r: unknown): r is J.ParameterReflection {
  return isReflection(r) && r.kind === 32768
}

function isTypeLiteralReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 65536
}

function isTypeParameterReflection(r: unknown): r is J.TypeParameterReflection {
  return isReflection(r) && r.kind === 131072
}

function isAccessorReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 262144
}

function isGetSignatureReflection(r: unknown): r is J.SignatureReflection {
  return isReflection(r) && r.kind === 524288
}

function isSetSignatureReflection(r: unknown): r is J.SignatureReflection {
  return isReflection(r) && r.kind === 1048576
}

function isTypeAliasReflection(r: unknown): r is J.DeclarationReflection {
  return isReflection(r) && r.kind === 2097152
}

function isReferenceReflection(r: unknown): r is J.ReferenceReflection {
  return isReflection(r) && r.kind === 4194304
}

function isDocumentReflection(r: unknown): r is J.DocumentReflection {
  return isReflection(r) && r.kind === 8388608
}





function isReflection(r: unknown): r is J.Reflection {
  return isObject(r) && "kind" in r && typeof r.kind === "number"
}

function isObject(o: unknown): o is object {
  return typeof o === "object" && o !== null && !Array.isArray(o)
}

type Result<S0, S1> =
  [S0, S1] extends [infer A, infer B] ? [A, B?] :
    never
