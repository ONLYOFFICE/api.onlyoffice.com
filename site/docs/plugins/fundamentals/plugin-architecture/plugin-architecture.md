---
sidebar_position: 1
---

# Plugin architecture

ONLYOFFICE plugins follow a modular architecture that separates the plugin interface from the core editor functionality. Each plugin runs in an isolated iframe inside the editor and communicates through a dedicated API bridge.

## How it works

![ONLYOFFICE Plugin Architecture](/assets/images/plugins/plugin-architecture-detailed.svg)

The plugin runs in a sandboxed iframe - it cannot directly access the editor's DOM or internal state. All interaction happens through the `window.Asc.plugin` API interface.

## Three architectural layers

### 1. Plugin container (iframe)

Each plugin runs in an isolated iframe environment. This provides:

- **Security isolation** - plugins cannot directly access the editor's internal state
- **Cross-platform compatibility** - plugins work consistently across platforms
- **Independent execution** - plugin errors don't crash the main editor

### 2. Communication layer (API bridge)

Plugins communicate with the editor through `window.Asc.plugin`:

```javascript
// Plugin → Editor
window.Asc.plugin.executeMethod("PasteText", ["Hello"]);

// Editor → Plugin
window.Asc.plugin.init = function (data) {
  // Initialization code
};
```

See [Communication flow](communication-flow.md) for the full event and method model.

### 3. Configuration (config.json)

`config.json` registers the plugin with the editor - it defines metadata, supported editor types, UI mode, and which HTML file to load. See the [config.json reference](../configuration/configuration.md).

## Plugin types

### Modal plugins

Modal plugins block interaction with the document while open:

```json
{
  "type": "window",
  "buttons": [{ "text": "OK", "primary": true }, { "text": "Cancel" }]
}
```

Use for: forms, configuration dialogs, one-time actions.

### Panel plugins

Panel plugins run alongside the document without blocking it:

```json
{
  "type": "panel"
}
```

Use for: continuous workflows, reference panels, sidebar tools.

### Background plugins

Background plugins run without any visible UI:

```json
{
  "type": "background"
}
```

Use for: automated tasks, event-driven operations.

## Multi-editor support

Plugins can support multiple editor types by listing them in `EditorsSupport`:

```json
{
  "EditorsSupport": ["word", "cell", "slide"]
}
```

## In this section

- [File structure best practices](file-structure.md) - how to organize plugin files
- [Communication flow](communication-flow.md) - how the plugin and editor exchange data
- [Security and sandboxing](security-and-sandboxing.md) - what the iframe sandbox allows and prevents
- [Performance considerations](performance-considerations.md) - initialization, rendering, and memory patterns
