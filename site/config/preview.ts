import type { UserConfig } from "@11ty/eleventy"
import { Cli, Logger } from "@11ty/eleventy-dev-server/cli.js"
import EleventyDevServer from "@11ty/eleventy-dev-server/server.js"
import {isPreview} from "@onlyoffice/site-env"

export function previewPlugin(uc: UserConfig): void {
  if (!isPreview()) {
    return
  }

  uc.on("eleventy.after", () => {
    const o = {
      ...Cli.getDefaultOptions(),
      domDiff: false,
      input: "dist",
      liveReload: false,
      logger: Logger,
      showVersion: true
    }
    EleventyDevServer
      .getServer("eleventy-dev-server-cli", o.input, o)
      .serve(o.port)
  })
}
