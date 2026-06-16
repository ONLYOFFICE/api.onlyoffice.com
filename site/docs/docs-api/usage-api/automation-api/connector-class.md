---
sidebar_position: 1
---

# Connector class

The **Connector** class allows editing documents, spreadsheets, presentations, PDFs, and fillable forms from an external source. It has the same interface as plugins.

Below you can find methods available for this class.

## addContextMenuItem

The function called to add an item to the context menu. The process of working with the context menu is the same as for [plugins](../../../plugins/customization/context-menu.md) except for the *onClick* method, which is used instead of subscribing by ID.

### Parameters

| Name  | Type                                  | Description                                           |
| ----- | ------------------------------------- | ----------------------------------------------------- |
| items | [ContextMenuItem](#contextmenuitem)[] | An array containing the context menu item parameters. |

### ContextMenuItem

| Name       | Type                                  | Description                                                                                                                                   |
| ---------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| *id*       | string                                | The item ID.                                                                                                                                  |
| *text*     | string                                | The item caption.                                                                                                                             |
| *data*     | string                                | The item data (this data will be sent to the click event callback).                                                                           |
| *disabled* | boolean                               | Whether the current item is disabled or not.                                                                                             |
| *icons*    | string                                | The item icons (see the plugins [config](../../../plugins/configuration/configuration.md#variationsicons) documentation). |
| *onClick*  | function                              | The click event callback. Only available for the [addContextMenuItem](#addcontextmenuitem) method.                                            |
| *items*    | [ContextMenuItem](#contextmenuitem)[] | An array containing the context menu items for the current item.                                                                              |

### Example

```ts
const connector = docEditor.createConnector();
connector.attachEvent("onContextMenuShow", (options) => {
  connector.addContextMenuItem([{
    text: "mainItem",
    onClick: () => {
      console.log("[CONTEXTMENUCLICK] menuSubItem1");
    },
  }]);
});
```

## addToolbarMenuItem

The function called to add an item to the toolbar menu. The process of working with the toolbar menu is the same as for [plugins](../../../plugins/customization/toolbar.md) except for the *onClick* method, which is used instead of subscribing by ID.

### Parameters

| Name  | Type                                        | Description                            |
| ----- | ------------------------------------------- | -------------------------------------- |
| items | [ToolbarMenuMainItem](#toolbarmenumainitem) | The toolbar main menu item parameters. |

### ToolbarMenuMainItem

| Name | Type                                | Description                                                     |
| ---- | ----------------------------------- | --------------------------------------------------------------- |
| guid | string                              | The plugin guid.                                                |
| tabs | [ToolbarMenuTab](#toolbarmenutab)[] | An array containing the toolbar menu tabs for the current item. |

### ToolbarMenuTab

| Name  | Type                                  | Description                                                     |
| ----- | ------------------------------------- | --------------------------------------------------------------- |
| id    | string                                | The tab ID.                                                     |
| text  | string                                | The tab text.                                                   |
| items | [ToolbarMenuItem](#toolbarmenuitem)[] | An array containing the toolbar menu items for the current tab. |

### ToolbarMenuItem

| Name             | Type                                        | Description                                                                                                                                   |
| ---------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| *id*             | string                                      | The item ID.                                                                                                                                  |
| *type*           | [ToolbarMenuItemType](#toolbarmenuitemtype) | The item type.                                                                                                                                |
| *text*           | string                                      | The item caption. If this field is "", the toolbar button is displayed only with an icon, without a caption.                                  |
| *hint*           | string                                      | The item hint.                                                                                                                                |
| *icons*          | string \| object                            | The item icons (see the plugins [config](../../../plugins/configuration/configuration.md#variationsicons) documentation). |
| *disabled*       | boolean                                     | Whether the current item is locked.                                                                                                 |
| *enableToggle*   | boolean                                     | Whether the toolbar menu item (when *"split == false"*) or its top part (when *"split == true"*) can be toggled.                    |
| *lockInViewMode* | boolean                                     | Whether the toolbar menu item is automatically locked in the view modes (when previewing, viewing forms, disconnecting, etc.).      |
| *separator*      | boolean                                     | Whether a separator is used between the toolbar menu items.                                                                         |
| *split*          | boolean                                     | Whether the toolbar menu item is split into two parts and includes the drop-down menu.                                              |
| onClick          | function                                    | The click event callback.                                                                                                                     |
| *items*          | ToolbarMenuItem[]                           | An array containing the context menu items for the current item.                                                                              |

### ToolbarMenuItemType

| Type                     | Description                                                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| "button" \| "big-button" | The toolbar menu item type. The *button* and *big-button* values are the same and can be equally used to specify the toolbar button. |

#### Example

```ts
const connector = docEditor.createConnector();
connector.addToolbarMenuItem({
  tabs: [
    {
      text: "Connector",
      items: [
        {
          id: "toolConnector1",
          type: "button",
          text: "Meaning",
          hint: "Meaning",
          lockInViewMode: true,
          icons: "./icon.svg",
          items: [
            {
              id: "toolC1",
              text: "Text",
              data: "Hello",
              onClick: (data) => {
                console.log(`[TOOLBARMENUCLICK]: ${data}`);
              },
            },
          ],
        },
      ],
    },
  ],
});
```

## attachEvent

The function called to add an event listener, a function that will be called whenever the specified event is delivered to the target. The list of all the available events is the same as for the plugins:

- [Document events](../../../plugins/interacting-with-editors/document-api/Events/Events.md)
- [Spreadsheet events](../../../plugins/interacting-with-editors/spreadsheet-api/Events/Events.md)
- [Presentation events](../../../plugins/interacting-with-editors/presentation-api/Events/Events.md)
- [PDF events](../../../plugins/interacting-with-editors/pdf-api/Events/Events.md)
- [Form events](../../../plugins/interacting-with-editors/form-api/Events/Events.md)

### Parameters

| Name     | Type     | Description         |
| -------- | -------- | ------------------- |
| name     | string   | The event name.     |
| callback | function | The event listener. |

### Example

```ts
const connector = docEditor.createConnector();
connector.attachEvent("onChangeContentControl", (obj) => {
  console.log(`[EVENT] onChangeContentControl: ${JSON.stringify(obj)}`);
});
```

## callCommand

To call commands and send the data back to the editor, define the callCommand method. It allows the connector to send structured data that can be inserted into the resulting document file (formatted paragraphs, tables, text parts, and separate words, etc.).

### Parameters

| Name      | Type     | Required | Description                                                                                                                                                                                                                                                      |
| --------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| commandFn | function | required | A function containing [Office JavaScript API](../../../office-api/get-started/overview.md) commands to manipulate the document.                                                                                                                                  |
| callback  | function | optional | A function that receives the return value of `commandFn`. Primitives, plain objects, arrays, and TypedArrays are supported (up to 10 levels of nesting). If the return value contains functions or exceeds the nesting limit, the callback receives `undefined`. |
| isNoCalc  | boolean  | optional | Whether to skip document recalculation. Set to `true` only when your edits surely will not require recalculation. Default: `false`.                                                                                                                              |

The `commandFn` function is executed in its own context isolated from other JavaScript data. If some parameters or other data need to be passed to it, use the [Asc.scope](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object.

### Example

```ts
const connector = docEditor.createConnector();
connector.callCommand(() => {
  const oDocument = Api.GetDocument();
  const oParagraph = Api.CreateParagraph();
  oParagraph.AddText("Hello");
  oDocument.InsertContent([oParagraph]);
}, () => {
  console.log("[COMMAND] Callback command");
});
```

## connect

The function called to connect the connector to the editor.

:::note
Please note that this method should only be called if you have disconnected the connector with the [disconnect](#disconnect) method and need to connect it to the editor again. When creating a connector, you do not need to use the *connect* method, as it is called automatically along with the [createConnector](../methods.md#createconnector) method.
:::

### Example

```ts
const connector = docEditor.createConnector();
connector.connect();
```

## createWindow

The function called to create the [connector modal window](./connector-window.md) to display the additional information inside the editor.

### Example

```ts
const connector = docEditor.createConnector();
const testConnectorWindow = connector.createWindow();
```

## detachEvent

The function called to remove an event listener.

### Parameters

| Name | Type   | Description     |
| ---- | ------ | --------------- |
| name | string | The event name. |

### Example

```ts
const connector = docEditor.createConnector();
connector.detachEvent("onChangeContentControl");
```

## disconnect

The function called to disconnect the connector from the editor.

### Example

```ts
const connector = docEditor.createConnector();
connector.disconnect();
```

## executeMethod

The function called to execute certain editor methods using the connector. The full list of these methods is the same as for the plugins:

- [Document methods](../../../plugins/interacting-with-editors/document-api/Methods/Methods.md)
- [Spreadsheet methods](../../../plugins/interacting-with-editors/spreadsheet-api/Methods/Methods.md)
- [Presentation methods](../../../plugins/interacting-with-editors/presentation-api/Methods/Methods.md)
- [PDF methods](../../../plugins/interacting-with-editors/pdf-api/Methods/Methods.md)
- [Form methods](../../../plugins/interacting-with-editors/form-api/Methods/Methods.md)

### Parameters

| Name     | Type     | Description                                                      |
| -------- | -------- | ---------------------------------------------------------------- |
| name     | string   | The name of the specific method that must be executed.           |
| args     | array    | The arguments that the method in use has (if it has any).        |
| callback | function | The result that the method returns. It is an optional parameter. |

### Example

```ts
const connector = docEditor.createConnector();
connector.executeMethod("GetCurrentWord", [], (word) => {
  console.log(`[METHOD] GetCurrentWord: ${word}`);
});
```

## updateContextMenuItem

The function called to update an item in the context menu with the specified items.

### Parameters

| Name  | Type                                  | Description                                           |
| ----- | ------------------------------------- | ----------------------------------------------------- |
| items | [ContextMenuItem](#contextmenuitem)[] | An array containing the context menu item parameters. |

### Example

```ts
const connector = docEditor.createConnector();
const items = [
  {
    id: "onConvert",
    text: "Convert to Markdown or HTML",
  },
];

connector.updateContextMenuItem(items);
```
