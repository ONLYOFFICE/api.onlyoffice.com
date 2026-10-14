---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/instance/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# SDKInstance

Manages a single ONLYOFFICE Apps iframe, handles postMessage communication,
and exposes methods for operating on the embedded ONLYOFFICE Apps UI.

Instances are created and stored by [SDK](SDK.md). Do not construct directly —
use [SDK.init](SDK.md#init) or any `init*` convenience wrapper.

:::note
Every method that talks to the frame returns a promise that rejects with an [SDKError](SDKError.md):
[SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError) when the portal reports a failure (HTTP status in [SDKError.status](SDKError.md#SDKError-status)),
[SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch) when the current mode has no such method,
[SDKErrorCode.Timeout](../enumerations/SDKErrorCode.md#Timeout) after [TFrameConfig.methodTimeout](../type-aliases/TFrameConfig.md#methodTimeout) and
[SDKErrorCode.Disconnected](../enumerations/SDKErrorCode.md#Disconnected) when the frame is not connected. Two legacy methods differ:
[SDKInstance.login](#login) and [SDKInstance.createRoom](#createroom) resolve a portal failure as `{ status, message }`.
A portal older than ONLYOFFICE Apps 4.0 does not flag failures: there every method resolves the portal's
error object instead of rejecting.
:::

## Example

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const instance = sdk.initManager({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
});

instance.getUserInfo().then((user) => console.log(user));
```

## Constructors

### Constructor

```ts
new SDKInstance(config: TFrameConfig): SDKInstance;
```

#### Parameters

<APITable name="Constructor">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Initial frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

`SDKInstance`

## Methods

### addTagsToRoom()

```ts
addTagsToRoom(roomId: string, tags: string[]): Promise<object>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Adds the specified tags to a room.

#### Parameters

<APITable name="addTagsToRoom">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roomId` | `string` | The room ID. |
| `tags` | `string`[] | Tag names to add. |

</APITable>

#### Returns

`Promise`\<`object`\>

A promise that resolves with the result of the operation.
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
await instance.addTagsToRoom('room-123', ['design', 'q1']);
```

Create a new tag with [SDKInstance.createTag](#createtag) and apply it
to a newly created room via [SDKInstance.createRoom](#createroom).
```typescript
await instance.createTag('design');
const room = await instance.createRoom('Creative Hub', RoomType.Collaboration);
await instance.addTagsToRoom(room.id, ['design']);
```

***

### createFile()

```ts
createFile(
   folderId: string, 
   title: string, 
   templateId?: string, 
   formId?: string
): Promise<TFileInfo>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Creates a new file in the specified folder.

#### Parameters

<APITable name="createFile">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `folderId` | `string` | The ID of the target folder. |
| `title` | `string` | The file title. An extension is optional: `"Report.docx"` keeps it, `"Report"` gets `.docx` from the portal. |
| `templateId`? | `string` | The ID of a file to copy the content from. Omit for an empty document. |
| `formId`? | `string` | The ID of a form to create the file from. Omit when the file is not based on a form. |

</APITable>

#### Returns

`Promise`\<[`TFileInfo`](../type-aliases/TFileInfo.md)\>

A promise that resolves with [TFileInfo](../type-aliases/TFileInfo.md).
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const file = await instance.createFile('folder-123', 'Project Proposal');
console.log(file);
```

Create a file from a template and immediately open it in the editor using [SDKInstance.setConfig](#setconfig).
```typescript
const file = await instance.createFile('folder-123', 'Report.docx', 'template-456');
await instance.setConfig({ id: file.id, mode: SDKMode.Editor }, true);
```

***

### createFolder()

```ts
createFolder(parentFolderId: string, title: string): Promise<TFolderInfo>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Creates a new folder inside the specified parent folder.

#### Parameters

<APITable name="createFolder">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parentFolderId` | `string` | The ID of the parent folder. |
| `title` | `string` | The folder title. |

</APITable>

#### Returns

`Promise`\<[`TFolderInfo`](../type-aliases/TFolderInfo.md)\>

A promise that resolves with [TFolderInfo](../type-aliases/TFolderInfo.md).
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const folder = await instance.createFolder('parent-123', 'Archive');
console.log(folder);
```

Create a folder and immediately add a file inside it using [SDKInstance.createFile](#createfile).
```typescript
const folder = await instance.createFolder('parent-123', 'Q1 Reports');
await instance.createFile(folder.id, 'Summary');
```

***

### createHash()

```ts
createHash(password: string, hashSettings: object): Promise<object>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.System](../enumerations/SDKMode.md#System); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Creates a password hash using the provided hash settings.

Obtain `hashSettings` from [SDKInstance.getHashSettings](#gethashsettings) before calling this method.

#### Parameters

<APITable name="createHash">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `password` | `string` | The plaintext password to hash. |
| `hashSettings` | `object` | Hash algorithm settings from [SDKInstance.getHashSettings](#gethashsettings). |

</APITable>

#### Returns

`Promise`\<`object`\>

A promise that resolves with the generated hash.
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const settings = await instance.getHashSettings();
const hash = await instance.createHash('p@ssw0rd', settings);
console.log(hash);
```

Full login flow using [SDKInstance.getHashSettings](#gethashsettings) and [SDKInstance.login](#login).
```typescript
const settings = await instance.getHashSettings();
const hash = await instance.createHash('p@ssw0rd', settings);
await instance.login('user@example.com', hash, undefined, true);
```

***

### createRoom()

```ts
createRoom(
   title: string, 
   roomType: string | number, 
   options?: TCreateRoomOptions
): Promise<TRoomInfo>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Creates a new room with the given type and optional settings.

:::note
The room type decides which access levels the room accepts: reviewing and commenting exist only in
[RoomType.Custom](../enumerations/RoomType.md#Custom); a [RoomType.Collaboration](../enumerations/RoomType.md#Collaboration) room offers editing and reading only.
Creating a room requires the room admin role on the portal; a user without it gets a `403` result.
:::

#### Parameters

<APITable name="createRoom">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `title` | `string` | The room display name. |
| `roomType` | `string` \| `number` | The room type: a [RoomType](../enumerations/RoomType.md) value or its numeric API value. |
| `options`? | [`TCreateRoomOptions`](../type-aliases/TCreateRoomOptions.md) | Optional room settings. See [TCreateRoomOptions](../type-aliases/TCreateRoomOptions.md). |

</APITable>

#### Returns

`Promise`\<[`TRoomInfo`](../type-aliases/TRoomInfo.md)\>

A promise that resolves with [TRoomInfo](../type-aliases/TRoomInfo.md), or with `{ status, message }` when the portal
  reports a failure — unlike the other methods, `createRoom` does not reject on portal errors.

#### Examples

```typescript
const room = await instance.createRoom('Design Team', RoomType.Collaboration, { tags: ['design'] });
console.log(room);
```

Create a room, then create a new tag and apply it using [SDKInstance.createTag](#createtag)
and [SDKInstance.addTagsToRoom](#addtagstoroom).
```typescript
const room = await instance.createRoom('Marketing', RoomType.Custom);
await instance.createTag('campaigns');
await instance.addTagsToRoom(room.id, ['campaigns']);
```

***

### createTag()

```ts
createTag(name: string): Promise<object>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Creates a new tag with the given name.

#### Parameters

<APITable name="createTag">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The tag name. |

</APITable>

#### Returns

`Promise`\<`object`\>

A promise that resolves with the created tag data.
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const tag = await instance.createTag('Project Alpha');
console.log(tag);
```

Create a tag and immediately apply it to a room using [SDKInstance.addTagsToRoom](#addtagstoroom).
```typescript
await instance.createTag('archived');
await instance.addTagsToRoom('room-123', ['archived']);
```

***

### destroyFrame()

```ts
destroyFrame(): void;
```

Tears down the iframe and releases all resources associated with this instance.

Replaces the container with a plain `<div>` (preserving the original `frameId` and CSS classes,
showing [TFrameConfig.destroyText](../type-aliases/TFrameConfig.md#destroyText)), removes the `message` listener, rejects pending
method calls with [SDKErrorCode.Disconnected](../enumerations/SDKErrorCode.md#Disconnected), cancels the proactive OAuth token refresh,
and removes the instance from the global `DocSpace.SDK.frames` registry. In OAuth mode this is
how a host ends the embedded session: no cookie exists, so nothing outlives the frame.

The call is synchronous and complete when it returns: the placeholder keeps the `frameId`, so
an `SDK.init*` call on the same `frameId` may follow immediately — there is nothing to await.

#### Returns

`void`

#### Examples

```typescript
instance.destroyFrame();
```

Destroy and reinitialize the same frame in a different mode using [SDK.initEditor](SDK.md#initeditor).
```typescript
instance.destroyFrame();
sdk.initEditor({ frameId: 'ds-frame', src: 'https://portal.example.com', id: 99 });
```

***

### executeInEditor()

```ts
executeInEditor(callback: (editor: any, asc: any, data?: any) => void, data?: object): Promise<object>;
```

Runs a callback function inside the active document editor.

Only meaningful when the frame is in [SDKMode.Editor](../enumerations/SDKMode.md#Editor) or [SDKMode.Viewer](../enumerations/SDKMode.md#Viewer) mode.

The callback is serialized with `Function.prototype.toString` and re-created inside the
editor frame, so it must not reference outer-scope variables, closures or imports — pass
everything it needs through `data`. The editor frame invokes it as
`callback(editor, asc, data)`:

- `editor` — the DocsAPI editor object (`window.DocEditor.instances[...]`). Call
  `editor.createConnector()` yourself to get a connector with `callCommand` /
  `executeMethod`; the SDK does not create one for you.
- `asc` — `window.Asc` of the editor frame. `asc.scope` is serialized into every
  `connector.callCommand(fn)` and is the way to pass data into Document Builder code.
- `data` — the `data` argument of this method, JSON-serialized.

#### Parameters

<APITable name="executeInEditor">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`editor`: `any`, `asc`: `any`, `data?`: `any`) => `void` | The function to run inside the editor context. Invoked as `callback(editor, asc, data)` — note that `data` is the **third** argument. |
| `data`? | `object` | Optional JSON-serializable data passed as the third argument to `callback`. |

</APITable>

#### Returns

`Promise`\<`object`\>

#### Examples

```typescript
instance.executeInEditor((editor, _asc, data) => {
  editor.insertText(data.text);
}, { text: 'Hello, World!' });
```

Initialize editor mode with [SDK.initEditor](SDK.md#initeditor) and inject content when the document is ready.
```typescript
const instance = sdk.initEditor({
  frameId: 'ds-editor',
  src: 'https://portal.example.com',
  id: 42,
  events: {
    onEditorOpen: () => {
      instance.executeInEditor((editor, _asc, data) => {
        editor.insertText(data.header);
      }, { header: 'Generated by SDK' });
    },
  },
});
```

Fill form fields with the Document Builder API through a connector. Data reaches the
`callCommand` function via `Asc.scope`; the function itself must be closure-free.
```typescript
instance.executeInEditor(function (editor, asc, data) {
  const connector = editor.createConnector();
  asc.scope = { values: data.values };
  connector.callCommand(function () {
    const doc = Api.GetDocument();
    for (const form of doc.GetAllForms()) {
      const value = Asc.scope.values[form.GetFormKey()];
      if (value === undefined) continue;
      if (form.GetFormType() === 'checkBoxForm') form.SetChecked(!!value);
      else form.SetText(String(value));
    }
  });
}, { values: { FullName: 'Jane Doe', Agree: true } });
```

***

### getConfig()

```ts
getConfig(): TFrameConfig;
```

Returns the current merged configuration object.

#### Returns

[`TFrameConfig`](../type-aliases/TFrameConfig.md)

The active [TFrameConfig](../type-aliases/TFrameConfig.md) for this instance.

#### Examples

```typescript
const config = instance.getConfig();
console.log(config.mode, config.src);
```

Preserve existing settings when making a partial update via [SDKInstance.setConfig](#setconfig).
```typescript
const config = instance.getConfig();
await instance.setConfig({ ...config, theme: Theme.Dark });
```

***

### getFiles()

```ts
getFiles(): Promise<TFilesResponse>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager), [SDKMode.Personal](../enumerations/SDKMode.md#Personal) and [SDKMode.Forms](../enumerations/SDKMode.md#Forms); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Returns the files in the folder currently open in the frame.

#### Returns

`Promise`\<[`TFilesResponse`](../type-aliases/TFilesResponse.md)\>

A promise that resolves with [TFilesResponse](../type-aliases/TFilesResponse.md).
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const files = await instance.getFiles();
console.log(files);
```

Open the first file in viewer mode via [SDKInstance.setConfig](#setconfig).
```typescript
const files = await instance.getFiles();
if (files.files[0]) {
  await instance.setConfig({ id: files.files[0].id, mode: SDKMode.Viewer }, true);
}
```

***

### getFolderInfo()

```ts
getFolderInfo(): Promise<TFolderInfo>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Returns metadata about the folder currently open in the frame.

#### Returns

`Promise`\<[`TFolderInfo`](../type-aliases/TFolderInfo.md)\>

A promise that resolves with [TFolderInfo](../type-aliases/TFolderInfo.md).
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const info = await instance.getFolderInfo();
console.log(info);
```

Check write access before calling [SDKInstance.createFolder](#createfolder).
```typescript
const info = await instance.getFolderInfo();
if (info.security?.create) {
  await instance.createFolder(info.id, 'Archive');
}
```

***

### getFolders()

```ts
getFolders(): Promise<TFilesResponse>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager), [SDKMode.Personal](../enumerations/SDKMode.md#Personal) and [SDKMode.Forms](../enumerations/SDKMode.md#Forms); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Returns the subfolders of the folder currently open in the frame.

#### Returns

`Promise`\<[`TFilesResponse`](../type-aliases/TFilesResponse.md)\>

A promise that resolves with [TFilesResponse](../type-aliases/TFilesResponse.md).
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const folders = await instance.getFolders();
console.log(folders);
```

Navigate into the first subfolder via [SDKInstance.setConfig](#setconfig).
```typescript
const folders = await instance.getFolders();
if (folders.folders[0]) {
  await instance.setConfig({ id: folders.folders[0].id }, true);
}
```

***

### getHashSettings()

```ts
getHashSettings(): Promise<THashSettings>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.System](../enumerations/SDKMode.md#System); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Returns the server's password hash settings needed by [SDKInstance.createHash](#createhash).

#### Returns

`Promise`\<[`THashSettings`](../type-aliases/THashSettings.md)\>

A promise that resolves with [THashSettings](../type-aliases/THashSettings.md).
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const settings = await instance.getHashSettings();
console.log(settings);
```

Full authentication flow using [SDKInstance.createHash](#createhash) and [SDKInstance.login](#login).
```typescript
const settings = await instance.getHashSettings();
const hash = await instance.createHash('p@ssw0rd', settings);
await instance.login('user@example.com', hash);
```

***

### getList()

```ts
getList(): Promise<TFilesResponse>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager), [SDKMode.Personal](../enumerations/SDKMode.md#Personal) and [SDKMode.Forms](../enumerations/SDKMode.md#Forms); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Returns all files and folders in the folder currently open in the frame.

Use [SDKInstance.getFiles](#getfiles) or [SDKInstance.getFolders](#getfolders)
when you need only one content type.

#### Returns

`Promise`\<[`TFilesResponse`](../type-aliases/TFilesResponse.md)\>

A promise that resolves with [TFilesResponse](../type-aliases/TFilesResponse.md).
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const list = await instance.getList();
console.log(list);
```

```typescript
const list = await instance.getList();
console.log('Files:', list.files.length, 'Folders:', list.folders.length);
```

***

### getRooms()

```ts
getRooms(filter: TFrameFilter): Promise<TRoomsResponse>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Returns a list of rooms, filtered by `filter`.

#### Parameters

<APITable name="getRooms">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filter` | [`TFrameFilter`](../type-aliases/TFrameFilter.md) | Filter and sort criteria. See [TFrameFilter](../type-aliases/TFrameFilter.md). |

</APITable>

#### Returns

`Promise`\<[`TRoomsResponse`](../type-aliases/TRoomsResponse.md)\>

A promise that resolves with [TRoomsResponse](../type-aliases/TRoomsResponse.md).
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const rooms = await instance.getRooms({
  search: 'alpha',
  sortBy: FilterSortBy.Name,
  sortOrder: FilterSortOrder.Ascending,
});
console.log(rooms);
```

Find rooms and remove an outdated tag from each using [SDKInstance.removeTagsFromRoom](#removetagsfromroom).
```typescript
const rooms = await instance.getRooms({ search: 'sprint-22' });
for (const room of rooms.folders) {
  await instance.removeTagsFromRoom(room.id, ['in-progress']);
}
```

The rooms of one room group ([TFrameFilter.groupId](../type-aliases/TFrameFilter.md#groupId)), e.g. the rooms attached to a deal.
```typescript
const deal = await instance.getRooms({ groupId: '42' });
console.log(deal.folders.map((room) => room.title));
```

***

### getSelection()

```ts
getSelection(): Promise<TFileInfo[]>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Returns the items currently selected in the frame.

#### Returns

`Promise`\<[`TFileInfo`](../type-aliases/TFileInfo.md)[]\>

A promise that resolves with an array of [TFileInfo](../type-aliases/TFileInfo.md).
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const selection = await instance.getSelection();
console.log(selection);
```

Pass the selection as context to [SDKInstance.openModal](#openmodal).
```typescript
const selection = await instance.getSelection();
if (selection.length > 0) {
  await instance.openModal('share', { items: selection });
}
```

***

### getUserInfo()

```ts
getUserInfo(): Promise<TUserInfo>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager), [SDKMode.System](../enumerations/SDKMode.md#System), [SDKMode.Personal](../enumerations/SDKMode.md#Personal) and [SDKMode.Forms](../enumerations/SDKMode.md#Forms); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Returns information about the currently authenticated user.

#### Returns

`Promise`\<[`TUserInfo`](../type-aliases/TUserInfo.md)\>

A promise that resolves with [TUserInfo](../type-aliases/TUserInfo.md).
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const user = await instance.getUserInfo();
console.log(user);
```

Apply the user's preferred locale via [SDKInstance.setConfig](#setconfig).
```typescript
const user = await instance.getUserInfo();
if (user.cultureName) {
  await instance.setConfig({ locale: user.cultureName });
}
```

***

### initFrame()

```ts
initFrame(config: TFrameConfig): HTMLIFrameElement | null;
```

Inserts the ONLYOFFICE Apps iframe into the DOM element identified by [TFrameConfig.frameId](../type-aliases/TFrameConfig.md#frameId).

Merges `config` with [defaultConfig](../variables/defaultConfig.md) and the instance's stored config,
replaces the target `<div>` with a container holding the iframe (and an optional loader),
attaches the `message` listener, and registers the instance in the global
`DocSpace.SDK.frames` registry.

Called automatically by [SDK.init](SDK.md#init). Call again to reinitialize in-place.

#### Parameters

<APITable name="initFrame">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

`HTMLIFrameElement` \| `null`

The created `<iframe>` element, or `null` if the target element was not found.

#### Examples

```typescript
const iframe = instance.initFrame({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
  mode: SDKMode.Viewer,
  id: 42,
});
```

With event handlers — see [TFrameEvents](../type-aliases/TFrameEvents.md) for the full list of available events.
```typescript
const iframe = instance.initFrame({
  frameId: 'ds-editor',
  src: 'https://portal.example.com',
  mode: SDKMode.Editor,
  id: 42,
  events: {
    onAppReady: () => console.log('ready'),
    onEditorOpen: () => console.log('document opened'),
    onEditorCloseCallback: () => history.back(),
  },
});
```

***

### login()

```ts
login(
   email: string, 
   passwordHash: string, 
   password?: string, 
   session?: boolean, 
   code?: string
): Promise<TLoginResult>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.System](../enumerations/SDKMode.md#System); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Authenticates a user using email and a hashed password.

Obtain `passwordHash` from [SDKInstance.createHash](#createhash). The portal's SDK dispatcher
(client 4.0.0) forwards only `email` and `passwordHash` to its sign-in and always requests a
persistent session; the REST endpoint behind it would also take a plaintext password and a
session flag, but neither reaches it from the frame.

:::note
A failed sign-in is **resolved, not rejected** — see [TLoginResult](../type-aliases/TLoginResult.md). `url === "/"` means a
session exists; a `url` under `/confirm/` means the account needs a second factor and no
session was created — call `login` again with the same credentials and the one-time `code`;
a `status` (`401` for wrong credentials) with a `message` means the attempt failed. Only SDK-side
failures reject: [SDKErrorCode.Timeout](../enumerations/SDKErrorCode.md#Timeout), [SDKErrorCode.Disconnected](../enumerations/SDKErrorCode.md#Disconnected),
[SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch) — the latter also in OAuth mode ([TFrameConfig.getToken](../type-aliases/TFrameConfig.md#getToken) or
[TFrameConfig.accessToken](../type-aliases/TFrameConfig.md#accessToken) set), where the host owns the session and no cookie sign-in is
possible. A portal whose SDK dispatcher predates the `code`
argument ignores it and answers the challenge again; on such a portal the login page remains
the only way to complete a two-factor sign-in.
:::

#### Parameters

<APITable name="login">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `email` | `string` | The user's email address. |
| `passwordHash` | `string` | The hashed password (from [SDKInstance.createHash](#createhash)). |
| `password`? | `string` | Not forwarded by the portal's SDK dispatcher (client 4.0.0); use `passwordHash`. |
| `session`? | `boolean` | Not forwarded by the portal's SDK dispatcher (client 4.0.0); the session is always persistent. |
| `code`? | `string` | One-time code from the authenticator app or SMS; finishes a login that answered with a `/confirm/…` url. |

</APITable>

#### Returns

`Promise`\<[`TLoginResult`](../type-aliases/TLoginResult.md)\>

A promise that resolves with the authentication result — see [TLoginResult](../type-aliases/TLoginResult.md).
  Unlike the other methods, a portal failure is resolved as `{ status, message }`, not rejected.

#### Examples

Login with a pre-hashed password from [SDKInstance.createHash](#createhash).
```typescript
const result = await instance.login('user@example.com', passwordHash);
if (result.status) throw new Error(result.message ?? 'login failed');
```

Two-factor sign-in using [SDKInstance.getHashSettings](#gethashsettings) and [SDKInstance.createHash](#createhash).
```typescript
const settings = await instance.getHashSettings();
const hash = await instance.createHash('p@ssw0rd', settings);
const first = await instance.login('user@example.com', hash);
if (first.url?.startsWith('/confirm/')) {
  const code = await askUserForCode();
  const second = await instance.login('user@example.com', hash, undefined, undefined, code);
  if (second.status) throw new Error('wrong code');
}
```

***

### logout()

```ts
logout(): Promise<object>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.System](../enumerations/SDKMode.md#System); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Ends the current user session.

In OAuth mode ([TFrameConfig.getToken](../type-aliases/TFrameConfig.md#getToken) or [TFrameConfig.accessToken](../type-aliases/TFrameConfig.md#accessToken) set) there is no
portal session to end: the frame authenticates every request with the host's token. The call
rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch); revoke the token on the host and call
[SDKInstance.destroyFrame](#destroyframe) instead.

#### Returns

`Promise`\<`object`\>

A promise that resolves with the logout result.
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure,
  and with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch) in OAuth mode.

#### Examples

```typescript
await instance.logout();
```

Log out and immediately authenticate as a different user using [SDKInstance.getHashSettings](#gethashsettings),
[SDKInstance.createHash](#createhash), and [SDKInstance.login](#login).
```typescript
await instance.logout();
const settings = await instance.getHashSettings();
const hash = await instance.createHash('newpassword', settings);
await instance.login('other@example.com', hash);
```

***

### navigateSection()

```ts
navigateSection(section: 
  | "my-forms"
  | "in-progress"
  | "completed-forms"
  | "library"
  | "settings"
  | "my-documents"
  | "favorites"
  | "recent"
  | "shared-with-me"
| "trash"): Promise<object>;
```

Navigates the frame to a specific section.
Works in [SDKMode.Forms](../enumerations/SDKMode.md#Forms) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal) modes.

#### Parameters

<APITable name="navigateSection">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `section` | \| `"my-forms"` \| `"in-progress"` \| `"completed-forms"` \| `"library"` \| `"settings"` \| `"my-documents"` \| `"favorites"` \| `"recent"` \| `"shared-with-me"` \| `"trash"` | Target section. For [SDKMode.Forms](../enumerations/SDKMode.md#Forms) — [TFormsSection](../type-aliases/TFormsSection.md); for [SDKMode.Personal](../enumerations/SDKMode.md#Personal) — [TPersonalSection](../type-aliases/TPersonalSection.md). |

</APITable>

#### Returns

`Promise`\<`object`\>

A promise that resolves when the navigation is complete.
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure,
  or with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch) in any other mode.

#### Examples

Forms mode.
```typescript
await instance.navigateSection("completed-forms");
```

Personal mode.
```typescript
const personal = sdk.initPersonal({
  frameId: 'ds-personal',
  src: 'https://portal.example.com',
});
await personal.navigateSection("trash");
```

***

### openModal()

```ts
openModal(type: string, options: object): Promise<object>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Opens a modal dialog of the specified type inside the frame.

#### Parameters

<APITable name="openModal">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The modal type identifier. |
| `options` | `object` | Modal-specific configuration options. |

</APITable>

#### Returns

`Promise`\<`object`\>

A promise that resolves with the modal result.
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
const result = await instance.openModal('invite', { roomId: 42 });
console.log(result);
```

Open a share dialog for the items currently selected in the frame using [SDKInstance.getSelection](#getselection).
```typescript
const selection = await instance.getSelection();
if (selection.length > 0) {
  await instance.openModal('share', { items: selection });
}
```

***

### removeTagsFromRoom()

```ts
removeTagsFromRoom(roomId: string, tags: string[]): Promise<object>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Removes the specified tags from a room.

#### Parameters

<APITable name="removeTagsFromRoom">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roomId` | `string` | The room ID. |
| `tags` | `string`[] | Tag names to remove. |

</APITable>

#### Returns

`Promise`\<`object`\>

A promise that resolves with the result of the operation.
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
await instance.removeTagsFromRoom('room-123', ['draft', 'in-progress']);
```

Find rooms by name and clean up a tag from each using [SDKInstance.getRooms](#getrooms).
```typescript
const rooms = await instance.getRooms({ search: 'sprint-22' });
for (const room of rooms.folders) {
  await instance.removeTagsFromRoom(room.id, ['in-progress']);
}
```

***

### setConfig()

```ts
setConfig(config?: TFrameConfig, reload?: boolean): Promise<object>;
```

Merges `config` into the stored config and sends it to the iframe.

When `reload` is `true`, reinitializes the iframe entirely via [SDKInstance.initFrame](#initframe)
instead of sending a postMessage update.

#### Parameters

<APITable name="setConfig">

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | `defaultConfig` | Partial frame configuration to merge. Defaults to [defaultConfig](../variables/defaultConfig.md). |
| `reload` | `boolean` | `false` | When `true`, reinitializes the frame. Defaults to `false`. |

</APITable>

#### Returns

`Promise`\<`object`\>

A promise that resolves with the iframe's response, or with the merged config if `reload` is `true`.
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
await instance.setConfig({ theme: Theme.Dark, locale: 'fr-FR' });
```

Switch to a different document while keeping existing settings —
read them first via [SDKInstance.getConfig](#getconfig).
```typescript
const current = instance.getConfig();
await instance.setConfig({ ...current, id: 99, mode: SDKMode.Editor }, true);
```

***

### setCustomActions()

```ts
setCustomActions(config: TCustomActionsConfig): Promise<object>;
```

Replaces the custom actions of the frame: context menu items for files, folders and rooms and
items of the create ("+") menu. Groups left out of `config` are cleared; pass `{}` to remove all items.
Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager), [SDKMode.Personal](../enumerations/SDKMode.md#Personal) and [SDKMode.Forms](../enumerations/SDKMode.md#Forms).
Room actions are shown in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) only, create menu items in [SDKMode.Manager](../enumerations/SDKMode.md#Manager)
and [SDKMode.Personal](../enumerations/SDKMode.md#Personal). When an action is clicked, [TFrameEvents.onCustomAction](../type-aliases/TFrameEvents.md#onCustomAction) fires
with a [TCustomActionEvent](../type-aliases/TCustomActionEvent.md). To show the items from the first render, set
[TFrameConfig.customActions](../type-aliases/TFrameConfig.md#customActions) instead.

#### Parameters

<APITable name="setCustomActions">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TCustomActionsConfig`](../type-aliases/TCustomActionsConfig.md) | Custom actions configuration. See [TCustomActionsConfig](../type-aliases/TCustomActionsConfig.md). |

</APITable>

#### Returns

`Promise`\<`object`\>

A promise that resolves when the actions are applied.
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure,
  or with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch) in any other mode.

#### Examples

```typescript
await instance.setCustomActions({
  contextMenu: {
    file: [
      { key: "send-to-crm", label: "Send to CRM", icon: "https://example.com/icon.svg" },
      { key: "export", label: "Export", extensions: ["pdf"] },
    ],
    room: [{ key: "unlink", label: "Unlink from deal", requireSecurity: ["EditRoom"] }],
  },
  createMenu: [{ key: "upload-from-crm", label: "Upload from CRM" }],
});
```

Handle the custom action event on the host page.
```typescript
const manager = sdk.initManager({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
  events: {
    onCustomAction: ({ action, items }) => console.log(action, items),
  },
});
await manager.setCustomActions({
  contextMenu: { file: [{ key: "approve", label: "Approve" }] },
});
```

***

### setIsLoaded()

```ts
setIsLoaded(): void;
```

Marks the frame as loaded: fades out the loader spinner, reveals the iframe,
and fires [TFrameEvents.onContentReady](../type-aliases/TFrameEvents.md#onContentReady).

The ONLYOFFICE Apps iframe calls this automatically once its content is ready, so most
integrations never need to. Call it manually to reveal the frame on your own schedule,
for example when the host page shows its own loading overlay. Every call re-applies the
iframe size and visibility and fires [TFrameEvents.onContentReady](../type-aliases/TFrameEvents.md#onContentReady); the loader is
removed by the first one.

#### Returns

`void`

#### Examples

```typescript
instance.setIsLoaded();
```

Reveal the frame from a host-side button instead of waiting for the iframe, then react
to the completion via [TFrameEvents.onContentReady](../type-aliases/TFrameEvents.md#onContentReady).
```typescript
const instance = sdk.initManager({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
  events: { onContentReady: () => console.log('Frame is visible') },
});

document.getElementById('show-frame').onclick = () => instance.setIsLoaded();
```

***

### setListView()

```ts
setListView(viewType: "row" | "table" | "tile"): Promise<object>;
```

Available in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) and [SDKMode.Personal](../enumerations/SDKMode.md#Personal); any other mode rejects with [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch).

Switches the file list display mode.

#### Parameters

<APITable name="setListView">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `viewType` | `"row"` \| `"table"` \| `"tile"` | The view mode: `"row"`, `"table"`, or `"tile"`. |

</APITable>

#### Returns

`Promise`\<`object`\>

A promise that resolves with the result of the operation.
  Rejects with [SDKError](SDKError.md) ([SDKErrorCode.ApiError](../enumerations/SDKErrorCode.md#ApiError)) when the portal reports a failure.

#### Examples

```typescript
await instance.setListView('table');
```

Switch to tile view only when in manager mode — read the current mode via [SDKInstance.getConfig](#getconfig).
```typescript
const { mode } = instance.getConfig();
if (mode === SDKMode.Manager) {
  await instance.setListView('tile');
}
```

***

### upload()

```ts
upload(file: File): Promise<object>;
```

Uploads a file into the frame's current location: the form filling room in
[SDKMode.Forms](../enumerations/SDKMode.md#Forms), the open folder in [SDKMode.Personal](../enumerations/SDKMode.md#Personal).
The file is transferred to the iframe via zero-copy ArrayBuffer and uploaded
using the chunked upload API. The file list refreshes automatically when complete.

#### Parameters

<APITable name="upload">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `file` | `File` | The file to upload. Callers should validate type and size before calling. |

</APITable>

#### Returns

`Promise`\<`object`\>

A promise that resolves with the [TUploadResult](../type-aliases/TUploadResult.md) of [TFrameEvents.onUploadSuccess](../type-aliases/TFrameEvents.md#onUploadSuccess),
  so a handler for that event is optional. Rejects with [SDKErrorCode.UploadFailed](../enumerations/SDKErrorCode.md#UploadFailed) on
  [TFrameEvents.onUploadError](../type-aliases/TFrameEvents.md#onUploadError) or after 120 seconds, [SDKErrorCode.ModeMismatch](../enumerations/SDKErrorCode.md#ModeMismatch) in any
  other mode, [SDKErrorCode.Disconnected](../enumerations/SDKErrorCode.md#Disconnected) before the frame is connected.

:::note
The entire file is read into memory via `arrayBuffer()` before transfer.
Callers should validate file size before invoking this method to avoid
excessive memory usage on the host page. The server-side upload limit
is configured in ONLYOFFICE Apps and will reject files that exceed it.

The ArrayBuffer is transferred to the iframe (zero-copy). After `upload()`
returns, the buffer is neutered and cannot be reused.

[TFrameConfig.methodTimeout](../type-aliases/TFrameConfig.md#methodTimeout) does not apply to the transfer, and
[TFrameEvents.onUploadProgress](../type-aliases/TFrameEvents.md#onUploadProgress) is not emitted for it.
:::

#### Examples

```typescript
const input = document.querySelector("input[type=file]");
const file = input.files[0];
const result = await instance.upload(file);
```

Upload with error handling.
```typescript
try {
  await forms.upload(file);
  console.log("Upload complete");
} catch (err) {
  console.error("Upload failed:", err.message);
}
```

## Properties

<APITable name="SDKInstance">

| Property | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | The iframe configuration options. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>
