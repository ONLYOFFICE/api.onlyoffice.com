import * as Library from "@onlyoffice/library-declaration"
import {type Signature, type Token} from "@onlyoffice/signature"
import {test} from "uvu"
import {equal as eq} from "uvu/assert"
import {
  Formatter,
  anyType,
  arrayType,
  classDeclaration,
  constructorDeclaration,
  declaration,
  eventDeclaration,
  functionType,
  literalType,
  methodDeclaration,
  objectType,
  passthroughType,
  propertyDeclaration,
  type,
  typeDeclaration,
  unionType,
  unknownType,
  value,
  voidType,
} from "./description.ts"
import * as shared from "./shared.ts"

test("Formatter(): initializes an empty instance", () => {
  const f = new Formatter()
  const k = Object.keys(f)
  eq(k, [
    "indent",
    "limit",
    "newline",
  ])
  eq(f.indent, 2)
  eq(f.limit, 100)
  eq(f.newline, "\n")
})

test("Formatter(): formats empty signature", () => {
  const f = new Formatter()
  const a = f.format([])
  const e: Signature = []
  eq(a, e)
})

test("Formatter(): formats signature less than 100 characters", () => {
  const f = new Formatter()
  const s = [
    shared.keywordToken("function"),
    shared.spaceText(),
    shared.identifierToken("d"),
    shared.leftCurlyText(),
    shared.parameterToken("a"),
    shared.colonText(),
    shared.anyToken(),
    shared.commaText(),
    shared.parameterToken("b"),
    shared.colonText(),
    shared.anyToken(),
    shared.rightCurlyText(),
  ]
  const a = f.format([...s])
  const e = [...s]
  eq(a, e)
})

test("Formatter(): formats signature more than 100 characters", () => {
  const ap = (): Token[] => {
    return [
      shared.parameterToken("parameter"),
      shared.colonText(),
      shared.unknownToken(),
      shared.commaText(),
    ]
  }
  const ep = [
    shared.parameterToken("parameter"),
    shared.colonText(),
    shared.unknownToken(),
    shared.tokenText(","),
    shared.newlineText(),
    shared.indentText(),
  ]
  const f = new Formatter()
  const s = [
    shared.keywordToken("function"),
    shared.spaceText(),
    shared.identifierToken("d"),
    shared.leftCurlyText(),
    ...ap(),
    ...ap(),
    ...ap(),
    ...ap(),
    ...ap(),
    shared.rightCurlyText(),
  ]
  s.splice(-2, 1)
  const a = f.format(s)
  const e = [
    shared.keywordToken("function"),
    shared.spaceText(),
    shared.identifierToken("d"),
    shared.leftCurlyText(),
    shared.newlineText(),
    shared.indentText(),
    ...ep,
    ...ep,
    ...ep,
    ...ep,
    ...ep,
    shared.rightCurlyText(),
  ]
  e.splice(-2, 1)
  eq(a, e)
})

test("voidType(): creates tokens for the void type", () => {
  const t = shared.voidType()
  const a = voidType(t)
  const e = [shared.voidToken()]
  eq(a, e)
})

test("unknownType(): creates tokens for the unknown type", () => {
  const t = shared.unknownType()
  const a = unknownType(t)
  const e = [shared.unknownToken()]
  eq(a, e)
})

test("unionType(): creates tokens for the union type with no subtypes", () => {
  const t = shared.unionType()
  const a = unionType(t)
  eq(a, [])
})

test("unionType(): creates tokens for the union type with one subtype", () => {
  const t = shared.unionType()
  t.types = [shared.anyType()]
  const a = unionType(t)
  const e = [shared.anyToken()]
  eq(a, e)
})

test("unionType(): creates tokens for the union type with multiple subtypes", () => {
  const t = shared.unionType()
  t.types = [shared.anyType(), shared.anyType()]
  const a = unionType(t)
  const e = [
    shared.anyToken(),
    shared.separatorText(),
    shared.anyToken(),
  ]
  eq(a, e)
})

test("unionType(): creates tokens for the union type with one union subtype", () => {
  const u0 = shared.unionType()
  const u1 = shared.unionType()
  u1.types = [shared.anyType()]
  u0.types = [u1]
  const a = unionType(u0)
  const e = [shared.anyToken()]
  eq(a, e)
})

test("unionType(): creates tokens for the union type with the union subtype", () => {
  const u0 = shared.unionType()
  const at = shared.anyType()
  const u1 = shared.unionType()
  u1.types = [shared.anyType(), shared.anyType()]
  u0.types = [at, u1]
  const a = unionType(u0)
  const e = [
    shared.anyToken(),
    shared.separatorText(),
    shared.anyToken(),
    shared.separatorText(),
    shared.anyToken(),
  ]
  eq(a, e)
})

test("unionType(): creates tokens for the union type with one function subtype", () => {
  const ut = shared.unionType()
  const ft = shared.functionType()
  ft.returns = shared.anyReturns()
  ut.types = [ft]
  const a = unionType(ut)
  const e = [
    shared.leftCurlyText(),
    shared.rightCurlyText(),
    shared.colonText(),
    shared.anyToken(),
  ]
  eq(a, e)
})

test("unionType(): creates tokens for the union type with the function subtype ahead", () => {
  const ut = shared.unionType()
  const ft = shared.functionType()
  ft.returns = shared.anyReturns()
  const at = shared.anyType()
  ut.types = [ft, at]
  const a = unionType(ut)
  const e = [
    shared.leftCurlyText(),
    shared.rightCurlyText(),
    shared.colonText(),
    shared.anyToken(),
    shared.separatorText(),
    shared.anyToken(),
  ]
  eq(a, e)
})

test("unionType(): creates tokens for the union type with the function subtype behind", () => {
  const ut = shared.unionType()
  const at = shared.anyType()
  const ft = shared.functionType()
  ft.returns = shared.anyReturns()
  ut.types = [at, ft]
  const a = unionType(ut)
  const e = [
    shared.anyToken(),
    shared.separatorText(),
    shared.leftCurlyText(),
    shared.rightCurlyText(),
    shared.colonText(),
    shared.anyToken(),
  ]
  eq(a, e)
})

test("passthroughType(): creates tokens for the passthrough type with an empty value", () => {
  const t = shared.passthroughType("")
  const a = passthroughType(t)
  const e = [shared.typeToken("")]
  eq(a, e)
})

test("passthroughType(): creates tokens for the passthrough with a non-empty value", () => {
  const t = shared.passthroughType("v")
  const a = passthroughType(t)
  const e = [shared.typeToken("v")]
  eq(a, e)
})

test("objectType(): creates tokens for the object type", () => {
  const t = shared.objectType()
  const a = objectType(t)
  const e = [shared.typeToken("object")]
  eq(a, e)
})

test("literalType(): creates tokens for the literal type with an empty value", () => {
  const t = shared.literalType("")
  const a = literalType(t)
  const e = [shared.typeToken("")]
  eq(a, e)
})

test("literalType(): creates tokens for the literal type with a non-empty value", () => {
  const t = shared.literalType("v")
  const a = literalType(t)
  const e = [shared.typeToken("v")]
  eq(a, e)
})

test("literalType(): creates tokens for the literal type with a null value", () => {
  const t = shared.literalType(null)
  const a = literalType(t)
  const e = [shared.stringToken('"null"')]
  eq(a, e)
})

test("functionType(): creates tokens for the function type with no parameters, returns", () => {
  const t = shared.functionType()
  const a = functionType(t)
  const e = [
    shared.leftCurlyText(),
    shared.rightCurlyText(),
  ]
  eq(a, e)
})

test("functionType(): creates tokens for the function type with a parameter with an empty identifier", () => {
  const f = shared.functionType()
  f.parameters = [shared.anyValue("")]
  const a = functionType(f)
  const e = [
    shared.leftCurlyText(),
    shared.parameterToken(""),
    shared.colonText(),
    shared.anyToken(),
    shared.rightCurlyText(),
  ]
  eq(a, e)
})

test("functionType(): creates tokens for the function type with one parameter", () => {
  const f = shared.functionType()
  f.parameters = [shared.anyValue("v")]
  const a = functionType(f)
  const e = [
    shared.leftCurlyText(),
    shared.parameterToken("v"),
    shared.colonText(),
    shared.anyToken(),
    shared.rightCurlyText(),
  ]
  eq(a, e)
})

test("functionType(): creates tokens for the function type with multiple parameters", () => {
  const t = shared.functionType()
  t.parameters = [shared.anyValue("a"), shared.anyValue("b")]
  const a = functionType(t)
  const e = [
    shared.leftCurlyText(),
    shared.parameterToken("a"),
    shared.colonText(),
    shared.anyToken(),
    shared.commaText(),
    shared.parameterToken("b"),
    shared.colonText(),
    shared.anyToken(),
    shared.rightCurlyText(),
  ]
  eq(a, e)
})

test("functionType(): creates tokens for the function type with a return type", () => {
  const t = shared.functionType()
  t.returns = shared.anyReturns()
  const a = functionType(t)
  const e = [
    shared.leftCurlyText(),
    shared.rightCurlyText(),
    shared.colonText(),
    shared.anyToken(),
  ]
  eq(a, e)
})

test("arrayType(): creates tokens for the array type with no items", () => {
  const t = shared.arrayType()
  const a = arrayType(t)
  const e = [shared.arrayText()]
  eq(a, e)
})

test("arrayType(): creates tokens for the array type with one item", () => {
  const t = shared.arrayType()
  t.items = [shared.anyType()]
  const a = arrayType(t)
  const e = [
    shared.anyToken(),
    shared.arrayText(),
  ]
  eq(a, e)
})

test("arrayType(): creates tokens for the array type with a union item with one subtype", () => {
  const at = shared.arrayType()
  const ut = shared.unionType()
  ut.types = [shared.anyType()]
  at.items = [ut]
  const a = arrayType(at)
  const e = [
    shared.leftCurlyText(),
    shared.anyToken(),
    shared.rightCurlyText(),
    shared.arrayText(),
  ]
  eq(a, e)
})

test("arrayType(): creates tokens for the array type with a union item with multiple subtypes", () => {
  const at = shared.arrayType()
  const ut = shared.unionType()
  ut.types = [shared.anyType(), shared.anyType()]
  at.items = [ut]
  const a = arrayType(at)
  const e = [
    shared.leftCurlyText(),
    shared.anyToken(),
    shared.separatorText(),
    shared.anyToken(),
    shared.rightCurlyText(),
    shared.arrayText(),
  ]
  eq(a, e)
})

test("arrayType(): creates tokens for the array type with a function item", () => {
  const t = shared.arrayType()
  t.items = [shared.functionType()]
  const a = arrayType(t)
  const e = [
    shared.leftCurlyText(),
    shared.rightCurlyText(),
    shared.arrayText(),
  ]
  eq(a, e)
})

test("arrayType(): creates tokens for the array type with a array item", () => {
  const t = shared.arrayType()
  t.items = [shared.arrayType()]
  const a = arrayType(t)
  const e = [
    shared.arrayText(),
    shared.arrayText(),
  ]
  eq(a, e)
})

test("anyType(): creates tokens for the any type", () => {
  const t = shared.anyType()
  const a = anyType(t)
  const e = [shared.anyToken()]
  eq(a, e)
})

test("type(): creates tokens for the reference with no id", () => {
  const t = Library.reference("")
  const a = type(t)
  const e = [shared.referenceToken("")]
  eq(a, e)
})

test("type(): creates tokens for the reference with an id", () => {
  const t = Library.reference("v")
  const a = type(t)
  const e = [shared.referenceToken("v")]
  eq(a, e)
})

test("type(): creates tokens for the any type", () => {
  const t = shared.anyType()
  const a = type(t)
  const e = [shared.anyToken()]
  eq(a, e)
})

test("type(): creates tokens for the array type", () => {
  const t = shared.arrayType()
  const a = type(t)
  const e = [shared.arrayText()]
  eq(a, e)
})

test("type(): creates tokens for the function type", () => {
  const t = shared.functionType()
  const a = type(t)
  const e = [shared.leftCurlyText(), shared.rightCurlyText()]
  eq(a, e)
})

test("type(): creates tokens for the literal type", () => {
  const t = shared.literalType("v")
  const a = type(t)
  const e = [shared.typeToken("v")]
  eq(a, e)
})

test("type(): creates tokens for the object type", () => {
  const t = shared.objectType()
  const a = type(t)
  const e = [shared.typeToken("object")]
  eq(a, e)
})

test("type(): creates tokens for the passthrough type", () => {
  const t = shared.passthroughType("v")
  const a = type(t)
  const e = [shared.typeToken("v")]
  eq(a, e)
})

test("type(): creates tokens for the union type", () => {
  const t = shared.unionType()
  const a = type(t)
  eq(a, [])
})

test("type(): creates tokens for the unknown type", () => {
  const t = shared.unknownType()
  const a = type(t)
  const e = [shared.unknownToken()]
  eq(a, e)
})

test("type(): creates tokens for the void type", () => {
  const t = shared.voidType()
  const a = type(t)
  const e = [shared.voidToken()]
  eq(a, e)
})

test("type(): creates an empty array for an unsupported type", () => {
  // @ts-expect-error checking the behavior when the type is not supported.
  const a = type({})
  eq(a, [])
})

test("value(): creates tokens for the value with an empty identifier", () => {
  const v = shared.anyValue("")
  const a = value(v)
  const e = [shared.parameterToken(""), shared.colonText(), shared.anyToken()]
  eq(a, e)
})

test("value(): creates tokens for the value with an identifier", () => {
  const v = shared.anyValue("v")
  const a = value(v)
  const e = [shared.parameterToken("v"), shared.colonText(), shared.anyToken()]
  eq(a, e)
})

test("value(): creates tokens for the value with a default value", () => {
  const v = shared.anyValue("")
  v.default = shared.literalType("v")
  const a = value(v)
  const e = [
    shared.parameterToken(""),
    shared.colonText(),
    shared.anyToken(),
    shared.equalsText(),
    shared.tokenText("v"),
  ]
  eq(a, e)
})

test("value(): creates tokens for the value with a default value and function type", () => {
  const v = shared.anyValue("")
  v.default = shared.literalType("v")
  v.type = shared.functionType()
  const a = value(v)
  const e = [
    shared.parameterToken(""),
    shared.colonText(),
    shared.leftCurlyText(),
    shared.leftCurlyText(),
    shared.rightCurlyText(),
    shared.arrowText(),
    shared.voidToken(),
    shared.rightCurlyText(),
    shared.equalsText(),
    shared.tokenText("v"),
  ]
  eq(a, e)
})

test("value(): creates tokens for the value with a default value and function type with any returns", () => {
  const v = shared.anyValue("")
  v.default = shared.literalType("v")
  v.type = shared.functionType()
  v.type.returns = shared.anyReturns()
  const a = value(v)
  const e = [
    shared.parameterToken(""),
    shared.colonText(),
    shared.leftCurlyText(),
    shared.leftCurlyText(),
    shared.rightCurlyText(),
    shared.arrowText(),
    shared.anyToken(),
    shared.rightCurlyText(),
    shared.equalsText(),
    shared.tokenText("v"),
  ]
  eq(a, e)
})

test("typeDeclaration(): creates tokens for the type declaration with no identifier", () => {
  const t = shared.anyType()
  const d = shared.typeDeclaration(t)
  const a = typeDeclaration(d)
  const e = [
    shared.keywordToken("type"),
    shared.spaceText(),
    shared.identifierToken(""),
    shared.equalsText(),
    shared.anyToken(),
  ]
  eq(a, e)
})

test("typeDeclaration(): creates tokens for the type declaration with an identifier", () => {
  const t = shared.anyType()
  const d = shared.typeDeclaration(t)
  d.identifier = "d"
  const a = typeDeclaration(d)
  const e = [
    shared.keywordToken("type"),
    shared.spaceText(),
    shared.identifierToken("d"),
    shared.equalsText(),
    shared.anyToken(),
  ]
  eq(a, e)
})

test("typeDeclaration(): creates tokens for the type declaration with an function type", () => {
  const t = shared.anyType()
  const d = shared.typeDeclaration(t)
  d.identifier = "d"
  d.type = shared.functionType()
  const a = typeDeclaration(d)
  const e = [
    shared.keywordToken("function"),
    shared.spaceText(),
    shared.identifierToken("d"),
    shared.leftCurlyText(),
    shared.rightCurlyText(),
  ]
  eq(a, e)
})

test("propertyDeclaration(): creates tokens for the property declaration with no identifier", () => {
  const v = shared.anyValue("v")
  const d = shared.propertyDeclaration(v)
  const a = propertyDeclaration(d)
  const e = [
    shared.parameterToken("v"),
    shared.colonText(),
    shared.anyToken(),
  ]
  eq(a, e)
})

test("propertyDeclaration(): creates tokens for the property declaration with an identifier", () => {
  const v = shared.anyValue("v")
  const d = shared.propertyDeclaration(v)
  d.identifier = "d"
  const a = propertyDeclaration(d)
  const e = [
    shared.parameterToken("d"),
    shared.colonText(),
    shared.anyToken(),
  ]
  eq(a, e)
})

test("methodDeclaration(): creates tokens for the method declaration with no identifier", () => {
  const f = shared.functionType()
  const d = shared.methodDeclaration(f)
  const a = methodDeclaration(d)
  const e = [
    shared.keywordToken("function"),
    shared.spaceText(),
    shared.identifierToken(""),
    shared.leftCurlyText(),
    shared.rightCurlyText(),
  ]
  eq(a, e)
})

test("methodDeclaration(): creates tokens for the method declaration with an identifier", () => {
  const f = shared.functionType()
  const d = shared.methodDeclaration(f)
  d.identifier = "d"
  const a = methodDeclaration(d)
  const e = [
    shared.keywordToken("function"),
    shared.spaceText(),
    shared.identifierToken("d"),
    shared.leftCurlyText(),
    shared.rightCurlyText(),
  ]
  eq(a, e)
})

test("eventDeclaration(): creates tokens for the event declaration with no identifier", () => {
  const f = shared.functionType()
  const d = shared.eventDeclaration(f)
  const a = eventDeclaration(d)
  const e = [
    shared.keywordToken("function"),
    shared.spaceText(),
    shared.identifierToken(""),
    shared.leftCurlyText(),
    shared.rightCurlyText(),
  ]
  eq(a, e)
})

test("eventDeclaration(): creates tokens for the event declaration with an identifier", () => {
  const f = shared.functionType()
  const d = shared.eventDeclaration(f)
  d.identifier = "d"
  const a = eventDeclaration(d)
  const e = [
    shared.keywordToken("function"),
    shared.spaceText(),
    shared.identifierToken("d"),
    shared.leftCurlyText(),
    shared.rightCurlyText(),
  ]
  eq(a, e)
})

test("constructorDeclaration(): creates tokens for the constructor declaration with no identifier", () => {
  const f = shared.functionType()
  const d = shared.constructorDeclaration(f)
  const a = constructorDeclaration(d)
  const e = [
    shared.identifierToken(""),
    shared.leftCurlyText(),
    shared.rightCurlyText(),
  ]
  eq(a, e)
})

test("constructorDeclaration(): creates tokens for the constructor declaration with an identifier", () => {
  const f = shared.functionType()
  const d = shared.constructorDeclaration(f)
  d.identifier = "d"
  const a = constructorDeclaration(d)
  const e = [
    shared.identifierToken("d"),
    shared.leftCurlyText(),
    shared.rightCurlyText(),
  ]
  eq(a, e)
})

test("classDeclaration(): creates tokens for the class declaration with no identifier", () => {
  const d = shared.classDeclaration()
  const a = classDeclaration(d)
  const e = [
    shared.keywordToken("class"),
    shared.spaceText(),
    shared.identifierToken(""),
  ]
  eq(a, e)
})

test("classDeclaration(): creates tokens for the class declaration with an identifier", () => {
  const d = shared.classDeclaration()
  d.identifier = "d"
  const a = classDeclaration(d)
  const e = [
    shared.keywordToken("class"),
    shared.spaceText(),
    shared.identifierToken("d"),
  ]
  eq(a, e)
})

test("classDeclaration(): creates tokens for the class declaration with one extends", () => {
  const d = shared.classDeclaration()
  d.extends = [Library.reference("v")]
  const a = classDeclaration(d)
  const e = [
    shared.keywordToken("class"),
    shared.spaceText(),
    shared.identifierToken(""),
    shared.spaceText(),
    shared.keywordToken("extends"),
    shared.spaceText(),
    shared.referenceToken("v"),
  ]
  eq(a, e)
})

test("classDeclaration(): creates tokens for the class declaration with multiple extends", () => {
  const d = shared.classDeclaration()
  d.extends = [Library.reference("a"), Library.reference("b")]
  const a = classDeclaration(d)
  const e = [
    shared.keywordToken("class"),
    shared.spaceText(),
    shared.identifierToken(""),
    shared.spaceText(),
    shared.keywordToken("extends"),
    shared.spaceText(),
    shared.referenceToken("a"),
    shared.commaText(),
    shared.referenceToken("b"),
  ]
  eq(a, e)
})

test("declaration(): creates tokens for the class declaration", () => {
  const d = shared.classDeclaration()
  const [a] = declaration(d)
  const e = shared.keywordToken("class")
  eq(a, e)
})

test("declaration(): creates tokens for the constructor declaration", () => {
  const f = shared.functionType()
  const d = shared.constructorDeclaration(f)
  const [a] = declaration(d)
  const e = shared.identifierToken("")
  eq(a, e)
})

test("declaration(): creates tokens for the event declaration", () => {
  const f = shared.functionType()
  const d = shared.eventDeclaration(f)
  const [a] = declaration(d)
  const e = shared.keywordToken("function")
  eq(a, e)
})

test("declaration(): creates tokens for the method declaration", () => {
  const f = shared.functionType()
  const d = shared.methodDeclaration(f)
  const [a] = declaration(d)
  const e = shared.keywordToken("function")
  eq(a, e)
})

test("declaration(): creates tokens for the property declaration", () => {
  const v = shared.anyValue("")
  const d = shared.propertyDeclaration(v)
  const [a] = declaration(d)
  const e = shared.parameterToken("")
  eq(a, e)
})

test("declaration(): creates tokens for the type declaration", () => {
  const t = shared.anyType()
  const d = shared.typeDeclaration(t)
  const [a] = declaration(d)
  const e = shared.keywordToken("type")
  eq(a, e)
})

test("declaration(): creates an empty array for an unsupported declaration", () => {
  // @ts-expect-error checking the behavior when the declaration is not supported.
  const a = declaration({})
  eq(a, [])
})

test.run()
