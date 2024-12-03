import {type Signature} from "@onlyoffice/signature"

export type Entity = EntityMap[keyof EntityMap]

export interface EntityMap {
  group: GroupEntity
  declaration: DeclarationEntity
}

export class GroupEntity implements EntityNode {
  id = -1
  type = "group" as const
  parentId = -1
  children: number[] = []
  group = new Group()
}

export class DeclarationEntity implements EntityNode {
  id = -1
  type = "declaration" as const
  parentId = -1
  children: number[] = []
  declaration = new Declaration()
}

export interface EntityNode {
  id: number
  type: string
  parentId: number
  children: number[]
}

export class Group {
  name = ""
  description = ""
}

export class Declaration {
  name = ""
  trail: Trail = []
  signature = new DeclarationSignature()
  summary = ""
  description = ""
  properties: Fragment[] = []
  parameters: Fragment[] = []
  returns = new DeclarationReturns()
  examples = ""
}

export class DeclarationSignature {
  concise: Signature = []
  verbose: Signature = []
}

export class DeclarationReturns {
  signature = new FragmentSignature()
  description = ""
}

export class Fragment {
  name = ""
  trail: Trail = []
  signature = new FragmentSignature()
  optional = false
  default = ""
  example = ""
  description = ""
  properties: Fragment[] = []
}

export class FragmentSignature {
  concise: Signature = []
}

export type Trail = (number | Trail)[]
