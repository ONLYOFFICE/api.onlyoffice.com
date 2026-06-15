---
sidebar_position: 1
---

# File structure best practices

A well-organized plugin is easier to maintain, debug, and extend. This page covers the recommended layout for plugin files and how to structure your JavaScript as the plugin grows.

## Minimal structure

Every plugin needs at least two files:

```
my-plugin/
├── config.json    # Registers the plugin with ONLYOFFICE
└── index.html     # Plugin UI and entry point
```

## Recommended structure

For anything beyond a trivial plugin, separate concerns into dedicated files:

```
my-plugin/
├── config.json              # Plugin metadata and configuration
├── index.html               # UI markup and script references
├── scripts/
│   └── code.js              # Plugin logic (init, button handlers, API calls)
└── resources/
    ├── light/               # Light theme icons
    │   └── icon.png
    └── dark/                # Dark theme icons
        └── icon.png
```

## Larger plugins

For plugins with multiple views or substantial JavaScript, organize by feature:

```
my-plugin/
├── config.json
├── index.html
├── feature-a.html
├── feature-b.html
├── scripts/
│   ├── code.js              # Entry point - init and lifecycle handlers
│   ├── feature-a.js         # Logic for feature A
│   └── feature-b.js         # Logic for feature B
└── resources/
    ├── light/
    │   └── icon.png
    ├── dark/
    │   └── icon.png
    └── styles/
        └── plugin.css
```

Organize scripts by feature. Each HTML entry point typically has a corresponding JS file.

## JavaScript pattern

Every plugin script wraps its code in an IIFE to create a private scope. Lifecycle handlers are attached to `window.Asc.plugin` inside it:

```javascript
(function(window, undefined){

  var isInit = false;
  var selectedText = "";

  window.Asc.plugin.init = function(text)
  {
    if (isInit) { return; }
    isInit = true;
    selectedText = text || "";
    document.getElementById("result").textContent = selectedText;
  };

  window.Asc.plugin.button = function(id)
  {
    if (id === 0) {
      window.Asc.plugin.executeMethod("PasteText", [selectedText]);
    }
    window.Asc.plugin.executeCommand("close", "");
  };

  window.Asc.plugin.onThemeChanged = function(theme)
  {
    window.Asc.plugin.onThemeChangedBase(theme);
  };

  window.Asc.plugin.onTranslate = function()
  {
    // Update translatable UI labels
  };

})(window, undefined);
```

For plugins with multiple HTML pages (e.g. a main view and a settings panel), each page has its own script file with its own lifecycle handlers.

## What to avoid

- **Inline scripts in HTML** - move all logic to `.js` files for easier debugging
- **Hardcoded strings across multiple files** - centralize labels and messages
- **Bundling external libraries without checking size** - large dependencies slow plugin load; see [Performance considerations](performance-considerations.md)

## Icon requirements

Icons are placed in `resources/light/` and `resources/dark/` to support light and dark editor themes. Multiple scale variants are supported:

| File | Scale | Usage |
|---|---|---|
| `icon.png` | 100% | Default |
| `icon@1.25x.png` | 125% | High-DPI |
| `icon@1.5x.png` | 150% | High-DPI |
| `icon@1.75x.png` | 175% | High-DPI |
| `icon@2x.png` | 200% | High-DPI |

Reference them in `config.json` using the adaptive pattern:

```json
"icons": "resources/%theme-type%(light|dark)/icon%scale%(default).%extension%(png)"
```

If icons are omitted, the editor uses a default placeholder. See [Icons and branding](../configuration/icons-and-branding.md) for the full reference.

## See also

- [config.json reference](../configuration/config-json.md)
- [Entry point](../configuration/entry-point.md)
- [Icons and branding](../configuration/icons-and-branding.md)
