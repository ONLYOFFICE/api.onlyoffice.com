---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/sdk/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# SDK

Manages multiple [SDKInstance](SDKInstance.md) objects and provides convenience wrappers
for each [SDKMode](../enumerations/SDKMode.md).

Calling any `init*` method with a `frameId` that already exists reinitializes
the existing instance; otherwise a new instance is created and stored in [SDK.frames](#SDK-frames).

## Example

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const instance = sdk.initManager({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
});
```

## Constructors

### Constructor

```ts
new SDK(): SDK;
```

#### Returns

`SDK`

## Methods

### init()

```ts
init(config: TFrameConfig): SDKInstance;
```

Core factory method. Creates a new [SDKInstance](SDKInstance.md) for the given config,
or reinitializes the existing one if `frameId` is already in [SDK.frames](#SDK-frames).
Stores the result in [SDK.frames](#SDK-frames).

Prefer the mode-specific wrappers ([SDK.initManager](#initmanager), [SDK.initEditor](#initeditor), etc.)
which set `mode` automatically.

#### Parameters

<APITable name="init">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The created or reinitialized [SDKInstance](SDKInstance.md).

#### Example

```typescript
import { SDK, SDKMode } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();

// Create a manager instance
const instance = sdk.init({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
  mode: SDKMode.Manager,
});

// Reinitialize the same frame in a different mode — sdk.frames['ds-frame'] is reused
sdk.init({ frameId: 'ds-frame', src: 'https://portal.example.com', mode: SDKMode.Editor, id: 42 });
```

***

### initChat()

```ts
initChat(config: TFrameConfig): SDKInstance;
```

Initializes a frame in [SDKMode.Chat](../enumerations/SDKMode.md#Chat) mode — a full-page AI chat interface.
The chat is bound to the AI agent when [TFrameConfig.agentId](../type-aliases/TFrameConfig.md#agentId) is set;
otherwise it is bound to the current user. Forces `mode` to [SDKMode.Chat](../enumerations/SDKMode.md#Chat).

:::note
The page renders a composer only when the frame's user is signed in and is not a guest,
and the portal has AI enabled. Otherwise it shows a no-access state (a "Chat history"
control without an input) and fires no event — [TFrameEvents.onAppReady](../type-aliases/TFrameEvents.md#onAppReady) still
arrives. In OAuth mode the token must carry the scopes that read the user's profile;
a token that cannot load the profile lands in the same no-access state.
:::

#### Parameters

<APITable name="initChat">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized [SDKInstance](SDKInstance.md).

#### Example

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const chat = sdk.initChat({
  frameId: 'ds-chat',
  src: 'https://portal.example.com',
  agentId: 123,
  events: {
    onAppReady: () => console.log('chat ready'),
  },
});
```

***

### initEditor()

```ts
initEditor(config: TFrameConfig): SDKInstance;
```

Initializes a frame in [SDKMode.Editor](../enumerations/SDKMode.md#Editor) mode — full document editor.
Forces `mode` to [SDKMode.Editor](../enumerations/SDKMode.md#Editor). Requires [TFrameConfig.id](../type-aliases/TFrameConfig.md#id).

#### Parameters

<APITable name="initEditor">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized [SDKInstance](SDKInstance.md).

#### Example

```typescript
import { SDK, EditorType } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const instance = sdk.initEditor({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
  id: 42,
  editorType: EditorType.Desktop,
  editorCustomization: { autosave: true, forcesave: true },
  events: {
    onAppReady: () => console.log('ready'),
    onEditorCloseCallback: () => history.back(),
  },
});
```

***

### initFileSelector()

```ts
initFileSelector(config: TFrameConfig): SDKInstance;
```

Initializes a frame in [SDKMode.FileSelector](../enumerations/SDKMode.md#FileSelector) mode — a dialog for selecting a file.
Forces `mode` to [SDKMode.FileSelector](../enumerations/SDKMode.md#FileSelector).
The selected file is returned via [TFrameEvents.onSelectCallback](../type-aliases/TFrameEvents.md#onSelectCallback).

#### Parameters

<APITable name="initFileSelector">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized [SDKInstance](SDKInstance.md).

#### Example

```typescript
import { SDK, SelectorFilterType } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const instance = sdk.initFileSelector({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
  selectorType: SelectorFilterType.UserOnly,
  withBreadCrumbs: true,
  withSearch: true,
  events: {
    onSelectCallback: (file) => console.log('selected:', file),
    onCloseCallback: () => console.log('cancelled'),
  },
});
```

***

### initForms()

```ts
initForms(config: TFrameConfig): SDKInstance;
```

Initializes a frame in [SDKMode.Forms](../enumerations/SDKMode.md#Forms) mode — a forms gallery for the room specified by [TFrameConfig.id](../type-aliases/TFrameConfig.md#id).
Forces `mode` to [SDKMode.Forms](../enumerations/SDKMode.md#Forms). Sets `showMenu` to `true` by default.

#### Parameters

<APITable name="initForms">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized [SDKInstance](SDKInstance.md).

#### Example

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const forms = sdk.initForms({
  frameId: 'ds-forms',
  src: 'https://portal.example.com',
  id: 'room-id',
  showMenu: true,
  events: {
    onCustomAction: (data) => console.log('action:', data),
  },
});
```

***

### ~~initFrame()~~

```ts
initFrame(config: TFrameConfig): SDKInstance;
```

#### Parameters

<APITable name="initFrame">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The created or reinitialized [SDKInstance](SDKInstance.md).

#### Deprecated

Use [SDK.init](#init) or a mode-specific wrapper instead.

***

### initManager()

```ts
initManager(config: TFrameConfig): SDKInstance;
```

Initializes a frame in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) mode — a file/folder browser
with full CRUD operations on rooms, folders, and files.
Forces `mode` to [SDKMode.Manager](../enumerations/SDKMode.md#Manager).

#### Parameters

<APITable name="initManager">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized [SDKInstance](SDKInstance.md).

#### Example

```typescript
import { SDK, ManagerViewMode, FilterSortBy, FilterSortOrder } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const instance = sdk.initManager({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
  viewAs: ManagerViewMode.Table,
  showFilter: true,
  showMenu: true,
  filter: { sortBy: FilterSortBy.Name, sortOrder: FilterSortOrder.Ascending },
  events: {
    onAppReady: () => console.log('ready'),
    onFileManagerClick: (item) => console.log('clicked:', item),
  },
});
```

***

### initPersonal()

```ts
initPersonal(config: TFrameConfig): SDKInstance;
```

Initializes a frame in [SDKMode.Personal](../enumerations/SDKMode.md#Personal) mode — a file/folder manager for the
user's personal space: My Documents, Favorites, Recent, and Trash. The initial
section is controlled by [TFrameConfig.personalDestination](../type-aliases/TFrameConfig.md#personalDestination).

Forces `mode` to [SDKMode.Personal](../enumerations/SDKMode.md#Personal). Defaults `showMenu` and `infoPanelVisible` to `true`.

#### Parameters

<APITable name="initPersonal">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized [SDKInstance](SDKInstance.md).

#### Example

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const personal = sdk.initPersonal({
  frameId: 'ds-personal',
  src: 'https://portal.example.com',
  personalDestination: 'favorites',
  events: {
    onAppReady: () => console.log('ready'),
    onNavigate: (data) => console.log('section:', data.section),
    onFileManagerClick: (file) => console.log('opened file:', file),
  },
});
```

***

### initPublicRoom()

```ts
initPublicRoom(config: TFrameConfig): SDKInstance;
```

Initializes a frame in [SDKMode.PublicRoom](../enumerations/SDKMode.md#PublicRoom) mode — anonymous access to view,
edit, comment on, and review documents in a public room.
Forces `mode` to [SDKMode.PublicRoom](../enumerations/SDKMode.md#PublicRoom). Requires [TFrameConfig.requestToken](../type-aliases/TFrameConfig.md#requestToken).

#### Parameters

<APITable name="initPublicRoom">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized [SDKInstance](SDKInstance.md).

#### Examples

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const instance = sdk.initPublicRoom({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
  requestToken: 'public-room-token',
  events: {
    onAppReady: () => console.log('ready'),
  },
});
```

With filter and header options.
```typescript
const instance = sdk.initPublicRoom({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
  requestToken: 'public-room-token',
  showFilter: true,
  showHeader: true,
});
```

***

### initRoomSelector()

```ts
initRoomSelector(config: TFrameConfig): SDKInstance;
```

Initializes a frame in [SDKMode.RoomSelector](../enumerations/SDKMode.md#RoomSelector) mode — a dialog for selecting a room.
Forces `mode` to [SDKMode.RoomSelector](../enumerations/SDKMode.md#RoomSelector).
The selected room is returned via [TFrameEvents.onSelectCallback](../type-aliases/TFrameEvents.md#onSelectCallback).

#### Parameters

<APITable name="initRoomSelector">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized [SDKInstance](SDKInstance.md).

#### Example

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const instance = sdk.initRoomSelector({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
  showSelectorHeader: true,
  showSelectorCancel: true,
  events: {
    onSelectCallback: (room) => console.log('selected:', room),
    onCloseCallback: () => console.log('cancelled'),
  },
});
```

***

### initSystem()

```ts
initSystem(config: TFrameConfig): SDKInstance;
```

Initializes a frame in [SDKMode.System](../enumerations/SDKMode.md#System) mode — a blank page with a loader,
used to call system methods ([SDKInstance.login](SDKInstance.md#login), [SDKInstance.logout](SDKInstance.md#logout),
[SDKInstance.getUserInfo](SDKInstance.md#getuserinfo)) without rendering any ONLYOFFICE Apps UI.
Forces `mode` to [SDKMode.System](../enumerations/SDKMode.md#System).

#### Parameters

<APITable name="initSystem">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized [SDKInstance](SDKInstance.md).

#### Example

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const system = sdk.initSystem({
  frameId: 'ds-system',
  src: 'https://portal.example.com',
  events: { onAppReady: () => console.log('system ready') },
});

system.getUserInfo().then((user) => console.log('current user:', user));
```

***

### initUploader()

```ts
initUploader(config: TFrameConfig): SDKInstance;
```

Initializes a frame in [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader) mode — a file upload interface.
Forces `mode` to [SDKMode.Uploader](../enumerations/SDKMode.md#Uploader). Requires [TFrameConfig.id](../type-aliases/TFrameConfig.md#id)
(the target folder ID).

#### Parameters

<APITable name="initUploader">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized [SDKInstance](SDKInstance.md).

#### Example

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const uploader = sdk.initUploader({
  frameId: 'ds-uploader',
  src: 'https://portal.example.com',
  id: 'folder-id',
  acceptExtensions: '.docx,.xlsx,.pdf',
  isMultipleUpload: true,
  events: {
    onUploadSuccess: (file) => console.log('uploaded:', file),
    onUploadError: (err) => console.error('error:', err),
  },
});
```

***

### initViewer()

```ts
initViewer(config: TFrameConfig): SDKInstance;
```

Initializes a frame in [SDKMode.Viewer](../enumerations/SDKMode.md#Viewer) mode — read-only document viewer.
Forces `mode` to [SDKMode.Viewer](../enumerations/SDKMode.md#Viewer). Requires [TFrameConfig.id](../type-aliases/TFrameConfig.md#id).

#### Parameters

<APITable name="initViewer">

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config` | [`TFrameConfig`](../type-aliases/TFrameConfig.md) | Frame configuration. See [TFrameConfig](../type-aliases/TFrameConfig.md). |

</APITable>

#### Returns

[`SDKInstance`](SDKInstance.md)

The initialized [SDKInstance](SDKInstance.md).

#### Example

```typescript
import { SDK } from '@onlyoffice/docspace-sdk-js';

const sdk = new SDK();
const instance = sdk.initViewer({
  frameId: 'ds-frame',
  src: 'https://portal.example.com',
  id: 42,
  events: {
    onAppReady: () => console.log('ready'),
    onNoAccess: () => console.warn('access denied'),
    onNotFound: () => console.warn('document not found'),
  },
});
```

## Properties

<APITable name="SDK">

| Property | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `frames` | `Record`\<`string`, [`SDKInstance`](SDKInstance.md)\> | `{}` | Registry of all active instances, keyed by [TFrameConfig.frameId](../type-aliases/TFrameConfig.md#frameId). Updated automatically by every `init*` call. |

</APITable>
