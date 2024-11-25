import {
  type Entity,
  DeclarationEntity,
} from "@onlyoffice/library-declaration/next.ts"
import {
  EntityToken,
  KeywordToken,
  ParameterToken,
  type Signature,
  TextToken,
  type Token,
  TypeToken,
} from "@onlyoffice/signature"

export const collection: Entity[] = []
let e0: Entity
let e1: Entity
let e2: Entity
let s: Signature = []
let t: Token

e0 = new DeclarationEntity()
e0.id = 2

t = new KeywordToken()
t.text = "class"
s.push(t)

t = new TextToken()
t.text = " "
s.push(t)

t = new EntityToken()
t.text = "A"
s.push(t)

e0.declaration.signature.verbose = s

collection.push(e0)

s = []

e1 = new DeclarationEntity()
e1.id = 5

t = new KeywordToken()
t.text = "constructor"
s.push(t)

t = new TextToken()
t.text = "("
s.push(t)

t = new ParameterToken()
t.text = "s"
s.push(t)

t = new TextToken()
t.text = ": "
s.push(t)

t = new TypeToken()
t.text = "string"
s.push(t)

t = new TextToken()
t.text = ")"
s.push(t)

e1.declaration.signature.verbose = s

collection.push(e1)

s = []

e2 = new DeclarationEntity()
e2.id = 6

t = new KeywordToken()
t.text = "function"
s.push(t)

t = new TextToken()
t.text = " "
s.push(t)

t = new EntityToken()
t.text = "m"
s.push(t)

t = new TextToken()
t.text = "("
s.push(t)


t = new ParameterToken()
t.text = "n"
s.push(t)

t = new TextToken()
t.text = ": "
s.push(t)

t = new TypeToken()
t.text = "number"
s.push(t)

t = new TextToken()
t.text = ")"
s.push(t)

e2.declaration.signature.verbose = s

collection.push(e2)