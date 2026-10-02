---
description: "Resolves the light, dark or system theme and writes it onto the document for every component to read."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/providers/theme/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ThemeProvider

Resolves the light, dark or system theme and writes it onto the document for every component to
read. Almost nothing in this kit has a colour of its own: a component reads custom properties
that this provider's output defines, so a tree without it renders with those properties unset.

<ThemedImage alt="ThemeProvider" width={1014} sources={{ light: require('./theme--primary-light.png').default, dark: require('./theme--primary-dark.png').default }} />

## Use this when / not when

- Mount it once, at the root of an application of your own, around everything that uses the kit.
- Not inside a DocSpace plugin. The portal has already mounted it, and a second one would write
  the same attributes twice.
- Not [`ThemeProviderComponent`](../../ui/layout/theme-provider.md) directly — that is
  the older layer this provider is built on, and it takes a whole theme object rather than a
  name, which makes it easy to hand it one whose CSS and JavaScript sides disagree.
- Not `Providers` from `@onlyoffice/apps-ui-kit/providers/Providers`: it also mounts an API
  client and expects a portal URL and an API key, neither of which an application of its own has.

## Import

```ts
import { ThemeProvider } from "@onlyoffice/apps-ui-kit/providers/theme";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs no provider of its own. Pair it with
[`TranslationProvider`](./translation.md), which the components that carry labels of
their own read.


## Stories

### Light Theme

Light (Base) theme — the default.

<ThemedImage alt="Light Theme" width={1014} sources={{ light: require('./theme--light-theme-light.png').default, dark: require('./theme--light-theme-dark.png').default }} />

### Dark Theme

Dark theme variant.

<ThemedImage alt="Dark Theme" width={1014} sources={{ light: require('./theme--dark-theme-light.png').default, dark: require('./theme--dark-theme-dark.png').default }} />

### System Theme

System theme follows the OS preference via `prefers-color-scheme`.

<ThemedImage alt="System Theme" width={1014} sources={{ light: require('./theme--system-theme-light.png').default, dark: require('./theme--system-theme-dark.png').default }} />

## Minimal example

```tsx
import { ThemeProvider } from "@onlyoffice/apps-ui-kit/providers/theme";
import { ThemeKeys } from "@onlyoffice/apps-ui-kit/enums";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";

export function App() {
  return (
    <ThemeProvider initialTheme={ThemeKeys.BaseStr} locale="en">
      <Button primary label="Save" onClick={() => {}} />
    </ThemeProvider>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children` | `React.ReactNode` | The tree the theme applies to. |
| `colorTheme`? | `CustomColorThemesSettingsDto` | The portal's accent palette. Outside the portal there is none — leave it out. |
| `initialTheme`? | `ThemeKeys` | Theme to use; a new value is applied in place, without a remount. Left out, the system's own preference is followed. |
| `locale`? | `string` | Language tag deciding the writing direction and the font family. |
| `systemTheme`? | `ThemeKeys` | Theme to treat as the system's, instead of reading `prefers-color-scheme`. |

</APITable>

## Recipes

### Follow the operating system

Left out, `initialTheme` follows the system anyway — but saying so is worth a line, because the
provider keeps following it: it listens to `prefers-color-scheme` for as long as it is mounted,
so a theme switched in the OS switches here without a reload.

```tsx
import { ThemeProvider } from "@onlyoffice/apps-ui-kit/providers/theme";
import { ThemeKeys } from "@onlyoffice/apps-ui-kit/enums";

export function SystemThemed({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider initialTheme={ThemeKeys.SystemStr} locale="en">
      {children}
    </ThemeProvider>
  );
}
```

### Let the reader choose

The choice lives in your own state and reaches the provider as `initialTheme`. A new value is
applied where it stands — nothing below the provider is remounted, so a form keeps what the
reader has typed while the theme changes under it.

```tsx
import { useState } from "react";

import { ThemeProvider } from "@onlyoffice/apps-ui-kit/providers/theme";
import { ThemeKeys } from "@onlyoffice/apps-ui-kit/enums";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";

export function ThemeSwitch() {
  const [theme, setTheme] = useState(ThemeKeys.BaseStr);

  return (
    <ThemeProvider initialTheme={theme} locale="en">
      <Button
        label="Switch"
        onClick={() =>
          setTheme(
            theme === ThemeKeys.BaseStr ? ThemeKeys.DarkStr : ThemeKeys.BaseStr,
          )
        }
      />
    </ThemeProvider>
  );
}
```

### Right to left

`locale` decides the direction, from a list of thirteen right-to-left languages. Nothing else
has to be set: the `rtl` class and `data-dir` go on the document, and the kit's logical
properties do the rest.

```tsx
import { ThemeProvider } from "@onlyoffice/apps-ui-kit/providers/theme";
import { ThemeKeys } from "@onlyoffice/apps-ui-kit/enums";

export function Arabic({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider initialTheme={ThemeKeys.BaseStr} locale="ar">
      {children}
    </ThemeProvider>
  );
}
```

## Behaviour the types don't state

- **It writes on the document, not into a React context.** `light` or `dark` and `ltr` or `rtl`
  go on `<body>`, `data-theme` and `data-dir` on `<html>`, and `--font-family` with them. That is
  why a component outside the provider is unstyled rather than merely uncoloured, and why two
  providers in one page fight over the same attributes.
- **`initialTheme` keeps being read.** The name says otherwise, and so did this page until two
  readers checked it against the source: the theme is re-resolved by an effect keyed on that prop,
  so a new value applies in place with no remount and no state lost below the provider.
- **The system theme keeps being followed.** With `ThemeKeys.SystemStr`, or with `initialTheme`
  left out, a `prefers-color-scheme` listener stays attached for the provider's whole life.
- **`colorTheme` is the portal's accent palette, and the only way to one.** Nothing is fetched:
  without the prop the kit's own accent is kept. The provider used to look as though it asked a
  portal for the palette, but the call was the API SDK's _parameter builder_ — it returns
  `{ url, options }` and sends nothing, so the result was read as a response and the branch
  ended in silence. Removing it also took `@onlyoffice/docspace-api-sdk` and `axios` out of
  every application that mounts this provider; the palette's type is still imported, as a type.
- **A `colorTheme` that arrives later is picked up.** The prop is watched, so a portal that
  loads its palette after the first render can pass it in without remounting the provider.
- **`systemTheme` overrides detection, not preference.** It stands in for what
  `prefers-color-scheme` would have said, and only matters while the theme is the system's.
- **The font is not shipped.** The family resolves to `Open Sans, sans-serif, Arial`, and this
  repository's `css/fonts.css` is not published. Load Open Sans yourself or override
  `--font-family` on the document.

## Accessibility

- The `light` and `dark` classes are what give every component its contrast; a tree rendered
  outside this provider has neither, and its text can land on a background it was never checked
  against.
- `locale` sets the writing direction for the whole document. Set it to the language you are
  actually rendering, or a right-to-left interface reads left to right with the characters
  reversed against their layout.
- The provider follows `prefers-color-scheme`, which is a reader's accessibility setting on many
  systems. Overriding it with a fixed `initialTheme` is a choice worth making deliberately.

## Related

- [`TranslationProvider`](./translation.md) — the other provider an application mounts.
- [`ErrorBoundary`](./error-boundary.md) — catches what the tree below throws.
- [`ThemeProviderComponent`](../../ui/layout/theme-provider.md) — the older layer this
  is built on; do not mount it yourself.
