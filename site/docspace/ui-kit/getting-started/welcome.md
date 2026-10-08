---
description: "What the kit is, how it is installed and the providers every application mounts."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/docs/Welcome.mdx"
---

import APITable from '@site/src/components/APITable/APITable';

# ONLYOFFICE Apps UI Kit

Version 4.0.0 • AGPL-3.0-only • on npm as @onlyoffice/apps-ui-kit -- [How to install it](#installation)

**The package at a glance**

<APITable>

| Package | Version | Licence | Peers |
| --- | --- | --- | --- |
| @onlyoffice/apps-ui-kit | 4.0.0 | AGPL-3.0-only | react 19, react-dom 19, i18next |

</APITable>

## Installation

Install the package from npm:

```bash
npm install @onlyoffice/apps-ui-kit
```

To try a build of this repository instead, pack it and install the file:

```bash
pnpm build && pnpm pack   # -> onlyoffice-apps-ui-kit-4.0.0.tgz
```

Pack with **pnpm**, not npm: the `exports` map lives under `publishConfig`, which is a pnpm
feature, and an npm-packed tarball ends up with no `exports` and no `main` at all.

DocSpace **plugins** install nothing. The portal hands a plugin its own already-mounted copy of
the kit and refuses every subpath, so for a plugin the root barrel is the entire API — see
**Utils** for what that means in practice.

### Requirements

- **Node.js >= 22.**
- **Four required peer dependencies**: `react` and `react-dom` (`^19.0.0`), plus `i18next` and
  `react-i18next`. The last two are stateful, so a second copy in your tree breaks translation
  silently rather than loudly.
- **`axios`, for now.** It is declared an *optional* peer, because only the portal REST client
  needs it — but `billing` and `uploader` are exported from the root barrel and reach it from
  there, so a bare `import { Button } from "@onlyoffice/apps-ui-kit"` fails to resolve `axios`
  for anyone who bundles the barrel themselves. Import by subpath, or install `axios`
  alongside. This is open question 6 in `docs/public-api.md`, not a settled design.

The other fourteen optional peers — `mobx`, `mobx-react`, `react-router`, `socket.io-client`,
`@onlyoffice/ai-chat` and the AI agent's markdown stack — are needed only by the portal-coupled
modules, and an ordinary install downloads none of them.

### Styles

Every component pulls in its own compiled CSS, so there is no separate styling step: 193 of the
197 stylesheets in `dist` are imported by the module that uses them. If your bundler cannot take
per-module CSS, import the whole sheet once instead:

```tsx
import "@onlyoffice/apps-ui-kit/styles.css";
```

### Quick start

Compose the three public providers yourself. `ThemeProvider` stamps `data-theme` and `data-dir`
on the document, `TranslationProvider` builds a private i18next instance from the bundles you
give it, and `ErrorBoundary` catches what escapes a component.

```tsx
import {
  ErrorBoundary,
  ThemeProvider,
  TranslationProvider,
  type TTranslations,
} from "@onlyoffice/apps-ui-kit/providers";
import { ThemeKeys } from "@onlyoffice/apps-ui-kit/enums";
import enCommon from "@onlyoffice/apps-ui-kit/locales/en/Common.json";

const translations: TTranslations = new Map([
  ["en", new Map([["Common", enCommon]])],
]);

<ErrorBoundary>
  <TranslationProvider locale="en" translations={translations}>
    <ThemeProvider initialTheme={ThemeKeys.SystemStr}>
      <App />
    </ThemeProvider>
  </TranslationProvider>
</ErrorBoundary>
```

`TranslationProvider` renders its children untranslated when `translations` is omitted, so pass
the bundles you need — `Common.json`, `Payments.json` and `Settings.json` ship for English, and
`pnpm sync-locales` refreshes the other languages from a DocSpace client checkout.

There is also a composed `Providers` root, and it is **portal-specific**: it adds `ApiProvider`
and fetches portal settings and the current user on mount, so it needs a DocSpace endpoint to
talk to. That is why it is deliberately not re-exported from `providers` — import it by its own
subpath, as a default export:

```tsx
import Providers from "@onlyoffice/apps-ui-kit/providers/Providers";

<Providers url="https://your-docspace.com/api" apiKey="your-api-key" locale="en">
  <App />
</Providers>
```
