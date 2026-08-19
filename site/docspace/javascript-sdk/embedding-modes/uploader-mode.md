---
sidebar_position: 7
---

# Uploader mode

Uploader mode embeds a file upload interface inside your application. It targets a specific DocSpace folder by ID and lets users upload files directly into it, with optional controls over accepted file types and multi-file selection.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initUploader({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-folder-id",
});
```

The parameters `frameId`, `src`, and `id` are required. All other parameters are optional and have sensible defaults.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md).

## Configuration, events, and methods

`initUploader()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md).

## Use cases

### Uploading files to a specific folder

Target a folder by ID and allow users to upload multiple files with a restricted set of accepted formats:

```javascript
const docSpace = DocSpace.SDK.initUploader({
  frameId: "ds-uploader",
  src: "https://your-docspace.com",
  id: "your-folder-id",
  acceptExtensions: ".docx,.xlsx,.pdf",
  isMultipleUpload: true,
});
```

### Handling an inaccessible or missing folder

Display a fallback UI when the target folder can't be accessed or no longer exists:

```javascript
const docSpace = DocSpace.SDK.initUploader({
  frameId: "ds-uploader",
  src: "https://your-docspace.com",
  id: "your-folder-id",
  events: {
    onNoAccess: function () {
      document.getElementById("ds-uploader").innerHTML =
        "You do not have permission to upload to this folder.";
    },
    onNotFound: function () {
      document.getElementById("ds-uploader").innerHTML =
        "This folder no longer exists.";
    },
  },
});
```

:::note
The SDK does not currently expose per-file upload progress/success/error events — `events` only covers frame-level lifecycle events (see [TFrameEvents](../usage-sdk/type-aliases/TFrameEvents.md) for the full list).
:::
