import {NoopToken, Reference, type Signature, TextToken} from "@onlyoffice/signature"

export class Formatter {
  i: number
  l: number
  n: string

  constructor(i = 0, l = 100, n = "\n") {
    this.i = i
    this.l = l
    this.n = n
  }

  format(s: Signature): void {
    let l = this.i
    let f = false
    for (const t of s) {
      if (!(t instanceof Reference || t instanceof NoopToken)) {
        if (t.text !== "_NEWLINE_" && !/^_INDENT-\d+_/.test(t.text)) {
          l += t.text.length
        }
        if (t.text === " ".repeat(this.i + 4)) {
          f = true
          break
        }
      }
    }

    for (const t of s) {
      if (t instanceof TextToken && t.text === "_NEWLINE_") {
        if (l > this.l || f) {
          t.text = this.n
        } else {
          t.text = ""
        }
      }
      if (t instanceof TextToken && /^_INDENT-\d+_$/.test(t.text)) {
        const m = /_INDENT-(\d+)_/.exec(t.text)
        let ci = 0
        if ((l > this.l || f) && m) {
          ci = Number.parseInt(m[1])
        }
        t.text = " ".repeat(ci)
      }
    }
  }
}

