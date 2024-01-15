export type Token = TokenMap[keyof TokenMap]

export interface TokenMap {
  decorator: DecoratorToken
  identifier: IdentifierToken
  keyword: KeywordToken
  reference: ReferenceToken
  text: TextToken
}

export interface DecoratorToken extends TokenNode {
  type: "decorator"
}

export function decoratorToken(t: TokenNode): DecoratorToken {
  return {...t, type: "decorator"}
}

export interface IdentifierToken extends TokenNode {
  type: "identifier"
}

export function identifierToken(t: TokenNode): IdentifierToken {
  return {...t, type: "identifier"}
}

export interface KeywordToken extends TokenNode {
  type: "keyword"
}

export function keywordToken(t: TokenNode): KeywordToken {
  return {...t, type: "keyword"}
}

export interface ReferenceToken extends TokenNode {
  type: "reference"
  id: string
}

export function referenceToken(t: TokenNode): ReferenceToken {
  return {...t, type: "reference", id: ""}
}

export interface TextToken extends TokenNode {
  type: "text"
}

export function textToken(t: TokenNode): TextToken {
  return {...t, type: "text"}
}

export interface TokenNode {
  type: string
  text: string
}

export function tokenNode(): TokenNode {
  return {type: "", text: ""}
}
