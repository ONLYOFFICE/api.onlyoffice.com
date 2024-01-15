// Eleventy has its environment variable called `ELEVENTY_RUN_MODE`, which
// defines the run mode. However, this variable is limited to `build` and
// `serve`, which is insufficient for our needs. Instead of trying to figure out
// how to marry the Eleventy variable with our own, it is easier to use the
// second solely.

import {env} from "node:process"

/**
 * Checks if the current run mode is set to `build`.
 * @returns `true` if the run mode is `build`, `false` otherwise.
 */
export function isBuild(): boolean {
  const m = env.SITE_RUN_MODE
  if (m === undefined) {
    throw new Error("SITE_RUN_MODE is not defined")
  }
  return m === "build"
}

/**
 * Checks if the current run mode is set to `preview`.
 * @returns `true` if the run mode is `preview`, `false` otherwise.
 */
export function isPreview(): boolean {
  const m = env.SITE_RUN_MODE
  if (m === undefined) {
    throw new Error("SITE_RUN_MODE is not defined")
  }
  return m === "preview"
}

/**
 * Checks if the current run mode is set to `serve`.
 * @returns `true` if the run mode is `serve`, `false` otherwise.
 */
export function isServe(): boolean {
  const m = env.SITE_RUN_MODE
  if (m === undefined) {
    throw new Error("SITE_RUN_MODE is not defined")
  }
  return m === "serve"
}
