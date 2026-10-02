---
description: "Installs the i18next instance the eleven components with labels of their own read from."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/providers/translation/README.md"
---

import APITable from '@site/src/components/APITable/APITable';

# TranslationProvider

Installs the i18next instance the eleven components with labels of their own read from. Most of
the kit takes its text as props and needs nothing here; these eleven do not, and without this
provider their labels are **empty strings** — not missing-key placeholders, not the key itself.
A button renders at full size with nothing written on it.

The eleven are `article`, `color-picker`, `drop-down-item`, `file-input`, `filter`,
`operations-progress-button`, `room-type`, `selector`, `table`, `tiles` and `toast`. `Dropzone`
is **not** among them, despite the prompt it draws: that prompt is a prop like any other.

## Use this when / not when

- Mount it once, at the root, inside or outside [`ThemeProvider`](./theme.md) — the two
  do not depend on each other.
- Mount it even in an English-only application. The package ships `en` and the components still
  need the table handed to them.
- Not inside a DocSpace plugin: the portal supplies the instance, and a second one competes with
  it for the same global.
- Not for your own application's copy. It can share the map — add a namespace of your own beside
  `Common` — but the components only ever read `Common`.

## Import

```ts
import { TranslationProvider } from "@onlyoffice/apps-ui-kit/providers/translation";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs no provider of its own.


## Stories

### Default

Shows translated strings read via the `useTranslation()` hook.

### Without Translations

When no translations are provided, the provider renders children directly without i18n.

## Minimal example

```tsx
import { TranslationProvider } from "@onlyoffice/apps-ui-kit/providers/translation";
import type { TTranslations } from "@onlyoffice/apps-ui-kit/providers/translation";
import { Toast } from "@onlyoffice/apps-ui-kit/components/toast";

import common from "@onlyoffice/apps-ui-kit/locales/en/Common.json";

const translations: TTranslations = new Map([
  ["en", new Map([["Common", common]])],
]);

export function App() {
  return (
    <TranslationProvider locale="en" translations={translations}>
      <Toast />
    </TranslationProvider>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children` | `React.ReactNode` | The tree the translations apply to. |
| `locale`? | `string` | Language tag to translate into. It outranks both of the above. |
| `settings`? | `SettingsDto` | Portal settings. Its `culture` is the fallback language and its `timezone` is published on `window`. Portal-internal. |
| `translations`? | `TTranslations` | Language to namespace to a flat table of key and string. Without it no i18n context is installed at all. |
| `user`? | `EmployeeFullDto` | The signed-in portal user, whose `cultureName` outranks the portal's culture. Portal-internal. |

</APITable>

## Recipes

### A namespace of your own beside the kit's

The map is yours; the components only read `Common` from it. Anything else in the same language
is reachable through `useTranslation` with that namespace's name.

```tsx
import { TranslationProvider } from "@onlyoffice/apps-ui-kit/providers/translation";
import type { TTranslations } from "@onlyoffice/apps-ui-kit/providers/translation";

import common from "@onlyoffice/apps-ui-kit/locales/en/Common.json";

const app = { Greeting: "Good morning" };

// Annotate the inner map: left to infer, its value type is taken from the first
// entry -- the 685 keys of `Common` -- and a namespace of your own is then
// rejected for not having them.
const translations: TTranslations = new Map([
  [
    "en",
    new Map<string, Record<string, string>>([
      ["Common", common],
      ["App", app],
    ]),
  ],
]);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TranslationProvider locale="en" translations={translations}>
      {children}
    </TranslationProvider>
  );
}
```

### A language the package does not ship

`en` is the only language in the package. Every other one is yours to supply, in the same shape
and under the same namespace — nothing is fetched and nothing falls back.

```tsx
import { TranslationProvider } from "@onlyoffice/apps-ui-kit/providers/translation";
import type { TTranslations } from "@onlyoffice/apps-ui-kit/providers/translation";

import common from "@onlyoffice/apps-ui-kit/locales/en/Common.json";

const de = { ...common, Save: "Speichern", Cancel: "Abbrechen" };

const translations: TTranslations = new Map([
  ["en", new Map([["Common", common]])],
  ["de", new Map([["Common", de]])],
]);

export function German({ children }: { children: React.ReactNode }) {
  return (
    <TranslationProvider locale="de" translations={translations}>
      {children}
    </TranslationProvider>
  );
}
```

## Behaviour the types don't state

- **No `translations` means no context at all.** The provider returns its children bare when the
  instance is null, so nothing throws, nothing warns, and `useTranslation` below it falls through
  to whatever else is on the page. The symptom is empty labels, which is easy to read as a design
  decision rather than a missing provider — a toast with no title, for instance, renders no title
  element whatsoever.
- **The package ships `en` and nothing else**, in three namespaces: `Common` (685 keys),
  `Settings` and `Payments`. Only `Common` is read by components; the other two belong to portal
  screens.
- **The instance is private, and also global.** It is built with `i18next.createInstance()`
  rather than by configuring the singleton, so it does not collide with an application's own
  i18next — but it is published on `window` as well, because `getCommonTranslation` reads it from
  there outside React: `window.i18n.t` is its bound `t`, `window.i18n.instance` the instance, and
  `window.i18n.loaded` the resources keyed as `<lang>/<namespace>.json`. Each mount overwrites
  all three.
- **The language is resolved from three sources, in order:** `locale`, then the user's
  `cultureName`, then the portal settings' `culture`, then `en`. The last two are portal-internal
  and an application of its own passes neither.
- **`settings.timezone` is written onto `window`** as a side effect, for the date components.
- **Re-rendering with the same `translations` identity is free**, and changing that identity
  re-registers the resources. Build the map once, outside the component, as every example here
  does — a map rebuilt on each render was what made `t()` snap back to raw keys.

## Accessibility

- An empty label is announced as nothing at all. A screen reader meets a button with no
  accessible name, which is worse than an untranslated one, so mounting this provider is an
  accessibility matter and not only a cosmetic one.
- `locale` here is about text, not direction: the writing direction comes from
  [`ThemeProvider`](./theme.md)'s own `locale`. Set both to the same language, or the
  interface reads in one direction and speaks in another.

## Related

- [`ThemeProvider`](./theme.md) — the other provider an application mounts.
- [`ErrorBoundary`](./error-boundary.md) — catches what the tree below throws.
- [`Toast`](../../ui/feedback/toast.md) — one of the eleven, and the one whose missing
  title is easiest to mistake for a choice.
- [`Selector`](../../ui/overlays/selector.md) — another, with more of its interface
  translated than any other.
