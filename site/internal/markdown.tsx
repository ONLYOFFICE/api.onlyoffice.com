import {starryNight} from "@onlyoffice/eleventy-starry-night"
import {useSuspense} from "@onlyoffice/preact-suspense"
import {type ChildrenIncludable} from "@onlyoffice/preact-types"
import {remarkDocumentBuilder} from "@onlyoffice/remark-document-builder"
import {rehypePreact} from "@onlyoffice/rehype-preact"
import {rehypeStarryNight} from "@onlyoffice/rehype-starry-night"
import {jsx, jsxs} from "preact/jsx-runtime"
import {Fragment, type JSX, h} from "preact"
import rehypeAutolink from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import {type PluggableList, unified} from "unified"
import {rehypeDocumentBuilderContainer} from "../components/document-builder-container/rehype.ts"
import {rehypeImage} from "./image.tsx"

export function Markdown(p: ChildrenIncludable): JSX.Element {
  let r: JSX.Element | null = null

  const Suspense = useSuspense(async () => {
    const v = await markdown().process(p.children)
    r = v.result as JSX.Element
  })

  return <Suspense>{() => r}</Suspense>
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function markdown() {
  return unified()
    .use(remarkParse)
    .use({plugins: [...remarkPlugins(), remarkRehype, ...rehypePlugins()]})
    // @ts-ignore
    .use(rehypePreact, {Fragment, jsx, jsxs})
    .freeze()
}

export function remarkPlugins(): PluggableList {
  return [
    remarkDocumentBuilder,
    remarkGfm
  ]
}

export function rehypePlugins(): PluggableList {
  return [
    rehypeSlug,
    [rehypeAutolink, {behavior: "wrap"}],
    rehypeImage,
    [rehypeStarryNight, starryNight],
    rehypeDocumentBuilderContainer
  ]
}
