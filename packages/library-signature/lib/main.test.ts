// todo

import * as Library from "@onlyoffice/library-declaration"
import {type Signature} from "@onlyoffice/signature"
import {test} from "uvu"
import {equal as eq} from "uvu/assert"
import * as shared from "./internal/shared.ts"
import {computeDeclaration, computeType} from "./main.ts"

class ComputeCallback {
  s: Signature = []

  cb = (s: Signature): void => {
    this.s.push(...s)
  }
}

test("computeType(): signature for reference type", () => {
  const t = Library.reference("")
  const cb = new ComputeCallback()
  computeType(t, cb.cb)
  const a = cb.s
  const e: Signature = []
  eq(a, e)
})

test("computeType(): signature for function type with any parameter", () => {
  const t = shared.functionType()
  t.parameters = [shared.anyValue("")]
  const cb = new ComputeCallback()
  computeType(t, cb.cb)
  const a = cb.s
  const e = [shared.anyToken()]
  eq(a, e)
})

test("computeType(): signature for function type with any returns", () => {
  const t = shared.functionType()
  t.returns = shared.anyReturns()
  const cb = new ComputeCallback()
  computeType(t, cb.cb)
  const a = cb.s
  const e = [shared.anyToken()]
  eq(a, e)
})

test("computeType(): signature for function type with any parameters and returns", () => {
  const t = shared.functionType()
  t.parameters = [
    shared.anyValue(""),
    shared.anyValue(""),
    shared.anyValue(""),
  ]
  t.returns = shared.anyReturns()
  const cb = new ComputeCallback()
  computeType(t, cb.cb)
  const a = cb.s
  const e = [
    shared.anyToken(),
    shared.anyToken(),
    shared.anyToken(),
    shared.anyToken(),
  ]
  eq(a, e)
})

test("computeType(): signature for object type", () => {
  const t = shared.objectType()
  t.properties = [shared.anyValue("")]
  const cb = new ComputeCallback()
  computeType(t, cb.cb)
  const a = cb.s
  const e = [shared.anyToken()]
  eq(a, e)
})

test("computeDeclaration(): signature for declaration with type", () => {
  const f = shared.functionType()
  const d = shared.methodDeclaration(f)
  const cb = new ComputeCallback()
  computeDeclaration(d, cb.cb)
  const a = cb.s
  const e = [
    shared.keywordToken("function"),
    shared.spaceText(),
    shared.identifierToken(""),
    shared.bracketsText(),
    shared.bracketsText(),
  ]
  eq(a, e)
})

test("computeDeclaration(): signature for class declaration", () => {
  const d = shared.classDeclaration()
  const cb = new ComputeCallback()
  computeDeclaration(d, cb.cb)
  const a = cb.s
  const e = [
    shared.keywordToken("class"),
    shared.spaceText(),
    shared.identifierToken(""),
  ]
  eq(a, e)
})

test("computeDeclaration(): signature for class declaration with identifier", () => {
  const d = shared.classDeclaration()
  d.identifier = "d"
  const cb = new ComputeCallback()
  computeDeclaration(d, cb.cb)
  const a = cb.s
  const e = [
    shared.keywordToken("class"),
    shared.spaceText(),
    shared.identifierToken("d"),
  ]
  eq(a, e)
})

test("computeDeclaration(): signature for class declaration with extends", () => {
  const d = shared.classDeclaration()
  d.extends = [Library.reference("v")]
  d.identifier = "d"
  const cb = new ComputeCallback()
  computeDeclaration(d, cb.cb)
  const a = cb.s
  const e = [
    shared.keywordToken("class"),
    shared.spaceText(),
    shared.identifierToken("d"),
    shared.spaceText(),
    shared.keywordToken("extends"),
    shared.spaceText(),
    shared.referenceToken("v"),
    shared.referenceToken("v"),
  ]
  eq(a, e)
})

test.run()
