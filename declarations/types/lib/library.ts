// todo: kind: constant, enum, interface, variable, initializer, alias, etc.
// todo?: instanceMethod over method with scope: instance, etc.

import type {Tokenizer} from "./tokenizer.ts"

export namespace Library {
  export type Declaration = DeclarationMap[keyof DeclarationMap]

  export interface DeclarationMap {
    class: ClassDeclaration
    constructor: ConstructorDeclaration
    event: EventDeclaration
    method: MethodDeclaration
    property: PropertyDeclaration
    type: TypeDeclaration
  }

  export interface ClassDeclaration extends DeclarationNode {
    kind: "class"
    constructors?: Reference[]
    events?: Reference[]
    extends?: Reference[]
    extendsBy?: Reference[]
    instanceMethods?: Reference[]
    instanceProperties?: Reference[]
    typeMethods?: Reference[]
    typeProperties?: Reference[]
  }

  export interface ConstructorDeclaration extends DeclarationNode {
    kind: "constructor"
    type: FunctionType
  }

  export interface EventDeclaration extends DeclarationNode {
    kind: "event"
    type: FunctionType
  }

  export interface MethodDeclaration extends DeclarationNode {
    kind: "method"
    scope: "instance" | "type"
    type: FunctionType
  }

  export interface PropertyDeclaration extends DeclarationNode {
    kind: "property"
    scope: "instance" | "type"
    type: Type
  }

  export interface TypeDeclaration extends DeclarationNode {
    kind: "type"
    type: Type
  }

  export interface DeclarationNode {
    id: string
    kind: string
    title: string
    summary?: string
    description?: string
    // since?: string
    // deprecated?: string
    parent?: Reference
    identifier: string
    signature?: Tokenizer.Token[]
    examples?: Example[]
    overloads?: Reference[]
    overloadsBy?: Reference[]
  }

  export interface Value {
    identifier: string
    signature?: Tokenizer.Token[]
    description?: string
    default?: LiteralType
    type: Type
  }

  export type Type = TypeMap[keyof TypeMap] | Reference

  export interface TypeMap {
    any: AnyType
    array: ArrayType
    function: FunctionType
    literal: LiteralType
    object: ObjectType
    passthrough: PassthroughType
    union: UnionType
    unknown: UnknownType
    void: VoidType
  }

  export interface AnyType extends TypeNode {
    type: "any"
  }

  export interface ArrayType extends TypeNode {
    type: "array"
    items?: Type[]
  }

  export interface FunctionType extends TypeNode {
    type: "function"
    parameters?: Value[]
    returns?: FunctionReturns
  }

  export interface FunctionReturns {
    signature?: Tokenizer.Token[]
    description?: string
    type: Type
  }

  export interface LiteralType extends TypeNode {
    type: "literal"
    value: any
  }

  export interface ObjectType extends TypeNode {
    type: "object"
    properties?: Value[]
    methods?: FunctionType[]
  }

  export interface PassthroughType extends TypeNode {
    type: "passthrough"
    value: any
  }

  // todo: is it modification or composition?
  // export interface OptionalType extends TypeNode {
  //   type: "optional"
  //   children: Type[]
  // }

  // todo: use generic type instead of Record
  // export interface RecordType extends TypeNode {
  //   type: "record"
  //   children: Type[]
  // }

  export interface UnionType extends TypeNode {
    type: "union"
    types: Type[]
  }

  export interface UnknownType extends TypeNode {
    type: "unknown"
  }

  export interface VoidType extends TypeNode {
    type: "void"
  }

  export interface TypeNode {
    type: string
  }

  export interface Reference {
    id: string
  }

  export interface Example {
    syntax: string
    code: string
  }
}
