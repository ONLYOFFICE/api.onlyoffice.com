import {Console as NodeConsole} from "node:console"
import {red, yellow} from "kleur/colors"

export class Console extends NodeConsole {
  #name: string

  constructor(
    name: string,
    stdout: NodeJS.WritableStream,
    stderr: NodeJS.WritableStream
  ) {
    super(stdout, stderr)
    this.#name = name
  }

  log(...data: Parameters<typeof NodeConsole["prototype"]["log"]>): void {
    const p = `${this.#prefix()} info:`
    super.log(p, ...data)
  }

  warn(...data: Parameters<typeof NodeConsole["prototype"]["warn"]>): void {
    const p = yellow(`${this.#prefix()} warn:`)
    super.warn(p, ...data)
  }

  error(...data: Parameters<typeof NodeConsole["prototype"]["error"]>): void {
    const p = red(`${this.#prefix()} error:`)
    super.error(p, ...data)
  }

  #prefix(): string {
    const d = new Date().toISOString()
    return `${d} ${this.#name}`
  }
}
