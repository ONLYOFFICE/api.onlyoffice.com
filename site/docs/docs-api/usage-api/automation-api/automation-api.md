---
sidebar_position: -2
---

# Automation API

Automation API enables interaction with office documents from external sources through custom interface elements. Build your own UI components while leveraging ONLYOFFICE document processing — manage comments, control review workflows, auto-fill forms, and more, all from outside the editor.

:::info
Automation API is available only for **ONLYOFFICE Docs Developer**.

This is a premium feature not included by default and is available at an extra cost. Please contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com) to request a quote, or learn more at [onlyoffice.com/automation-api](https://www.onlyoffice.com/automation-api).
:::

## What you can build

Explore interactive examples showing real-world use cases:

| Use case | Description |
| -------- | ----------- |
| [Working with comments](../../samples/automation-api/working-with-comments.md) | Collect and display all document comments in a custom interface. Add, remove, and navigate between comments from your own UI. |
| [Managing review changes](../../samples/automation-api/working-with-review-changes.md) | Control the review process externally — accept or reject tracked changes and navigate between revisions from a custom panel. |
| [Filling out forms](../../samples/automation-api/filling-out-the-form.md) | Auto-populate form fields with external data. Sync form values between your interface and the document in real-time. |
| [Working with content controls](../../samples/automation-api/working-with-content-controls.md) | Add different types of content controls and inspect their properties from an external UI. |

## Getting started

To start using Automation API, create a connector using the [createConnector](../methods.md#createconnector) method:

```ts
const connector = docEditor.createConnector();
```

The connector provides methods to execute editor commands, listen to document events, and interact with the editor UI:

```ts
// Listen to document events
connector.attachEvent("onChangeContentControl", (obj) => {
  console.log("Content changed:", obj);
});

// Execute editor methods
connector.executeMethod("GetAllComments", null, (comments) => {
  console.log("Comments:", comments);
});

// Insert content into the document
connector.callCommand(() => {
  const oDocument = Api.GetDocument();
  const oParagraph = Api.CreateParagraph();
  oParagraph.AddText("Hello from Automation API");
  oDocument.InsertContent([oParagraph]);
  return {status: "ok"};
}, (res) => {
  console.log("Result:", res);
});
```

## Debugging

### Command logging

To log all [`callCommand`](./connector-class.md#callcommand) and [`executeMethod`](./connector-class.md#executemethod) calls to the browser console, set the `asc_plugin_commands_log` key in the browser's local storage:

```js
localStorage.setItem("asc_plugin_commands_log", "true");
```

To disable logging, remove the key:

```js
localStorage.removeItem("asc_plugin_commands_log");
```

The setting persists across page reloads.

### Error handling in callCommand

Since `commandFn` runs in an isolated context, errors inside it are not propagated to the caller. Use a try/catch block and return the result via the callback:

```ts
connector.callCommand(() => {
  try {
    const doc = Api.GetDocument();
    return {status: "ok"};
  } catch (err) {
    return {status: "fail", error: err.stack};
  }
}, (res) => {
  if (res.status !== "ok") {
    console.log(res.error);
  }
});
```

## API reference

- [Connector class](./connector-class.md) — methods for interacting with the editor
- [Connector window](./connector-window.md) — methods for creating and managing modal windows
