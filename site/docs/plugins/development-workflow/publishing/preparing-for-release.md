---
sidebar_position: 1
---

# Preparing for release

Before distributing your plugin, verify that it is complete, stable, and ready for other users.

## Required files

| File | Required | Description |
|------|----------|-------------|
| `config.json` | Yes | Plugin configuration and metadata |
| `index.html` | Yes | Plugin entry point |
| `resources/light/icon.png` | Yes | Light theme icon |
| `resources/dark/icon.png` | Yes | Dark theme icon |
| `resources/store/icons/` | For marketplace | Store listing icons |

Additional: `translations/` folder, additional HTML files, assets.

## config.json checklist

```json
{
  "name": "My Plugin",
  "guid": "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
  "version": "1.0.0",
  "variations": [{
    "description": "What the plugin does",
    "url": "index.html",
    "icons": "resources/%theme-type%(light|dark)/icon%scale%(default).%extension%(png)",
    "isViewer": false,
    "EditorsSupport": ["word"]
  }]
}
```

**`guid`** - Must follow `asc.{UUID}` format. Generate at [uuidgenerator.net](https://www.uuidgenerator.net/).

:::warning[Wrong]
```json
{ "guid": "my-plugin-guid" }
```
:::

:::tip[Correct]
```json
{ "guid": "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}" }
```
:::

**`version`** - Semantic versioning (`MAJOR.MINOR.PATCH`). Start at `1.0.0`.

**`variations[].EditorsSupport`** - Only list tested editors: `"word"`, `"cell"`, `"slide"`, `"pdf"`.

Optional recommended fields:
```json
{ "minVersion": "7.0.0", "help": "https://example.com/plugin-help" }
```

## Icon requirements

| Property | Requirement |
|----------|-------------|
| Format | PNG (SVG also supported) |
| Location | `resources/light/` and `resources/dark/` |
| Scale variants | `icon.png`, `icon@1.25x.png`, `icon@1.5x.png`, `icon@1.75x.png`, `icon@2x.png` |
| Store icons | `resources/store/icons/` |

:::warning[Wrong]
```json
{ "icons": ["icon.svg"] }
```
:::

:::tip[Correct]
```json
{ "icons": "resources/%theme-type%(light|dark)/icon%scale%(default).%extension%(png)" }
```
:::

## Code quality

### Remove debug code

:::warning[Wrong]
```javascript
window.Asc.plugin.init = function() {
  debugger;
  console.log('DEBUG: init called', arguments);
  console.table(window.Asc.plugin);
};
```
:::

:::tip[Correct]
```javascript
window.Asc.plugin.init = function() {
  loadData();
};
```
:::

### Plugin must close correctly

```javascript
window.Asc.plugin.button = function(id) {
  if (id === 0) {
    window.Asc.plugin.callCommand(function() { /* apply changes */ });
  } else {
    window.Asc.plugin.executeCommand("close", "");
  }
};
```

### External resources

- All external resources must be loaded over HTTPS
- Avoid unreliable CDNs
- Bundle critical dependencies locally when possible

## Final folder structure

```
your-plugin-name/
├── config.json          ✓ Required
├── index.html           ✓ Required
├── scripts/             ✓ Required (plugin logic)
│   └── code.js
├── resources/           ✓ Required (icons and assets)
│   ├── light/
│   │   └── icon.png
│   ├── dark/
│   │   └── icon.png
│   └── store/           For marketplace submission
│       └── icons/
└── translations/        Optional
    ├── en.json
    └── fr.json
```

## Next steps

- [Marketplace submission](./submit-to-marketplace.md)
- [Private distribution](./private-distribution.md)
- [Versioning and updates](./versioning-and-updates.md)

## Additional resources

- [Configuration](../../configuration/configuration.md)
- [Variations](../../configuration/variations.md)
- [Localization](../../configuration/localization.md)
- [Plugin examples](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content)
