---
sidebar_position: -1
---

# Overview

The plugins and macros can interact with the editors using the [Asc.plugin](asc-plugin.md) object — its [events](asc-plugin.md#events), methods, and commands. Here you will find how to use them.

- [Asc.plugin](asc-plugin.md) — the main plugin object: properties, methods, and events
- [How to attach events](how-to-attach-events.md) — listening for editor events
- [How to call methods](how-to-call-methods.md)
- [How to call commands](how-to-call-commands.md)

The main plugin code is placed to a *.js* file which describes what and how must be done by the plugin. This file is placed to the plugin root folder together with the [config.json](../../fundamentals/configuration/configuration.md) and [index.html](../../fundamentals/configuration/entry-point.md) files.

## How it works

Any plugin has the [Asc.plugin](asc-plugin.md) object which provides methods and events to interact with ONLYOFFICE document, spreadsheet, presentation, and PDF editors.

:::note
Starting from version 7.1, the access to the *window* and *document* objects and the *alert* function is restricted from the plugin command code because the *"use strict"* mode was applied to the plugin scripts. Don't forget to declare variables before using them so that the plugins work correctly.
:::

For the plugin to work the developer must specify two obligatory events for the `Asc.plugin` object: [init](asc-plugin.md#init) and [button](asc-plugin.md#button). After that:

- [callCommand](how-to-call-commands.md#callcommand) is used to execute multiple [Office JavaScript API](../../../office-api/get-started/overview.md) commands in a single call.
- [executeMethod](how-to-call-methods.md#executemethod) is used to run a single editor method (e.g. `AddComment`, `GetSelectedText`).

If the plugin operates with an OLE object, [callCommand](how-to-call-commands.md#callcommand) is used to manage it.

See the [Asc.plugin](asc-plugin.md#minimal-example) page for a minimal working example, or the [Getting started](../../fundamentals/getting-started/what-is-a-plugin.md) guide for a full walkthrough. More open source plugin examples can be found [here](/samples/?doctype=docs&text=plugin).
