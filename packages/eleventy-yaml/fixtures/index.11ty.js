import {is} from "uvu/assert"

/**
 * @param {unknown} ctx
 * @returns {string}
 */
export function render(ctx) {
  is(ctx.data.hi, "there")
  return ""
}
