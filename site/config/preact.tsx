import {setTimeout} from "node:timers/promises"
import {createSuspense} from "@onlyoffice/ui-kit"
import {h, isValidElement} from "preact"
import {renderToStringAsync} from "preact-render-to-string"
import {transformMarkup} from "./markup.ts"

export async function renderToString(e: unknown): Promise<string> {
  // todo: explain. DO NOT DELETE THE HACK BELLOW!
  await setTimeout(0)

  if (!isValidElement(e)) {
    throw new Error("Invalid element")
  }

  const [r, P] = createSuspense()
  const p = renderToStringAsync(<P>{e}</P>)
  r()
  const c = await p

  return transformMarkup(c)
}
