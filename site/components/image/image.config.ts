import {basename, dirname, extname, join} from "node:path"
import {URL, fileURLToPath} from "node:url"
import eleventyImage from "@11ty/eleventy-img"
import type {Root} from "hast"
import {visit} from "unist-util-visit"
import type {VFile} from "vfile"

// https://github.com/11ty/eleventy-img/issues/206/
// https://github.com/rehypejs/rehype-picture/blob/main/lib/index.js/
// https://www.11ty.dev/docs/plugins/image/#make-your-own-markup
export function rehypePlugin() {
  const d = currentDir()

  return async function (tree: Root, file: VFile) {
    const transformers: any[] = []

    // todo: wrap it in a function which support the async transformations.
    // from visit to avisit

    visit(tree, "element", function (node, index, parent) {
      if (
        !parent ||
        typeof index !== "number" ||
        node.tagName !== "img"
      ) {
        return
      }

      if (typeof node.properties.src !== "string") {
        // throw new Error("Image src is required")
        return
      }

      if (typeof node.properties.alt !== "string") {
        // throw new Error("Image alt text is required")
      }

      // todo: it is a temp solution to filter input images.
      if (!node.properties.src.startsWith("./_static")) {
        return
      }

      // todo: check url, use url.canParse.
      // todo: check that path is not absolute.

      let sf = dirname(file.path)
      sf = join(sf, node.properties.src)

      transformers.push(
        // Promise.resolve(
          (async function () {
            const r = await eleventyImage(sf, {
              formats: ["webp"],
              urlPath: "/assets/",
              outputDir: "./dist/assets/",
              filenameFormat(id: string, src: string, width: number, format: string, options: any) {
                const e = extname(src)
                const n = basename(src, e)
                return `${n}-${width}w-${id}.${format}`
              }
            })

            // todo: add more type of images.

            parent.children[index] = {
              type: "element",
              tagName: "picture",
              properties: {},
              children: [
                {
                  type: "element",
                  tagName: "source",
                  properties: {
                    type: r.webp[0].sourceType,
                    srcset: r.webp[0].srcset
                  },
                  children: []
                },
                {
                  type: "element",
                  tagName: "img",
                  properties: {
                    src: r.webp[0].url,
                    width: r.webp[0].width,
                    // height: r.webp[0].height,
                    alt: node.properties.alt,
                    loading: "lazy",
                    decoding: "async"
                  },
                  children: []
                }
              ]
            }
          })()
        // )
      )
    })

    await Promise.all(transformers)
    return tree
  }
}

function currentDir() {
  const u = new URL(import.meta.url)
  return fileURLToPath(u)
}
