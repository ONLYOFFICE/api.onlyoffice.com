import {type Meta, type StoryObj} from "@storybook/preact"
import {h} from "preact"
import {Button, type ButtonProperties} from "./main.tsx"

export default {
  title: "UI / Button",
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
    return <Button>Button</Button>
  },
}

export const Playground: StoryObj<ButtonProperties> = {
  parameters: {
    actions: {
      disable: true,
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "accent", "neutral"],
    },
  },
  args: {
    variant: "default",
    children: "Button",
  },
  render(p) {
    return <Button variant={p.variant}>{p.children}</Button>
  },
}
