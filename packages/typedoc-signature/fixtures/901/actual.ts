import {
  type Entity,
  DeclarationEntity,
  Fragment,
} from "@onlyoffice/library-declaration/next.ts"

export const collection: Entity[] = []

const e0 = new DeclarationEntity()
e0.declaration.trail = [0]
collection.push(e0)

const f0 = new Fragment()
f0.trail = [[0]]
e0.declaration.parameters.push(f0)

const f1 = new Fragment()
f1.trail = [[1]]
e0.declaration.parameters.push(f1)
