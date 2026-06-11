---
sidebar_position: 1
sidebar_label: What is a plugin?
---

# What is a plugin?

A plugin is an HTML/CSS/JavaScript application that runs inside an isolated iframe within the ONLYOFFICE editor. It communicates with the editor through a dedicated API bridge, giving it the ability to read and modify document content, respond to user actions, and call external services — all without having access to the editor's internals.

## How plugins fit into the editor

![ONLYOFFICE Plugin Architecture](/assets/images/plugins/plugin-architecture-detailed.svg)

The plugin runs in isolation — it cannot directly manipulate the editor's DOM. Instead, all interaction happens through `window.Asc.plugin` methods and events.

## What plugins can do

- **Read and write document content** — insert text, tables, images; read selections and document data
- **Display custom UI** — modal dialogs, side panels, toolbar buttons, context menu items
- **Call external APIs** — REST services, AI providers, databases, cloud storage
- **React to editor events** — selection changes, document open/close, button clicks
- **Support all editor types** — Writer (word), Spreadsheet (cell), Presentation (slide)

## What plugins cannot do

- Directly access the editor's internal DOM or JavaScript scope
- Access the file system on the user's machine
- Bypass the API to perform operations not exposed by the plugin SDK

This sandboxing is intentional — it keeps the editor stable and secure regardless of what the plugin does.

## Plugin vs macro vs AI tool

| | Plugin | Macro | AI tool |
|---|---|---|---|
| **UI** | Full custom HTML/CSS | None | Full custom HTML/CSS |
| **Trigger** | User opens from menu | User runs from macro editor | User opens from AI panel |
| **External APIs** | Yes | No | Yes (AI service required) |
| **Installation** | Required | None | Required |
| **Skill level** | Intermediate | Beginner | Advanced |

Use a **plugin** when you need a persistent tool, a rich UI, or external service integration. Use a **macro** for quick one-off document automation. Use an **AI tool** when the workflow requires a language model.

## Minimal plugin structure

Every plugin needs at least two files:

```
my-plugin/
├── config.json    # Registers the plugin with ONLYOFFICE
└── index.html     # The plugin's UI and logic
```

`config.json` provides metadata (name, unique GUID, supported editors) and tells the editor which HTML file to load. `index.html` contains your UI and calls `window.Asc.plugin` to interact with the document.

See [config.json explained](../configuration/config-json.md) for the full reference.

## Next steps

- [Plugin lifecycle](plugin-lifecycle.md) — understand how the editor loads and communicates with your plugin
- [Development environment setup](development-environment-setup.md) — get your tools ready
