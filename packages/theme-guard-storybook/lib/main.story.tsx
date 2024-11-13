import {ThemeGuard} from "@onlyoffice/theme-guard-preact"
import {type Meta, type StoryObj} from "@storybook/preact"
import {h} from "preact"

export default {
  title: "Site Utilities / Theme Guard",
} satisfies Meta

export const Default: StoryObj = {
  parameters: {
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
  },
  render() {
    return <ThemeGuard>
      <div>Default</div>
    </ThemeGuard>
  },
}
