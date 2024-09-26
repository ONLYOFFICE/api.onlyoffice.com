import {type Meta} from "@storybook/preact"
import {type JSX, h} from "preact"
import {Status404} from "./main.tsx"

export default {
  title: "Site/Status",
} satisfies Meta

export function Default(): JSX.Element {
  return <Status404 />
}
