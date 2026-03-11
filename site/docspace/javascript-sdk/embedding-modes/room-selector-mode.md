---
sidebar_position: 7
---

# Room selector mode

Room selector mode embeds a room picker interface inside your application. It presents users with a list of DocSpace rooms and returns the selected room's data via a callback function. If you are looking to embed a fully functional DocSpace interface, check out the [Manager mode](./manager-mode.md) and [Frame mode](./frame-mode.md).

## Initialization

```javascript
const docSpace = DocSpace.SDK.initRoomSelector({
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
    <title>DocSpace initRoomSelector() Example</title>
    <script src="https://your-docspace.com/static/scripts/sdk/2.0.0/api.js"></script>
  </head>
  <body>
    <div id="ds-frame"></div>
    <script>
      const docSpace = DocSpace.SDK.initRoomSelector({
        frameId: "ds-frame",
        src: "https://your-docspace.com",
        width: "100%",
        height: "700px",
        withSearch: true,
        events: {
          onSelectCallback: function (data) {
            console.log("Room selected:", data);
          },
          onCloseCallback: function () {
            console.log("Room selector closed.");
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

const docSpace = sdk.initRoomSelector({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  width: "100%",
  height: "700px",
  theme: Theme.Base,
  withSearch: true,
  events: {
    onSelectCallback: (data) => {
      console.log("Room selected:", data);
    },
    onCloseCallback: () => {
      console.log("Room selector closed.");
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
const docSpace = DocSpace.SDK.initRoomSelector({
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
| `onSelectCallback` | Triggered when the user selects a room. Returns an object containing the selected room's `id`, `label`, `icon`, and `isSelected` fields. |
| `onCloseCallback` | Triggered when the user closes the room selector without making a selection. |
| `onAppReady` | Triggered when the SDK frame has finished initializing and is ready for interaction. |
| `onContentReady` | Triggered when the content inside the frame has fully loaded. |
| `onAuthSuccess` | Triggered when a user successfully authenticates. |
| `onSignOut` | Triggered when the user signs out of DocSpace. |
| `onAppError` | Triggered when an error occurs in the SDK frame. |
| `onNoAccess` | Triggered when the user attempts to access a resource they do not have permission to view. |

## Methods

After initialization, the SDK instance can be accessed by its `frameId`:

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];
```

The following methods are available on a room selector instance:

| Method | Description |
| -------- | ------------- |
| `getConfig()` | Returns the current configuration object for this frame. |
| `setConfig(config)` | Updates the configuration of this frame. |
| `getSelection()` | Returns information about the currently selected room. |
| `getUserInfo()` | Returns information about the currently authenticated user, or `null` if no user is logged in. |
| `login(email, passwordHash)` | Logs in to DocSpace using the specified credentials. |
| `logout()` | Logs out the current user. |
| `destroyFrame()` | Removes the SDK frame and inserts `destroyText` into the container element. |
