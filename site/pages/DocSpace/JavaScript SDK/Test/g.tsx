import {type Data} from "@onlyoffice/eleventy-types"
import * as g from "@/generations/library-next.ts"
import {Resource} from "@/resources/docspace-sdk-js.ts"

export function data(): Data {
  return g.data(Resource.shared)
}
