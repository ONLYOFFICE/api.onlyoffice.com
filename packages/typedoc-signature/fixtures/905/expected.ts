import {
  type Entity,
  DeclarationEntity,
  Fragment,
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
let s: Signature = []
let t: Token

e0 = new DeclarationEntity()
e0.id = 2

const f0 = new Fragment()
e0.declaration.parameters.push(f0)

const f1 = new Fragment()
e0.declaration.parameters.push(f1)

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

t = new ParameterToken()
t.text = "a"
s.push(t)

t = new TextToken()
t.text = ": "
s.push(t)

t = new TypeToken()
t.text = "number"
s.push(t)

t = new TextToken()
t.text = "[]"
s.push(t)

t = new TextToken()
t.text = ", "
s.push(t)

t = new ParameterToken()
t.text = "b"
s.push(t)

t = new TextToken()
t.text = ": "
s.push(t)

t = new TextToken()
t.text = "("
s.push(t)

t = new TypeToken()
t.text = "string"
s.push(t)

t = new TextToken()
t.text = " | "
s.push(t)

t = new TypeToken()
t.text = "number"
s.push(t)

t = new TextToken()
t.text = ")"
s.push(t)

t = new TextToken()
t.text = "[]"
s.push(t)

t = new TextToken()
t.text = ")"
s.push(t)

t = new TextToken()
t.text = ": "
s.push(t)

t = new TypeToken()
t.text = "string"
s.push(t)

e0.declaration.signature.verbose = s

collection.push(e0)