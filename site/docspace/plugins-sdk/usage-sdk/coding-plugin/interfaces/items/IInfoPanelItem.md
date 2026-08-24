# IInfoPanelItem

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/items/IInfoPanelItem.ts#L133)

The info panel item that is displayed in the info panel.

![infopanelitem](/assets/images/docspace/infopanelitem.png#gh-light-mode-only)![infopanelitem](/assets/images/docspace/infopanelitem.dark.png#gh-dark-mode-only)

## Examples

AI-powered document analysis with error handling

```typescript
import {
  IInfoPanelItem,
  Components,
  Actions,
  ToastType,
  FilesType,
} from "@onlyoffice/docspace-plugin-sdk";

const documentAnalysis: IInfoPanelItem = {
  key: "ai-analysis",
  subMenu: {
    name: "AI Analysis",
    onClick: async (id) => {
      try {
        const analysis = await analyzeDocument(id);
        await exportAnalysis(id, analysis);

        return {
          actions: [Actions.showToast],
          toastProps: [{
            type: ToastType.success,
            title: "Document analysis complete"
          }]
        };
      } catch (error) {
        return {
          actions: [Actions.showToast],
          toastProps: [{
            type: ToastType.error,
            title: "Unable to analyze the document"
          }]
        };
      }
    }
  },
  body: {
    children: [
      {
        component: Components.text,
        props: { text: "Open the tab to generate an AI summary of the document" }
      }
    ]
  },
  filesType: [FilesType.file]
}
```

Image metadata viewer with file type restrictions

```typescript
const imageMetadata: IInfoPanelItem = {
  key: "image-metadata",
  subMenu: {
    name: "Image Info"
  },
  body: {
    children: [
      {
        component: Components.text,
        props: { text: "Loading image metadata..." }
      }
    ]
  },
  onLoad: async () => {
    const metadata = await getImageMetadata();
    return {
      body: {
        children: [
          {
            component: Components.text,
            props: { text: metadata.summary }
          }
        ]
      }
    };
  },
  isHeaderVisible: true,
  filesType: [FilesType.image],
  filesExsts: [".jpeg", ".jpg", ".png", ".gif", ".bmp"],
  devices: [Devices.desktop, Devices.tablet]
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The unique item identifier used by the service to recognize the item |
| `subMenu` | [`IInfoPanelSubMenu`](#iinfopanelsubmenu) | The item submenu |
| `body` | [`IBox`](../components/IBox.md) | The tab UI of the info panel |
| `isHeaderVisible?` | `boolean` | The property that controls whether the header is visible in the info panel. By default, the header is visible. |
| `onLoad?` | () => `Promise`\<\{ `body`: [`IBox`](../components/IBox.md); \}\> | A function that is executed after opening a tab. It returns a new body. If this functionality is not needed, the old body value is returned. |
| `filesType?` | [`FilesType`](../../enums/Files.md#filestype)[] | The types of files where the current item will be displayed in the info panel. Presently the following file types are available: room, file, folder, image, video. If this parameter is not specified, then the current info panel item will be displayed in any file type. |
| `filesExsts?` | `string`[] | The extensions of files where the current item will be displayed in the info panel. It only works if the FilesType.file is specified in the filesType parameter. If this parameter is not specified, then the current info panel item will be displayed in any file extension. |
| `usersTypes?` | [`UsersType`](../../enums/UsersType.md)[] | The types of users who will see the current item in the info panel. Currently the following user types are available: owner, docSpaceAdmin, roomAdmin, collaborator, user. If this parameter is not specified, then the current info panel item will be displayed for all user types. |
| `devices?` | [`Devices`](../../enums/Devices.md)[] | The types of devices where the current item will be displayed in the info panel. At the moment the following device types are available: mobile, tablet, desktop. If this parameter is not specified, then the current info panel item will be displayed in any device types. |

```mdx-code-block
</APITable>
```

## IInfoPanelSubMenu

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/items/IInfoPanelItem.ts#L27)

Describes the item submenu.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The tab display name |
| `onClick?` | (`id`: `number`) => `void` \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\> | A function that takes the file/folder/room id as an argument. This function can be asynchronous. It will be executed when clicking on the tab. |

```mdx-code-block
</APITable>
```

