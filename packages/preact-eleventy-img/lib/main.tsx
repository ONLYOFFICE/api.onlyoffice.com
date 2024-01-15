import image, {type ImageOptions} from "@11ty/eleventy-img"
import {type ChildrenIncludable} from "@onlyoffice/preact-types"
import {Fragment, type JSX, h, cloneElement} from "preact"

export async function generate(p: ImageOptions & ChildrenIncludable): Promise<JSX.Element> {
  const img = cloneElement<HTMLImageElement>(p.children)
  if (!img.props.src) {
    throw new Error("The 'src' attribute is required, but missing.")
  }

  const m = await image(img.props.src, p)
  const r = image.generateObject(m, img.props)

  if ("picture" in r) {
    return <picture>
      {r.picture.map((e) => <>
        {"source" in e && <source {...e.source} />}
        {"img" in e && cloneElement(p.children, {...e.img})}
      </>)}
    </picture>
  }

  if ("img" in r) {
    return cloneElement(p.children, {...r.img})
  }

  return <></>
}
