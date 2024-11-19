import {
  type Entity,
  DeclarationEntity,
} from "@onlyoffice/library-declaration/next.ts"
import {
  EntityToken,
  KeywordToken,
  type Signature,
  TextToken,
  type Token,
} from "@onlyoffice/signature"

export const collection: Entity[] = []

let e: Entity
let s: Signature = []
let t: Token

e = new DeclarationEntity()
e.declaration.trail = [0]

t = new KeywordToken()
t.text = "function"
s.push(t)

t = new TextToken()
t.text = " "
s.push(t)

t = new EntityToken()
t.text = "f"
s.push(t)

t = new TextToken()
t.text = "()"
s.push(t)

e.declaration.signature.verbose = s

collection.push(e)
