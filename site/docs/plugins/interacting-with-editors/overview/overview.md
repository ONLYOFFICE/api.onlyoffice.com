---
sidebar_position: 1
---

# Overview

The plugins and macros can interact with the editors using different events, methods, and commands. Here you will find how to use them.

- [How to attach events](how-to-attach-events.md)
- [How to call methods](how-to-call-methods.md)
- [How to call commands](how-to-call-commands.md)

The main plugin code is placed to a *.js* file which describes what and how must be done by the plugin. This file is placed to the plugin root folder together with the [config.json](../../fundamentals/configuration/config-json.md) and [index.html](../../fundamentals/configuration/entry-point.md) files.

## How it works

Any plugin has *window.Asc.plugin* object which in its turn has several methods for it to interact with ONLYOFFICE document, spreadsheet and presentation editors.

:::note
Starting from version 7.1, access to the *window* and *document* objects and the *alert* function is restricted from plugin command code because *"use strict"* mode is applied to plugin scripts. Declare all variables before using them.
:::

For the plugin to work the developer must specify two obligatory events for the *window.Asc.plugin* object: window.Asc.plugin.init and window.Asc.plugin.button. After that the [window.Asc.plugin.callCommand](how-to-call-commands.md#callcommand) method is used to send the data to the editors using the in-built **ONLYOFFICE Document Builder** [API](../../../document-builder/builder-framework/CDocBuilder/ExecuteCommand) features.

If the plugin operates with an OLE object, [window.Asc.plugin.callCommand](how-to-call-commands.md#callcommand) method is used to manage it.

Let's see how this is done in the *helloworld.js* plugin:

``` ts
window.Asc.plugin.init = function init() {
  window.Asc.plugin.callCommand(() => {
    const oDocument = Api.GetDocument();
    const oParagraph = Api.CreateParagraph();
    oParagraph.AddText("Hello world!");
    oDocument.InsertContent([oParagraph]);
  }, true);
};
window.Asc.plugin.button = function button(id) {};
```

When the plugin is activated, *window.Asc.plugin.init* runs immediately. It uses [window.Asc.plugin.callCommand](how-to-call-commands.md#callcommand) to execute document API code inside the editor: a paragraph is created and *Hello world!* is inserted using [Office JavaScript API](../../../office-api/get-started/overview).

:::note
All [Office JavaScript API](../../../office-api/get-started/overview) features are included in all versions of ONLYOFFICE document editors (including open source). To create documents without editors, use the standalone **ONLYOFFICE Document Builder**.
:::

*window.Asc.plugin.button* is a required stub that handles clicks on any buttons defined in the plugin's [config.json](../../fundamentals/configuration/config-json.md#variationsbuttons). The main variation of this plugin has no buttons, so the handler is empty.

More existing open source plugin examples can be found [here](../../samples/hello-world.md).
