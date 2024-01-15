import {starryNight} from "@onlyoffice/eleventy-starry-night"
import {rehypePreact} from "@onlyoffice/rehype-preact"
import {Fragment, jsx, jsxs} from "preact/jsx-runtime"
import type {JSX} from "preact"
import {unified} from "unified"

export interface RootParameters {
  syntax: string
  children: string
}

export function Root({syntax, children}: RootParameters): JSX.Element {
  const v = unified()
    .use(function () {
      this.parser = function parser() {
        const s = starryNight.flagToScope(syntax)
        if (!s) {
          throw new Error(`Unknown syntax: ${syntax}`)
        }
        return starryNight.highlight(children, s)
      }
    })
    .use(rehypePreact, {Fragment, jsx, jsxs})
    .processSync(children)
  return v.result as JSX.Element
}
