// Inspired by the rehype-react.
// https://github.com/rehypejs/rehype-react/blob/main/lib/index.js#L18

import type {Root} from "hast"
import type {Options} from "hast-util-to-jsx-runtime"
import {toJsxRuntime} from "hast-util-to-jsx-runtime"
import type {JSX} from "preact"
import type {VFile} from "vfile"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function rehypePreact(this: any, options: Options): void {
  this.compiler = compiler

  function compiler(t: Root, f: VFile): JSX.Element {
    return toJsxRuntime(t, {filePath: f.path, ...options})
  }
}
