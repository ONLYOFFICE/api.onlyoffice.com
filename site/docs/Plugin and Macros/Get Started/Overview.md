---
sidebar_position: -2
---

ONLYOFFICE [Docs](https://www.onlyoffice.com/office-suite.aspx) and [Desktop Editors](https://www.onlyoffice.com/desktop.aspx) offer support for plugins allowing developers to add specific features to the editors that are not directly related to the OOXML format.

Plugin is an HTML page that is embedded in the editor and uses API to work with it.

This documentation describes:

- How to [build](../Structure/Manifest/Manifest.md), [localize](../Structure/Localization.md), run, [test](../Tutorials/Developing/Developing.md) and [publish](../Tutorials/Publishing.md) a plugin
- How to customize plugins: create [context menu items](../Customization/Context%20menu.md), [toolbar buttons](../Customization/Toolbar.md), [windows and panels](../Customization/Windows%20and%20panels.md), [input helpers](../Customization/Input%20helper.md), process [buttons](../Customization/Buttons.md)
- How to [write](../Macros/Writing%20macros.md), [debug](../Macros/Debugging.md) and run a macro, add a custom function, or [convert](../Macros/Converting%20VBA%20macros.md) VBA macros to use in ONLYOFFICE
- How to [interact with the editors](../Interacting%20with%20editors/Overview/Overview.md), use ONLYOFFICE [methods](../Interacting%20with%20editors/Methods/Methods.md) and events
- Where to find guides and [plugin](../Tutorials/Samples/Samples.md)/[macro](../Macros/Samples/Samples.md) code samples to get started

## What plugins can do

Here are some examples of what you can do with ONLYOFFICE plugins:

- connect third-party services, like [Telegram](../Tutorials/Samples/Telegram.md), [YouTube](../Tutorials/Samples/YouTube.md), [Thesaurus](../Tutorials/Samples/Thesaurus.md), [Translator](../Tutorials/Samples/Translator.md), [Zotero](../Tutorials/Samples/Zotero.md), [OCR](../Tutorials/Samples/OCR.md), etc.;
- add custom components & controls in the UI, like **Trackchanges**, **Trackchanges\_off**;
- enhance the existing user experience and the editors’ functionality: [Autocomplete](../Tutorials/Samples/Autocomplete.md), [Search & Replace](../Tutorials/Samples/Search%20and%20replace.md), [Move cursor](../Tutorials/Samples/Move%20cursor.md), [Extended comments](../Tutorials/Samples/Extended%20comments.md);
- automate tasks in documents with [Macros](../Macros/Getting%20started.md).

Code samples are available at [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins).

If you are looking for ready-to-use plugins, please visit [ONLYOFFICE App Directory](https://www.onlyoffice.com/en/app-directory).

To quickly install and update plugins, you can use [ONLYOFFICE Plugin Marketplace](../Tutorials/Installing/ONLYOFFICE%20Docs%20on-premises.md#adding-plugins-through-the-plugin-manager).

## How to create plugins

To create your own plugin, you need to follow a few steps:

1. Learn the fundamental concepts for building plugins on the [Getting started](./Getting%20started.md) page and write code that defines the plugin appearance and behavior.
2. After building the plugin, [test](../Tutorials/Developing/Developing.md) it thoroughly and make sure the plugin looks and works as you expected. Try to anticipate the problems that might occur and suggest your solutions to them.
3. Now you can use the plugin on your own or suggest it for [publishing](../Tutorials/Publishing.md) by creating a pull request to the [plugin marketplace repository](https://github.com/ONLYOFFICE/onlyoffice.github.io).
