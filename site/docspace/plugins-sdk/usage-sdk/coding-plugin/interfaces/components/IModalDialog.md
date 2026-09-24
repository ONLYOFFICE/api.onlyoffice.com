# IModalDialog

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IModalDialog.ts#L184)

Modal dialog.

To display the dialog, return an [`IMessage`](../utils.md#imessage) with
[`Actions.showModal`](../../enums/Actions.md#showmodal) in `actions`
and pass the dialog configuration in `modalDialogProps`.
Use [`Actions.closeModal`](../../enums/Actions.md#closemodal) to close it.

![modal-dialog](/assets/images/docspace/modal-dialog.png#gh-light-mode-only)![modal-dialog](/assets/images/docspace/modal-dialog.dark.png#gh-dark-mode-only)

:::info
`dialogBody` and `dialogFooter` are rendered in separate contexts.
Components in `dialogFooter` cannot update components in `dialogBody` using
`Actions.updateContext`, and vice versa.
:::

## Examples

Interactive document preview modal with dynamic content loading

```typescript
import {
  IModalDialog,
  ModalDisplayType,
  Components,
  ButtonSize,
  Actions,
  ToastType,
} from "@onlyoffice/docspace-plugin-sdk";

const filePreviewModal: IModalDialog = {
  displayType: ModalDisplayType.modal,
  dialogHeader: "Document Preview",
  dialogBody: {
    children: [
      {
        component: Components.iFrame,
        props: {
          src: "https://example.com/preview/doc.pdf",
          width: "100%",
          height: "600px"
        }
      }
    ]
  },
  dialogFooter: {
    children: [
      {
        component: Components.button,
        props: {
          label: "Close",
          size: ButtonSize.normal,
          onClick: () => {
            return {
              actions: [Actions.closeModal]
            };
          }
        }
      }
    ]
  },
  autoMaxWidth: true,
  autoMaxHeight: true,
  withFooterBorder: true,
  fullScreen: false,
  eventListeners: [
    {
      name: "documentLoaded",
      onAction: async () => {
        return {
          actions: [Actions.showToast],
          toastProps: [{
            type: ToastType.success,
            title: "Document loaded successfully"
          }]
        };
      }
    }
  ],
  onClose: () => {
    return {
      actions: [Actions.closeModal]
    };
  },
  onLoad: async () => {
    const documentDetails = await fetchDocumentDetails();
    return {
      newDialogHeader: `Preview: ${documentDetails.name}`,
      newDialogBody: {
        children: [
          {
            component: Components.iFrame,
            props: {
              src: documentDetails.previewUrl,
              width: "100%",
              height: "600px"
            }
          }
        ]
      }
    };
  }
}
```

Side panel settings dialog with API key configuration

```typescript
const apiKeyInput: IInput = {
  value: "",
  type: InputType.password,
  placeholder: "Enter your API key",
  onChange: (value) => ({
    actions: [Actions.updateProps],
    newProps: { ...apiKeyInput, value }
  })
};

const settingsPanel: IModalDialog = {
  displayType: ModalDisplayType.aside,
  dialogHeader: "Plugin Settings",
  dialogBody: {
    children: [
      {
        component: Components.label,
        props: { text: "API Key" }
      },
      {
        component: Components.input,
        props: apiKeyInput
      }
    ]
  },
  autoMaxWidth: false,
  autoMaxHeight: true,
  withFooterBorder: true,
  fullScreen: false,
  onClose: () => ({
    actions: [Actions.closeModal]
  }),
  onLoad: async () => {
    const settings = await loadSettings();
    return {
      newDialogBody: {
        children: [
          {
            component: Components.label,
            props: { text: "API Key" }
          },
          {
            component: Components.input,
            props: { ...apiKeyInput, value: settings.apiKey }
          }
        ]
      }
    };
  }
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `displayType` | [`ModalDisplayType`](#modaldisplaytype) | Defines the modal dialog display type |
| `dialogHeader?` | `string` | Defines the modal dialog header |
| `dialogBody` | [`IBox`](IBox.md) | Defines the modal dialog body |
| `dialogFooter?` | [`IBox`](IBox.md) | Defines the modal dialog footer |
| `autoMaxWidth?` | `boolean` | Specifies whether the "max-width: auto" property is set |
| `autoMaxHeight?` | `boolean` | Specifies whether the "max-height: auto" property is set |
| `withoutBodyPadding?` | `boolean` | Specifies whether the modal dialog body has no paddings |
| `withoutHeaderMargin?` | `boolean` | Specifies whether the modal dialog header has no bottom margins |
| `withFooterBorder?` | `boolean` | Specifies whether the border betweeen the body and footer is displayed |
| `fullScreen?` | `boolean` | Specifies whether to display the modal dialog body in the full screen mode without paddings |
| `eventListeners?` | \{ `name`: `string`; `onAction`: () => `void` \| `Promise`\<`void`\> \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\>; \}[] | Defines the event listeners. |
| `onClose` | () => `void` \| `Promise`\<`void`\> \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\> | Sets a function which is triggered whenever the "Close" button in the modal dialog is clicked |
| `onLoad` | () => `Promise`\<\{ `newDialogHeader?`: `string`; `newDialogBody`: [`IBox`](IBox.md); `newDialogFooter?`: [`IBox`](IBox.md); \}\> | Sets a function which is triggered whenever the modal dialog is loaded. |

```mdx-code-block
</APITable>
```

## ModalDisplayType

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/IModalDialog.ts#L265)

The supported modal dialog types.

### Enumeration Members

#### modal

```ts
modal: "modal";
```

Modal dialog displayed in the center of the screen

#### aside

```ts
aside: "aside";
```

Modal dialog displayed as a side panel

