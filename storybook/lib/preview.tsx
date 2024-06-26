import "@onlyoffice/ui-kit/client.ts"
import "@onlyoffice/site-kit/client.ts"
import "./preview.css"
import {type Preview} from "@storybook/preact"
import {useEffect} from "preact/hooks"
import {h} from "preact"

export default {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Choose the theme",
      defaultValue: "regular-auto",
      toolbar: {
        icon: "contrast",
        showName: true,
        dynamicTitle: true,
        items: [
          {title: "Regular Auto", value: "regular-auto"},
          {title: "Regular Light", value: "regular-light"},
          {title: "Regular Dark", value: "regular-dark"}
        ]
      }
    },
    paddings: {
      name: "Paddings",
      description: "Choose the padding",
      defaultValue: "Medium",
      toolbar: {
        icon: "box",
        showName: true,
        dynamicTitle: true,
        items: [
          {title: "None", value: "0px"},
          {title: "Small", value: "1rem"},
          {title: "Medium", value: "2rem"},
          {title: "Large", value: "4rem"}
        ]
      }
    }
  },
  decorators: [
    (Story, ctx) => {
      const {theme, paddings} = ctx.globals

      useEffect(() => {
        const [c, t] = theme.split("-")
        document.documentElement.dataset.darkTheme = c
        document.documentElement.dataset.lightTheme = c
        document.documentElement.dataset.themePreference = t
        document.documentElement.style.padding = paddings
      }, [theme])

      return <Story />
    }
  ]
} satisfies Preview
