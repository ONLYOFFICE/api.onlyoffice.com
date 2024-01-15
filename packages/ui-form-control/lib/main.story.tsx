import {type Meta} from "@storybook/preact"
import {type JSX, h} from "preact"
import {Default as SelectStory} from "../../ui-select/lib/main.story.tsx"
import {FormControl, FormControlControl, FormControlLabel} from "./main.tsx"

export default {
  title: "UI/Form Control"
} satisfies Meta

export function Default(): JSX.Element {
  return <FormControl for="control">
    <FormControlLabel>Label</FormControlLabel>
    <FormControlControl>
      <SelectStory />
    </FormControlControl>
  </FormControl>
}
