// todo: split into markdown and strings packages.

import type {Paragraph} from "mdast"
import {fromMarkdown} from "mdast-util-from-markdown"
import {toMarkdown} from "mdast-util-to-markdown"
import {toString} from "mdast-util-to-string"
import {English} from "sentence-splitter/lang"
import {split} from "sentence-splitter"
import {select} from "unist-util-select"
import {remove} from "unist-util-remove"

export function firstParagraph(s: string): string {
  const t = fromMarkdown(s)
  const n = select("paragraph", t) as Paragraph | undefined
  if (n) {
    s = toMarkdown({type: "root", children: [n]})
    if (s.endsWith("\n")) {
      s = s.slice(0, -1)
    }
  }
  return s
}

export function selectSection(t: string, c: string): string {
  const r = fromMarkdown(c)

  let i = -1
  remove(r, (node, index) => {
    if (node.type === "root") {
      return false
    }
    if (node.type === "heading" && "depth" in node && node.depth === 2) {
      const s = toString(node)
      if (s === t && index !== undefined && i === -1) {
        i = index
        return true
      }
      i = -1
    }
    if (i === -1) {
      return true
    }
    return false
  })

  c = toMarkdown(r)
  if (c.endsWith("\n")) {
    c = c.slice(0, -1)
  }

  return c
}

export function firstSentence(s: string): string {
  const r = split(s, {AbbrMarker: {language: English}})
  if (r.length !== 0) {
    s = r[0].raw
  }
  return s
}
