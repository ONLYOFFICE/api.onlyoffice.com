import {type Context, type Data} from "@onlyoffice/eleventy-types"
import type { JSX } from "preact"
import { Fragment, h } from "preact"
import { TableOfContents } from "../components/table-of-contents/table-of-contents.ts"
import { retrieve } from "../config/sitemap.ts"

export function data(): Data {
  return {
    layout: "chapter"
  }
}

export function render(ctx: Context): JSX.Element {
  return (
    <>
      {ctx.content}
      <TableOfContents url={ctx.page.url} onRetrieve={retrieve} />
    </>
  )
}
