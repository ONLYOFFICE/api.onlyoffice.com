// https://typedoc.org/api/modules/JSONOutput.html
// https://github.com/TypeStrong/typedoc/blob/v0.26.11/src/lib/models/reflections/kind.ts/#L7
// https://github.com/TypeStrong/typedoc/blob/v0.26.11/src/lib/models/types.ts/#L62
// https://typedoc.org/api/classes/Models.ArrayType.html

// todo: unsupported kinds:
// Accessor
// CallSignature
// Class
// Constructor
// ConstructorSignature
// Document
// Enum
// EnumMember
// Function
// GetSignature
// IndexSignature
// Interface
// Method
// Module
// Namespace
// Parameter
// Project
// Property
// Reference
// SetSignature
// TypeAlias
// TypeLiteral
// TypeParameter
// Variable

// todo: unsupported types:
// ConditionalType
// IndexedAccessType
// InferredType
// IntersectionType
// MappedType
// NamedTupleMember
// PredicateType
// ReferenceType
// ReflectionType
// TemplateLiteralType
// TupleType
// TypeOperatorType

// https://github.com/uhop/stream-json/wiki

// https://github.com/onlyoffice/docspace-plugin-sdk/blob/d27fb5d609af5f3e33a68747c18179a6f5a87f1c/src/interfaces/plugins/IApiPlugin.ts#L85
// https://github.com/ONLYOFFICE/docspace-plugin-sdk-declarations/blob/dist/master/docspace-plugin-sdk.json#L3890
// https://github.com/onlyoffice/docspace-plugin-sdk/blob/d27fb5d609af5f3e33a68747c18179a6f5a87f1c/src/interfaces/plugins/IPlugin.ts#L32
// https://github.com/onlyoffice/docspace-plugin-sdk/blob/d27fb5d609af5f3e33a68747c18179a6f5a87f1c/src/interfaces/components/IFrame.ts#L54
// https://github.com/onlyoffice/docspace-plugin-sdk/blob/d27fb5d609af5f3e33a68747c18179a6f5a87f1c/src/interfaces/plugins/IApiPlugin.ts#L92
// https://github.com/onlyoffice/docspace-plugin-sdk/blob/d27fb5d609af5f3e33a68747c18179a6f5a87f1c/src/interfaces/components/Component.ts#L55

// 0x1         1          Project                 -
// 0x2         2          Module                  -
// 0x4         4          Namespace               -
// 0x8         8          Enum                    +
// 0x10        16         EnumMember              +
// 0x20        32         Variable                -
// 0x40        64         Function                -?
// 0x80        128        Class                   -?
// 0x100       256        Interface               +
// 0x200       512        Constructor             -?
// 0x400       1024       Property                +
// 0x800       2048       Method                  +
// 0x1000      4096       CallSignature           +?
// 0x2000      8192       IndexSignature          +?
// 0x4000      16384      ConstructorSignature    -
// 0x8000      32768      Parameter               +
// 0x10000     65536      TypeLiteral             +
// 0x20000     131072     TypeParameter           -?
// 0x40000     262144     Accessor                -?
// 0x80000     524288     GetSignature            -?
// 0x100000    1048576    SetSignature            -?
// 0x200000    2097152    TypeAlias               +
// 0x400000    4194304    Reference               -?
// 0x800000    8388608    Document                -?

// import * as S from "@onlyoffice/signature"

export type Declaration = DeclarationMap[keyof DeclarationMap]

export interface DeclarationMap {
  group: GroupDeclaration
  entity: EntityDeclaration
}

export class GroupDeclaration implements DeclarationNode {
  is = "group" as const
  id = ""
  parentId = ""
  children: string[] = []
  // group: Group = new NoopGroup()
}

// export type Group = GroupMap[keyof GroupMap]

// export interface GroupMap {
//   // instanceMethods: InstanceMethodsGroup
//   noop: NoopGroup
//   // typeMethods: TypeMethodsGroup
//   // unknown: UnknownGroup
// }

// export class NoopGroup implements GroupNode {
//   type = "noop" as const
// }

// export interface GroupNode {
//   type: string
// }

export class EntityDeclaration implements DeclarationNode {
  is = "entity" as const
  id = ""
  parentId = ""
  children: string[] = []
  // entity: Entity = new NoopEntity()
}

export interface DeclarationNode {
  is: string
  id: string
  parentId: string
  children: string[]
}

export class Entity {
  name = ""
  // source = new Source()
  document = new Document()
  type: Type = new NoopType()
  signature = new Signature()
}

// export type Entity = EntityMap[keyof EntityMap]

// export interface EntityMap {
//   class: ClassEntity
//   method: MethodEntity
//   noop: NoopEntity
//   property: PropertyEntity
//   type: TypeEntity
// }

// export class ClassEntity implements EntityNode {
//   is = "class" as const
//   name = ""
//   // source = new Source()
//   document = new Document()
//   signature = new Signature()
// }

// export class MethodEntity implements EntityNode {
//   is = "method" as const
//   name = ""
//   // source = new Source()
//   document = new Document()
//   type: FunctionType | NoopType = new NoopType()
//   signature = new Signature()
// }

// export class NoopEntity implements EntityNode {
//   is = "noop" as const
// }

// export class PropertyEntity implements EntityNode {
//   is = "property" as const
//   name = ""
//   // source = new Source()
//   document = new Document()
//   type: Type = new NoopType()
//   signature = new Signature()
// }

// export class TypeEntity implements EntityNode {
//   is = "type" as const
//   name = ""
//   // source = new Source()
//   document = new Document()
//   type: Type = new NoopType()
//   signature = new Signature()
// }

// export interface EntityNode {
//   is: string
// }

export type Type = TypeMap[keyof TypeMap]

export interface TypeMap {
  // enum: EnumType
  function: FunctionType // ?
  // object: ObjectType

  // QueryType
  // RestType

  array: ArrayType
  intrinsic: IntrinsicType
  literal: LiteralType
  noop: NoopType
  optional: OptionalType
  union: UnionType
  unknown: UnknownType
}

export class ArrayType implements TypeNode {
  is = "array" as const
  elementType: Type = new NoopType()
}

// export class EnumType implements TypeNode {
//   is = "enum" as const
//   members: EnumMember[] = []
// }

export class FunctionType implements TypeNode {
  is = "function" as const
  parameters: FunctionParameter[] = []
  return = new FunctionReturn()
}

export class IntrinsicType implements TypeNode {
  is = "intrinsic" as const
  name = ""
}

export class LiteralType implements TypeNode {
  is = "literal" as const
  // valueType: Type = new NoopType()
  // value: unknown = ""
  // base?
  // value = ""
  // const = ""
  // null
  // string
  // number
  // bigint
  // boolean
}

export class NoopType implements TypeNode {
  is = "noop" as const
}

export class OptionalType implements TypeNode {
  is = "optional" as const
  // elementType:
}

export class UnionType implements TypeNode {
  is = "union" as const
}

export class UnknownType implements TypeNode {
  is = "unknown" as const
}

export interface TypeNode {
  is: string
}

export class FunctionParameter {
  name = ""
  document = new DocumentFragment()
  type: Type = new NoopType()
  signature = new Signature()
}

export class FunctionReturn {
  document = new DocumentFragment()
  type: Type = new NoopType()
  signature = new Signature()
}

export class EnumMember {
  name = ""
  document = new DocumentFragment()
  type: Type = new NoopType()
  signature = new Signature()
}

// export class Source {
//   url = ""
// }

export class DocumentFragment {
  description = ""
}

export class Document {
  summary = ""
  description = ""
  examples = ""
}

export class Signature {
  verbose: [] = []
  concise: [] = []
}
