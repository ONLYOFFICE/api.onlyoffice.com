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
import {Formatter} from "./internal/formatter.ts"
import {State} from "./internal/state.ts"
import * as V from "./internal/verbose.ts"

const console = Console.shared

export interface Context {
  s: State
  f: Formatter
  trailOf(t: Declaration | Fragment): FlatTrail | undefined
  reflectionOf(t: FlatTrail): J.Reflection | undefined
  idOf(id: number): number | undefined
}

export interface Transport {
  entities: Entity[]
  trailOf(t: Declaration | Fragment): FlatTrail | undefined
  reflectionOf(t: FlatTrail): J.Reflection | undefined
  idOf(id: number): number | undefined
}

export type FlatTrail = number[]

export function compute(ct: Transport): void {
  for (const e of ct.entities) {
    if (e instanceof GroupEntity) {
      continue
    }

    console.log(`Start computing the signature for ${e.declaration.name} id = ${e.id}`)

    let ft = ct.trailOf(e.declaration)
    if (!ft) {
      console.log(`Trail for ${e.declaration.name} id = ${e.id} not found`)
      continue
    }

    const t = ct.reflectionOf(ft)
    if (!t) {
      console.log(`Target for ${e.declaration.name} id = ${e.id} not found`)
      continue
    }

    ft = ft.slice(0, -1)
    const p = ct.reflectionOf(ft)
    if (!t) {
      console.log(`Parent for ${e.declaration.name} id = ${e.id} not found`)
      continue
    }

    const cf: Context = {
      s: new State(),
      f: new Formatter(),
      trailOf: ct.trailOf.bind(ct),
      reflectionOf: ct.reflectionOf.bind(ct),
      idOf: ct.idOf.bind(ct),
    }

    const f = e.declaration.parameters
    const v = e.declaration.signature.verbose
    const c = e.declaration.signature.concise
    const r = e.declaration.returns.signature.concise

    if (f.length !== 0) {
      C.fragment(f, cf)
    }

    if (isClassReflection(t)) {
      v.push(...V.classDeclaration(cf, t))
      c.push(...C.classDeclaration(cf, t))
    } else if (isConstructorReflection(p) && isSignatureReflection(t)) {
      v.push(...V.constructorDeclaration(cf, t))
      c.push(...C.constructorDeclaration(t))
    } else if (isEnumMemberReflection(t)) {
      v.push(...V.enumMemberReflection(cf, t))
      c.push(...C.enumMemberReflection(cf, t))
    } else if (isEnumReflection(t)) {
      v.push(...V.enumReflection(cf, t))
      c.push(...C.enumReflection(cf, t))
    } else if (isFunctionReflection(p) && isCallSignatureReflection(t)) {
      v.push(...V.functionsDeclaration(cf, t))
      c.push(...C.functionsDeclaration(t))
      r.push(...C.returns(cf, t.type))
    } else if (isInterfaceReflection(t)) {
      v.push(...V.interfaceReflection(cf, t))
      c.push(...C.interfaceReflection(cf, t))
    } else if (isMethodReflection(p) && isCallSignatureReflection(t)) {
      v.push(...V.methodDeclaration(t, p, cf))
      c.push(...C.methodDeclaration(t))
      r.push(...C.returns(cf, t.type))
    } else if (isPropertyReflection(t)) {
      v.push(...V.propertyReflection(cf, t))
      c.push(...C.propertyReflection(cf, t))
    } else if (isTypeAliasReflection(t)) {
      v.push(...V.typeAliasReflection(cf, t))
      c.push(...C.typeAliasReflection(cf, t))
    } else if (isVariableReflection(t)) {
      v.push(...V.variableDeclaration(cf, t))
      c.push(...C.variableDeclaration(cf, t))
    }

    cf.f.format(e.declaration.signature.verbose)

    console.log(`Finish computing the signature for ${e.declaration.name} id = ${e.id}`)
  }
}
