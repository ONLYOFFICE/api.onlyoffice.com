---
sidebar_position: 3
---

# Editor mode

Editor mode embeds a fully functional document editor inside your application. It opens a file by ID and gives the users all document editor capabilities like real-time co-authoring, comments, and track changes, depending on the user's DocSpace permissions.

If you want to limit your users to viewing only, use the [Viewer mode](./viewer-mode.md) instead.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initEditor({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
});
```

Only the parameters `frameId`, `src`, and `id` are required. All other parameters are optional and have sensible defaults.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md). For a complete HTML example, see [Initialize editor](../samples/basic-samples/init-editor.md).

## Configuration, events, and methods

`initEditor()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md).

## Use cases

### Customizing the editor interface

Use `editorCustomization` to match the editor to your application's branding and hide features your users don't need. See also: [Customize editors](../samples/advanced-samples/customize-editors.md).

```javascript
const docSpace = DocSpace.SDK.initEditor({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
  editorCustomization: {
    customer: {
      name: "Your Company",
      logo: "https://your-company.com/logo.png",
    },
    compactHeader: true,
    toolbarNoTabs: true,
    help: false,
  },
});
```

### Handling editor close

Use `onEditorCloseCallback` to redirect the user or update your application state when they close the editor:

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

### Inserting content programmatically

Use `executeInEditor` to run custom logic inside the editor after it has loaded:

```javascript
const docSpace = DocSpace.SDK.initEditor({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
  events: {
    onAppReady: function () {
      const frame = DocSpace.SDK.frames["ds-frame"];
      frame.executeInEditor(function (editor, data) {
        editor.insertText("Hello, " + data.username);
      }, { username: "Alice" });
    },
  },
});
```
