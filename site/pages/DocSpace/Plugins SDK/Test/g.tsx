import {type Data} from "@onlyoffice/eleventy-types"
import * as g from "@/generations/library-next.ts"
import {Resource} from "@/resources/docspace-plugin-sdk.ts"

export function data(): Data {
  return g.data(Resource.shared)
}
