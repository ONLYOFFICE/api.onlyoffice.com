import {type Config} from "@onlyoffice/typedoc-resource"

export const config: Config = [
  {
    name: "main",
    source: {
      owner: "onlyoffice",
      repo: "docspace-plugin-sdk-declarations",
      reference: "dist",
      path: "master/docspace-plugin-sdk.json",
    },
  },
]
