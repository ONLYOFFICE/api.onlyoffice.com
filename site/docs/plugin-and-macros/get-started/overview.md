---
sidebar_position: -2
---

ONLYOFFICE [Docs](https://www.onlyoffice.com/office-suite.aspx) and [Desktop Editors](https://www.onlyoffice.com/desktop.aspx) offer support for plugins allowing developers to add specific features to the editors that are not directly related to the OOXML format.

Plugin is an HTML page that is embedded in the editor and uses API to work with it.

This documentation describes:

- How to [build](../structure/manifest/manifest.md), [localize](../structure/Localization.md), run, [test](../tutorials/Developing/For%20web%20editors.md) and [publish](../tutorials/Publishing.md) a plugin
- How to customize plugins: create [context menu items](../customization/Context%20menu.md), [toolbar buttons](../customization/Toolbar.md), [windows and panels](../customization/Windows%20and%20panels.md), [input helpers](../customization/Input%20helper.md), process [buttons](../customization/Buttons.md)
- How to [write](../Macros/Writing%20macros.md), [debug](../Macros/debugging.md) and run a macro, add a custom function, or [convert](../Macros/Converting%20VBA%20macros.md) VBA macros to use in ONLYOFFICE
- How to [interact with the editors](../Interacting%20with%20editors/overview/overview.md), use ONLYOFFICE [methods](../Interacting%20with%20editors/overview/How%20to%20call%20methods.md) and events
- Where to find guides and [plugin](../tutorials/Samples/Samples.md)/[macro](../Macros/Samples/Samples.md) code samples to get started

## What plugins can do

Here are some examples of what you can do with ONLYOFFICE plugins:

- connect third-party services, like [Telegram](../tutorials/Samples/Telegram.md), [YouTube](../tutorials/Samples/YouTube.md), [Thesaurus](../tutorials/Samples/Thesaurus.md), [Translator](../tutorials/Samples/Translator.md), [Zotero](../tutorials/Samples/Zotero.md), [OCR](../tutorials/Samples/OCR.md), etc.;
- add custom components & controls in the UI, like **Trackchanges**, **Trackchanges\_off**;
- enhance the existing user experience and the editors’ functionality: [Autocomplete](../tutorials/Samples/Autocomplete.md), [Search & Replace](../tutorials/Samples/Search%20and%20replace.md), [Move cursor](../tutorials/Samples/Move%20cursor.md), [Extended comments](../tutorials/Samples/Extended%20comments.md);
- automate tasks in documents with [Macros](../Macros/getting-started.md).

Code samples are available at [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins).

If you are looking for ready-to-use plugins, please visit [ONLYOFFICE App Directory](https://www.onlyoffice.com/en/app-directory).

To quickly install and update plugins, you can use [ONLYOFFICE Plugin Marketplace](../tutorials/installing/onlyoffice-docs-on-premises.md#adding-plugins-through-the-plugin-manager).

## How to create plugins

To create your own plugin, you need to follow a few steps:

1. Learn the fundamental concepts for building plugins on the [Getting started](./getting-started.md) page and write code that defines the plugin appearance and behavior.
2. After building the plugin, [test](../tutorials/Developing/For%20web%20editors.md) it thoroughly and make sure the plugin looks and works as you expected. Try to anticipate the problems that might occur and suggest your solutions to them.
3. Now you can use the plugin on your own or suggest it for [publishing](../tutorials/Publishing.md) by creating a pull request to the [plugin marketplace repository](https://github.com/ONLYOFFICE/onlyoffice.github.io).
