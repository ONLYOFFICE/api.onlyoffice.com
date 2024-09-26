import {Button, SpikyWow, SrOnly} from "@onlyoffice/ui-kit"
import {type JSX, h} from "preact"
import {Picture404Overflow, Picture404Underflow} from "../dist/main.tsx"

export function Status404(): JSX.Element {
  return <div class="status-404">
    <SrOnly>
      <h1>404</h1>
    </SrOnly>
    <div class="status-404__picture">
      <Picture404Underflow width="587" />
      <SpikyWow width="165" />
      <Picture404Overflow width="587" />
    </div>
    <p>Oops...Page not found!</p>
    <Button>Go to home page</Button>
  </div>
}
