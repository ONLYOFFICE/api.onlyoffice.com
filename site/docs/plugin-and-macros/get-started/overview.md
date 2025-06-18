---
sidebar_position: -2
---

# Overview

ONLYOFFICE [Docs](https://www.onlyoffice.com/office-suite.aspx) and [Desktop Editors](https://www.onlyoffice.com/desktop.aspx) offer support for plugins allowing developers to add specific features to the editors that are not directly related to the OOXML format.

Plugin is an HTML page that is embedded in the editor and uses API to work with it.

This documentation describes:

- How to [build](../structure/configuration/configuration.md), [localize](../structure/localization.md), run, [test](../tutorials/developing/for-web-editors.md) and [publish](../tutorials/publishing.md) a plugin
- How to customize plugins: create [context menu items](../customization/context-menu.md), [toolbar buttons](../customization/toolbar.md), [windows and panels](../customization/windows-and-panels.md), [input helpers](../customization/input-helper.md), process [buttons](../customization/buttons.md)
- How to [write](../macros/writing-macros.md), [debug](../macros/debugging.md) and run a macro, add a custom function, or [convert](../macros/converting-vba-macros.md) VBA macros to use in ONLYOFFICE
- How to [interact with the editors](../interacting-with-editors/overview/overview.md), use ONLYOFFICE [methods](../interacting-with-editors/overview/how-to-call-methods.md) and [events](../interacting-with-editors/overview/how-to-attach-events.md)
- Where to find guides and [plugin](../samples/plugin-samples/plugin-samples.md)/[macro](../samples/macro-samples/macro-samples.md) code samples to get started

## What plugins can do

Here are some examples of what you can do with ONLYOFFICE plugins:

- connect third-party services, like <!-- [Telegram](../samples/plugin-samples/telegram.md), -->[YouTube](../samples/plugin-samples/youtube.md), [Thesaurus](../samples/plugin-samples/thesaurus.md), [Translator](../samples/plugin-samples/translator.md), [Zotero](../samples/plugin-samples/zotero.md), [OCR](../samples/plugin-samples/ocr.md), etc.;
- add custom components & controls in the UI, like **Trackchanges**, **Trackchanges\_off**;
- enhance the existing user experience and the editors’ functionality: [Autocomplete](../samples/plugin-samples/autocomplete.md), [Search & Replace](../samples/plugin-samples/search-and-replace.md), [Move cursor](../samples/plugin-samples/move-cursor.md), [Extended comments](../samples/plugin-samples/extended-comments.md);
- automate tasks in documents with [Macros](../macros/getting-started.md).

Code samples are available at [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins).

To maintain a consistent plugin user interface, you can use a set of prebuilt base components designed specifically for plugin UI creation. You can explore and interact with these components in our [storybook](https://onlyoffice.github.io/storybook/static/).

If you are looking for ready-to-use plugins, please visit [ONLYOFFICE App Directory](https://www.onlyoffice.com/en/app-directory).

To quickly install and update plugins, you can use [ONLYOFFICE Plugin Marketplace](../tutorials/installing/onlyoffice-docs-on-premises.md#adding-plugins-through-the-plugin-manager-for-a-single-user).

## How to create plugins

To create your own plugin, you need to follow a few steps:

1. Learn the fundamental concepts for building plugins on the [Getting started](./getting-started.md) page and write code that defines the plugin appearance and behavior.
2. After building the plugin, [test](../tutorials/developing/for-web-editors.md) it thoroughly and make sure the plugin looks and works as you expected. Try to anticipate the problems that might occur and suggest your solutions to them.
3. Now you can use the plugin on your own or suggest it for [publishing](../tutorials/publishing.md) by creating a pull request to the [plugin marketplace repository](https://github.com/ONLYOFFICE/onlyoffice.github.io).
