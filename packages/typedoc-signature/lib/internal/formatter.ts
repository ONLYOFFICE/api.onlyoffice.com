import {NoopToken, Reference, type Signature, TextToken, type Token} from "@onlyoffice/signature"
import {IndentToken, NewlineToken} from "./tokens.ts"

export class Formatter {
  l: number
  n: string

  constructor(l = 100, n = "\n") {
    this.l = l
    this.n = n
  }

  preprocess(s: Signature): void {
    let l = 0
    let f = false // has a formatted signature in the child elements

    for (const t of s) {
      if (!(t instanceof Reference || t instanceof NoopToken)) {
        if (t instanceof NewlineToken || t instanceof IndentToken) {
          if (t.processed) {
            f = true
            break
          }
          t.processed = true
        } else {
          l += t.text.length
        }
      }
    }

    // if the length is less than 100 and there are no newlines in the signature of the child elements
    // remove indents and newlines
    if (l < 100 && !f) {
      const ts: Signature = []

      for (const t of s) {
        if (!(t instanceof NewlineToken || t instanceof IndentToken)) {
          ts.push(t)
        }
      }

      s.length = 0
      s.push(...ts)
    }
  }

  format(s: Signature): void {
    const ts: Signature = []
    let t: Token

    for (const e of s) {
      if (e instanceof NewlineToken || e instanceof IndentToken) {
        t = new TextToken()
        if (e instanceof NewlineToken) {
          t.text = this.n
        }
        if (e instanceof IndentToken) {
          let ci = 0
          const i = /_INDENT-(\d+)_/.exec(e.text)
          if (i) {
            ci = Number.parseInt(i[1])
          }
          t.text = " ".repeat(ci)
        }
        ts.push(t)
      } else {
        ts.push(e)
      }
    }

    s.length = 0
    s.push(...ts)
  }
}

