# IPostMessagePlugin

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/plugins/IPostMessagePlugin.ts#L88)

The plugin that is given the access to handle postMessage events from iframe components.
The plugin listens for window.postMessage events from embedded iframes
and triggers portal-side actions (such as showing toasts, modals, or updating items)
by calling the postMessageCallback with an [IPostMessageCallbackMessage](../utils.md#ipostmessagecallbackmessage).

## Examples

PostMessage handler with toast notification

```typescript
class Plugin implements IPostMessagePlugin {
  postMessageCallback: (message: IPostMessageCallbackMessage) => void = () => {};

  setPostMessageCallback = (callback: (message: IPostMessageCallbackMessage) => void): void => {
    this.postMessageCallback = callback;
  };

  getPostMessageCallback = (): ((message: IPostMessageCallbackMessage) => void) => {
    return this.postMessageCallback;
  };
}

const plugin = new Plugin();

window.parent.addEventListener("message", (event) => {
  try {
    const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
    if (data?.source !== "my-plugin") return;

    plugin.postMessageCallback({
      actions: [Actions.showToast],
      toastProps: [{
        type: ToastType.success,
        title: "Message Received",
      }],
    });
  } catch {
    // ignore non-JSON messages
  }
});
```

PostMessage handler with modal dialog

```typescript
window.parent.addEventListener("message", (event) => {
  try {
    const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
    if (data?.source !== "my-plugin") return;

    plugin.postMessageCallback({
      actions: [Actions.showModal],
      modalDialogProps: {
        dialogHeader: "Frame Response",
        dialogBody: body,
        displayType: ModalDisplayType.modal,
      },
    });
  } catch {
    // ignore non-JSON messages
  }
});
```

## Methods

### setPostMessageCallback()

```ts
setPostMessageCallback(callback: (message: IPostMessageCallbackMessage) => void): void;
```

Sets the postMessage callback function.
This method is called by the portal to register the callback that the plugin
will use to communicate actions back to the portal.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`message`: [`IPostMessageCallbackMessage`](../utils.md#ipostmessagecallbackmessage)) => `void` | The callback function provided by the portal for the plugin to invoke |

#### Returns

`void`

### getPostMessageCallback()

```ts
getPostMessageCallback(): (message: IPostMessageCallbackMessage) => void;
```

Gets the current postMessage callback function.

#### Returns

The currently registered postMessage callback function

```ts
(message: IPostMessageCallbackMessage): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`IPostMessageCallbackMessage`](../utils.md#ipostmessagecallbackmessage) |

##### Returns

`void`

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `postMessageCallback` | (`message`: [`IPostMessageCallbackMessage`](../utils.md#ipostmessagecallbackmessage)) => `void` | A callback function that is called by the plugin to trigger portal-side actions in response to postMessage events received from embedded iframes. The portal sets this callback via [setPostMessageCallback](#setpostmessagecallback). The plugin invokes it with an [IPostMessageCallbackMessage](../utils.md#ipostmessagecallbackmessage) containing the desired actions and their properties. |

```mdx-code-block
</APITable>
```
