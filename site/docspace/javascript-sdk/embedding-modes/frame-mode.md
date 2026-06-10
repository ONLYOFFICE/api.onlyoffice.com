---
sidebar_position: 10
---

# Frame mode

The Frame mode is a general-purpose initialization method. Using `initFrame()` leaves the mode configurable, allowing you to load any other mode at runtime using the `mode` parameter. By default, `initFrame()` runs in the [Manager mode](./manager-mode.md).

The use of `initFrame()` is ideal when the mode isn't fixed at build time: multi-tenant apps where different users get different interfaces, config-driven setups where the backend determines what gets embedded, or anywhere you need to switch modes without reinitializing the frame.

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
| `"uploader"` | `initUploader()` | File upload interface (requires `id`) |

The available methods and events depend on the mode loaded at runtime. See each mode's page for the capabilities and restrictions that apply.

## Configuration, events, and methods

`initFrame()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md) with the complete set of methods.

The available parameters, events, and methods depend on the mode loaded at runtime. See the corresponding mode page for what is supported in each case:

- [Manager mode](./manager-mode.md)
- [Editor mode](./editor-mode.md)
- [Viewer mode](./viewer-mode.md)
- [Room selector mode](./room-selector-mode.md)
- [File selector mode](./file-selector-mode.md)
- [System mode](./system-mode.md)
- [Uploader mode](./uploader-mode.md)
