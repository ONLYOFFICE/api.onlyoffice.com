// @ts-check

/**
 * @typedef {import("@11ty/eleventy").UserConfig} UserConfig
 */

const { tmpdir } = require("node:os")
const { build } = require("esbuild")
const htmlMinifier = require("html-minifier-terser")
const { isValidElement } = require("preact")
const { render } = require("preact-render-to-string")
const requireFromString = require("require-from-string")
const { isBuild } = require("./env.cjs")

// todo: merge with mdx.cjs

const minify = isBuild()

/**
 * @param {UserConfig} uc
 * @returns {void}
 */
function markupPlugin(uc) {
  uc.addTemplateFormats("11ty.js")
  uc.addExtension("tsx", {
    key: "11ty.js"
  })

  uc.addTemplateFormats("mdx")
  uc.addExtension("mdx", {
    outputFileExtension: "html",
    compile(_, f) {
      return async (data) => {
        const { compile } = await import("@mdx-js/mdx")
        const { default: remarkGFM } = await import("remark-gfm")
        const r = await build({
          entryPoints: [f],
          format: "cjs",
          outdir: tmpdir(),
          write: false,
          plugins: [
            {
              name: "mdx",
              setup(build) {
                build.onLoad({ filter: /\.mdx?$/ }, async (...a) => {
                  // todo: explain why this lib
                  // because vfile is already a third-party dependency.
                  // https://www.npmjs.com/package/gray-matter
                  const { read } = await import("to-vfile")
                  const { matter } = await import("vfile-matter")
                  let vf = await read(f)
                  matter(vf, { strip: true })
                  vf = await compile(vf.value, {
                    jsxImportSource: "preact",
                    remarkPlugins: [remarkGFM]
                  })
                  return {
                    contents: vf.value
                  }
                })
              },
            }
          ]
        })
        const m = requireFromString(r.outputFiles[0].text)
        const p = m.default()
        if (isValidElement(p)) {
          if (data.layout && (data.layout.endsWith(".jsx") || data.layout.endsWith(".tsx"))) {
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

/**
 * @param {string} c The markup to be transformed.
 * @returns {Promise<string>} The transformed markup.
 */
async function transformMarkup(c) {
  if (!minify) {
    return c
  }
  return htmlMinifier.minify(c, {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    decodeEntities: true,
    includeAutoGeneratedTags: false,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    sortAttributes: true
  })
}

module.exports = { markupPlugin, transformMarkup }