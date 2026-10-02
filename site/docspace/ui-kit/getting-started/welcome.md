---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/docs/Welcome.mdx"
---

import APITable from '@site/src/components/APITable/APITable';

# ONLYOFFICE Apps UI Kit

Version 4.0.0 • AGPL-3.0-only • not on the public npm registry yet -- [How to install it](#installation)

**The package at a glance**

<APITable>

| Package | Version | Licence | Peers |
| --- | --- | --- | --- |
| @onlyoffice/apps-ui-kit | 4.0.0 | AGPL-3.0-only | react 19, react-dom 19, i18next |

</APITable>

## What is inside

The published surface, the portal-coupled modules that ship alongside it without the same compatibility promise, and two guides: who may do what on a portal, and building with an AI agent.

### Components

_Public API._ 98 components -- buttons, inputs, tables, tiles, dialogs -- each self-contained and shipping its own CSS.

[Open Structure](./structure.md)

### Hooks and utils

_Public API._ 11 React hooks and 32 helper modules: dates, devices, URLs, cookies, e-mail and the rest.

[Open Hooks](./hooks.md)

### Theming

_Public API._ Light, dark, RTL and the colour tokens every component reads. No component hardcodes a colour.

[Open Themes](./themes.md)

### Portal modules

_Portal-only._ The REST client, MobX-backed selectors, billing, the uploader, the editor wrapper and the AI agent.

[Open API](./api.md)

### Types and roles

_Portal rules._ Who may do what: the five user types, the eight room roles, and how to check access in code.

[Open Types and roles](./types-and-roles.md)

### Agent skills

_For AI agents._ Connect them before an AI agent writes code with the kit: it follows the kit's rules and checks its own work.

[Open Agent skills](./agent-skills.md)

## The rest of the documentation

Helpers, constants, translations and the two places this package comes from.

- [Utils](./utils.md)
- [Constants and enums](./constants.md)
- [Translation](./translation.md)
- [GitHub repository](https://github.com/ONLYOFFICE/docspace-ui-kit-react)
- [ONLYOFFICE Apps API](https://api.onlyoffice.com/docspace/)

## Installation

The package is **not on the public npm registry yet**, so there is nothing to `npm install`
today. Consumers take a packed tarball built from this repository:

```bash
pnpm build && pnpm pack   # -> onlyoffice-apps-ui-kit-4.0.0.tgz
```

and install that file in the consuming application. Pack with **pnpm**, not npm: the `exports`
map lives under `publishConfig`, which is a pnpm feature, and an npm-packed tarball ends up
with no `exports` and no `main` at all.

Once the package is published this becomes the usual one-liner:

```bash
npm install @onlyoffice/apps-ui-kit
```

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

### Run Storybook locally

```bash
git clone -b feature/ui-kit-separation \
  https://github.com/ONLYOFFICE/docspace-ui-kit-react.git
cd docspace-ui-kit-react
pnpm install
pnpm storybook
```

The branch matters until the separation lands: `master` still carries the previous package,
`@docspace/ui-kit@0.0.1`, rather than the `@onlyoffice/apps-ui-kit@4.0.0` this documentation
describes.
