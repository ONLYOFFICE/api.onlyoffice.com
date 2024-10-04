import {type ControlsOf, deepControls} from "@onlyoffice/storybook-addon-deep-controls"
import {Picture404} from "@onlyoffice/ui-kit"
import {type Meta, type StoryObj} from "@storybook/preact"
import {h} from "preact"
import {Playground as Picture404Playground} from "../../ui-pictures/lib/main.story.tsx"
import {
  Status,
  StatusButton,
  StatusDescription,
  StatusHeading,
  StatusPicture,
} from "./main.tsx"

export default {
  title: "Site Basics / Status",
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
    return <Status>
      <StatusHeading>404</StatusHeading>
      <StatusPicture>
        <Picture404 />
      </StatusPicture>
      <StatusDescription>Oops...Page not found!</StatusDescription>
      <StatusButton>Go to home page</StatusButton>
    </Status>
  },
}

export interface PlaygroundProperties {
  heading: string
  description: string
  button: string
  picture: ControlsOf<typeof Picture404Playground>
}

export const Playground = deepControls<PlaygroundProperties>()
  .append("picture", Picture404Playground)
  .to({
    parameters: {
      actions: {
        disable: true,
      },
    },
    args: {
      heading: "404",
      description: "Oops...Page not found!",
      button: "Go to home page",
    },
    render(p) {
      return <Status>
        <StatusHeading>{p.heading}</StatusHeading>
        <StatusPicture>
          <Picture404 {...p.picture} />
        </StatusPicture>
        <StatusDescription>{p.description}</StatusDescription>
        <StatusButton>{p.button}</StatusButton>
      </Status>
    },
  })
