---
sidebar_position: -2
---

# How to call commands

To call commands and send the data back to the editor, define the **callCommand** method. It allows the plugin to send structured data that can be inserted to the resulting document file (formatted paragraphs, tables, text parts, and separate words, etc.).

## callCommand

### Parameters

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Name     | Type     | Description                                                                                                                                                                                                                                                                                                                                                                      |
|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| func     | function | Defines the command written in JavaScript which purpose is to form structured data which can be inserted to the resulting document file (formatted paragraphs, tables, text parts, and separate words, etc.). Then the data is sent to the editors. The command must be compatible with [Office JavaScript API](../../../office-api/get-started/overview.md) syntax.             |
| isClose  | boolean  | Defines whether the plugin window must be closed after the code is executed or left open waiting for another command or action. The *true* value is used to close the plugin window after executing the function in the *func* parameter. The *false* value is used to execute the command and leave the window open waiting for the next command. The default value is *false*. |
| isCalc   | boolean  | Defines whether the document will be recalculated or not. The *true* value is used to recalculate the document after executing the function in the *func* parameter. The *false* value will not recalculate the document (use it only when your edits surely will not require document recalculation). The default value is *true*.                                              |
| callback | function | The result that the method returns. Only the js standard types are available (any objects will be replaced *with undefined*).                                                                                                                                                                                                                                                    |

```mdx-code-block
</APITable>
```

### Returns

This method doesn't return any data.

### Example

```ts
Asc.plugin.callCommand(() => {
  const oDocument = Api.GetDocument();
  const oParagraph = Api.CreateParagraph();
  oParagraph.AddText("Hello world");
  oDocument.InsertContent([oParagraph]);
}, true, true, (returnValue) => {});
```

## Asc.scope object

This method is executed in its own context isolated from other JavaScript data. If some parameters or any additional data (objects, parameters, variables, etc.)  need to be passed to this method, use **Asc.scope** object.

:::note
The functions cannot be passed to the *callCommand* method using the *Asc.scope* object
:::

### Example

```ts
Asc.scope.text = text;
Asc.plugin.callCommand(() => {
  const oDocument = Api.GetDocument();
  const oParagraph = Api.CreateParagraph();
  oParagraph.AddText(Asc.scope.text);
  oDocument.InsertContent([oParagraph]);
}, true, true, (returnValue) => {});
```

## info object

The `Asc.plugin.info` object is a property of the [Asc.plugin](./asc-plugin.md) object. See [Asc.plugin > info object](./asc-plugin.md#info-object) for the full list of properties and examples.

## Debugging

To log all `callCommand` and [`executeMethod`](how-to-call-methods.md) calls to the browser console, set the `asc_plugin_commands_log` key in the browser's local storage:

```js
localStorage.setItem("asc_plugin_commands_log", "true");
```

To disable logging, remove the key:

```js
localStorage.removeItem("asc_plugin_commands_log");
```

The setting persists across page reloads.
