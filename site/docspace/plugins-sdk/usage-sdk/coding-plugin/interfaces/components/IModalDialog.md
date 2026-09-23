---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/release/v4.0.0/src/interfaces/components/IModalDialog.ts
---

# IModalDialog

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

Document preview modal with a React component

```tsx
import { useEffect, useState } from "react";
import { usePluginActions, useCurrentFile } from "@onlyoffice/docspace-plugin-sdk/react";
import { IModalDialog, ModalDisplayType } from "@onlyoffice/docspace-plugin-sdk";

function PreviewBody() {
  const file = useCurrentFile();
  const { closeModal } = usePluginActions();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;
    fetchPreviewUrl(file.id).then(setPreviewUrl);
  }, [file?.id]);

  return (
    <div>
      {previewUrl
        ? <iframe src={previewUrl} width="100%" height="500px" />
        : <p>Loading preview...</p>}
      <button onClick={closeModal}>Close</button>
    </div>
  );
}

const previewModal: IModalDialog = {
  displayType: ModalDisplayType.modal,
  dialogHeader: "Document Preview",
  dialogBodyComponent: PreviewBody,
  autoMaxWidth: true,
  autoMaxHeight: true,
};
```

Side panel that lists the files in the current user's folder via API

```tsx
import { useEffect, useState } from "react";
import { usePluginAPI, usePluginActions } from "@onlyoffice/docspace-plugin-sdk/react";
import { IModalDialog, ModalDisplayType, ToastType } from "@onlyoffice/docspace-plugin-sdk";

type FileEntry = { id: number; title: string; fileExst?: string };

function FilesListPanel() {
  const api = usePluginAPI();
  const { closeModal, showToast } = usePluginActions();
  const [files, setFiles] = useState<FileEntry[]>([]);

  useEffect(() => {
    api.get<{ files: FileEntry[] }>("/files/@my").then((folder) => {
      setFiles(folder.files);
    });
  }, []);

  const handleSelect = (file: FileEntry) => {
    showToast({ type: ToastType.success, title: `Selected: ${file.title}` });
    closeModal();
  };

  return (
    <ul>
      {files.map((f) => (
        <li key={f.id} onClick={() => handleSelect(f)} style={{ cursor: "pointer" }}>
          {f.title}{f.fileExst ? `.${f.fileExst}` : ""}
        </li>
      ))}
    </ul>
  );
}

const filesPanel: IModalDialog = {
  displayType: ModalDisplayType.aside,
  dialogHeader: "My Files",
  dialogBodyComponent: FilesListPanel,
  autoMaxHeight: true,
};
```

## Properties

import APITable from '@site/src/components/APITable/APITable';

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `displayType?` | [`ModalDisplayType`](#modaldisplaytype) | Defines the modal dialog display type |
| `dialogHeader?` | `string` | Defines the modal dialog header |
| ~~`dialogBody?`~~ | [`IBox`](IBox.md) | Defines the modal dialog body rendered via the IBox component tree. Use either `dialogBody` or `dialogBodyComponent`, not both. **Deprecated:** Use `dialogBodyComponent` instead — accepts a React component and supports hooks from `@onlyoffice/docspace-plugin-sdk/react`. |
| `dialogBodyComponent?` | `ComponentType` | A React component rendered as the modal dialog body. Use either `dialogBodyComponent` or `dialogBody`, not both. The component can use `usePluginActions` and other hooks from `@onlyoffice/docspace-plugin-sdk/react`. |
| ~~`dialogFooter?`~~ | [`IBox`](IBox.md) | Defines the modal dialog footer rendered via the IBox component tree. **Deprecated:** Use `dialogBodyComponent` to render footer content within the component instead. |
| `autoMaxWidth?` | `boolean` | Specifies whether the "max-width: auto" property is set |
| `autoMaxHeight?` | `boolean` | Specifies whether the "max-height: auto" property is set |
| `withoutBodyPadding?` | `boolean` | Specifies whether the modal dialog body has no paddings |
| `withoutHeaderMargin?` | `boolean` | Specifies whether the modal dialog header has no bottom margins |
| `withFooterBorder?` | `boolean` | Specifies whether the border betweeen the body and footer is displayed |
| `fullScreen?` | `boolean` | Specifies whether to display the modal dialog body in the full screen mode without paddings |
| `eventListeners?` | \{ `name`: `string`; `onAction`: () => `void` \| `Promise`\<`void`\> \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\>; \}[] | Defines the event listeners. |
| `onClose?` | () => `void` \| `Promise`\<`void`\> \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\> | Sets a function which is triggered whenever the "Close" button in the modal dialog is clicked |
| ~~`onLoad?`~~ | () => `Promise`\<\{ `newDialogHeader?`: `string`; `newDialogBody`: [`IBox`](IBox.md); `newDialogFooter?`: [`IBox`](IBox.md); \}\> | Sets a function which is triggered whenever the modal dialog is loaded. **Deprecated:** Use a React component via `dialogBodyComponent` with `useEffect` for data loading instead. |

</APITable>

## ModalDisplayType

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

