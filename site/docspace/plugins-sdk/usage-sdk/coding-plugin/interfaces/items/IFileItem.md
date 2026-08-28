# IFileItem

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/items/IFileItem.ts#L132)

Describes an item that will be embedded in the file list.
The file item can be displayed as a file or a folder.

![file-icon](/assets/images/docspace/file-icon.png#gh-light-mode-only)![file-icon](/assets/images/docspace/file-icon.dark.png#gh-dark-mode-only)

## Examples

3D model viewer with format validation

```typescript
import { IFileItem, Actions, ToastType, Devices } from "@onlyoffice/docspace-plugin-sdk";

const modelViewer: IFileItem = {
  extension: ".obj",
  fileTypeName: "3D Model",
  fileRowIcon: "3d-model-32.svg",
  fileTileIcon: "3d-model-96.svg",
  devices: [Devices.desktop],
  onClick: async (file) => {
    try {
      await load3DModel(file.id);
      return {
        actions: [Actions.showToast],
        toastProps: [{
          type: ToastType.success,
          title: "3D model loaded successfully"
        }]
      };
    } catch (error) {
      return {
        actions: [Actions.showToast],
        toastProps: [{
          type: ToastType.error,
          title: "Unable to process the 3D model"
        }]
      };
    }
  }
}
```

Markdown content processor with error handling

```typescript
const markdownPreview: IFileItem = {
  extension: ".md",
  fileTypeName: "Markdown",
  fileRowIcon: "markdown-32.svg",
  onClick: async (file) => {
    try {
      const content = await fetchMarkdownContent(file.id);
      await saveMarkdown(file.id, content);
      return {
        actions: [Actions.showToast],
        toastProps: [{
          type: ToastType.success,
          title: "Markdown file processed"
        }]
      };
    } catch (error) {
      return {
        actions: [Actions.showToast],
        toastProps: [{
          type: ToastType.error,
          title: "Unable to process the markdown file"
        }]
      };
    }
  }
}
```

Audio player with access restrictions

```typescript
const audioPlayer: IFileItem = {
  extension: ".mp3",
  fileTypeName: "Audio",
  fileRowIcon: "audio-32.svg",
  fileTileIcon: "audio-96.svg",
  usersType: [UsersType.docSpaceAdmin, UsersType.roomAdmin, UsersType.user],
  fileSecurity: [FilesSecurity.Read, FilesSecurity.Download],
  onClick: async (file) => {
    try {
      await playAudio(file.viewUrl);
      return {
        actions: [Actions.showToast],
        toastProps: [{
          type: ToastType.success,
          title: `Playing ${file.title}`
        }]
      };
    } catch (error) {
      return {
        actions: [Actions.showToast],
        toastProps: [{
          type: ToastType.error,
          title: "Unable to play the audio file"
        }]
      };
    }
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
| `extension` | `string` | The file extension. If several plugins have the same extension, the last plugin from this list is taken |
| `onClick` | (`item`: [`File`](#file)) => `void` \| `Promise`\<`void`\> \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\> | A function that takes the File object with the file data as an argument. This function can be asynchronous. It will be executed when the user clicks on a file with the required extension. |
| `usersType?` | [`UsersType`](../../enums/UsersType.md)[] | The types of users who have the access to the current item. Currently the following user types are available: owner, docSpaceAdmin, roomAdmin, collaborator, user. If this parameter is not specified, then the current item will be available for all user types. |
| `devices?` | [`Devices`](../../enums/Devices.md)[] | The types of devices where the current item will be available. At the moment the following device types are available: mobile, tablet, desktop. If this parameter is not specified, then the current item will be available in any device types. |
| `fileTypeName?` | `string` | A file type which is displayed in the list (for example, Document/Folder) |
| `fileRowIcon?` | `string` | A file icon which is displayed in the table format. The icon image must be uploaded to the assets folder. Only the image name with the extension must be specified in this field. The preferred icon size is 32x32 px. |
| `fileTileIcon?` | `string` | A file icon which is displayed in the tile format. The icon image must be uploaded to the assets folder. Only the image name with the extension must be specified in this field. The preferred icon size is 96x96 px. |
| `fileSecurity?` | [`FilesSecurity`](../../enums/Files.md#filessecurity)[] | The security parameters of the file that will be checked. If all the parameters are true, the onClick event will be triggered. If this parameter is not specified, the security settings are ignored. |
| `security?` | [`Security`](../../enums/Security.md)[] | The security parameters of the parent folder or room that will be checked. If all the parameters are true, the onClick event will be triggered. If this parameter is not specified, the security settings are ignored. |

```mdx-code-block
</APITable>
```

***

## File

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/items/IFileItem.ts#L191)

Describes the file properties.

### Properties

```mdx-code-block
<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `folderId` | `number` | The folder ID where the current file is located |
| `fileExst` | `string` | The file extension |
| `id` | `number` | The file ID |
| `rootFolderType` | `number` | The root folder type of the current file |
| `rootFolderId` | `number` | The root folder ID of the current file |
| `title` | `string` | The file title |
| `viewUrl` | `string` | The URL to open the current file in the viewer |
| `webUrl` | `string` | The absolute URL where the source viewed or edited document is stored |

```mdx-code-block
</APITable>
```
