import type {UserConfig} from "@onlyoffice/eleventy-types"
import {eleventyStarryNight} from "../lib/main.ts"

function config(uc: UserConfig): void {
  uc.addPlugin(eleventyStarryNight)
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = config
