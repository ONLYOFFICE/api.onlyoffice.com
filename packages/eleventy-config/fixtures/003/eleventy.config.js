/**
 * @typedef {import("@onlyoffice/eleventy-types").UserConfig} UserConfig
 */

import {eleventyConfig} from "../../lib/main.ts"

/**
 * @param {UserConfig} uc
 * @returns {unknown}
 */
function config(uc) {
  uc.addPlugin(eleventyConfig, "production")
}

module.exports = config
