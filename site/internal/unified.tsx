import {join} from "node:path"
import {type Root} from "hast"
import {visit} from "unist-util-visit"

export function rehypeImage() {
  return function (t: Root) {
    visit(t, "element", (n) => {
      if (n.tagName !== "img") {
        return
      }

      let s = n.properties.src

      if (!s || typeof s !== "string") {
        return
      }

      if (s && typeof s === "string" && !s.startsWith("/")) {
        s = join("assets/images/", s)
      }

      n.properties = {
        decoding: "async",
        loading: "lazy",
        ...n.properties,
        src: s
      }
    })
  }
}
