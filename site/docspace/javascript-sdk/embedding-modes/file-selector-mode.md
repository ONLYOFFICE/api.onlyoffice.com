---
sidebar_position: 5
---

# File selector mode

File selector mode integrates a file picker interface inside your application. It allows users to view, browse and select from a list of DocSpace files. The selected file's data is returned via a callback function.

File selector is similar to [Room selector mode](./room-selector-mode.md) in terms of functionality.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initFileSelector({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
});
```

Only the parameters `frameId` and `src` are required. All other parameters are optional and have sensible defaults.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md). For a complete HTML example, see [Initialize file selector](../samples/basic-samples/init-file-selector.md).

## Configuration, events, and methods

`initFileSelector()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md).

## Use cases

### Attaching a DocSpace file to a form

Let users browse and pick a file, then use the returned data to attach it to a record in your application. See also: [File manager with task attachments](../samples/advanced-samples/file-manager-task-attachments.md).

```javascript
const selector = DocSpace.SDK.initFileSelector({
  frameId: "ds-selector",
  src: "https://your-docspace.com",
  withSearch: true,
  withBreadCrumbs: true,
  showSelectorHeader: true,
  showSelectorCancel: true,
  acceptButtonLabel: "Attach file",
  events: {
    onSelectCallback: function (file) {
      console.log("File selected:", file.label, file.id);
      attachFileToRecord(file.id, file.label);
      selector.destroyFrame();
    },
    onCloseCallback: function () {
      selector.destroyFrame();
    },
  },
});
```

### Showing only files from a specific folder

Pass `id` to open the selector at a specific folder instead of the root:

```javascript
const docSpace = DocSpace.SDK.initFileSelector({
  frameId: "ds-selector",
  src: "https://your-docspace.com",
  id: "your-folder-id",
  withBreadCrumbs: true,
});
```

### Filtering by file type

Use `selectorType` to limit the selector to files owned by the current user, or restrict to rooms only:

```javascript
const docSpace = DocSpace.SDK.initFileSelector({
  frameId: "ds-selector",
  src: "https://your-docspace.com",
  selectorType: "userFolderOnly",
  withSearch: true,
  events: {
    onSelectCallback: function (file) {
      console.log("Selected:", file.label);
    },
  },
});
```
