import {setTimeout} from "node:timers/promises"
import type {JSX} from "preact"

import {renderToStringAsync} from "preact-render-to-string"
import {isValidElement} from "preact"
import {transformMarkup} from "../config/markup.ts"
import {createSuspense} from "../components/suspense.tsx"

declare module "unified" {
  interface CompileResultMap {
    JsxElement: JSX.Element
  }
}

export async function renderToString(el: JSX.Element): Promise<string> {
  // todo: explain. DO NOT DELETE THE HACK BELLOW!
  await setTimeout(0)

  if (!isValidElement(el)) {
    throw new Error("Invalid element")
  }

  const r = createSuspense()
  const p = renderToStringAsync(el)
  r()
  const c = await p

  return transformMarkup(c)
}
