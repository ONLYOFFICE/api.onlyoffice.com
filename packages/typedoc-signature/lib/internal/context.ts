import {IndentToken, NewlineToken} from "./tokens.ts"

export class Context {
  m = 2
  i = 0

  constructor(m = 2) {
    this.m = m
  }

  in(): void {
    this.i += this.m
  }

  out(): void {
    this.i -= this.m
  }

  nt(): NewlineToken {
    return new NewlineToken()
  }

  it(i = this.i): IndentToken {
    return new IndentToken(i)
  }
}
