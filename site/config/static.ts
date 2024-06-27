import type { UserConfig } from "@11ty/eleventy"
import {isBuild, isPreview} from "@onlyoffice/site-env"

export function staticPlugin(uc: UserConfig): void {
  // todo: export the passthrough copy options from primitives.
  uc.addPassthroughCopy({
    "./node_modules/@onlyoffice/documentation-ui-kit/node_modules/@onlyoffice/documentation-ui-font/static/*": "."
  })

  // Do not use a glob for passthrough copy.
  // https://github.com/11ty/eleventy/issues/3010
  uc.addPassthroughCopy({ "./src/pages": "." }, {
    filter: ["**/_static/*"],
    ...(isBuild() || isPreview()
      ? {
        rename(path) {
          // todo
          return path
        }
      }
      : {})
  })
}
