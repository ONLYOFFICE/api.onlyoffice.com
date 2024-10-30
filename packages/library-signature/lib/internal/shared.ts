import * as Library from "@onlyoffice/library-declaration"
import {
  EntityToken,
  KeywordToken,
  ParameterToken,
  Reference,
  StringToken,
  TextToken,
  TypeToken,
} from "@onlyoffice/signature"

export function classDeclaration(): Library.ClassDeclaration {
  const n = Library.declarationNode()
  return Library.classDeclaration(n)
}

export function constructorDeclaration(t: Library.FunctionType): Library.ConstructorDeclaration {
  const n = Library.declarationNode()
  return Library.constructDeclaration(t, n)
}

export function eventDeclaration(t: Library.FunctionType): Library.EventDeclaration {
  const n = Library.declarationNode()
  return Library.eventDeclaration(t, n)
}

export function methodDeclaration(t: Library.FunctionType): Library.MethodDeclaration {
  const n = Library.declarationNode()
  return Library.methodDeclaration(t, n)
}

export function propertyDeclaration(v: Library.Value): Library.PropertyDeclaration {
  const n = Library.declarationNode()
  return Library.propertyDeclaration(v, n)
}

export function typeDeclaration(t: Library.Type): Library.TypeDeclaration {
  const n = Library.declarationNode()
  return Library.typeDeclaration(t, n)
}

export function voidType(): Library.VoidType {
  const n = Library.typeNode()
  return Library.voidType(n)
}

export function unknownType(): Library.UnknownType {
  const n = Library.typeNode()
  return Library.unknownType(n)
}

export function unionType(): Library.UnionType {
  const n = Library.typeNode()
  return Library.unionType(n)
}

export function anyType(): Library.AnyType {
  const n = Library.typeNode()
  return Library.anyType(n)
}

export function functionType(): Library.FunctionType {
  const n = Library.typeNode()
  return Library.functionType(n)
}

export function passthroughType(v: unknown): Library.PassthroughType {
  const n = Library.typeNode()
  return Library.passthroughType(n, v)
}

export function objectType(): Library.ObjectType {
  const n = Library.typeNode()
  return Library.objectType(n)
}

export function literalType(v: unknown): Library.LiteralType {
  const n = Library.typeNode()
  return Library.literalType(n, v)
}

export function arrayType(): Library.ArrayType {
  const n = Library.typeNode()
  return Library.arrayType(n)
}

export function unknownToken(): TypeToken {
  const t = new TypeToken()
  t.text = "unknown"
  return t
}

export function voidToken(): TypeToken {
  const t = new TypeToken()
  t.text = "void"
  return t
}

export function anyToken(): TypeToken {
  const t = new TypeToken()
  t.text = "any"
  return t
}

export function typeToken(s: string): TypeToken {
  const t = new TypeToken()
  t.text = s
  return t
}

export function parameterToken(s: string): ParameterToken {
  const t = new ParameterToken()
  t.text = s
  return t
}

export function referenceToken(s: string): Reference {
  const t = new Reference()
  t.id = s
  t.token = new TypeToken()
  return t
}

export function keywordToken(s: string): KeywordToken {
  const t = new KeywordToken()
  t.text = s
  return t
}

export function identifierToken(s: string): EntityToken {
  const t = new EntityToken()
  t.text = s
  return t
}

export function stringToken(s: string): StringToken {
  const t = new StringToken()
  t.text = s
  return t
}

export function separatorText(): TextToken {
  const t = new TextToken()
  t.text = " | "
  return t
}

export function leftCurlyText(): TextToken {
  const t = new TextToken()
  t.text = "("
  return t
}

export function rightCurlyText(): TextToken {
  const t = new TextToken()
  t.text = ")"
  return t
}

export function colonText(): TextToken {
  const t = new TextToken()
  t.text = ": "
  return t
}

export function arrayText(): TextToken {
  const t = new TextToken()
  t.text = "[]"
  return t
}

export function equalsText(): TextToken {
  const t = new TextToken()
  t.text = " = "
  return t
}

export function arrowText(): TextToken {
  const t = new TextToken()
  t.text = " => "
  return t
}

export function spaceText(): TextToken {
  const t = new TextToken()
  t.text = " "
  return t
}

export function commaText(): TextToken {
  const t = new TextToken()
  t.text = ", "
  return t
}

export function bracketsText(): TextToken {
  const t = new TextToken()
  t.text = "()"
  return t
}

export function tokenText(s: string): TextToken {
  const t = new TextToken()
  t.text = s
  return t
}

export function newlineText(): TextToken {
  const t = new TextToken()
  t.text = "\n"
  return t
}

export function indentText(): TextToken {
  const t = new TextToken()
  t.text = "  "
  return t
}

export function anyReturns(): Library.FunctionReturns {
  const t = anyType()
  return Library.functionReturns(t)
}

export function anyValue(id: string): Library.Value {
  const t = anyType()
  const v = Library.value(t)
  v.identifier = id
  return v
}
