import {env} from "node:process"

/**
 * Checks if the current run mode is set to `build`.
 * @returns `true` if the run mode is `build`, `false` otherwise.
 */
export function isBuild(): boolean {
  const m = env.ELEVENTY_RUN_MODE
  if (m === undefined) {
    throw new Error("ELEVENTY_RUN_MODE is not defined")
  }
  return m === "build"
}

/**
 * Checks if the current run mode is set to `serve`.
 * @returns `true` if the run mode is `serve`, `false` otherwise.
 */
export function isServe(): boolean {
  const m = env.ELEVENTY_RUN_MODE
  if (m === undefined) {
    throw new Error("ELEVENTY_RUN_MODE is not defined")
  }
  return m === "serve"
}
