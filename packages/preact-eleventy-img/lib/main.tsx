import image, {type ImageOptions} from "@11ty/eleventy-img"
import {useSuspense} from "@onlyoffice/preact-suspense"
import {type ChildrenIncludable} from "@onlyoffice/preact-types"
import {Fragment, type JSX, h, cloneElement} from "preact"

export function EleventyImage(p: ImageOptions & ChildrenIncludable): JSX.Element {
  const img = cloneElement<HTMLImageElement>(p.children)
  if (!img.props.src) {
    throw new Error("The 'src' attribute is required, but missing.")
  }

  let r: ReturnType<typeof image.generateObject>

  const Suspense = useSuspense(async () => {
    const m = await image(img.props.src, p)
    r = image.generateObject(m, img.props)
  })

  return <Suspense>
    {() => "picture" in r && <picture>
      {r.picture.map((e) => <>
        {"source" in e && <source {...e.source} />}
        {"img" in e && cloneElement(p.children, {...e.img})}
      </>)}
    </picture>}
    {() => "img" in r && cloneElement(p.children, {...r.img})}
  </Suspense>
}
