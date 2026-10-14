---
description: "The UI Kit uses **i18next** and **react-i18next** for internationalization."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/docs/Translation.mdx"
---

# Translation

The UI Kit uses **i18next** and **react-i18next** for internationalization. Translation resources are passed in at the application level via `TranslationProvider`.

## Translation files

The package ships English only, one file per namespace:

```
locales/
└── en/
    ├── Common.json
    ├── Payments.json
    └── Settings.json
```

Every other language comes from the host application: it loads its own resources and
hands them to `TranslationProvider`, which is why the same component reads Russian in
the portal and English in Storybook without the package carrying either.

Each JSON file is a flat key-value map. Keys use PascalCase:

```json
{
  "SaveButton": "Save",
  "CancelButton": "Cancel",
  "DeleteMessage": "Are you sure you want to delete {{name}}?"
}
```

## Setting up TranslationProvider

Wrap your application with `TranslationProvider` and pass translation resources as a nested `Map`:

```tsx
import { TranslationProvider } from "@onlyoffice/apps-ui-kit/providers/translation";
import type { TTranslations } from "@onlyoffice/apps-ui-kit/providers/translation";

import enCommon from "@onlyoffice/apps-ui-kit/locales/en/Common.json";
import frCommon from "./locales/fr/Common.json"; // your own resources: the package ships English only

const translations: TTranslations = new Map([
  ["en", new Map([["Common", enCommon]])],
  ["fr", new Map([["Common", frCommon]])],
]);

<TranslationProvider translations={translations} locale="en">
  <App />
</TranslationProvider>
```

### Provider props

- **`translations`** (`TTranslations`) — nested Map: language → namespace → key-value records
- **`locale`** (`string`) — current language code (highest priority)
- **`user`** (`{ cultureName?: string }`) — optional; cultureName used as fallback locale
- **`settings`** (`{ culture?: string; timezone?: string }`) — optional; culture used as second fallback

Language resolution order: `locale` → `user.cultureName` → `settings.culture` → `"en"`

## Using translations in components

Use the `useTranslation` hook from `react-i18next`:

```tsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation(["Common"]);

  return <button>{t("Common:SaveButton")}</button>;
}
```

### Multiple namespaces

```tsx
const { t } = useTranslation(["Files", "Common"]);

t("Files:DeleteMessage")   // from Files namespace
t("Common:CancelButton")   // from Common namespace
```

### Interpolation

Use double curly braces for variable substitution:

```tsx
// Common.json
// { "Greeting": "Hello, {{name}}!" }

t("Common:Greeting", { name: "Alice" })
// → "Hello, Alice!"
```

### JSX inside translations (Trans component)

Use the `Trans` component when you need to embed React elements inside translated strings:

```tsx
import { Trans, useTranslation } from "react-i18next";

// Common.json
// { "Info": "Contact <1>support</1> for help." }

function HelpText() {
  const { t } = useTranslation(["Common"]);

  return (
    <Trans
      t={t}
      ns="Common"
      i18nKey="Info"
      components={{ 1: <a href="/support" /> }}
    />
  );
  // → Contact <a href="/support">support</a> for help.
}
```

## getCommonTranslation

For cases where you need a translation outside of React (event handlers, utility functions, MobX stores), use `getCommonTranslation` from `@onlyoffice/apps-ui-kit/utils/i18n`. It reads from the `Common` namespace only.

```ts
import { getCommonTranslation } from "@onlyoffice/apps-ui-kit/utils/i18n";

// Simple key lookup
const label = getCommonTranslation("SaveButton");

// With interpolation
const message = getCommonTranslation("DeleteMessage", { name: "Report.docx" });
```

### How it works

1. Tries `window.i18n.t()` first (set by `TranslationProvider`).
2. Falls back to manual lookup from `window.i18n.loaded` using the language from the `asc_language` cookie.
3. Logs an error if the key is not found and returns an empty string.

Many internal components use `getCommonTranslation` to provide default labels (buttons, empty screens, error pages) so that they work without an explicit `t` prop. If `TranslationProvider` is mounted, translations resolve automatically.

### getTranslationReady

Use `getTranslationReady` to check whether translations have been loaded before rendering:

```ts
import { getTranslationReady } from "@onlyoffice/apps-ui-kit/utils/i18n";

if (getTranslationReady()) {
  // Safe to call getCommonTranslation
}
```

## Adding a new language

1. Create a new folder under `locales/` with the language code (e.g. `locales/ja-JP/`).
2. Copy the English JSON files and translate the values.
3. Add the new language to the `translations` Map passed to `TranslationProvider`.

## Adding a new translation key

1. Add the key to the English JSON file first (e.g. `locales/en/Common.json`).
2. Add translations for other languages in their respective files.
3. Use the key in your component via `t("Common:YourNewKey")`.
