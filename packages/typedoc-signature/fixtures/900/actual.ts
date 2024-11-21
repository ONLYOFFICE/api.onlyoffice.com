import {
  type Entity,
  DeclarationEntity,
} from "@onlyoffice/library-declaration/next.ts"

export const collection: Entity[] = []

const e = new DeclarationEntity()
e.declaration.trail = [0, [0]]
collection.push(e)
