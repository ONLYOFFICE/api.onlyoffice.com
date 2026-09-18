---
sidebar_position: 10
---

# Public room mode

Public room mode embeds a specific DocSpace room for anonymous viewers — no DocSpace account or sign-in required. Access is scoped to that one room through a `requestToken`, and depending on the token's permissions, users can view, edit, comment on, and review documents inside it.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initPublicRoom({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  requestToken: "your-request-token",
  id: "your-room-or-folder-id",
});
```

The parameters `frameId`, `src`, `requestToken`, and `id` are required — `id` is the room (or a folder inside it) to open, and without it the portal has nothing to render and fails. All other parameters are optional and have sensible defaults.

For how to obtain a `requestToken` and how to handle it securely, see [Token-based auth for public rooms](../get-started/authentication-security.md#token-based-auth-for-public-rooms).

## Configuration, events, and methods

`initPublicRoom()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md).

:::note
Editing is scoped to documents within the room — a Public room frame can't navigate outside the room `requestToken` was issued for.
:::

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

### Showing filter controls and the mobile header

`showFilter`, `showHeader`, and `showTitle` are also available in Public room mode:

```javascript
const docSpace = DocSpace.SDK.initPublicRoom({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  requestToken: "your-request-token",
  id: "your-room-or-folder-id",
  showFilter: true,
  showHeader: true,
});
```
