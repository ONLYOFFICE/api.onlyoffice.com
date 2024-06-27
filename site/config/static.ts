import type {UserConfig} from "@11ty/eleventy"

export function staticPlugin(uc: UserConfig): void {
  // todo: export the passthrough copy options from primitives.
  uc.addPassthroughCopy({
    "./node_modules/@onlyoffice/documentation-ui-kit/node_modules/@onlyoffice/documentation-ui-font/static/*": "."
  })
}
