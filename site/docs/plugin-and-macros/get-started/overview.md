---
sidebar_position: -2
---

# Overview

ONLYOFFICE [Docs](https://www.onlyoffice.com/office-suite.aspx) and [Desktop Editors](https://www.onlyoffice.com/desktop.aspx) offer support for plugins allowing developers to add specific features to the editors that are not directly related to the OOXML format.

Plugin is an HTML page that is embedded in the editor and uses API to work with it.

This documentation describes:

- How to [build](../structure/manifest/manifest.md), [localize](../structure/localization.md), run, [test](../tutorials/developing/for-web-editors.md) and [publish](../tutorials/publishing.md) a plugin
- How to customize plugins: create [context menu items](../customization/context-menu.md), [toolbar buttons](../customization/toolbar.md), [windows and panels](../customization/windows-and-panels.md), [input helpers](../customization/input-helper.md), process [buttons](../customization/buttons.md)
- How to [write](../macros/writing-macros.md), [debug](../macros/debugging.md) and run a macro, add a custom function, or [convert](../macros/converting-vba-macros.md) VBA macros to use in ONLYOFFICE
- How to [interact with the editors](../interacting-with-editors/overview/overview.md), use ONLYOFFICE [methods](../interacting-with-editors/overview/how-to-call-methods.md) and [events](../interacting-with-editors/overview/how-to-attach-events.md)
- Where to find guides and [plugin](../tutorials/samples/samples.md)/[macro](../macros/samples/samples.md) code samples to get started

## What plugins can do

Here are some examples of what you can do with ONLYOFFICE plugins:

- connect third-party services, like <!--[Telegram](../tutorials/samples/telegram.md),--> [YouTube](../tutorials/samples/youtube.md), [Thesaurus](../tutorials/samples/thesaurus.md), [Translator](../tutorials/samples/translator.md), [Zotero](../tutorials/samples/zotero.md), [OCR](../tutorials/samples/ocr.md), etc.;
- add custom components & controls in the UI, like **Trackchanges**, **Trackchanges\_off**;
- enhance the existing user experience and the editors’ functionality: [Autocomplete](../tutorials/samples/autocomplete.md), [Search & Replace](../tutorials/samples/search-and-replace.md), [Move cursor](../tutorials/samples/move-cursor.md), [Extended comments](../tutorials/samples/extended-comments.md);
- automate tasks in documents with [Macros](../macros/getting-started.md).

Code samples are available at [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins).

If you are looking for ready-to-use plugins, please visit [ONLYOFFICE App Directory](https://www.onlyoffice.com/en/app-directory).

To quickly install and update plugins, you can use [ONLYOFFICE Plugin Marketplace](../tutorials/installing/onlyoffice-docs-on-premises.md#adding-plugins-through-the-plugin-manager).

## How to create plugins

To create your own plugin, you need to follow a few steps:

1. Learn the fundamental concepts for building plugins on the [Getting started](./getting-started.md) page and write code that defines the plugin appearance and behavior.
2. After building the plugin, [test](../tutorials/developing/for-web-editors.md) it thoroughly and make sure the plugin looks and works as you expected. Try to anticipate the problems that might occur and suggest your solutions to them.
3. Now you can use the plugin on your own or suggest it for [publishing](../tutorials/publishing.md) by creating a pull request to the [plugin marketplace repository](https://github.com/ONLYOFFICE/onlyoffice.github.io).
