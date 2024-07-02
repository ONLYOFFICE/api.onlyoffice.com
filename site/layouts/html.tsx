import {Font} from "@onlyoffice/documentation-ui-kit"
import {type Context} from "@onlyoffice/eleventy-types"
// import {wait} from "@onlyoffice/documentation-utils/wait.ts"
import {h} from "preact"
import {renderToString} from "../config/preact.ts"

export async function render(
  {
    eleventy,
    title,
    description,
    content
  }: Context
): Promise<string> {
  // // todo: explain. DO NOT DELETE THE HACK BELLOW!
  // await wait()

  // todo: validate the context.
  // For example, if description is missing, print an error.

  const c = await renderToString(
    // todo: do not forget to change the lang after localization.
    <html
      lang="en"
      data-dark-theme="regular"
      data-light-theme="regular"
      data-theme-preference="auto"
    >
      <head>
        <meta charset="utf-8" />
        <title>{title}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="view-transition" content="same-origin" />
        <meta name="description" content={description} />
        <meta name="generator" content={eleventy.generator} />

        <Font.Links root="/" />

        <link rel="stylesheet" href="/assets/main.css" />
        {/* <meta name="theme-color" media="(prefers-color-scheme: light)" content="#000000" /> */}
        {/* <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" /> */}
        {/* <style media="(prefers-color-scheme: dark)">{dark}</style> */}
        {/* <style media="(prefers-color-scheme: light)">{light}</style> */}
        {/* <style>{regular}</style> */}

        <script defer type="module" src="/assets/main.js" />
      </head>
      <body>
        {content}
      </body>
    </html>
  )
  return `<!DOCTYPE html>${c}`
}
