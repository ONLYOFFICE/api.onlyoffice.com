import {URL, fileURLToPath} from "node:url"
import {ESLint as NativeESlint} from "eslint"

export class ESLint extends NativeESlint {
  constructor() {
    // It is not very clear how to correctly define a flat config object,
    // so it is easier to use a flat config file.
    super({cwd: cwd(), fix: true})
  }
}

function cwd(): string {
  const u = new URL(".", import.meta.url)
  return fileURLToPath(u)
}
