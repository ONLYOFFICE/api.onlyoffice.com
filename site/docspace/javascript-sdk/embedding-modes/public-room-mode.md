---
sidebar_position: 10
---

# Public room mode

Public room mode embeds a specific ONLYOFFICE Apps room for anonymous viewers — no ONLYOFFICE Apps account or sign-in required. Access is scoped to that one room through a `requestToken`, and depending on the external link's access level (set on the portal — see [Set the room external or invitation link](/docspace/api-backend/usage-api/rooms/set-room-link.md)), users can view, edit, comment on, and review documents inside it.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initPublicRoom({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  requestToken: "your-request-token",
  id: "your-room-or-folder-id",
});
```

The parameters `frameId`, `src`, `requestToken`, and `id` are required — `id` is the room (or a folder inside it) to open. Without `id`, the portal's own folder lookup has nothing to resolve and renders an "Invalid link" error page instead of the room — `onAppReady` never fires in that case. All other parameters are optional and have sensible defaults.

For how to obtain a `requestToken` and how to handle it securely, see [Token-based auth for public rooms](../get-started/authentication-security.md#token-based-auth-for-public-rooms).

## Configuration, events, and methods

`initPublicRoom()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md).

:::note
Editing is scoped to documents within the room — a Public room frame can't navigate outside the room `requestToken` was issued for.
:::

`onNoAccess`, `onNotFound`, `onFileManagerClick`, `onEditorOpen`, and `onDownload` (with `downloadToEvent: true`) are all available in Public room mode, same as in Manager mode. `onFilterSearch` fires with `{ search }` whenever a visitor changes the file list's search text (an empty string when they clear it). See [Events and callbacks](../events-and-callbacks/events-and-callbacks.md) for availability and payload details.

## Use cases

### Opening a specific folder inside the room

`id` also accepts a folder ID to land on a subfolder within the room instead of its root:

```javascript
const docSpace = DocSpace.SDK.initPublicRoom({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  requestToken: "your-request-token",
  id: "your-folder-id",
});
```

### Showing filter controls

Filter controls are hidden by default, same as in Manager mode — pass `showFilter: true` to show them:

```javascript
const docSpace = DocSpace.SDK.initPublicRoom({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  requestToken: "your-request-token",
  id: "your-room-or-folder-id",
  showFilter: true,
});
```

`showTitle` (the room/folder title, shown by default) works the same way here too. The other Manager-mode toggles in [Hiding UI elements and frame layout](../customization/ui-elements.md#manager-mode), including `showHeader`, aren't read in Public room mode.
