---
sidebar_position: -2
---

# Automation API

Automation API enables interaction with office documents from external sources through custom interface elements. Build your own UI components while leveraging ONLYOFFICE document processing — manage comments, control review workflows, auto-fill forms, and more, all from outside the editor.

:::info
Automation API is available only for **ONLYOFFICE Docs Developer**.

This is a premium feature available at an extra cost. See [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices?from=api) for pricing details, or contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com) to request a quote.
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

To start using Automation API, create a connector using the [createConnector](../methods.md#createconnector) method. Create it when the editor is ready — in the [onDocumentReady](../config/events.md#ondocumentready) event handler or at any moment after this event is fired:

```ts
let connector;

const config = {
  // ...
  events: {
    onDocumentReady: () => {
      connector = docEditor.createConnector();
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
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

## Connector lifecycle

A connector is bound to the `docEditor` object that created it and remains valid as long as this object exists:

- **Reuse the created connector instead of creating a new one for each operation.** Each [createConnector](../methods.md#createconnector) call returns a new independent connector with its own identifier, which remains registered in the editor until [disconnect](./connector-class.md#disconnect) is called. Event listeners added with [attachEvent](./connector-class.md#attachevent), toolbar and context menu items, and windows created with [createWindow](./connector-class.md#createwindow) belong to the connector that registered them, and each connector receives the events it is subscribed to separately. Several connectors can work simultaneously, for example, one per module of your application.
- **Do not create a connector before the [onDocumentReady](../config/events.md#ondocumentready) event is fired.** If the connector is created later than this event, for example when the user interacts with your interface, store the editor state in the `onDocumentReady` handler and check it before using the connector.
- **Call [disconnect](./connector-class.md#disconnect) when the connector is no longer needed, including before calling [destroyEditor](../methods.md#destroyeditor).** It stops event delivery, removes the interface elements added through this connector, and releases the resources it uses on the page. Call it while the editor still exists.
- **Create a new connector after reinitializing the editor.** The [destroyEditor](../methods.md#destroyeditor) method and initializing a new `DocsAPI.DocEditor` object invalidate the existing connector. The new editor instance fires its own [onDocumentReady](../config/events.md#ondocumentready) event, where the new connector must be created.
- Updating the file with the [refreshFile](../methods.md#refreshfile) method does not invalidate the connector, because the editor is not reinitialized.

:::note
A command sent through a connector whose editor no longer exists never returns a result: depending on the state of the editor, the call either fails with a JavaScript error or is dropped without the callback being called. Check that the editor is ready instead of retrying such calls.
:::

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
    const stats = doc.GetStatistics();
    return {status: "ok", pages: stats.PageCount};
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
