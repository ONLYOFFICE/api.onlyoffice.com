import {Resource as S} from "@onlyoffice/docspace-plugin-sdk-resource"
import {isBuild} from "@onlyoffice/eleventy-env"
import {Resource as F} from "@onlyoffice/fixture-resource/typedoc.ts"

export const Resource = S // r()

function r(): typeof S | typeof F {
  if (isBuild()) {
    return S
  }
  return F
}
