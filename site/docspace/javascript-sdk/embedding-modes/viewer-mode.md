---
sidebar_position: 2
---

# Viewer mode

Viewer mode embeds a read-only document inside your application. It opens a file by ID and renders it in a non-editable state, allowing users to read and review documents without exposing editing controls. If you want users to have editing controls, use the [Editor mode](./editor-mode.md) instead.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initViewer({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
});
```

Only the parameters `frameId`, `src`, and `id` are required. All other parameters are optional and have sensible defaults.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md). For a complete HTML example, see [Initialize viewer](../samples/basic-samples/init-viewer.md).

## Configuration, events, and methods

`initViewer()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md).

## Use cases

### Viewing a public document without login

Use `requestToken` to let unauthenticated users view a document shared via a public link:

```javascript
const docSpace = DocSpace.SDK.initViewer({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
  requestToken: "public-share-token",
});
```

### Embedding a document preview in mobile layout

Use `editorType` to switch the viewer to a mobile-optimized layout and hide the "Open file location" button:

```javascript
const docSpace = DocSpace.SDK.initViewer({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
  editorType: "mobile",
  editorGoBack: false,
});
```

### Handling access and not found errors

Display a fallback UI when the user cannot access the document or the file no longer exists:

```javascript
const docSpace = DocSpace.SDK.initViewer({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
  events: {
    onNoAccess: function () {
      document.getElementById("ds-frame").innerHTML =
        "You do not have permission to view this document.";
    },
    onNotFound: function () {
      document.getElementById("ds-frame").innerHTML =
        "This document no longer exists.";
    },
  },
});
```
