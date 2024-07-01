import { tmpdir } from "node:os"
import type { UserConfig } from "@11ty/eleventy"
import { build } from "esbuild"
import { isValidElement } from "preact"
import { render } from "preact-render-to-string"
import requireFromString from "require-from-string"
import { read } from "to-vfile"
import { matter } from "vfile-matter"

import {markdown, rehypePlugins, remarkPlugins} from "@/internal/markdown.tsx"

// todo: refactor it.
// add support for hot reload
// profile memory usage

export function markupPlugin(uc: UserConfig): void {
  // https://github.com/11ty/eleventy/issues/235
  uc.addTemplateFormats("11ty.js")
  uc.addExtension("tsx", {
    key: "11ty.js"
  })

  uc.setDataFileSuffixes([".data"])
  uc.addDataExtension("ts", {
    async parser(_: string, f: string) {
      const r = await build({
        entryPoints: [f],
        format: "cjs",
        outdir: tmpdir(),
        write: false
      })
      const m = requireFromString(r.outputFiles[0].text)
      return m.data()
    }
  })

  uc.addTemplateFormats("md")
  uc.addExtension("md", {
    outputFileExtension: "html",
    compile(c) {
      return async () => {
        const v = await markdown().process(c)
        return v.result
      }
    },
  })

  // https://github.com/11ty/eleventy/issues/636
  uc.addTemplateFormats("mdx")
  uc.addExtension("mdx", {
    outputFileExtension: "html",
    compile(_: string, f: string) {
      return async (data) => {
        const { compile } = await import("@mdx-js/mdx")
        const r = await build({
          entryPoints: [f],
          format: "cjs",
          // bundle: true,
          outdir: tmpdir(),
          write: false,
          plugins: [
            {
              name: "mdx",
              setup(build) {
                build.onLoad({ filter: /\.mdx?$/ }, async (...a) => {
                  let vf = await read(f)

                  // todo: wrap front matter to a function which attach defaults at first
                  // take defaults from the page.11tydata.cjs
                  // or create `config/frontmatter` and take defaults from there
                  matter(vf, { strip: true })

                  vf = await compile(vf, {
                    jsxImportSource: "preact",
                    rehypePlugins: rehypePlugins(),
                    remarkPlugins: remarkPlugins()
                  })

                  return {
                    contents: vf.value
                  }
                })
              }
            }
          ]
        })

        // todo: huh?
        // const _t = Buffer.from(r.outputFiles[0].text).toString("base64")
        // console.log(_t, r.outputFiles[0].text)
        // const u = await import(`data:text/javascript;base64,${_t}`)
        // console.log(u)

        const m = requireFromString(r.outputFiles[0].text)
        const p = m.default()
        if (isValidElement(p)) {
          if (data.layout && data.layout.endsWith(".tsx")) {
            return p
          }
          return render(p)
        }
        console.log(data.page)
        console.log("warn")
        return ""
      }
    }
  })
}
