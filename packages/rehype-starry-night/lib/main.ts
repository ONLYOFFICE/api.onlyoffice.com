// Inspired by the rehype-highlight.
// https://github.com/rehypejs/rehype-highlight/

import type {createStarryNight} from "@wooorm/starry-night"
import type {Element, Root} from "hast"
import {toText} from "hast-util-to-text"
import {visit} from "unist-util-visit"
import type {VFile} from "vfile"
import pack from "../package.json" with {type: "json"}

export type StarryNight = Awaited<ReturnType<typeof createStarryNight>>

export interface Transform {
  (tree: Root, file: VFile): void
}

export function rehypeStarryNight(sn: StarryNight): Transform {
  return function transform(tree, file) {
    visit(tree, "element", (node, _, parent) => {
      if (!(
        node.tagName === "code" &&
        parent &&
        parent.type === "element" &&
        parent.tagName === "pre"
      )) {
        return
      }

      const [sy, no] = options(node)
      if (!sy || no) {
        return
      }

      try {
        const s = sn.flagToScope(sy)
        if (!s) {
          throw new Error(`Unknown syntax: ${sy}`)
        }

        const t = toText(parent)
        const r = sn.highlight(t, s)
        if (r.children.length !== 0) {
          // @ts-ignore StarryNight children cannot contain a Doctype
          node.children = r.children
        }
      } catch (e) {
        if (e instanceof Error && e.message.startsWith("Unknown syntax")) {
          // @ts-ignore something is wrong with the overload
          file.message(`Cannot highlight '${sy}' syntax, grammar not available`, {
            ancestors: [parent, node],
            cause: e,
            place: node.position,
            ruleId: "missing-grammar",
            source: pack.name
          })
          return
        }
        throw e
      }
    })
  }
}

/**
 * Returns the tuple `[syntax, no]` where `syntax` is the detected syntax or an
 * empty string when no syntax is detected, and `no` is `true` when highlighting
 * should not be done.
 */
function options(node: Element): [string, boolean] {
  let sy = ""
  let no = false

  const cls = node.properties.className
  if (!Array.isArray(cls)) {
    return [sy, no]
  }

  for (const cl of cls) {
    const v = String(cl)
    if (!sy && v.slice(0, 9) === "language-") {
      sy = v.slice(9)
    }
    if (!no && v === "no-highlight") {
      no = true
    }
  }

  return [sy, no]
}
