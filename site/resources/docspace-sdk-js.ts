import {Resource as S} from "@onlyoffice/docspace-sdk-js-resource"
import {isBuild} from "@onlyoffice/eleventy-env"
import {Resource as F} from "@onlyoffice/fixture-resource/typedoc.ts"

export const Resource = r()

function r(): typeof S | typeof F {
  if (isBuild()) {
    return S
  }
  return F
}
