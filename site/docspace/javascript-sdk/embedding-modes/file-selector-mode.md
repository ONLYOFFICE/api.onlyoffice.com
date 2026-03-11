---
sidebar_position: 8
---

# File selector mode

File selector mode integrates a file picker interface inside your application. It allows users with a view, browse and select from a list of DocSpace files. The selected file's data is returned via a callback function.

File selector is similar to [Room selector mode](./room-selector-mode.md) in terms of functionality.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initFileSelector({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
});
```

Only the parameters `frameId` and `src` are required. All other parameters are optional and have sensible defaults.

## Integration

The SDK can be embedded either in an HTML file or via the npm package, depending on your application setup.

### HTML example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>DocSpace initFileSelector() Example</title>
    <script src="https://your-docspace.com/static/scripts/sdk/2.0.0/api.js"></script>
  </head>
  <body>
    <div id="ds-frame"></div>
    <script>
      const docSpace = DocSpace.SDK.initFileSelector({
        frameId: "ds-frame",
        src: "https://your-docspace.com",
        width: "100%",
        height: "700px",
        withSearch: true,
        events: {
          onSelectCallback: function (data) {
            console.log("File selected:", data);
          },
          onCloseCallback: function () {
            console.log("File selector closed.");
          },
        },
      });
    </script>
  </body>
</html>
```

### Integrating using an npm package

To install the package, run:

```bash
npm install @onlyoffice/docspace-sdk-js
```

Then import and initialize the SDK using the desired parameters:

```javascript
import { SDK, Theme } from "@onlyoffice/docspace-sdk-js";

const sdk = new SDK();

const docSpace = sdk.initFileSelector({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  width: "100%",
  height: "700px",
  theme: Theme.Base,
  withSearch: true,
  events: {
    onSelectCallback: (data) => {
      console.log("File selected:", data);
    },
    onCloseCallback: () => {
      console.log("File selector closed.");
    },
  },
});
```

> **Note:** The npm package renders an iframe in the browser DOM. Hence, it requires a frontend environment (built using React, Vue, etc.) and cannot be used in a Node.js backend on its own. Check out the [DocSpace-sdk npm package](https://www.npmjs.com/package/@onlyoffice/docspace-sdk-js) for more information.

<!--
## Configuration parameters

### Required

### Layout

### Display

### Selector options

### Authentication and access

### Lifecycle
-->

## Events

Events are passed as an object to the `events` key in the config.

```javascript
const docSpace = DocSpace.SDK.initFileSelector({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  events: {
    onSelectCallback: function (data) {},
    onCloseCallback: function () {},
    onAppError: function (error) {},
  },
});
```

| Event | Description |
| ------- | ------------- |
| `onSelectCallback` | Fires when the user selects a file. Returns an object containing the selected file's `id`, `label`, `icon`, and `isSelected` fields. |
| `onCloseCallback` | Fires when the user closes the file selector without making a selection. |
| `onAppReady` | Fires when the SDK frame has finished initializing and is ready for interaction. |
| `onContentReady` | Fires when the content inside the frame has fully loaded. |
| `onAuthSuccess` | Fires when a user successfully authenticates. |
| `onSignOut` | Fires when the user signs out of DocSpace. |
| `onAppError` | Fires when an error occurs in the SDK frame. |
| `onNoAccess` | Fires when the user attempts to access a resource they do not have permission to view. |
| `onNotFound` | Fires when the requested resource cannot be found. |

## Methods

After initialization, the SDK instance can be accessed by its `frameId`:

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];
```

The following methods are available on a file selector instance:

| Method | Description |
| -------- | ------------- |
| `getConfig()` | Returns the current configuration object for this frame. |
| `setConfig(config)` | Updates the configuration of this frame. |
| `getSelection()` | Returns information about the currently selected file. |
| `getUserInfo()` | Returns information about the currently authenticated user, or `null` if no user is logged in. |
| `login(email, passwordHash)` | Logs in to DocSpace using the specified credentials. |
| `logout()` | Logs out the current user. |
| `destroyFrame()` | Removes the SDK frame and inserts `destroyText` into the container element. |
