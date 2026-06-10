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

### Tracking upload progress

Use `onUploadProgress`, `onUploadSuccess`, and `onUploadError` to track each upload:

```javascript
const docSpace = DocSpace.SDK.initUploader({
  frameId: "ds-uploader",
  src: "https://your-docspace.com",
  id: "your-folder-id",
  events: {
    onUploadProgress: function (progress) {
      console.log("Progress:", progress);
    },
    onUploadSuccess: function (file) {
      console.log("Uploaded:", file.title);
    },
    onUploadError: function (error) {
      console.error("Upload failed:", error);
    },
  },
});
```
