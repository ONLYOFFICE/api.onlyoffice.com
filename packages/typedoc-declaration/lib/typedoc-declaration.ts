export type Entity = EntityMap[keyof EntityMap]

export interface EntityMap {
  group: GroupEntity
  declaration: DeclarationEntity
}

export class GroupEntity implements EntityNode {
  id = ""
  type = "group" as const
  // parentId = ""
  // children: string[] = []
  group = new Group()
}

export class DeclarationEntity implements EntityNode {
  id = ""
  type = "declaration" as const
  // parentId = ""
  // children: string[] = []
  declaration = new Declaration()
}

export interface EntityNode {
  id: string
  type: string
  // parentId: string
  // children: string[]
}

export class Group {
  name = ""
  description = ""
}

export class Declaration {
  name = ""
  trail: number[] = []
  signature = new DeclarationSignature()
  summary = ""
  description = ""
  properties: Fragment[] = []
  members: Fragment[] = []
  parameters: Fragment[] = []
  returns = new DeclarationReturns()
  examples = ""
}

export class DeclarationSignature {
  concise: unknown[] = []
  verbose: unknown[] = []
}

export class DeclarationReturns {
  signature = new FragmentSignature()
  description = ""
}

export class Fragment {
  name = ""
  trail: number[] = []
  signature = new FragmentSignature()
  default = ""
  // example = ""
  description = ""
  properties: Fragment[] = []
}

export class FragmentSignature {
  concise: unknown[] = []
}
