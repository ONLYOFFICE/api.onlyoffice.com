import type {TransformCallback} from "node:stream"
import {Readable, Writable} from "node:stream"

export class StringWritable extends Writable {
  buf: string

  constructor(buf = "") {
    super()
    this.buf = buf
  }

  _write(ch: unknown, _: BufferEncoding, cb: TransformCallback): void {
    this.buf += String(ch)
    cb()
  }

  toReadable(): StringReadable {
    return new StringReadable(this.buf)
  }
}

export class StringReadable extends Readable {
  buf: string

  constructor(buf = "") {
    super()
    this.buf = buf
  }

  _read(): void {
    this.push(this.buf)
    this.buf = ""
    this.push(null)
  }

  toWritable(): StringWritable {
    return new StringWritable(this.buf)
  }
}
