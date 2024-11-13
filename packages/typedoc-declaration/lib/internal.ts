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

export type F<T> = Promise<Result<T, Error>>

export const SomeType = {}

export type Type = TypeMap[keyof TypeMap]

export interface TypeMap {
  // enum: EnumType
  // function: FunctionType // ?
  // // object: ObjectType

  // // QueryType
  // // RestType

  // array: ArrayType
  intrinsic: IntrinsicType
  // literal: LiteralType
  // noop: NoopType
  // optional: OptionalType
  // union: UnionType
  // unknown: UnknownType

  // generic: GenericType is: "generic" as const parameters: GenericParameter[]
}

// export class ArrayType {
//   is = "array" as const
// }

export class IntrinsicType implements TypeNode {
  is = "intrinsic" as const
  name = ""

  // eslint-disable-next-line @typescript-eslint/require-await
  static async from(o: J.IntrinsicType): F<IntrinsicType> {
    const t = new IntrinsicType()
    t.name = o.name
    return [t]
  }

  to(): L.IntrinsicType {
    const t = new L.IntrinsicType()
    t.name = this.name
    return t
  }
}

export interface TypeNode {
  is: string
}

export class DocumentFragment {
  description = ""

  static async from(o: J.Comment): F<DocumentFragment> {
    const f = new DocumentFragment()

    const [d, e] = await Document.from(o)
    f.description = d.description

    return [f, e]
  }

  to(): L.DocumentFragment {
    const f = new L.DocumentFragment()
    f.description = this.description
    return f
  }
}

export class Document {
  summary = ""
  description = ""
  examples = ""
  // tryIt

  static async from(o: J.Comment): F<Document> {
    // https://github.com/TypeStrong/typedoc/issues/2763/

    let err: Error | undefined
    const d = new Document()

    let t = ""
    for (const e of o.summary) {
      t += e.text
    }

    let s = ""
    let e = ""

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

    d.summary = s
    d.description = t
    d.examples = e

    return [d, err]
  }

  to(): L.Document {
    const d = new L.Document()
    d.summary = this.summary
    d.description = this.description
    d.examples = this.examples
    return d
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

export type Result<S0, S1> =
  [S0, S1] extends [infer A, infer B] ? [A, B?] :
    never
