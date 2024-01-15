import {toHtml} from "hast-util-to-html"
import {is} from "uvu/assert"
import {starryNight} from "../lib/main.ts"

/**
 * @returns {string}
 */
export function render() {
  is.not(typeof starryNight, undefined)
  const t = starryNight.highlight('"s"', "source.ts")
  const s = toHtml(t)
  is(s, '<span class="pl-s"><span class="pl-pds">"</span>s<span class="pl-pds">"</span></span>')
  return ""
}
