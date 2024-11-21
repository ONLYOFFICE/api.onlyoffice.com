import {
  type Entity,
  DeclarationEntity,
} from "@onlyoffice/library-declaration/next.ts"

export const collection: Entity[] = []

const e0 = new DeclarationEntity()
e0.declaration.trail = [0]
collection.push(e0)

const e1 = new DeclarationEntity()
e1.declaration.trail = [0, [0, [0]]]
collection.push(e1)

const e2 = new DeclarationEntity()
e2.declaration.trail = [0, [1, [0]]]
collection.push(e2)
