---
sidebar_position: 2
---

# Plugin lifecycle

A plugin goes through a defined set of lifecycle stages from initialization to destruction. Understanding these stages helps you write predictable, well-behaved plugins.

## Lifecycle stages

### 1. Load

The editor loads the plugin iframe and connects the `index.html` entry point. At this stage:

- The plugin HTML, CSS, and JavaScript are downloaded and parsed.
- The `window.Asc.plugin` object is injected into the iframe context.

### 2. Initialize

The editor calls `window.Asc.plugin.init` with the initial data payload. This is the main entry point for your plugin logic.

```javascript
window.Asc.plugin.init = function (data) {
  // Plugin is ready - set up UI and state here
};
```

### 3. Active

The plugin is running and can:

- Call editor methods via `window.Asc.plugin.executeMethod`.
- Listen for editor events via `window.Asc.plugin.attachEditorEvent`.
- Update its own UI in response to user actions or editor callbacks.

### 4. Destroy

When the user closes the plugin or the editor closes it programmatically, the plugin is destroyed. Use `window.Asc.plugin.onDestroy` to clean up resources:

```javascript
window.Asc.plugin.onDestroy = function () {
  // Clean up timers, connections, event listeners
};
```

## See also

- [Getting started](get-started.md)
- [Entry point](../configuration/entry-point.md)
