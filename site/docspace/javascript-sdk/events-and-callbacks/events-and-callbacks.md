---
sidebar_position: 1
---

# Events and callbacks

The SDK reports what's happening inside the embedded frame through callbacks — there is no separate `addEventListener()`/`removeEventListener()` API. All events are attached through the `events` key of the frame config, either at initialization or later via `setConfig()`.

[TFrameEvents](../usage-sdk/type-aliases/TFrameEvents.md) types every handler the same way — `null | (e?) => void` — with no indication of what the callback actually receives or which embedding modes fire it. This page explains which mode each event is available in and the actual shape of its payload.

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
| `onFileManagerClick` | Manager, Public room | A file was clicked in the file list — see the note below, this one changes default behavior too. |
| `onEditorOpen` | Manager, Public room | A document was opened in the editor — see the note below, this one changes default behavior too. |
| `onEditorCloseCallback` | Editor, Viewer | The document editor was closed. |
| `onDownload` | Manager, Public room, Editor, Viewer | A download was requested (only fires when `downloadToEvent: true` is set). |
| `onNoAccess` | Manager, Public room, Chat | The target file/folder exists but isn't accessible to the current user (Manager, Public room); in Chat mode, fires when the current user can't use AI Chat (confirmed for AI disabled on the portal). |
| `onNotFound` | Manager, Public room | The target file/folder doesn't exist. |
| `onSignOut` | All modes | The user signed out. |
| `onCustomAction` | Forms | A custom context menu action (registered via `setCustomActions()`) was clicked. |
| `onNavigate` | Forms, Personal | The user navigated to a different section. |
| `onUploadSuccess` | Uploader, Forms | A file upload completed — only when the file was uploaded via [`upload()`](../embedding-modes/forms-mode.md#uploading-a-file-without-the-picker-dialog); see the note below. |
| `onUploadError` | Uploader, Forms | A file upload failed — same `upload()`-only scope as `onUploadSuccess`. |
| `onUploadProgress` | Uploader | Upload progress update — only fires for an `upload()`-initiated transfer. |
| `onGetExternalData` | Any mode | The frame asks the host to read a value from its own external storage (e.g. a "tour seen" flag). |
| `onSetExternalData` | Any mode | The frame asks the host to persist a value in external storage. |

Full type reference: [TFrameEvents](../usage-sdk/type-aliases/TFrameEvents.md).

:::note
`onFileManagerClick` and `onEditorOpen` don't just notify you that something happened — attaching a handler for either one **suppresses its default behavior** (normally, clicking a file opens it in a new browser tab, and opening a file for editing does the same). With a handler attached, your code decides what to do instead; remove the handler (see [Subscribing and updating handlers](#subscribing-and-updating-handlers) below) and the default behavior comes back.
:::

`onAuthError` only fires when the frame is configured for OAuth-based authentication — supplying a `getToken` (or `accessToken`) function in the config instead of relying on the session cookie. It fires when that callback throws, rejects, or returns nothing, so your application can re-authenticate or surface the failure. See [OAuth authentication](../get-started/authentication-security.md#oauth-authentication) for how to set this up.

`onContentReady` can fire more than once per frame instance — e.g. after signing out, the frame reloads to show the sign-in page, which triggers `onContentReady` again without a second `onAppReady`. `onAppReady` itself isn't strictly limited to firing once either: signing back in through that sign-in page triggers `onAppReady` a second time. Don't assume either event only fires once at startup.

`onAppError` is scoped to genuine SDK/init-level failures (bad `src`, CSP rejection, missing required config) — passing a nonexistent `id` (room/file/folder) does **not** trigger it. In [Manager mode](../embedding-modes/manager-mode.md) and [Public room mode](../embedding-modes/public-room-mode.md), the frame still initializes normally (`onAppReady` fires) and surfaces the problem via `onNoAccess`/`onNotFound` instead.

In [Public room mode](../embedding-modes/public-room-mode.md) specifically, `id` isn't just optional room-scoping — it's required config, and *omitting* it is different from passing a nonexistent one: the portal has nothing to render, the frame fails to load properly, and after the method timeout you get a generic `onAppError` rather than `onNoAccess`/`onNotFound`.

:::note
[Editor mode](../embedding-modes/editor-mode.md) and [Viewer mode](../embedding-modes/viewer-mode.md) have no equivalent fallback: passing a missing or nonexistent `id` there fires neither `onAppError` nor `onAppReady` nor any not-found signal — the frame just never finishes initializing from the host's point of view. Validate the file `id` before calling `initEditor`/`initViewer` if you need to handle this case; the SDK gives you nothing to react to otherwise.
:::

[Chat mode](../embedding-modes/chat-mode.md) has a related but different behavior: when the current user can't actually use the chat, the frame shows a no-access state — a chat history control with no composer. `onAppReady` still fires normally either way, but for the "AI disabled on the portal" case, `onNoAccess` also fires (with an empty payload) — attach a handler for it rather than trying to infer the no-access state from `onAppReady` alone.

`onCustomAction` is specific to [Forms mode](../embedding-modes/forms-mode.md) — see that page for `setCustomActions()` usage examples. `onNavigate` fires in both [Forms mode](../embedding-modes/forms-mode.md) and [Personal mode](../embedding-modes/personal-mode.md) — see either page for `navigateSection()` usage examples.

:::note
`onUploadSuccess`, `onUploadError`, and `onUploadProgress` only fire for an upload the host itself started with [`instance.upload()`](../embedding-modes/forms-mode.md#uploading-a-file-without-the-picker-dialog). A file added through the frame's own UI — the Uploader dialog, or dragging a file into the Forms UI — does not trigger them the same way: in Forms mode it doesn't trigger them at all, and in Uploader mode `onUploadSuccess` still fires but with a different, much larger payload (see below) than an `upload()`-initiated one.
:::

`onGetExternalData` and `onSetExternalData` are driven by the embedded app's own needs, not by anything the host requests — for example, the frame may use them to persist a "tour seen" flag. Return the stored value (or a `Promise` of it) from `onGetExternalData`; if you don't provide a handler, the frame gets `undefined` and may fall back to showing something again on every load.

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
| `onAppError` | An error message string (e.g. `"The current domain is not set in the Content Security Policy (CSP) settings."` on a CSP rejection). |
| `onAuthError` | `{ code?, message }` — details about why the access token couldn't be resolved. Only fires with OAuth-based authentication. |
| `onDownload` | The download URL as a plain string (only fires with `downloadToEvent: true`). |
| `onSignOut` | An empty object (`{}`) — treat it as a signal only, not a data source. |
| `onCloseCallback` | An empty object (`{}`) — treat it as a signal only, not a data source. |
| `onNoAccess` | An empty object (`{}`) — treat it as a signal only, not a data source. |
| `onCustomAction` | `{ action, type, item }` — `action` is the `key` you registered, `item` is the file/folder it was clicked on. |
| `onNavigate` | `{ section }` — the section the user navigated to (e.g. `"completed-forms"`). |
| `onUploadSuccess` | For an `upload()`-initiated transfer: `{ fileName, fileSize }`. For a file uploaded through the Uploader dialog itself: a much larger, differently-shaped object wrapping the created file's info (`[{ response: { file: {...} }, count, links, status, statusCode }]`) — don't assume one shape covers both cases. |
| `onUploadProgress` | `{ sessionId, fileName, uploadedChunks, totalChunks, percent }`. |
| `onGetExternalData` | `{ key, callId }` — return the value stored for `key` (sync or a `Promise`); the SDK correlates the response by `callId`. |
| `onSetExternalData` | `{ key, value }` — persist `value` under `key`; fire-and-forget, no response expected. |

`onFileManagerClick` and `onEditorOpen` both pass a large file object — close to the shape returned by the backend API, including `id`, `title`, `fileExst`, `webUrl`, `viewUrl`, `security`, `createdBy`, and dozens more properties. See [Get file information](../../api-backend/usage-api/get-file-info.api.mdx) for the full schema rather than guessing from a partial example. The two payloads aren't identical, though: `onEditorOpen`'s also includes an `action` field (e.g. `"edit"`, describing how the editor was opened) that `onFileManagerClick`'s doesn't have, while dropping a few fields `onFileManagerClick` does have (`contextOptions`, `isFolder`, `icon`, `href`, among others).

:::note
Clicking a file in the list only selects it and fires `onFileManagerClick` — it does not open the editor. `onEditorOpen` fires separately, when the file is actually opened (e.g. via the "Edit" context menu action, a double-click, or a hotkey).
:::

## Method-call errors

Unlike the lifecycle events above, a failing **instance method call** (`setConfig()`, `upload()`, `navigateSection()`, and so on) doesn't go through `events` at all — it rejects its own returned `Promise` with a structured `SDKError`: `{ code, message, recoverable }`. `code` is one of a fixed set of string values — `"TIMEOUT"`, `"DISCONNECTED"`, `"CSP_VIOLATION"`, `"MODE_MISMATCH"`, `"INVALID_CONFIG"`, `"UPLOAD_FAILED"`, `"PARSE_ERROR"`, `"TOKEN_RESOLVE_FAILED"` — branch on `code`, not on `message`, since `message` is a free-text description meant for logging, not for comparison.

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];
frame.setConfig({ theme: "Dark" }).catch(function (err) {
  if (err.code === "TIMEOUT") {
    console.warn("The frame didn't respond in time — retry?", err.recoverable);
  } else {
    console.error(`[${err.code}] ${err.message}`);
  }
});
```

:::note
If you're using the `<script>`-tag integration (as opposed to the npm package), `SDKError`/`SDKErrorCode` aren't exposed on `window.DocSpace` — only `window.DocSpace.SDK` is. Compare `err.code` against the string literal (as shown above) rather than trying to import the enum.
:::

A method call also fails if the iframe doesn't respond within `methodTimeout` milliseconds (default `30000`) — that specific call's `Promise` rejects with `{ code: "TIMEOUT", ... }`, and separately fires `onAppError` with the same message as a plain string.

:::warning
Not every failure follows the `SDKError` rejection pattern above. Mode-guards the SDK enforces itself — `setCustomActions()`/`upload()`/`navigateSection()` called in the wrong mode — do throw a proper `SDKError` with `code: "MODE_MISMATCH"`. But failures the DocSpace client app detects on its own side (an invalid parameter, a call that's meaningless in the current mode) can instead **resolve** the promise with a plain error value rather than rejecting it — this happens with `login()` (resolves with a raw Axios error object on some failures) and `createRoom()` (resolves with a raw Axios error object for an invalid `roomType`, and with the plain string `"Wrong method for this mode"` when called from a [System](../embedding-modes/system-mode.md) frame). `.catch()` alone won't catch these — check what a resolved value actually looks like before treating it as success, especially for methods whose validation happens on the DocSpace app side rather than in the SDK itself.
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

See also: [Manager mode](../embedding-modes/manager-mode.md), [Public room mode](../embedding-modes/public-room-mode.md).
