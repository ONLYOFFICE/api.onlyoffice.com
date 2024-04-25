import {argv} from "node:process"
import esMain from "es-main"
import sade from "sade"
import * as communityServer from "./scripts/community-server.ts"
import * as docspace from "./scripts/docspace.ts"
import * as documentBuilder from "./scripts/document-builder.ts"
import * as hostedSolutions from "./scripts/hosted-solutions.ts"
import {createTempDir, prepareLibDir} from "./utils/basedir.ts"

if (esMain(import.meta)) {
  main()
}

function main(): void {
  sade("./makefile.js")
    .command("build")
    .action(build)
    .parse(argv)
}

export async function build(): Promise<void> {
  const tempDir = await createTempDir()
  const distDir = await prepareLibDir()
  await communityServer.build(tempDir, distDir)
  await docspace.build(tempDir, distDir)
  await documentBuilder.build(tempDir, distDir)
  await hostedSolutions.build(tempDir, distDir)
}
