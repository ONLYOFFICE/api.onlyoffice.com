---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/docs/getting-started.md"
---

# Getting started

Everything a React application needs to do once, before any component of this kit renders
correctly: install it, mount two providers, and know which import forms exist. It is written for an
application of your own — a DocSpace **plugin** installs nothing and composes no providers, because
the portal has already done both.

Every `tsx` block below is a complete module and is compiled by `pnpm check:readme --compile`.

## Install

The package is not on the public npm registry yet, so there is nothing to install by name. Build a
tarball from this repository and install the file:

```bash
pnpm build && pnpm pack   # -> onlyoffice-apps-ui-kit-4.0.0.tgz
```

Pack with **pnpm, not npm**: the `exports` map lives under `publishConfig`, which npm does not
apply, and an npm-packed tarball arrives with no `exports` and no `main` at all — every import from
it fails to resolve.

Once it is published this becomes the usual line:

```bash
npm install @onlyoffice/apps-ui-kit
```

The package is **ESM only**. There is no CommonJS build, so a bundler or a Node version that cannot
load ESM cannot load this kit.

### Peer dependencies

Four are required:

| Package         | Range     |
| --------------- | --------- |
| `react`         | `^19.0.0` |
| `react-dom`     | `^19.0.0` |
| `i18next`       | `^25.5.2` |
| `react-i18next` | `^15.7.3` |

The other fifteen are optional and belong to portal-internal modules. **`axios` is the one to
watch**: it is optional, but the root barrel re-exports `billing` and `uploader`, which reach it —
so `import { Button } from "@onlyoffice/apps-ui-kit"` pulls `axios` into the resolution graph even
though `Button` has nothing to do with it. Either install `axios` or import from subpaths.

`i18next` and `react-i18next` are stateful. A second copy in the tree breaks translation silently
rather than loudly, so keep them deduplicated.

## Do not import the stylesheet

Every component imports its own CSS. `components/button/Button.tsx` imports
`Button.module.scss`, the build turns that into a module that imports the CSS beside it, and
`sideEffects` keeps the import alive through tree-shaking. **Importing a component is enough to
style it.**

`@onlyoffice/apps-ui-kit/styles.css` is the whole library's CSS in one file. It exists for bundlers
that cannot import CSS from `node_modules`, and adding it anywhere else ships hundreds of kilobytes
of rules the application never uses. Reach for it only when components render unstyled **and** you
have confirmed your bundler is the reason.

## The two providers

Compose them yourself. There is a composite `Providers` in this package — do not use it: it also
mounts an API client and expects a portal URL and an API key, neither of which an application of
your own has.

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@onlyoffice/apps-ui-kit/providers/theme";
import { TranslationProvider } from "@onlyoffice/apps-ui-kit/providers/translation";
import type { TTranslations } from "@onlyoffice/apps-ui-kit/providers/translation";
import { ThemeKeys } from "@onlyoffice/apps-ui-kit/enums";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";

import common from "@onlyoffice/apps-ui-kit/locales/en/Common.json";

const translations: TTranslations = new Map([
  ["en", new Map([["Common", common]])],
]);

export function App() {
  return (
    <ThemeProvider initialTheme={ThemeKeys.BaseStr} locale="en">
      <TranslationProvider locale="en" translations={translations}>
        <Button primary label="Save" onClick={() => {}} />
      </TranslationProvider>
    </ThemeProvider>
  );
}

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
```

### ThemeProvider

From `@onlyoffice/apps-ui-kit/providers/theme`. It resolves a theme object and hands it to the
older `ThemeProviderComponent`, which writes the result onto the document: the `light` or `dark`
class on `<body>`, `ltr` or `rtl` beside it, `data-theme` and `data-dir` on `<html>`, and
`--font-family`. Almost every component in the kit reads one of those.

- `initialTheme` — `ThemeKeys.BaseStr` (light), `ThemeKeys.DarkStr`, or `ThemeKeys.SystemStr` to
  follow `prefers-color-scheme`. Left out, it follows the system as well, and it keeps following
  it: the provider listens for changes to that media query for as long as it is mounted.
- `locale` — a language tag. It decides two things: the writing direction, from a list of
  thirteen right-to-left languages, and the font family.
- **`colorTheme` — the portal's accent palette; an application of its own leaves it out**, and
  the kit's own accent is used. Nothing is fetched: this prop is the only way a palette gets in.
  The provider used to look as though it asked a portal when the prop was absent, but the call
  was the API SDK's _parameter builder_ — it returns `{ url, options }` and sends nothing — and
  that dead call dragged the REST client and `axios` into every application that mounted the
  provider. Both are gone.

Do not mount `ThemeProviderComponent` from `components/theme-provider` yourself. It is the older
layer this provider is built on; used directly it takes a full theme object rather than a name, and
it is easy to hand it one whose CSS and JavaScript sides disagree.

### TranslationProvider

From `@onlyoffice/apps-ui-kit/providers/translation`. Several components have labels that are not
props — the file picker's button label, the "clear all" link in the filter bar, the collapse
handle in the side panel, the operations progress button — and they read them from a shared
i18next instance. Eleven components do it: `article`, `color-picker`, `drop-down-item`,
`file-input`, `filter`, `operations-progress-button`, `room-type`, `selector`, `table`, `tiles`
and `toast`. `Dropzone` is **not** among them; its prompt is a prop like any other.

**Without this provider those labels are empty strings.** Not missing-key placeholders: empty. A
button renders at its full size with nothing written on it.

`translations` is a `Map` of language to a `Map` of namespace to a flat record of key and string:

```tsx
import type { TTranslations } from "@onlyoffice/apps-ui-kit/providers/translation";

import common from "@onlyoffice/apps-ui-kit/locales/en/Common.json";

export const translations: TTranslations = new Map([
  ["en", new Map([["Common", common]])],
]);
```

The package ships `en` only, in three namespaces — `Common`, `Settings` and `Payments`. `Common` is
the one the components read; the other two belong to portal screens. Translations of your own go in
the same map under their own namespace.

## Fonts

The kit does not ship a font. Its default family is `Open Sans, sans-serif, Arial`, and the
`css/fonts.css` in this repository is not published. Either load Open Sans yourself, or override
`--font-family` on the document:

```css
:root {
  --font-family: Inter, system-ui, sans-serif;
}
```

## Which import form

Two resolve, and **the subpath is the one to use**:

```tsx
import { Button } from "@onlyoffice/apps-ui-kit";
import { Button as ButtonBySubpath } from "@onlyoffice/apps-ui-kit/components/button";

export function Buttons() {
  return (
    <>
      <Button primary label="From the barrel" onClick={() => {}} />
      <ButtonBySubpath label="From the subpath" onClick={() => {}} />
    </>
  );
}
```

**The root barrel does not build without four optional peers.** It re-exports `billing` and
`uploader` alongside the components, and those import `mobx`, `mobx-react`, `react-router` and —
through the portal's API provider — `axios`. All four are optional peers, because only those
portal modules need them; but a bundler resolves every module the barrel reaches before it
drops what is unused, so `import { Button } from "@onlyoffice/apps-ui-kit"` in an application
that has not installed them fails to build. Vite stops on
`"makeAutoObservable" is not exported by "__vite-optional-peer-dep:mobx"`. A subpath reaches the
component's own module and nothing else.

All 98 component folders are re-exported by the root barrel, and `export *` is transitive — so a
nested component such as `Row` or `AsideHeader` arrives from the barrel too, without its own
folder being listed there.

**Nine components are default exports.** On their subpath the name is yours to choose, and the
barrel carries each of them by name as well — `components/index.ts` re-exports them explicitly,
`export { default as Section } from "./section"` — so `import { Section }` resolves too:

```tsx
import AppLoader from "@onlyoffice/apps-ui-kit/components/app-loader";
import Article from "@onlyoffice/apps-ui-kit/components/article";
import Dropzone from "@onlyoffice/apps-ui-kit/components/dropzone";
import Navigation from "@onlyoffice/apps-ui-kit/components/navigation";
import OperationsProgressButton from "@onlyoffice/apps-ui-kit/components/operations-progress-button";
import PublicRoomBar from "@onlyoffice/apps-ui-kit/components/public-room-bar";
import QuantityPicker from "@onlyoffice/apps-ui-kit/components/quantity-picker";
import RoomType from "@onlyoffice/apps-ui-kit/components/room-type";
import Section from "@onlyoffice/apps-ui-kit/components/section";

export const defaults = {
  AppLoader,
  Article,
  Dropzone,
  Navigation,
  OperationsProgressButton,
  PublicRoomBar,
  QuantityPicker,
  RoomType,
  Section,
};
```

`FilterInput` and `StatusMessage` are default exports as well, and are also exported under their
own names from their folder.

Never reach into the published build directory. The `exports` map is the public surface; a
specifier that names the build output instead of a subpath is not covered by it, and it breaks the
next time the build layout changes.

## Public and portal-internal

Some modules only work inside DocSpace: `selectors`, `billing`, `uploader`, `ai-agent`,
`document-editor`, `api`, `providers/api`. They expect a portal URL, an API key and a signed-in
person, and outside that context they fail at runtime rather than at build time.

`billing` and `uploader` are re-exported from the root barrel, so their names are reachable from a
plain `import { … } from "@onlyoffice/apps-ui-kit"`. Reachable is not usable.

Components carry the same distinction. A README's metadata says `"status": "portal-internal"` when
the component is shipped for the DocSpace client rather than for you — `Section`, `Article`,
`Navigation`, `FilterInput`, the image and room-cover editors. They are documented all the same,
because the portal reads these pages too; the catalogue in
[`components.md`](https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/docs/components.md) has the full list.

## Two layout rules

**Components bring their own outer margin.** `FieldContainer` carries 16px below itself, the
progress bar 8px, the status bar 16px, the slider 24px above and below. In a flex or grid container
with a `gap`, that margin **adds** to the gap rather than collapsing into it, so a form laid out
with both ends up with doubled spacing. Pick one: either a `gap` and components whose margins you
zero out, or the margins and no `gap`.

**One component is one element, and it lays itself out.** A component that takes `children` puts
them in a box of its own with its own alignment; handing it a fragment or an array of blocks means
the box lays out each of them separately. Wrap what you pass in a single element with its own
width when the arrangement matters.

## Where to go next

- [`components.md`](https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/docs/components.md) — the catalogue: every component, its category, its import form
  and the prop that shows and hides it, with a table for choosing between the close calls.
- Each component's own README, next to its source under `components/<name>/README.md`, and shipped
  in the package at the same path.
- [`public-api.md`](https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/docs/public-api.md) — the full public and portal-internal boundary.
