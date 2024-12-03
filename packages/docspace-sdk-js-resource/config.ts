import {type Config} from "@onlyoffice/typedoc-resource"

export const config: Config = [
  {
    name: "main",
    source: {
      owner: "vanyauhalin",
      repo: "docspace-sdk-js-declarations",
      reference: "dist",
      path: "develop/docspace-sdk-js.json",
    },
  },
]
