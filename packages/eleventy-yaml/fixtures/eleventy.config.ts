import type {UserConfig} from "@onlyoffice/eleventy-types"
import {eleventyYAML} from "../lib/main.ts"

function config(uc: UserConfig): void {
  uc.addPlugin(eleventyYAML)
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = config
