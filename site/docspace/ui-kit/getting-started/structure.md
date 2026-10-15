---
description: "`@onlyoffice/apps-ui-kit` is a standalone repository."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/docs/Structure.mdx"
---

import APITable from '@site/src/components/APITable/APITable';

# Structure

`@onlyoffice/apps-ui-kit` is a standalone repository. It builds, tests and runs this
Storybook on its own. Applications consume the **published package**, which resolves to
`dist/`, not to the source folders listed below.

## Public modules

General-purpose UI, re-exported from the root entry point (`index.ts`):

```
./
├── components/       # 98 components, one folder each
├── hooks/            # 11 React hooks (useDebounce, useIsMobile, useUnmount, ...)
├── providers/        # ThemeProvider, TranslationProvider, ErrorBoundary
├── context/          # ThemeContext, InterfaceDirectionContext
├── errors/           # Error pages: 401, 403, 404, offline, invalid link, ...
├── constants/        # Shared constants
├── enums/            # Shared enumerations
├── types/            # Shared TypeScript types
├── utils/            # Helpers: cookie, date, device, email, i18n, ...
├── styles/           # Global SCSS: mixins and variables
├── locales/          # Translation resources (English is committed)
└── assets/           # SVG icons, imported as React components (*.react.svg)
```

## Portal-coupled modules

These ship in the package too, but they need a live ONLYOFFICE Apps portal, and some of
them need MobX stores. They are not public API. The tiering is described in
`docs/public-api.md`, which ships with the package. Even so, the root entry point
re-exports `billing` and `uploader`, which is why the optional `axios` peer ends up in
the resolution graph (see `docs/getting-started.md`).

```
./
├── ai-agent/         # AI chat panel and AI settings (needs @onlyoffice/ai-chat)
├── billing/          # Tariff, payment and services flows
├── uploader/         # Upload UI
├── document-editor/  # Wrapper around @onlyoffice/document-editor-react
├── selectors/        # Pickers: AI agent, people, room, files, groups, MCP servers
├── providers/api/    # ApiProvider, imported by subpath only
└── api/              # Portal REST client
```

`providers/Providers.tsx` combines the error boundary, translation, theme and API
providers, and loads portal settings when it mounts. That makes it portal-specific, so
it is imported by subpath and is not part of `providers/index.ts`.

## Where each folder appears in Storybook

The sidebar is grouped by what a reader is looking for, not by folder. **UI** holds the
general-purpose components, and **Components** holds the larger portal-level pieces,
some of which are public (Providers, Errors) and some are not.

<APITable>

| Sidebar entry                    | Source                                                 | Tier                 |
| -------------------------------- | ------------------------------------------------------ | -------------------- |
| Getting started                  | `docs/*.mdx`                                           | Documentation        |
| UI / …                           | `components/`                                          | Public               |
| Components / AI Chat             | `ai-agent/ai-chat-panel/`                              | Portal-only          |
| Components / AI Settings         | `ai-agent/settings/`                                   | Portal-only          |
| Components / Files, Rooms, Forms | `docs/sections/`                                       | Demo only            |
| Components / Billing             | `billing/`                                             | Portal-only          |
| Components / Uploader            | `uploader/`                                            | Portal-only          |
| Components / Document Editor     | `document-editor/`                                     | Portal-only          |
| Components / Selectors           | `selectors/`                                           | Portal-only          |
| Components / Providers           | `providers/` (theme, translation, error boundary, api) | Public, except `api` |
| Components / Errors              | `errors/`                                              | Public               |
| Samples                          | `docs/samples/`                                        | Demo only            |

</APITable>

There is no "AI Agent" entry: the `ai-agent/` folder appears as two. **AI Chat** is the
chat panel, and the toolbar, intro and new-chat screen are parts of it that show up inside
that story. **AI Settings** holds the settings screens from `ai-agent/settings/`: models,
model assignment, MCP servers and web search. The fifth, knowledge, is still a placeholder
and has no story, and neither has the standalone `chat-info-block/`. The AI agent picker
is a different thing: it is `selectors/AIAgent`, under **Selectors / AIAgentSelector**.

**Files**, **Rooms** and **Forms** are not modules. They are portal screens put together
from the kit's components and the portal API from `providers/api`, so they live in
`docs/sections/` and are not shipped. The same goes for the **Samples**. `api/` has
no sidebar entry of its own: it is described on **Getting started / API**. `hooks/`,
`utils/` and `constants/` likewise have pages under **Getting started** instead of
stories.

## Published package

```
@onlyoffice/apps-ui-kit/
├── dist/
│   ├── esm/              # ES modules only, no CommonJS build
│   ├── types/            # .d.ts declarations
│   └── styles.css        # All CSS in one file, for bundlers that cannot import CSS
├── locales/              # Translation resources
├── styles/               # SCSS mixins and variables
├── docs/                 # getting-started.md, components.md, public-api.md
└── **/README.md          # One per component, provider, context and util
```

Entry points are `@onlyoffice/apps-ui-kit` (the root barrel),
`@onlyoffice/apps-ui-kit/<module path>` subpaths, `/styles.css`, `/locales/*` and
`/styles/*`. Each component imports its own CSS, so `styles.css` is only needed when a
bundler cannot do that.
