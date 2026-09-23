---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/release/v4.0.0/src/interfaces/items/IInfoPanelItem.ts
---

# IInfoPanelItem

The info panel item that is displayed in the info panel.

![infopanelitem](/assets/images/docspace/infopanelitem.png#gh-light-mode-only)![infopanelitem](/assets/images/docspace/infopanelitem.dark.png#gh-dark-mode-only)

## Examples

AI-powered document analysis panel

```tsx
import { useEffect, useState } from "react";
import { useCurrentFile, usePluginActions } from "@onlyoffice/docspace-plugin-sdk/react";
import { IInfoPanelItem, FilesType, ToastType } from "@onlyoffice/docspace-plugin-sdk";

function AnalysisPanel() {
  const file = useCurrentFile();
  const { showToast } = usePluginActions();
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;
    analyzeDocument(file.id).then(setResult).catch(() => setResult("Error"));
  }, [file?.id]);

  const handleExport = async () => {
    await exportAnalysis(file!.id, result!);
    showToast({ type: ToastType.success, title: "Exported" });
  };

  return (
    <div>
      <p>{result ?? "Analyzing..."}</p>
      <button onClick={handleExport}>Export</button>
    </div>
  );
}

const documentAnalysis: IInfoPanelItem = {
  key: "ai-analysis",
  subMenu: { name: "AI Analysis" },
  component: AnalysisPanel,
  filesType: [FilesType.file]
}
```

Image metadata viewer with file type restrictions

```tsx
import { useEffect, useState } from "react";
import { useCurrentFile } from "@onlyoffice/docspace-plugin-sdk/react";
import { IInfoPanelItem, FilesType, Devices } from "@onlyoffice/docspace-plugin-sdk";

function ImageMetadataPanel() {
  const file = useCurrentFile();
  const [metadata, setMetadata] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    if (!file) return;
    getImageMetadata(file.id).then(setMetadata);
  }, [file?.id]);

  return (
    <div>
      {metadata
        ? Object.entries(metadata).map(([k, v]) => <p key={k}>{k}: {v}</p>)
        : <p>Loading...</p>}
    </div>
  );
}

const imageMetadata: IInfoPanelItem = {
  key: "image-metadata",
  subMenu: { name: "Image Info" },
  component: ImageMetadataPanel,
  isHeaderVisible: true,
  filesType: [FilesType.image],
  filesExsts: [".jpeg", ".jpg", ".png", ".gif", ".bmp"],
  devices: [Devices.desktop, Devices.tablet]
}
```

## Properties

import APITable from '@site/src/components/APITable/APITable';

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The unique item identifier used by the service to recognize the item |
| `subMenu` | [`IInfoPanelSubMenu`](#iinfopanelsubmenu) | The item submenu |
| ~~`body?`~~ | [`IBox`](../components/IBox.md) | The tab UI of the info panel rendered via the IBox component tree. Use either `body` or `component`, not both. **Deprecated:** Use `component` instead — accepts a React component and supports hooks from `@onlyoffice/docspace-plugin-sdk/react`. |
| `component?` | `ComponentType` | A React component rendered as the tab UI of the info panel. Use either `component` or `body`, not both. The component can use `usePluginActions`, `useCurrentFile` and other hooks from `@onlyoffice/docspace-plugin-sdk/react`. |
| `isHeaderVisible?` | `boolean` | The property that controls whether the header is visible in the info panel. By default, the header is visible. |
| ~~`onLoad?`~~ | () => `Promise`\<\{ `body`: [`IBox`](../components/IBox.md); \}\> | A function that is executed after opening a tab. It returns a new body. If this functionality is not needed, the old body value is returned. **Deprecated:** Use a React component via `component` with `useEffect` for data loading instead. |
| `filesType?` | [`FilesType`](../../enums/Files.md#filestype)[] | The types of files where the current item will be displayed in the info panel. Presently the following file types are available: room, file, folder, image, video. If this parameter is not specified, then the current info panel item will be displayed in any file type. **Remarks:** Unlike the context menu, `file` matches images and videos too, so `[FilesType.file]` is already "any file". |
| `filesExsts?` | `string`[] | The extensions of files where the current item will be displayed in the info panel. It only works if the FilesType.file is specified in the filesType parameter. If this parameter is not specified, then the current info panel item will be displayed in any file extension. |
| `usersTypes?` | [`UsersType`](../../enums/UsersType.md)[] | The types of users who will see the current item in the info panel. Currently the following user types are available: owner, docSpaceAdmin, roomAdmin, collaborator, user. If this parameter is not specified, then the current info panel item will be displayed for all user types. |
| `devices?` | [`Devices`](../../enums/Devices.md)[] | The types of devices where the current item will be displayed in the info panel. At the moment the following device types are available: mobile, tablet, desktop. If this parameter is not specified, then the current info panel item will be displayed in any device types. |

</APITable>

## IInfoPanelSubMenu

Describes the item submenu.

### Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The tab display name |
| `onClick?` | (`id`: `number`) => `void` \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\> | A function that takes the file/folder/room id as an argument. This function can be asynchronous. **Remarks:** Called when the tab opens and again on every selection change. A React tab rarely needs it: `component` reads the selection with `useCurrentFile()`. |

</APITable>

