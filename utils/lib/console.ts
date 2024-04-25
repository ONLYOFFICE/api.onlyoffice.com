import {Console as NodeConsole} from "node:console"
import process from "node:process"
import pack from "../package.json" with {type: "json"}

export class Console extends NodeConsole {
  static console = new Console(pack.name, process.stdout, process.stderr)

  _name: string
  _stdout: NodeJS.WritableStream
  _stderr: NodeJS.WritableStream

  constructor(
    name: string = pack.name,
    stdout: NodeJS.WritableStream = process.stdout,
    stderr: NodeJS.WritableStream = process.stderr
  ) {
    super(stdout, stderr)
    this._name = name
    this._stdout = stdout
    this._stderr = stderr
  }

  set stdout(s: NodeJS.WritableStream) {
    this._stdout = s
    Console.console = this.reconstruct()
  }

  set stderr(s: NodeJS.WritableStream) {
    this._stderr = s
    Console.console = this.reconstruct()
  }

  reconstruct(): Console {
    return new Console(this._name, this._stdout, this._stderr)
  }

  log(...data: any[]): void {
    super.log(`${this.prefix()} info:`, ...data)
  }

  warn(...data: any[]): void {
    super.warn(`${this.prefix()} warn:`, ...data)
  }

  error(...data: any[]): void {
    super.error(`${this.prefix()} error:`, ...data)
  }

  prefix(): string {
    const d = new Date().toISOString()
    return `${d} ${this._name}`
  }
}
