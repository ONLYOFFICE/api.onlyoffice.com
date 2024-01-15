import {type StorybookConfig} from "@storybook/preact-vite"
import {h} from "preact"
import {renderToString} from "preact-render-to-string"
import {Font} from "../../ui/font/lib/font.server.ts"

export default {
  framework: "@storybook/preact-vite",
  addons: [
    "@storybook/addon-essentials"
  ],
  stories: [
    "../../packages/site-*/lib/*.story.tsx",
    "../../packages/ui-*/lib/*.story.tsx"
  ],
  staticDirs: [
    "../../ui/font/static",
    {from: "../../packages/pagefind-fixtures/dist/pagefind", to: "pagefind"},
    "../../site/assets/images"
  ],
  previewHead(head) {
    return head + renderToString(<Font.Links />)
  }
} satisfies StorybookConfig
