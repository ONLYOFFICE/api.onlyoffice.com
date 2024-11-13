import {ThemeGuard} from "@onlyoffice/theme-guard-preact"
import {type Meta, type StoryObj} from "@storybook/preact"
import {h} from "preact"

export default {
  title: "Site / Theme Guard",
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
    return <ThemeGuard>Default</ThemeGuard>
  },
}
