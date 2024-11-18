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

type R<T> = Promise<Result<T, Error>>
type E = Error | undefined

// export async function process(o: J.ProjectReflection): Promise<unknown[]> {
//   // if (o.children) {
//   //   for (const [i, c] of o.children.entries()) {
//   //     // this.ctx.location.push(i)

//   //     const d = new DeclarationEntity()
//   //     d.l.id = String(c.id)
//   //     d.l.declaration.name = c.name
//   //     // d.l.declaration.location = structuredClone(this.ctx.location)
//   //     d.l.declaration.summary = ""
//   //     d.l.declaration.signature = []
//   //     d.l.declaration.description = ""

//   //     // this.ctx.location.pop()
//   //   }
//   // }

//   const [a, err] = await process(o)

//   const errs = errors.split(err)
//   for (const err of errs) {
//     console.error(err.message)
//   }

//   return a
// }

export async function process(o: J.Reflection): R<Container> {
  console.log(`Start processing the '${kindToString(o.kind)}' reflection at '${o.name}'`)

  const [c, err] = await Container.from(o)

  for (const e of errors.split(err)) {
    console.error(e.message)
  }

  console.log(`Finish processing the '${kindToString(o.kind)}' reflection at '${o.name}'`)

  return [c, err]

  // console.log(`Start processing the '${kindToString(o.kind)}' reflection at '${o.name}'`)

  // let e: E
  // let a: unknown[] = []

  // if (isProjectReflection(o)) {
  //   [a, e] = await processProjectReflection(o)
  // } else if (isModuleReflection(o)) {
  //   e = new Error(`The reflection '${kindToString(o.kind)}' is not supported`)
  // } else if (isNamespaceReflection(o)) {
  //   e = new Error(`The reflection '${kindToString(o.kind)}' is not supported`)
  // } else if (isEnumReflection(o)) {
  //   [a, e] = await processEnumReflection(o)
  // } else if (isEnumMemberReflection(o)) {
  //   [a, e] = await processEnumMemberReflection(o)
  // } else if (isVariableReflection(o)) {
  //   [a, e] = await processVariableReflection(o)
  // } else if (isFunctionReflection(o)) {
  //   [a, e] = await processFunctionReflection(o)
  // } else if (isClassReflection(o)) {
  //   [a, e] = await processClassReflection(o)
  // } else if (isInterfaceReflection(o)) {
  //   [a, e] = await processInterfaceReflection(o)
  // } else if (isConstructorReflection(o)) {
  //   [a, e] = await processConstructorReflection(o)
  // } else if (isPropertyReflection(o)) {
  //   [a, e] = await processPropertyReflection(o)
  // } else if (isMethodReflection(o)) {
  //   [a, e] = await processMethodReflection(o)
  // } else if (isCallSignatureReflection(o)) {
  //   [a, e] = await processCallSignatureReflection(o)
  // } else if (isIndexSignatureReflection(o)) {

  // } else if (isConstructorSignatureReflection(o)) {

  // } else if (isParameterReflection(o)) {

  // } else if (isTypeLiteralReflection(o)) {

  // } else if (isTypeParameterReflection(o)) {

  // } else if (isAccessorReflection(o)) {

  // } else if (isGetSignatureReflection(o)) {
  //   e = new Error(`The reflection '${kindToString(o.kind)}' is not supported`)
  // } else if (isSetSignatureReflection(o)) {
  //   e = new Error(`The reflection '${kindToString(o.kind)}' is not supported`)
  // } else if (isTypeAliasReflection(o)) {
  //   [a, e] = await processTypeAliasReflection(o)
  // } else if (isReferenceReflection(o)) {

  // } else if (isDocumentReflection(o)) {
  //   e = new Error(`The reflection '${kindToString(o.kind)}' is not supported`)
  // } else {
  //   e = new Error(`The reflection '${kindToString(o.kind)}' is not supported`)
  // }

  // for (const r of errors.split(e)) {
  //   console.error(r.message)
  // }

  // console.log(`Finish processing the '${kindToString(o.kind)}' reflection at '${o.name}'`)

  // return [a, e]
}

async function processProjectReflection(o: J.ProjectReflection): R<unknown[]> {
  let ae: E
  const a: unknown[] = []

  const [b, be] = await processContainerReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)
  // a.shift()

  return [a, ae]
}

async function processEnumReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: E
  const a: unknown[] = []

  const [d, de] = await Declaration.from(o)
  ae = errors.join(ae, de)
  a.push(d)

  if (o.children) {
    for (const c of o.children) {
      if (!isEnumMemberReflection(c)) {
        const e = new Error("Enum reflections must have enum member reflections")
        ae = errors.join(ae, e)
        continue
      }

      const [b, be] = await process(c)
      ae = errors.join(ae, be)
      d.members.push(...b)
    }
  }

  return [a, ae]
}

async function processEnumMemberReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: E
  const a: unknown[] = []

  const [f, fe] = await Fragment.from(o)
  ae = errors.join(ae, fe)
  a.push(f)

  return [a, ae]
}

async function processVariableReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: E
  const a: unknown[] = []

  const [b, be] = await processContainerReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)

  return [a, ae]
}

async function processFunctionReflection(o: J.DeclarationReflection): R<unknown[]> {
  return await Container.from(o)
  // let ae: E
  // const a: unknown[] = []

  //     // typedoc generates multiple signatures
  //     // if a function has 3 signature where the last is the implementation
  //     // typedoc does not include the implementation in the signatures
  //     // typedoc stores the implementation in the o object
  //     // sources will be an array if there are multiple signatures

  //     // multiple call functions is an overload
  //     // const [b, be] = await process(s)
  //     // ae = errors.join(ae, be)
  //     // // a.push(...b)

  // if (o.signatures) {
  //   const b: unknown[] = []

  //   for (const s of o.signatures) {
  //     if (!isCallSignatureReflection(s)) {
  //       const e = new Error("Function reflections must have a call signature reflection")
  //       ae = errors.join(ae, e)
  //       continue
  //     }

  //     const [d, de] = await process(s)

  //     // const [d, de] = await createDeclaration(s)
  //     ae = errors.join(ae, de)

  //     // todo: if (b.length !== 0 && !s.comment) {}

  //     b.push(d)

  //     // if (s.parameters) {
  //     //   for (const p of s.parameters) {
  //     //     const [f, fe] = await Fragment.from(p)
  //     //     ae = errors.join(ae, fe)
  //     //     d.parameters.push(f)
  //     //   }
  //     // }
  //   }

  //   a.push(...b)
  // }

  // return [a, ae]
}

async function processClassReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: E
  const a: unknown[] = []

  const [b, be] = await processContainerReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)

  return [a, ae]
}

async function processInterfaceReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: E
  const a: unknown[] = []

  const [b, be] = await processContainerReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)

  return [a, ae]
}

async function processConstructorReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: E
  const a: unknown[] = []

  const [b, be] = await processContainerReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)

  return [a, ae]
}

async function processPropertyReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: E
  const a: unknown[] = []

  const [b, be] = await processContainerReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)

  return [a, ae]
}

async function processMethodReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: E
  const a: unknown[] = []

  const [b, be] = await processFunctionReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)

  return [a, ae]
}

async function processCallSignatureReflection(o: J.SignatureReflection): R<unknown[]> {
  return await Container.from(o)
  // let ae: E
  // const a: unknown[] = []

  // const [d, de] = await Declaration.from(o)
  // ae = errors.join(ae, de)
  // a.push(d)

  // // todo: if (b.length !== 0 && !s.comment) {}

  // if (o.parameters) {
  //   for (const p of o.parameters) {
  //     const [f, fe] = await Fragment.from(p)
  //     ae = errors.join(ae, fe)
  //     d.parameters.push(f)
  //   }
  // }

  // return [a, ae]
}

async function processTypeAliasReflection(o: J.DeclarationReflection): R<unknown[]> {
  let ae: E
  const a: unknown[] = []

  const [b, be] = await processContainerReflection(o)
  ae = errors.join(ae, be)
  a.push(...b)

  return [a, ae]
}

// async function processDeclarationReference(o: J.DeclarationReflection): R<unknown[]> {
//   let ae: E
//   const a: unknown[] = []

//   const [d, de] = await createDeclaration(o)
//   ae = errors.join(ae, de)
//   a.push(d)

//   // if (o.categories) {}

//   // if (o.groups) {}

//   // if (o.signatures) {}

//   if (o.children) {
//     for (const c of o.children) {
//       const [b, be] = await process(c)
//       ae = errors.join(ae, be)
//       a.push(...b)
//     }
//   }

//   return [a, ae]
// }

async function processContainerReflection(o: J.ContainerReflection): R<unknown[]> {
  let ae: E
  const a: unknown[] = []

  const [b, be] = await Declaration.from(o)
  ae = errors.join(ae, be)
  a.push(b)

  // if (o.categories) {}

  if (o.groups) {
    for (const g of o.groups) {}
  }

  if (o.children) {
    for (const c of o.children) {
      const [b, be] = await process(c)
      ae = errors.join(ae, be)
      a.push(b)
    }
  }

  return [a, ae]
}

// input is an any J.Type
// and the output is an entity and its groups
// then you have to merge them into the container

class Container {
  // groups: Group[] = []
  // declarations: Declaration[] = []
  entities: (Group | Declaration)[] = []
  fragments: Fragment[] = []

  static async from(o: J.Reflection): R<Container> {
    if (isProjectReflection(o)) {
      return await this.fromContainerReflection(o)
    }

    if (isFunctionReflection(o)) {
      return await this.fromFunctionReflection(o)
    }

    if (isClassReflection(o)) {
      return await this.fromContainerReflection(o)
    }

    if (isMethodReflection(o)) {
      return await this.fromFunctionReflection(o)
    }

    if (isCallSignatureReflection(o)) {
      return await this.fromSignatureReflection(o)
    }

    if (isParameterReflection(o)) {
      return await this.fromParameterReflection(o)
    }

    const e = new Error(`The creation of a container from the '${kindToString(o.kind)}' reflection is not supported`)
    return [new Container(), e]
  }

  static async fromFunctionReflection(o: J.DeclarationReflection): R<Container> {
    let err: E
    let c = new Container()

    if (o.signatures) {
      for (const e of o.signatures) {
        const [n, ne] = await process(e)
        err = errors.join(err, ne)
        c = Container.merge(c, n)
      }
    }

    return [c, err]
  }

  static async fromSignatureReflection(o: J.SignatureReflection): R<Container> {
    let err: E
    const c = new Container()

    const [d, de] = await Declaration.from(o)
    err = errors.join(err, de)
    // c.declarations.push(d)
    c.entities.push(d)

    // todo: if (b.length !== 0 && !s.comment) {}

    if (o.parameters) {
      for (const e of o.parameters) {
        const [n, ne] = await process(e)
        err = errors.join(err, ne)
        d.parameters = n.fragments
      }
    }

    return [c, err]
  }

  static async fromParameterReflection(o: J.ParameterReflection): R<Container> {
    let err: E
    const c = new Container()

    const [f, fe] = await Fragment.from(o)
    err = errors.join(err, fe)
    c.fragments.push(f)

    return [c, err]
  }

  static async fromContainerReflection(o: J.ContainerReflection): R<Container> {
    let err: E
    let c = new Container()

    const [d, de] = await Declaration.from(o)
    err = errors.join(err, de)
    // c.declarations.push(d)
    c.entities.push(d)

    // if (o.categories) {
    //   for (const e of o.categories) {
    //     const [n, ne] = await this.fromReflectionCategory(e)
    //     err = errors.join(err, ne)
    //     c = Container.merge(c, n)
    //   }
    // }

    // if (o.groups) {
    //   for (const e of o.groups) {
    //     const [n, ne] = await this.fromReflectionGroup(e)
    //     err = errors.join(err, ne)
    //     c = Container.merge(c, n)
    //   }
    // }

    if (o.children) {
      for (const e of o.children) {
        const [n, ne] = await process(e)
        err = errors.join(err, ne)
        c = Container.merge(c, n)
      }
    }

    return [c, err]
  }

  // static async fromReflectionGroup(o: J.ReflectionGroup): R<Container> {
  //   return await this.fromReflectionCategory(o)
  // }

  // static async fromReflectionCategory(o: J.ReflectionCategory): R<Container> {
  //   let err: E
  //   const c = new Container()

  //   const [g, ge] = await Group.fromReflectionCategory(o)
  //   err = errors.join(err, ge)
  //   // c.groups.push(g)
  //   c.entities.push(g)

  //   return [c, err]
  // }

  static merge(a: Container, b: Container): Container {
    const c = new Container()
    // c.groups = [...a.groups, ...b.groups]
    // c.declarations = [...a.declarations, ...b.declarations]
    c.entities = [...a.entities, ...b.entities]
    c.fragments = [...a.fragments, ...b.fragments]
    return c
  }
}

class Group {
  name = ""
  description = ""

  static async fromReflectionGroup(o: J.ReflectionGroup): R<Group> {
    return await this.fromReflectionCategory(o)
  }

  static async fromReflectionCategory(o: J.ReflectionCategory): R<Group> {
    let err: E
    const g = new Group()

    g.name = o.title

    if (o.description) {
      const [n, ne] = await Narrative.from(o.description)
      err = errors.join(ne)
      g.description = n.description
    }

    return [g, err]
  }
}

class Declaration {
  name = ""
  location: number[] = []
  narrative = new Narrative()
  properties: Fragment[] = []
  members: Fragment[] = []
  parameters: Fragment[] = []

  static async from(o: J.Reflection): R<Declaration> {
    let err: E
    const d = new Declaration()

    d.name = o.name

    if (o.comment) {
      const [n, ne] = await Narrative.from(o.comment)
      err = errors.join(ne)
      d.narrative = n
    }

    return [d, err]
  }

  to(): L.Declaration {
    const d = new L.Declaration()
    d.name = this.name
    d.location = this.location
    d.summary = this.narrative.summary
    d.description = this.narrative.description
    // d.properties = this.properties
    // d.members = this.members
    // d.parameters = this.parameters
    d.returns.description = this.narrative.returns
    d.examples = this.narrative.examples
    return d
  }
}

class Fragment {
  name = ""
  location: number[] = []
  default = ""
  narrative = new Narrative()
  properties: Fragment[] = []

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
    f.location = this.location
    f.default = this.default
    // f.example = this.example
    f.description = this.narrative.description
    // f.properties = this.properties
    return f
  }
}

class Narrative {
  summary = ""
  description = ""
  examples = ""
  returns = ""

  static async from(o: J.Comment | J.CommentDisplayPart[]): R<Narrative> {
    if (!Array.isArray(o)) {
      return await this.fromComment(o)
    }
    return await this.fromCommentDisplayPart(o)
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

  static async fromCommentDisplayPart(o: J.CommentDisplayPart[]): R<Narrative> {
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
