---
sidebar_position: 3
---

# Development environment setup

This page describes the recommended setup for plugin development.

## Requirements

| Tool | Purpose |
|------|---------|
| Code editor (VS Code recommended) | Writing HTML/CSS/JavaScript |
| ONLYOFFICE Desktop Editors or Docs | Testing your plugin locally |
| Node.js (optional) | Running a local dev server |
| Git | Version control |

## Basic setup

1. Install [ONLYOFFICE Desktop Editors](https://www.onlyoffice.com/download-desktop.aspx) — the fastest way to load and test plugins without a server.

2. Create a folder for your plugin:

   ```
   my-plugin/
   ├── config.json
   ├── index.html
   └── code.js
   ```

3. Follow the [config.json reference](../configuration/config-json.md) to register your plugin.

## Local dev server (optional)

For plugins that load remote resources, run a simple HTTP server:

```bash
# Node.js (npx)
npx serve .

# Python
python -m http.server 8080
```

Then point `baseUrl` in `config.json` to `http://localhost:8080/`.

## Hot reload

See [Hot reload and live testing](../../development-workflow/developing/hot-reload-live-testing.md) for workflows that auto-reload your plugin on file changes.

## Debugging

See the [Debugging section](../../development-workflow/debugging/browser-devtools-guide.md) for how to attach browser DevTools to your plugin iframe.
