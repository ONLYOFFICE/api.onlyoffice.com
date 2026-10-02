---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/docs/Themes.mdx"
---

# Themes

The UI Kit ships with Base (light) and Dark themes. Styling is **SCSS Modules plus CSS
custom properties** — there is no runtime CSS-in-JS. `ThemeProvider` resolves the active
theme, stamps it on the document, and sets the custom properties that every component's
stylesheet reads.

## Setting up ThemeProvider

```tsx
import { ThemeProvider } from "@onlyoffice/apps-ui-kit/providers/theme";
import { ThemeKeys } from "@onlyoffice/apps-ui-kit/enums";

<ThemeProvider initialTheme={ThemeKeys.BaseStr} locale="en">
  <App />
</ThemeProvider>
```

There is also a composite `Providers` component, which mounts `ApiProvider` and fetches portal
settings on mount. **It is for the portal, not for an application of your own**: it requires a
DocSpace URL and an API key, and without a portal behind them every request it makes fails. It
is deliberately not re-exported from `providers`. Compose `ThemeProvider` and
`TranslationProvider` yourself instead — see
[Getting started](./welcome.md).

### Provider props

- **`initialTheme`** (`ThemeKeys`) — starting theme: `BaseStr`, `DarkStr`, or `SystemStr`
- **`systemTheme`** (`ThemeKeys`) — override detected OS preference
- **`colorTheme`** (`CustomColorThemesSettingsDto`) — the portal's accent palette. **Pass it.**
  Omitted, the provider calls the DocSpace REST API on mount to ask for one; outside a portal that
  request fails, the rejection is not caught, and it is never retried. `{ themes: [], selected: 0 }`
  says "no portal, no accent override".
- **`locale`** (`string`) — language code for RTL detection and font selection

### ThemeKeys enum

```ts
import { ThemeKeys } from "@onlyoffice/apps-ui-kit/enums";

ThemeKeys.BaseStr    // "Base" — light theme
ThemeKeys.DarkStr    // "Dark" — dark theme
ThemeKeys.SystemStr  // "System" — follow OS preference
```

## Theme resolution order

The hook resolves the active theme in this order:

1. `initialTheme` if explicitly set to `BaseStr` or `DarkStr`
2. If `initialTheme` is `SystemStr`, detect via `window.matchMedia("(prefers-color-scheme: dark)")`
3. `systemTheme` fallback
4. Default to Base (light)

When `SystemStr` is used, a `matchMedia` listener automatically switches the theme when the OS preference changes.

## Where a component's colours come from

Nothing reads the theme object to paint a component. Each component has its own
`*.module.scss`, and that stylesheet declares its tokens under the theme class and reads
them back through `var()`:

```scss
:global(.light) {
  :local {
    .card {
      --card-background: #{colors.$white};
      --card-text-color: #{colors.$black};
    }
  }
}

.card {
  background-color: var(--card-background);
  color: var(--card-text-color);
}
```

`ThemeProvider` only decides *which* theme is active; the values come from the stylesheet
that ships next to the component. An undefined token fails silently, so add both halves
together.

### Theme object

`Base` and `Dark` are still exported from `@onlyoffice/apps-ui-kit/providers/theme`, and
`useTheme` still resolves one of them. Only three of their fields drive anything today —
`isBase`, `interfaceDirection` and `fontFamily`, which `ThemeProvider` turns into the DOM
attributes below. The remaining ~130 per-component categories are a leftover from the
CSS-in-JS era; no component in the package reads them:

```ts
{
  isBase: true,                    // true for Base, false for Dark
  interfaceDirection: "ltr",       // "ltr" or "rtl"
  fontFamily: "Open Sans, ...",
  color: "#333333",
  backgroundColor: "#FFFFFF",

  text: { color, disableColor, fontWeight, ... },
  heading: { fontSize: { xlarge, large, medium, small }, ... },
  button: { padding, color, backgroundColor, ... },
  input: { color, borderColor, ... },
  checkbox: { ... },
  tabs: { ... },
  tooltip: { ... },
  contextMenu: { ... },
  modal: { ... },
  table: { ... },
  // ... and many more
}
```

## useTheme context hook

Read the current theme state from any component:

```tsx
import { useTheme } from "@onlyoffice/apps-ui-kit/context/ThemeContext";

function MyComponent() {
  const { theme, isBase, currentColorScheme } = useTheme();

  return <div>{isBase ? "Light mode" : "Dark mode"}</div>;
}
```

- **`theme`** (`"Base" | "Dark"`) — current theme name
- **`isBase`** (`boolean`) — `true` if light theme is active
- **`currentColorScheme`** (`CustomColorThemesSettingsItem`) — active color scheme (accent colors)

## Custom color themes

Custom color themes override the accent colors used across the UI.

### Type

```ts
type CustomColorThemesSettingsDto = {
  selected: string;  // ID of the active color theme
  themes?: CustomColorThemesSettingsItem[];
};

type CustomColorThemesSettingsItem = {
  id: string;
  name?: string;
  main?: { accent?: string; buttons?: string };
  text?: { accent?: string; buttons?: string };
};
```

### Passing a custom color theme

```tsx
const colorTheme = {
  selected: "1",
  themes: [
    {
      id: "1",
      name: "Brand",
      main: { accent: "#4781D1", buttons: "#5299E0" },
      text: { accent: "#FFFFFF", buttons: "#FFFFFF" },
    },
  ],
};

<ThemeProvider initialTheme={ThemeKeys.BaseStr} colorTheme={colorTheme}>
  <App />
</ThemeProvider>
```

These colors are set as CSS custom properties on the document:

```
--color-scheme-main-accent
--color-scheme-text-accent
--color-scheme-main-buttons
--color-scheme-text-buttons
```

If `colorTheme` is not provided, it is fetched automatically from the ONLYOFFICE Apps API.

## DOM attributes

`ThemeProvider` sets the following attributes on the document:

- `<html data-theme="light|dark">`
- `<html data-dir="ltr|rtl">`
- `<body class="light|dark ltr|rtl">`

CSS custom properties:

```
<html> --interface-direction: "ltr" | "rtl"
<body> --font-family: "Open Sans, sans-serif, Arial"
```

## RTL support

RTL is detected automatically from the `locale` prop. Arabic, Hebrew, Urdu, Persian, and other RTL languages flip the interface direction.

```ts
import {
  isLanguageRtl,
  getDirectionByLanguage,
  getCorrectTextAlign,
  getCorrectBorderRadius,
} from "@onlyoffice/apps-ui-kit/providers/theme";

isLanguageRtl("ar");           // true
getDirectionByLanguage("en");  // "ltr"
getDirectionByLanguage("he");  // "rtl"
```

Helper functions, for the cases a value has to be flipped in JavaScript rather than by a
CSS logical property:

```ts
// Flip text-align for RTL
getCorrectTextAlign("left", "rtl");  // "right"

// Flip border-radius for RTL
getCorrectBorderRadius("4px 0 0 4px", "rtl");  // "0 4px 4px 0"

// Flip four-value styles (margin, padding)
getCorrectFourValuesStyle("0 8px 0 0", "rtl");  // "0 0 0 8px"
```

## Global color tokens

Available in `@onlyoffice/apps-ui-kit/providers/theme`:

```ts
import { globalColors } from "@onlyoffice/apps-ui-kit/providers/theme";

globalColors.white           // "#ffffff"
globalColors.black           // "#333333"
globalColors.lightBlueMain   // "#4781D1"
globalColors.mainGreen       // "#2DB482"
globalColors.mainRed         // "#F2675A"
globalColors.mainOrange      // "#F97A0B"
globalColors.grayLight       // "#F8F9F9"
```
