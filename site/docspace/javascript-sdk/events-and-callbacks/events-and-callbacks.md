---
sidebar_position: 1
---

# Events and callbacks

The SDK reports what's happening inside the embedded frame through callbacks — there is no separate `addEventListener()`/`removeEventListener()` API. All events are attached through the `events` key of the frame config, either at initialization or later via `setConfig()`.

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  events: {
    onAppReady: function () {
      console.log("Frame ready");
    },
  },
});
```

:::note
This page covers the vanilla JS SDK's `events` config, used the same way across every `init*()` method (`initManager`, `initEditor`, `initViewer`, selectors, `initSystem`, `initUploader`). The separate [React component](../samples/react-samples.md) has its own convention for wiring up handlers — check that page if you're using `@onlyoffice/docspace-react` instead of the SDK directly.
:::

## Available events

| Event | Available in | Description |
| ------- | ------------- | ------------- |
| `onAppReady` | All modes | The frame finished initializing successfully. |
| `onAppError` | All modes | The frame failed to initialize. |
| `onAuthSuccess` | All modes | The user was authenticated successfully. |
| `onAuthError` | All modes | The SDK couldn't resolve an access token — only fires with OAuth-based authentication, see below. |
| `onContentReady` | All modes | The frame's content has loaded. |
| `onCloseCallback` | Room selector, File selector | The selector was closed or the selection was canceled. |
| `onSelectCallback` | Room selector, File selector | A room or file was selected. |
| `onFileManagerClick` | Manager | A file was clicked in the file list — see the note below, this one changes default behavior too. |
| `onEditorOpen` | Manager | A document was opened in the editor — see the note below, this one changes default behavior too. |
| `onEditorCloseCallback` | Editor, Viewer | The document editor was closed. |
| `onDownload` | Manager, Editor, Viewer | A download was requested (only fires when `downloadToEvent: true` is set). |
| `onNoAccess` | Manager | The target file/folder exists but isn't accessible to the current user. |
| `onNotFound` | Manager | The target file/folder doesn't exist. |
| `onSignOut` | All modes | The user signed out. |

Full type reference: [TFrameEvents](../usage-sdk/type-aliases/TFrameEvents.md).

:::note
`onFileManagerClick` and `onEditorOpen` don't just notify you that something happened — attaching a handler for either one **suppresses its default behavior** (normally, clicking a file opens it in a new browser tab, and opening a file for editing does the same). With a handler attached, your code decides what to do instead; remove the handler (see [Subscribing and updating handlers](#subscribing-and-updating-handlers) below) and the default behavior comes back.
:::

`onAuthError` only fires when the frame is configured for OAuth-based authentication — supplying a `getToken` (or `accessToken`) function in the config instead of relying on the session cookie. It fires when that callback throws, rejects, or returns nothing, so your application can re-authenticate or surface the failure. See [OAuth authentication](../get-started/authentication-security.md#oauth-authentication) for how to set this up.

`onContentReady` can fire more than once per frame instance — e.g. after signing out, the frame reloads to show the sign-in page, which triggers `onContentReady` again without a second `onAppReady`. `onAppReady` itself isn't strictly limited to firing once either: signing back in through that sign-in page triggers `onAppReady` a second time. Don't assume either event only fires once at startup.

`onAppError` is scoped to genuine SDK/init-level failures (bad `src`, CSP rejection, missing required config) — passing a nonexistent `id` (room/file/folder) does **not** trigger it. The frame still initializes normally; whatever "not found" state exists is handled inside the frame's own content, not surfaced as an app error. If you need to react to a missing/inaccessible target specifically, use `onNoAccess`/`onNotFound` (available in [Manager mode](../embedding-modes/manager-mode.md)) rather than `onAppError`.

## Subscribing and updating handlers

Pass handlers in the `events` object when you initialize a frame:

```javascript
const docSpace = DocSpace.SDK.initEditor({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
  events: {
    onAppReady: function () {
      console.log("Editor ready");
    },
    onEditorCloseCallback: function () {
      window.location.href = "/documents";
    },
  },
});
```

To change handlers on a frame that's already running, call `setConfig()` on its instance:

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];
await frame.setConfig({
  events: {
    onAppReady: function () {
      console.log("New handler attached");
    },
  },
});
```

Each event's type is `null | ((e?) => void)` — pass `null` for a given event key to detach a handler:

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];
await frame.setConfig({
  events: {
    onFileManagerClick: null,
  },
});
```

## Event payloads

Most events are simple lifecycle signals and are called with no arguments at all. A few pass along data about what happened:

| Event | Payload |
| ------- | ------------- |
| `onAppReady` | `{ frameId }` — the ID of the frame that just finished initializing. |
| `onContentReady` | No payload (`undefined`). Fires shortly after `onAppReady`. |
| `onSelectCallback` | Depends on the mode: in Room selector, an **array** containing one room object (`{ id, label, title, security, tags, ... }`); in File selector, a **single** file object (`{ id, title, fileExst, fileType, viewUrl, ... }` — no `label` here). |
| `onEditorOpen` | The file that was opened — the full file object (see below). |
| `onFileManagerClick` | The file that was clicked — the full file object (see below). |
| `onAppError` | An error value — treat it as opaque and log it; no specific shape is documented. |
| `onAuthError` | `{ code?, message }` — details about why the access token couldn't be resolved. Only fires with OAuth-based authentication. |
| `onDownload` | The download URL as a plain string (only fires with `downloadToEvent: true`). |
| `onSignOut` | An empty object (`{}`) — treat it as a signal only, not a data source. |
| `onCloseCallback` | An empty object (`{}`) — treat it as a signal only, not a data source. |

`onFileManagerClick` and `onEditorOpen` both pass a large file object — close to the shape returned by the backend API, including `id`, `title`, `fileExst`, `webUrl`, `viewUrl`, `security`, `createdBy`, and dozens more properties. See [Get file information](../../api-backend/usage-api/get-file-info.api.mdx) for the full schema rather than guessing from a partial example. The two payloads aren't identical, though: `onEditorOpen`'s also includes an `action` field (e.g. `"edit"`, describing how the editor was opened) that `onFileManagerClick`'s doesn't have, while dropping a few fields `onFileManagerClick` does have (`contextOptions`, `isFolder`, `icon`, `href`, among others).

:::note
Clicking a file in the list only selects it and fires `onFileManagerClick` — it does not open the editor. `onEditorOpen` fires separately, when the file is actually opened (e.g. via the "Edit" context menu action, a double-click, or a hotkey).
:::

## Common patterns

### Reacting to a file selection

```javascript
const selector = DocSpace.SDK.initFileSelector({
  frameId: "ds-selector",
  src: "https://your-docspace.com",
  events: {
    onSelectCallback: function (file) {
      console.log("Selected:", file.title, file.id);
      attachFileToRecord(file.id, file.title);
      selector.destroyFrame();
    },
    onCloseCallback: function () {
      selector.destroyFrame();
    },
  },
});
```

### Reacting to a room selection

Room selector's payload is an array — index into it rather than treating it as a single object:

```javascript
const selector = DocSpace.SDK.initRoomSelector({
  frameId: "ds-selector",
  src: "https://your-docspace.com",
  events: {
    onSelectCallback: function (rooms) {
      const room = rooms[0];
      console.log("Selected room:", room.label, room.id);
      linkRoomToTask(room.id, room.label);
      selector.destroyFrame();
    },
    onCloseCallback: function () {
      selector.destroyFrame();
    },
  },
});
```

See also: [File selector mode](../embedding-modes/file-selector-mode.md), [Room selector mode](../embedding-modes/room-selector-mode.md).

### Redirecting after the editor closes

```javascript
const docSpace = DocSpace.SDK.initEditor({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
  events: {
    onEditorCloseCallback: function () {
      window.location.href = "/documents";
    },
  },
});
```

See also: [Editor mode](../embedding-modes/editor-mode.md).

### Handling inaccessible or missing content

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-room-id",
  events: {
    onNoAccess: function () {
      document.getElementById("ds-frame").innerHTML =
        "You do not have permission to access this room.";
    },
    onNotFound: function () {
      document.getElementById("ds-frame").innerHTML =
        "This room no longer exists.";
    },
  },
});
```

See also: [Manager mode](../embedding-modes/manager-mode.md).
