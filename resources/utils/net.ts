import {createWriteStream} from "node:fs"
import https from "node:https"
import {finished} from "node:stream/promises"
import {Readable, Writable} from "node:stream"

/**
 * Downloads a file.
 * @param u The URL of the file to download.
 * @param p The path of the file to save.
 */
export async function downloadFile(u: string, p: string): Promise<void> {
  const res = await fetch(u)
  if (res.body === null) {
    throw new Error("No body")
  }
  // Uses two distinct types of ReadableStream: one from the DOM API and another
  // from NodeJS API. It functions well, so no need to worry.
  // @ts-ignore
  const r = Readable.fromWeb(res.body)
  const s = createWriteStream(p)
  const w = r.pipe(s)
  await finished(w)
}

export function download(w: Writable, u: string): Promise<void> {
  return new Promise((res, rej) => {
    https.get(u, function (r) {
      if (r.statusCode !== 200) {
        rej(new Error(`Bad status code: ${r.statusCode} ${r.statusMessage}`))
        return
      }
      r.pipe(w)
      w.on("error", rej)
      w.on("finish", res)
    })
  })
}
