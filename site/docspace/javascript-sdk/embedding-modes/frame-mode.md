---
sidebar_position: 12
---

# Frame mode

The Frame mode is a general-purpose initialization method. Using `initFrame()` leaves the mode configurable, allowing you to load any other mode at runtime using the `mode` parameter. By default, `initFrame()` runs in the [Manager mode](./manager-mode.md).

The use of `initFrame()` is ideal when the mode isn't fixed at build time: multi-tenant apps where different users get different interfaces, or config-driven setups where the backend determines what gets embedded.

`mode` is only read once, at the frame's initial load — passing a different `mode` to `setConfig()` without also passing `true` as the second argument (reload) has no visible effect, since that call only updates the config object and messages the already-running iframe, without touching what page it's actually showing. To switch modes on the same instance and container, reload it: `setConfig({ mode: "viewer", id: "your-file-id" }, true)`. This reinitializes the iframe (a real reload, not a live transition) and rejects any of that instance's pending method calls with `SDKErrorCode.Disconnected` ("Frame reloaded").

## Initialization

```javascript
const docSpace = DocSpace.SDK.initFrame({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
});
```

Only the parameters `frameId` and `src` are required. All other parameters are optional and have sensible defaults. If `mode` is not specified, the frame defaults to manager mode.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md).

## Mode parameter

The `mode` parameter controls which embedding mode is loaded inside the frame:

| Value | Equivalent to | Description |
| ------- | -------------- | ------------- |
| `"manager"` (default) | `initManager()` | Full file and room manager |
| `"editor"` | `initEditor()` | Document editor (requires `id`) |
| `"viewer"` | `initViewer()` | Read-only document preview (requires `id`) |
| `"room-selector"` | `initRoomSelector()` | Room picker dialog |
| `"file-selector"` | `initFileSelector()` | File picker dialog |
| `"system"` | `initSystem()` | Hidden frame for background operations |
| `"public-room"` | `initPublicRoom()` | Anonymous access to a public room (requires `requestToken` and `id`) |
| `"uploader"` | `initUploader()` | File upload interface (requires `id`) |
| `"forms"` | `initForms()` | Form filling room (`id` optional — defaults to the room set in the portal's Forms settings) |
| `"chat"` | `initChat()` | AI chat interface |
| `"personal"` | `initPersonal()` | The current user's personal space |

The available methods and events depend on the mode loaded at runtime. See each mode's page for the capabilities and restrictions that apply.

An unrecognized `mode` value falls back to `rootPath` (default `"/rooms/shared/"`) — in practice, this renders the same as Manager mode.

## Configuration, events, and methods

`initFrame()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md) with the complete set of methods.

The available parameters, events, and methods depend on the mode loaded at runtime. See the corresponding mode page for what is supported in each case:

- [Manager mode](./manager-mode.md)
- [Editor mode](./editor-mode.md)
- [Viewer mode](./viewer-mode.md)
- [Room selector mode](./room-selector-mode.md)
- [File selector mode](./file-selector-mode.md)
- [System mode](./system-mode.md)
- [Public room mode](./public-room-mode.md)
- [Uploader mode](./uploader-mode.md)
- [Forms mode](./forms-mode.md)
- [Chat mode](./chat-mode.md)
- [Personal mode](./personal-mode.md)
