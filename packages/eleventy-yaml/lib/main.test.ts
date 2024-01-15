import Eleventy from "@11ty/eleventy"
import {test} from "uvu"

test("populates data from YAML files", async () => {
  const e = new Eleventy("./fixtures/", "./fixtures/dist/", {
    configPath: "./fixtures/eleventy.config.ts"
  })
  await e.toJSON()
})

test.run()
