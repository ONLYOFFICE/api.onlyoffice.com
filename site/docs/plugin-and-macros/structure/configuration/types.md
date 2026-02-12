---
sidebar_position: -2
---

# Types

The plugin type is specified with the [type](./configuration.md#variationstype) parameter in the *config.json* file. The available values are **system**, **background**, **window**, **panel**, **panelRight**, and **unvisible**.

## system

The system plugin is not displayed in the editor interface and is started in the background with the server (or desktop editors start) not interfering with other plugins, so that they can work simultaneously. You don't need to run such plugins. And unlike background plugins, they cannot be disabled.

**Samples**: [Settings](../../samples/plugin-samples/settings.md), [Search and replace on start](../../samples/plugin-samples/search-and-replace-on-start.md)

## background

The background plugin works until you disable it in all opened documents and documents that will be opened later. The plugin state (enabled / disabled) persists between sessions. To access background plugins, click the **Background Plugins** button on the top toolbar.

A background plugin is considered as **bundled** if it has the following characteristics:

- It is included in the product distribution (server/desktop).
- It has not been updated, removed, or disabled.

![Background plugin](/assets/images/plugins/bundled-plugin.png#gh-light-mode-only)![Background plugin](/assets/images/plugins/bundled-plugin.dark.png#gh-dark-mode-only)

If a plugin is **bundled** and **background**, it starts immediately (from version 9.0.4).

**Samples**: [AI](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ai), [QR Code Generator](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/insertQR)

## window

The plugin operates as a standalone window upon launch.

![Plugin window](/assets/images/plugins/plugin-window.png#gh-light-mode-only)![Plugin window](/assets/images/plugins/plugin-window.dark.png#gh-dark-mode-only)

**Samples**: [Highlight code](../../samples/plugin-samples/highlight-code.md), [Photo editor](../../samples/plugin-samples/photo-editor.md), [OCR](../../samples/plugin-samples/ocr.md)

## panel

The plugin is opened in the left-side panel. You can run multiple panel plugins at the same time. For each plugin, a separate button will appear on the left toolbar.

![Plugin left panel](/assets/images/plugins/plugin-left-panel.png#gh-light-mode-only)![Plugin left panel](/assets/images/plugins/plugin-left-panel.dark.png#gh-dark-mode-only)

**Samples**: [Translator](../../samples/plugin-samples/translator.md), [Thesaurus](../../samples/plugin-samples/thesaurus.md), [Zotero](../../samples/plugin-samples/zotero.md)

## panelRight

The plugin is opened in the right-side panel. You can run multiple panel plugins at the same time. For each plugin, a separate button will appear on the right toolbar.

![Plugin right panel](/assets/images/plugins/plugin-right-panel.png#gh-light-mode-only)![Plugin right panel](/assets/images/plugins/plugin-right-panel.dark.png#gh-dark-mode-only)

**Samples**: [Translator](../../samples/plugin-samples/translator.md), [Thesaurus](../../samples/plugin-samples/thesaurus.md), [Zotero](../../samples/plugin-samples/zotero.md)

## unvisible

The plugin does not display any windows or panels upon launch but can create them later during its operation. It provides a button (or buttons) to apply some transformations or manipulations to the document. For example, it can be used when the plugin displays different windows depending on the document content.

![Invisible plugin](/assets/images/plugins/plugin-invisible.png#gh-light-mode-only)![Insisible plugin](/assets/images/plugins/plugin-invisible.dark.png#gh-dark-mode-only)

**Samples**: [Hello world](../../samples/plugin-samples/hello-world.md), [Speech](../../samples/plugin-samples/speech.md)

:::note
A plugin of any type can create windows and tabs during its work.
:::

## Example

``` json
{
  "variations": [
    {
      "type": "window"
    }
  ]
}
```
