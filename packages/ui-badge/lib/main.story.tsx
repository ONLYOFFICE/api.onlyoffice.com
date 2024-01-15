import {type Meta} from "@storybook/preact"
import {Fragment, type JSX, h} from "preact"
import {Badge} from "./main.tsx"

export default {
  title: "UI/Badge"
} satisfies Meta

export function Default(): JSX.Element {
  return <>
    <Badge>default</Badge>
    <Badge variant="danger">danger</Badge>
    <Badge variant="support">support</Badge>
  </>
}
