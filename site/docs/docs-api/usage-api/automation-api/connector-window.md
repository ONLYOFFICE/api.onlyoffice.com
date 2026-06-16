---
sidebar_position: 2
---

# Connector window

The **ConnectorWindow** class is used to manage a modal window created by a connector inside the editor. To create it, use the [createWindow](./connector-class.md#createwindow) method of the connector object.

Below you can find methods that are available for this class.

## attachEvent

The function called to add an event listener to the modal window frame. This function will be called whenever the specified event is delivered to the target. The list of all the available events is the same as for the plugins.

### Parameters

| Name   | Type     | Description         |
| ------ | -------- | ------------------- |
| id     | string   | The event name.     |
| action | function | The event listener. |

### Example

```ts
const connector = docEditor.createConnector();
const testConnectorWindow = connector.createWindow();
testConnectorWindow.attachEvent("onWindowMessage", (message) => {
  console.log(`panel message: ${message}`);
});
```

## dispatchEvent

The function called to send an event to the modal window frame. The list of all the available events is the same as for the plugins.

### Parameters

| Name | Type             | Description     |
| ---- | ---------------- | --------------- |
| name | string           | The event name. |
| data | string \| object | The event data. |

### Example

```ts
const connector = docEditor.createConnector();
const testConnectorWindow = connector.createWindow();
testConnectorWindow.dispatchEvent("messageName", {
  prop: "value",
});
```

## show

The function called to show a modal window inside the editor.

### Parameters

| Name     | Type   | Description                                                                                                                                            |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| settings | object | The modal window parameters that are the same for plugin [variations](../../../plugins/configuration/configuration.md#variations). |

### Example

```ts
const connector = docEditor.createConnector();
const testConnectorWindow = connector.createWindow();
testConnectorWindow.show({
  url: "./window/panel.html",
  description: "Panel example!",
  type: "panel",
  EditorsSupport: ["word", "cell", "slide", "pdf"],
  isVisual: true,
  buttons: [],
  icons: "./icon.svg",
});
```

## Window code methods

In the connector window code, you can also use the following methods:

### attachEvent

The function called to subscribe to the messages from the plugin.

#### Parameters

| Name     | Type     | Description         |
| -------- | -------- | ------------------- |
| id       | string   | The event name.     |
| action   | function | The event listener. |

#### Returns

This method doesn't return any data.

#### Example

```ts
window.Asc.plugin.attachEvent("messageName", (message) => {
  console.log(message);
});
```

### sendToPlugin

The function called to send a message to the editor from the modal window.

#### Parameters

| Name | Type   | Description     |
| ---- | ------ | --------------- |
| name | string | The event name. |
| data | object | The event data. |

#### Example

```ts
window.Asc.plugin.sendToPlugin("onWindowMessage", {type: "onWindowReady"});
```
