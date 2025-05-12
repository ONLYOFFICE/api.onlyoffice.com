---
sidebar_position: -2
---

# Types

The plugin type is specified with the [type](./configuration.md#variationstype) parameter in the *config.json* file. The following plugin types can be distinguished.

## System

The system plugin is not displayed in the editor interface and is started in the background with the server (or desktop editors start) not interfering with other plugins, so that they can work simultaneously. You don’t need to run such plugins. And unlike background plugins, they cannot be disabled. Samples of system plugins: [Settings](../../tutorials/samples/settings.md), [Search and replace on start](../../tutorials/samples/search-and-replace-on-start.md).

## Background

Launch such a plugin and it will work until you disable it in all opened documents and documents that will be opened later. Samples of background plugins: [AI](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ai), [QR Code Generator](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/insertQR). The plugin state (enabled / disabled) persists between sessions. To access background plugins, click the **Background Plugins** button on the top toolbar.

<img alt="Background plugins" src="/assets/images/plugins/background-plugins.png#gh-light-mode-only" width="416px" /><img alt="Background plugins" src="/assets/images/plugins/background-plugins.dark.png#gh-dark-mode-only" width="416px" />

## Window

The plugin operates as a standalone window upon launch, like [Highlight code](../../tutorials/samples/highlight-code.md), [Photo editor](../../tutorials/samples/photo-editor.md), [OCR](../../tutorials/samples/ocr.md).

![Plugin window](/assets/images/plugins/plugin-window.png#gh-light-mode-only)![Plugin window](/assets/images/plugins/plugin-window.dark.png#gh-dark-mode-only)

## Panel

The plugin is opened in the left-side panel, like [Translator](../../tutorials/samples/translator.md), [Thesaurus](../../tutorials/samples/thesaurus.md), [Zotero](../../tutorials/samples/zotero.md). You can run multiple panel plugins at the same time. For each plugin, a separate button will appear on the left toolbar.

<img alt="Plugin left panel" src="/assets/images/plugins/plugin-left-panel.png#gh-light-mode-only" width="300px" /><img alt="Plugin left panel" src="/assets/images/plugins/plugin-left-panel.dark.png#gh-dark-mode-only" width="300px" />

## PanelRight

The plugin is opened in the right-side panel, like [Translator](../../tutorials/samples/translator.md), [Thesaurus](../../tutorials/samples/thesaurus.md), [Zotero](../../tutorials/samples/zotero.md). You can run multiple panel plugins at the same time. For each plugin, a separate button will appear on the right toolbar.

![Plugin right panel](/assets/images/plugins/plugin-right-panel.png#gh-light-mode-only)![Plugin right panel](/assets/images/plugins/plugin-right-panel.dark.png#gh-dark-mode-only)

## Unvisible

The plugin that does not display any windows or panels upon launch but can create them later during its operation. It provides a button (or buttons) to apply some transformations or manipulations to the document, like [Hello world](../../tutorials/samples/hello-world.md), [Speech](../../tutorials/samples/speech.md). For example, it can be used when the plugin displays different windows depending on the document content.

![Insisible plugin](/assets/images/plugins/invisible-plugin.png#gh-light-mode-only)![Insisible plugin](/assets/images/plugins/invisible-plugin.dark.png#gh-dark-mode-only)

> Please note that a plugin of any type can create windows and tabs during its work.
