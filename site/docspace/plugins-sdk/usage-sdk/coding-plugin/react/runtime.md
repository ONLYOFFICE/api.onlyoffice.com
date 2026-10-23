---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/react/runtime.ts
---

# Runtime

What ONLYOFFICE Apps hands a React plugin component: the current selection, the
current user, and the clients the component reaches the portal with.

These are the return types of the hooks in [Hooks](hooks.md) — a plugin rarely
needs to import them by hand, but they document what each hook gives back.

## TCurrentFile

Metadata of the file, folder or room currently selected in the ONLYOFFICE Apps UI.
Returned by [`useCurrentFile`](hooks.md#usecurrentfile).

### Properties

import APITable from '@site/src/components/APITable/APITable';

<APITable name="TCurrentFile">

| Property | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` \| `number` | File, folder or room ID: a number, or a string in third-party storage. |
| `title` | `string` | Display name including extension, e.g. `"Report Q4.docx"`. |
| `fileExst` | `string` | File extension with the dot, e.g. `".docx"` — the spelling the portal stores and [`FilesExst`](../enums/Files.md) uses, so it compares directly against that enum. Present only for files. |
| `isFolder` | `boolean` | `true` when the selection is a folder (not a room). |
| `isRoom` | `boolean` | `true` when the selection is a room. |
| `roomType` | `string` | Room type, e.g. `"custom-room"` — a [`RoomsType`](../enums/Rooms.md#roomstype) value, so it compares directly against that enum. Present only for rooms. |

</APITable>

***

## TCurrentUser

Profile of the user currently authenticated in the portal.
Returned by [`useCurrentUser`](hooks.md#usecurrentuser).

### Properties

<APITable name="TCurrentUser">

| Property | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | Internal user GUID. |
| `displayName` | `string` | Full display name, e.g. `"Jane Smith"`. |
| `email` | `string` | Email address. |
| `isOwner` | `boolean` | `true` for the portal owner account. |
| `isAdmin` | `boolean` | `true` for full administrators. |
| `isRoomAdmin` | `boolean` | `true` for room administrators. |

</APITable>

***

## PluginRuntime

The full runtime context injected into every React plugin component by ONLYOFFICE Apps.
Access it directly via [`usePluginRuntime`](hooks.md#usepluginruntime) or use the focused hooks
([`useCurrentFile`](hooks.md#usecurrentfile), [`usePluginActions`](hooks.md#usepluginactions), etc.) for better readability.

### Properties

<APITable name="PluginRuntime">

| Property | Type | Description |
| ------ | ------ | ------ |
| `currentFile` | [`TCurrentFile`](#tcurrentfile) \| `null` | The file, folder or room currently selected in the portal UI. `null` when nothing is selected. |
| `currentUser` | [`TCurrentUser`](#tcurrentuser) \| `null` | The authenticated portal user. `null` while the user profile is loading. |
| `actions` | [`PluginActions`](actions.md) | Portal-side UI actions (toasts, modals, navigation, …). |
| `api` | [`PluginAPIClient`](api.md#pluginapiclient) | Typed HTTP client scoped to the current portal. |
| `settings` | [`PluginSettingsClient`](settings.md) | Client for persisting and retrieving plugin settings. |

</APITable>
