import type {UserConfig} from "@onlyoffice/eleventy-types"
import {parse} from "yaml"

export function eleventyYAML(uc: UserConfig): void {
  uc.addDataExtension("yml, yaml", (c: string) => {
    return parse(c)
  })
}
