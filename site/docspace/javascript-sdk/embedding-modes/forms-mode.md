---
sidebar_position: 8
---

# Forms mode

Forms mode embeds a DocSpace forms gallery inside your application. It opens a room by ID and presents the forms it contains, allowing users to fill out and submit forms. It also exposes methods for programmatic navigation, custom context menu actions, and file upload.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initForms({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-room-id",
});
```

The parameters `frameId`, `src`, and `id` are required. All other parameters are optional and have sensible defaults. Unlike other modes, `showMenu` defaults to `true` in forms mode.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md).

## Configuration, events, and methods

`initForms()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md).

The methods `navigateSection()`, `setCustomActions()`, and `upload()` are only available in forms mode. Calling them on an instance initialized in any other mode throws an error.

## Use cases

### Navigating to a specific section

Use `navigateSection()` to open a particular section of the forms gallery after initialization. Valid values are `"my-forms"`, `"in-progress"`, `"completed-forms"`, `"library"`, and `"settings"`:

```javascript
const docSpace = DocSpace.SDK.initForms({
  frameId: "ds-forms",
  src: "https://your-docspace.com",
  id: "your-room-id",
  events: {
    onAppReady: async function () {
      const frame = DocSpace.SDK.frames["ds-forms"];
      await frame.navigateSection("completed-forms");
    },
    onNavigate: function (section) {
      console.log("Navigated to:", section);
    },
  },
});
```

### Adding custom context menu actions

Use `setCustomActions()` to inject your own items into the file context menu and handle them via `onCustomAction`:

```javascript
const docSpace = DocSpace.SDK.initForms({
  frameId: "ds-forms",
  src: "https://your-docspace.com",
  id: "your-room-id",
  events: {
    onAppReady: async function () {
      const frame = DocSpace.SDK.frames["ds-forms"];
      await frame.setCustomActions({
        contextMenu: {
          file: [{ key: "export", label: "Export to CRM" }],
        },
      });
    },
    onCustomAction: function (data) {
      if (data.key === "export") {
        exportToCRM(data.item);
      }
    },
  },
});
```

### Uploading a form programmatically

Use `upload()` to submit a file from your application directly into the forms room:

```javascript
const docSpace = DocSpace.SDK.initForms({
  frameId: "ds-forms",
  src: "https://your-docspace.com",
  id: "your-room-id",
  events: {
    onUploadSuccess: function (file) {
      console.log("Form uploaded:", file.title);
    },
  },
});

const input = document.querySelector("input[type=file]");
input.addEventListener("change", async function () {
  const frame = DocSpace.SDK.frames["ds-forms"];
  await frame.upload(input.files[0]);
});
```
