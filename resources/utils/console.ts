import {Console as UtilsConsole} from "@onlyoffice/documentation-utils/console.ts"
import pack from "../package.json" with {type: "json"}

export class Console extends UtilsConsole {
  static console = new Console(pack.name)
}

export const console = Console.console
