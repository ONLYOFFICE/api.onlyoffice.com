export type Token = TokenMap[keyof TokenMap]

export interface TokenMap {
  decorator: DecoratorToken
  identifier: IdentifierToken
  keyword: KeywordToken
  reference: ReferenceToken
  text: TextToken
}

export class DecoratorToken implements TokenNode {
  type = "decorator"
  text = ""
}

export class IdentifierToken implements TokenNode {
  type = "identifier"
  text = ""
}

export class KeywordToken implements TokenNode {
  type = "keyword"
  text = ""
}

export class ReferenceToken implements TokenNode {
  type = "reference"
  id = ""
  text = ""
}

export class TextToken implements TokenNode {
  type = "text"
  text = ""
}

export interface TokenNode {
  type: string
  text: string
}
