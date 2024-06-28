import image, {type ImageOptions} from "@11ty/eleventy-img"
import {type Element, type Root} from "hast"

type Index = number | undefined
type Parent = Root | Element | undefined

export async function modify(o: ImageOptions, n: Element, i: Index, p: Parent): Promise<void> {
  if (!p || typeof i !== "number" || n.tagName !== "img") {
    return
  }

  const s = n.properties.src
  if (!s) {
    throw new Error("The 'src' attribute is required, but missing.")
  }
  if (typeof s !== "string") {
    throw new Error(`The 'src' attribute must be a string, but got ${typeof s}.`)
  }

  let c = p.children[i]

  const m = await image(s, o)
  const r = image.generateObject(m)

  if ("picture" in r) {
    c = {
      type: "element",
      tagName: "picture",
      properties: {},
      children: []
    }
    for (const e of r.picture) {
      if ("source" in e) {
        c.children.push({
          type: "element",
          tagName: "source",
          properties: e.source,
          children: []
        })
        continue
      }
      if ("img" in e) {
        c.children.push({
          type: "element",
          tagName: "img",
          properties: {...n.properties, ...e.img},
          children: []
        })
        continue
      }
    }
  } else if ("img" in r) {
    c = {
      type: "element",
      tagName: "img",
      properties: {...n.properties, ...r.img},
      children: []
    }
  }

  p.children[i] = c
}
