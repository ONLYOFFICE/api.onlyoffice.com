import {argv} from "node:process"
import {Cli, Logger} from "@11ty/eleventy-dev-server/cli.js"
import EleventyDevServer from "@11ty/eleventy-dev-server/server.js"
import sade from "sade"
import pack from "./package.json" with {type: "json"}

main()

function main(): void {
  sade("./makefile.ts")
    .command("preview")
    .action(preview)
    .parse(argv)
}

async function preview(): Promise<void> {
  const o = {
    ...Cli.getDefaultOptions(),
    domDiff: false,
    input: "dist",
    liveReload: false,
    logger: Logger,
    showVersion: true
  }
  const s = new EleventyDevServer(pack.name, o.input, o)
  s.serve(o.port)
}
