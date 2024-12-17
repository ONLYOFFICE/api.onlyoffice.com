import {type Declaration, type Entity, type Fragment, GroupEntity} from "@onlyoffice/library-declaration/next.ts"
import {
  isCallSignatureReflection,
  isClassReflection,
  isConstructorReflection,
  isEnumMemberReflection,
  isEnumReflection,
  isFunctionReflection,
  isInterfaceReflection,
  isMethodReflection,
  isPropertyReflection,
  isSignatureReflection,
  isTypeAliasReflection,
  isVariableReflection,
} from "@onlyoffice/typedoc-util-is-reflection"
import {type JSONOutput as J} from "typedoc"
import {Console} from "./console.ts"
import * as C from "./internal/concise.ts"
import {Context} from "./internal/context.ts"
import {Formatter} from "./internal/formatter.ts"
import * as V from "./internal/verbose.ts"

const console = Console.shared

export interface ContextFormat extends Transport {
  context: Context
  formatter: Formatter
}

export interface ComputeTransport extends Transport {
  entities: Entity[]
}

export interface Transport {
  trailOf(t: Declaration | Fragment): FlatTrail | undefined
  reflectionOf(t: FlatTrail): J.Reflection | undefined
  idOf(id: number): number | undefined
}

export type FlatTrail = number[]

export function compute(ct: ComputeTransport): void {
  const tr: Transport = {
    trailOf: ct.trailOf.bind(ct),
    reflectionOf: ct.reflectionOf.bind(ct),
    idOf: ct.idOf.bind(ct),
  }

  for (const e of ct.entities) {
    if (e instanceof GroupEntity) {
      continue
    }

    console.log(`Start computing the signature for ${e.declaration.name} id = ${e.id}`)

    let ft = ct.trailOf(e.declaration)
    if (!ft) {
      console.log(`Trail for ${e.declaration.name} id = ${e.id} not found!`)
      continue
    }
    const t = ct.reflectionOf(ft)
    ft = ft.slice(0, -1)
    const p = ct.reflectionOf(ft)

    if (!t) {
      console.log(`Target for ${e.declaration.name} id = ${e.id} not found!`)
      continue
    }

    if (!t) {
      console.log(`Parent for ${e.declaration.name} id = ${e.id} not found!`)
      continue
    }

    const cf: ContextFormat = {
      context: new Context(),
      formatter: new Formatter(),
      ...tr,
    }

    const f = e.declaration.parameters
    const v = e.declaration.signature.verbose
    const c = e.declaration.signature.concise
    const r = e.declaration.returns.signature.concise

    if (f.length !== 0) {
      C.fragment(f, cf)
    }

    if (isClassReflection(t)) {
      v.push(...V.classDeclaration(t, cf))
      c.push(...C.classDeclaration(t, cf))
    } else if (isConstructorReflection(p) && isSignatureReflection(t)) {
      v.push(...V.constructorDeclaration(t, cf))
      c.push(...C.constructorDeclaration(t))
    } else if (isEnumMemberReflection(t)) {
      v.push(...V.enumMemberReflection(t, cf))
      c.push(...C.enumMemberReflection(t, cf))
    } else if (isEnumReflection(t)) {
      v.push(...V.enumReflection(t, cf))
      c.push(...C.enumReflection(t, cf))
    } else if (isFunctionReflection(p) && isCallSignatureReflection(t)) {
      v.push(...V.functionsDeclaration(t, cf))
      c.push(...C.functionsDeclaration(t))
      r.push(...C.returns(t.type, cf))
    } else if (isInterfaceReflection(t)) {
      v.push(...V.interfaceReflection(t, cf))
      c.push(...C.interfaceReflection(t, cf))
    } else if (isMethodReflection(p) && isCallSignatureReflection(t)) {
      v.push(...V.methodDeclaration(t, p, cf))
      c.push(...C.methodDeclaration(t))
      r.push(...C.returns(t.type, cf))
    } else if (isPropertyReflection(t)) {
      v.push(...V.propertyReflection(t, cf))
      c.push(...C.propertyReflection(t, cf))
    } else if (isTypeAliasReflection(t)) {
      v.push(...V.typeAliasReflection(t, cf))
      c.push(...C.typeAliasReflection(t, cf))
    } else if (isVariableReflection(t)) {
      v.push(...V.variableDeclaration(t, cf))
      c.push(...C.variableDeclaration(t, cf))
    }

    cf.formatter.format(e.declaration.signature.verbose)

    console.log(`Finish computing the signature for ${e.declaration.name} id = ${e.id}`)
  }
}
