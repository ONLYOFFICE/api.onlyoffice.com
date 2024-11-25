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
  TypeToken,
} from "@onlyoffice/signature"

export const collection: Entity[] = []

let e0: Entity
let s: Signature = []
let t: Token

e0 = new DeclarationEntity()
e0.id = 2

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
t.text = "("
s.push(t)

t = new TextToken()
t.text = ")"
s.push(t)

t = new TextToken()
t.text = ": "
s.push(t)

t = new TypeToken()
t.text = "void"
s.push(t)

e0.declaration.signature.verbose = s

collection.push(e0)
