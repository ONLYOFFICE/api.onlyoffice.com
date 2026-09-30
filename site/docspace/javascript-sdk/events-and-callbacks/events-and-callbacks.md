---
sidebar_position: 1
---

# Events and callbacks

The SDK reports what's happening inside the embedded frame through callbacks — there is no separate `addEventListener()`/`removeEventListener()` API. All events are attached through the `events` key of the frame config, either at initialization or later via `setConfig()`.

[TFrameEvents](../usage-sdk/type-aliases/TFrameEvents.md) types most handlers with their actual payload shape now (`onAppReady`'s `{ frameId }`, `onSelectCallback`'s `TSelectedRoom[] | TSelectedFile`, `onEditorOpen`'s `TEditorOpenPayload`, `onFileManagerClick`'s `TFileInfo`, the upload events, `onNavigate`, `onCustomAction`, `onAuthError`), but it never says which embedding modes actually fire a given event — that's what this page adds.

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
This page covers the vanilla JS SDK's `events` config, used the same way across every `init*()` method (`initManager`, `initEditor`, `initViewer`, selectors, `initSystem`, `initUploader`, `initPublicRoom`, `initForms`, `initChat`, `initPersonal`). The separate [React component](../samples/react-samples.md) has its own convention for wiring up handlers — check that page if you're using `@onlyoffice/docspace-react` instead of the SDK directly.
:::

## Available events

| Event | Available in | Description |
| ------- | ------------- | ------------- |
| `onAppReady` | All modes | The frame finished initializing successfully. |
| `onAppError` | All modes | The frame failed to initialize. |
| `onAuthSuccess` | All modes | Fires only from DocSpace's own confirm-by-link authentication page (`/confirm/Auth`, reached when that page loads inside the iframe) — not for regular session sign-in, and never in [OAuth mode](../get-started/authentication-security.md#oauth-authentication). |
| `onAuthError` | All modes | An OAuth token problem (one of four error codes) — only fires with OAuth-based authentication, see below. |
| `onContentReady` | All modes | The frame's content has loaded. |
| `onCloseCallback` | Room selector, File selector | The selector was closed or the selection was canceled. |
| `onSelectCallback` | Room selector, File selector | A room or file was selected. |
| `onFileManagerClick` | Manager, Public room, Forms, Personal | A file was clicked in the file list — see the note below, this one changes default behavior too. |
| `onEditorOpen` | Manager, Public room, Personal | A document was opened in the editor — see the note below, this one changes default behavior too. Not fired in Forms mode, unlike `onFileManagerClick`. |
| `onEditorCloseCallback` | Editor, Viewer | The document editor was closed. |
| `onDownload` | Manager, Public room, Personal | A download was requested (only fires when `downloadToEvent: true` is set). Not fired in Editor or Viewer mode — nothing in those modes calls the client's download helper with this signal. |
| `onNoAccess` | Manager, Public room, Chat | The target file/folder exists but isn't accessible to the current user (Manager, Public room); in Chat mode, fires when there's no signed-in, non-guest user — see [Chat mode](../embedding-modes/chat-mode.md) for the exact condition (it's not about AI being disabled on the portal, which hides the composer but fires no event of its own). |
| `onNotFound` | Manager, Public room | The target file/folder doesn't exist. |
| `onSignOut` | Manager, Editor, Viewer, Room selector, File selector, System, Uploader | The user signed out — either through the portal's own profile-menu "Log out" action or the [`logout()`](../usage-sdk/classes/SDKInstance.md#logout) instance method. Not fired in Forms, Chat, Personal, or Public room mode — those don't have a sign-out UI element or a `logout` command handler wired up on the client side. |
| `onCustomAction` | Manager, Personal, Forms | A custom context menu or create-menu action (registered via `customActions` or `setCustomActions()`) was clicked. |
| `onNavigate` | Forms, Personal | The user navigated to a different section. |
| `onUploadSuccess` | Uploader, Forms, Personal | A file upload completed. In Forms and Personal mode, only for an [`upload()`](../embedding-modes/forms-mode.md#uploading-a-file-without-the-picker-dialog)-initiated transfer; in Uploader mode, only for a native upload through its own dialog. |
| `onUploadError` | Uploader, Forms, Personal | A file upload failed — same per-mode scope as `onUploadSuccess`. |
| `onUploadProgress` | Uploader | Upload progress update — only fires for a native upload through Uploader mode's own dialog, per chunk. Never fires for an `upload()`-initiated transfer (Uploader mode doesn't support `upload()`, and Forms/Personal don't send progress updates for their own upload paths). |
| `onGetExternalData` | Any mode | The frame asks the host to read a value from its own external storage (e.g. a "tour seen" flag). |
| `onSetExternalData` | Any mode | The frame asks the host to persist a value in external storage. |

Full type reference: [TFrameEvents](../usage-sdk/type-aliases/TFrameEvents.md).

:::note
`onFileManagerClick` and `onEditorOpen` don't just notify you that something happened — attaching a handler for either one **suppresses its default behavior** (normally, clicking a file opens it in a new browser tab, and opening a file for editing does the same). With a handler attached, your code decides what to do instead; remove the handler (see [Subscribing and updating handlers](#subscribing-and-updating-handlers) below) and the default behavior comes back.
:::

`onAuthError` only fires when the frame is configured for OAuth-based authentication — supplying a `getToken` (or `accessToken`) function in the config instead of relying on the session cookie. Its `code` identifies what went wrong: an unresolved or unavailable token, a failed refresh, or a portal `401` that survived a fresh one. `login()`/`logout()` also become unavailable in this mode — both reject instead of running. See [OAuth authentication](../get-started/authentication-security.md#oauth-authentication) for the full list of codes and how to set this up.

`onContentReady` can fire more than once per frame instance — e.g. after signing out, the frame reloads to show the sign-in page, which triggers `onContentReady` again without a second `onAppReady`. `onAppReady` itself isn't strictly limited to firing once either: signing back in through that sign-in page triggers `onAppReady` a second time. Don't assume either event only fires once at startup.

The order of `onContentReady` relative to `onAppReady` isn't guaranteed either: with `noLoader: true`, the SDK fires `onContentReady` on the iframe's own `load` event, which can happen before `onAppReady`; with `noLoader: false` (the default in most modes), it fires on a `setIsLoaded` command from the portal instead, timed differently. Don't build logic that depends on one always following the other.

`onAppError` is scoped to genuine SDK/init-level failures (bad `src`, CSP rejection, missing required config) — passing a nonexistent `id` (room/file/folder) does **not** trigger it. In [Manager mode](../embedding-modes/manager-mode.md) and [Public room mode](../embedding-modes/public-room-mode.md), the frame still initializes normally (`onAppReady` fires) and surfaces the problem via `onNoAccess`/`onNotFound` instead.

In [Public room mode](../embedding-modes/public-room-mode.md) specifically, `id` isn't just optional room-scoping — it's required config. Omitting it renders the portal's "Invalid link" error page instead of the room; `onAppReady` never fires in that case, but neither does `onAppError` — initialization itself has no timeout of its own, so there's no automatic failure signal here. `onAppError` only fires in Public room mode the same way it does everywhere else: for a genuine SDK/init-level failure, or when a hosted [instance method call](#method-call-errors) times out.

:::note
[Editor mode](../embedding-modes/editor-mode.md) and [Viewer mode](../embedding-modes/viewer-mode.md) have no equivalent fallback: passing a missing or nonexistent `id` there fires neither `onAppError` nor `onAppReady` nor any not-found signal — the frame just never finishes initializing from the host's point of view. Validate the file `id` before calling `initEditor`/`initViewer` if you need to handle this case; the SDK gives you nothing to react to otherwise.
:::

[Chat mode](../embedding-modes/chat-mode.md) has a related but different behavior: when there's no signed-in, non-guest user, the frame shows a no-access state — a chat history control with no composer — and fires `onNoAccess` (with an empty payload) alongside `onAppReady`. AI being disabled on the portal also hides the composer, but doesn't fire `onNoAccess` itself — there's no dedicated signal for that specific case, only the visual state. Attach a handler for `onNoAccess` rather than trying to infer either no-access state from `onAppReady` alone.

`onCustomAction` fires in [Manager](../embedding-modes/manager-mode.md#adding-custom-actions), [Personal](../embedding-modes/personal-mode.md#adding-custom-actions), and [Forms](../embedding-modes/forms-mode.md#adding-custom-context-menu-actions) mode — see Manager mode's section for the full `setCustomActions()`/`customActions` reference (context menu, create menu, restriction fields). `onNavigate` fires in both [Forms mode](../embedding-modes/forms-mode.md) and [Personal mode](../embedding-modes/personal-mode.md) — see either page for `navigateSection()` usage examples.

:::note
What triggers `onUploadSuccess`/`onUploadError` depends on the mode:

- **Forms and Personal mode:** only an upload the host itself started with [`instance.upload()`](../embedding-modes/forms-mode.md#uploading-a-file-without-the-picker-dialog) — dragging a file into either mode's own upload area doesn't trigger these events at all.
- **Uploader mode:** `upload()` isn't available in this mode — only a native upload through the mode's own dialog fires these events, and with a different, much larger payload than an `upload()`-initiated one (see below). `onUploadProgress` is exclusive to this path too.
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

Most events are simple lifecycle signals and are called with no arguments at all. Internally, the SDK invokes every handler as `handler(eventData.data || {})` — so an event the iframe reports with no data of its own always arrives as an empty object `{}`, not `undefined`; only the handful of events the SDK itself emits directly (`onContentReady`, `onAppError`, `onAuthError`) can genuinely have no payload at all. A few events pass along real data about what happened:

| Event | Payload |
| ------- | ------------- |
| `onAppReady` | `{ frameId }` — the ID of the frame that just finished initializing. |
| `onContentReady` | No payload (`undefined`). See the ordering note above for its timing relative to `onAppReady`. |
| `onSelectCallback` | Depends on the mode: in Room selector, an **array** containing one room object (`{ id, label, title, security, tags, ... }`); in File selector, a **single** file object (`{ id, title, fileExst, fileType, viewUrl, ... }` — no `label` here). |
| `onEditorOpen` | The file that was opened — the full file object (see below). |
| `onFileManagerClick` | The file that was clicked — the full file object (see below). |
| `onAppError` | An error message string (e.g. `"The current domain is not set in the Content Security Policy (CSP) settings."` on a CSP rejection). |
| `onAuthError` | `{ code?, message }` — one of four token-failure codes, see [OAuth authentication](../get-started/authentication-security.md#oauth-authentication). Only fires with OAuth-based authentication. |
| `onDownload` | The download URL as a plain string (only fires with `downloadToEvent: true`). |
| `onSignOut`, `onCloseCallback`, `onNoAccess` | An empty object `{}` — a signal only, no `eventData.data` to report. |
| `onCustomAction` | `{ action, type, item?, items?, folderId? }` — `action` is the `key` you registered; `type` is `"file"`, `"folder"`, `"room"`, or `"create"`; `item` is the single clicked entity (absent for `create`); `items` holds every selected entity instead, for an action run on a multi-selection; `folderId` is the id of the folder or room the user was in. |
| `onNavigate` | `{ section }` — the section the user navigated to (e.g. `"completed-forms"`). |
| `onUploadSuccess` | Forms/Personal (`upload()`-initiated, see above): `{ fileName, fileSize }`. Uploader mode's native dialog: an **array** wrapping the created file's info — `[{ response: { id, folderId, version, title, uploaded, file: {...} }, count, links, status, statusCode }]` — a different shape entirely, not just a bigger version of the Forms/Personal one. |
| `onUploadError` | Forms/Personal: `{ fileName, message }`. Uploader mode's native dialog: `{ error, rejectedFiles? }` — again a different shape, not the Forms/Personal one scaled up. |
| `onUploadProgress` | `{ sessionId, fileName, uploadedChunks, totalChunks, percent }`. |
| `onGetExternalData` | `{ key, callId }` — return the value stored for `key` (sync or a `Promise`); the SDK correlates the response by `callId`. |
| `onSetExternalData` | `{ key, value }` — persist `value` under `key`; fire-and-forget, no response expected. |

`onFileManagerClick` and `onEditorOpen` both pass a large file object — close to the shape returned by the backend API, including `id`, `title`, `fileExst`, `webUrl`, `viewUrl`, `security`, `createdBy`, and dozens more properties. See [Get file information](../../api-backend/usage-api/get-file-info.api.mdx) for the full schema rather than guessing from a partial example. The two payloads aren't identical, though: `onEditorOpen`'s also includes an `action` field (e.g. `"edit"`, describing how the editor was opened) that `onFileManagerClick`'s doesn't have, while dropping a few fields `onFileManagerClick` does have (`contextOptions`, `isFolder`, `icon`, `href`, among others).

:::note
Clicking a file in the list only selects it and fires `onFileManagerClick` — it does not open the editor. `onEditorOpen` fires separately, when the file is actually opened (e.g. via the "Edit" context menu action, a double-click, or a hotkey).
:::

## Method-call errors

Unlike the lifecycle events above, a failing **instance method call** (`setConfig()`, `upload()`, `navigateSection()`, and so on) doesn't go through `events` at all — it rejects its own returned `Promise` with a structured `SDKError`: `{ code, message, recoverable }`. `code` is one of a fixed set of string values — `"TIMEOUT"`, `"DISCONNECTED"`, `"CSP_VIOLATION"`, `"MODE_MISMATCH"`, `"INVALID_CONFIG"`, `"UPLOAD_FAILED"`, `"PARSE_ERROR"`, `"TOKEN_RESOLVE_FAILED"`, `"API_ERROR"` — branch on `code`, not on `message`, since `message` is a free-text description meant for logging, not for comparison.

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

The `MODE_MISMATCH` guards the SDK enforces itself — calling [`navigateSection()`](../embedding-modes/forms-mode.md#navigating-between-sections-at-runtime), [`setCustomActions()`](../embedding-modes/manager-mode.md#adding-custom-actions), or [`upload()`](../embedding-modes/forms-mode.md#uploading-a-file-without-the-picker-dialog) from a mode that doesn't support it — all reject their returned `Promise` the same way; none of them throw synchronously.

When the current mode has no handler at all for a method you called, the rejection's `message` names both the method and the mode (e.g. `"logout is not available in forms mode"`) — this applies generally, not just to the three mode-guarded methods above. The same code also guards [`login()`](../get-started/authentication-security.md#oauth-authentication) and `logout()` in OAuth mode, where the host — not the portal's session cookie — owns authentication.

:::warning
Most method calls reject with `code: "API_ERROR"` (carrying the portal's HTTP `status` and a sanitized error `data` object) when the DocSpace portal itself reports a failure — an invalid parameter, a permission error, and so on. This requires a portal that flags method errors this way (client 4.0+); on an older portal, or if you're unsure which version you're targeting, treat a resolved value as unverified rather than assuming success. `login()` and `createRoom()` are the two exceptions that keep an older contract: instead of rejecting, they resolve with a sanitized `{ status, message }` object — `.catch()` alone won't catch a failure from either. For a method that returns an entity (like `createRoom()`), checking for `result.id` on the resolved value is a more reliable success check than assuming a resolved promise means success.

[`login()`](../embedding-modes/system-mode.md#application-authentication-sso-bridge) needs its own check beyond `status`/`message`, since the shape of what actually gets returned has been inconsistent across portal versions in practice. The one check that's held up across everything tested: `result.url === "/"` means success; `result.url` starting with `/confirm/` means a second factor is still required (not a failure — see [Two-factor authentication](../samples/advanced-samples/two-factor-authentication.md)); anything else is a failure. Still avoid logging or forwarding the resolved `result` object in its entirety on a failed attempt as a matter of habit — a portal older than client 4.0 won't have sanitized it first.
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
