/**
 * @typedef {import("@onlyoffice/eleventy-types").UserConfig} UserConfig
 */

import {eleventyClean} from "../lib/main.ts"

/**
 * @param {UserConfig} uc
 * @returns {unknown}
 */
function config(uc) {
  uc.addPlugin(eleventyClean)
  return {dir: {output: "dist"}}
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = config
