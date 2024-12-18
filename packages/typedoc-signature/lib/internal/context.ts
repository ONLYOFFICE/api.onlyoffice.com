import {type Formatter} from "./formatter.ts"
import {type State} from "./state.ts"
import {type Transport} from "./transport.ts"

export interface Context {
  s: State
  f: Formatter
  t: Transport
}
