---
sidebar_position: -2
---

# Overview

The plugins and macros can interact with the editors using different events, methods, and commands. Here you will find how to use them.

- [How to attach events](how-to-attach-events.md)
- [How to call methods](how-to-call-methods.md)
- [How to call commands](how-to-call-commands.md)

The main plugin code is placed to a *.js* file which describes what and how must be done by the plugin. This file is placed to the plugin root folder together with the [config.json](../../structure/manifest/manifest.md) and [index.html](../../structure/entry-point.md) files.

## How it works

Any plugin has *window.Asc.plugin* object which in its turn has several methods for it to interact with ONLYOFFICE document, spreadsheet and presentation editors.

> Please note that starting from version 7.1, the access to the *window* and *document* objects and the *alert* function is restricted from the plugin command code because the *"use strict"* mode was applied to the plugin scripts. Don't forget to declare variables before using them so that the plugins work correctly.

For the plugin to work the developer must specify two obligatory events for the *window.Asc.plugin* object: window.Asc.plugin.init and window.Asc.plugin.button. After that the [window.Asc.plugin.callCommand](how-to-call-commands.md#callcommand) method is used to send the data to the editors using the in-built **ONLYOFFICE Document Builder** [API](../../../document-builder/builder-framework/C++/CDocBuilder/ExecuteCommand.md) features.

If the plugin operates with an OLE object, [window.Asc.plugin.callCommand](how-to-call-commands.md#callcommand) method is used to manage it.

Let's see how this is done in the *helloworld.js* plugin:

``` ts
window.Asc.plugin.init = function init() {
  this.callCommand(() => {
    const oDocument = Api.GetDocument()
    const oParagraph = Api.CreateParagraph()
    oParagraph.AddText("Hello world!")
    oDocument.InsertContent([oParagraph])
  }, true)
}
window.Asc.plugin.button = function button(id) {}
```

When the plugin object is being initialized (*window.Asc.plugin.init = function () \{...\}*), the editor forms a paragraph with the *Hello World* phrase and then uses [Office JavaScript API](../../../office-api/get-started/overview.md) to create the document with this text in it (with the help of the [window.Asc.plugin.callCommand](how-to-call-commands.md#callcommand) method - *this.callCommand(function() \{...\})*).

> Please note, that all [Office JavaScript API](../../../office-api/get-started/overview.md) features are already included into all the versions (including the open source one) of ONLYOFFICE document editors, this is how the plugins interact with the editors. In case you want to create documents without any document editors, install the standalone **ONLYOFFICE Document Builder** version.

The only OK button (*window.Asc.plugin.button = function (id) \{...\}*) is used to create the text and finish the work with the plugin.

More existing open source plugin examples can be found [here](../../samples/plugin-samples/plugin-samples.md).
