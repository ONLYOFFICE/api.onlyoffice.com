import type {UserConfig} from "@onlyoffice/eleventy-types"
import type {Configurable} from "@onlyoffice/site-config"
import {Config} from "@onlyoffice/site-config"

declare module "@onlyoffice/eleventy-types" {
  interface GlobalData {
    config: Configurable
  }

  interface Context {
    config: Configurable
  }
}

export function eleventyConfig(uc: UserConfig, mode?: string): void {
  uc.addGlobalData("config", async () => {
    return Config.read(mode)
  })
}
