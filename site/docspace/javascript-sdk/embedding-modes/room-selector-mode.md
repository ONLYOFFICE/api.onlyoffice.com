---
sidebar_position: 6
---

# Room selector mode

Room selector mode integrates a room picker interface inside your application. It presents users with a list of DocSpace rooms and returns the selected room's data via a callback function. If you are looking to embed a fully functional DocSpace interface, check out the [Manager mode](./manager-mode.md) and [Frame mode](./frame-mode.md).

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

## Configuration parameters

### Required

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `frameId` | string | The ID of the `div` element where the frame will be rendered. Also used to reference this SDK instance later via `DocSpace.SDK.frames[frameId]`. |
| `src` | string | The URL of your DocSpace server. |

### Layout

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `width` | string | `"100%"` | Frame width. Accepts CSS values such as `"100%"` or `"1200px"`. |
| `height` | string | `"100%"` | Frame height. Accepts CSS values such as `"700px"` or `"100vh"`. |

### Display

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `theme` | `Theme` | `Theme.System` | UI theme. Accepted values: `Theme.Base`, `Theme.Dark`, `Theme.System`. |
| `locale` | string | Portal default | Language of the DocSpace UI, specified as a four-letter language code (e.g. `"en-US"`). |
| `buttonColor` | string | `"#5299E0"` | Hex color code for the selector action button. Example: `"#2196f3"`. |

### Selector options

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `withSearch` | boolean | `true` | Displays the search bar. |
| `withBreadCrumbs` | boolean | `true` | Displays breadcrumb navigation. |
| `withSubtitle` | boolean | `true` | Displays a subtitle with additional descriptions for the current directory. |
| `selectorType` | `SelectorFilterType` | `SelectorFilterType.All` | Filters the items shown in the selector. Accepted values: `SelectorFilterType.All`, `SelectorFilterType.RoomsOnly`, `SelectorFilterType.UserOnly`. |
| `showSelectorCancel` | boolean | `false` | Displays the cancel button in the selector. |
| `showSelectorHeader` | boolean | `false` | Displays the header in the selector. |
| `acceptButtonLabel` | string | — | Custom label for the selector confirm button. |
| `cancelButtonLabel` | string | — | Custom label for the selector cancel button. |

### Authentication and access

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `requestToken` | string | Token for accessing public rooms or files without a full login session. |
| `checkCSP` | boolean | Checks for the presence of valid CSP headers before initialization. Recommended in production. |

### Lifecycle

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `destroyText` | string | Text inserted into the frame's `div` element when `destroyFrame()` is called. |

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
| `onSelectCallback` | Fires when the user selects a room. Returns an object containing the selected room's `id`, `label`, `icon`, and `isSelected` fields. |
| `onCloseCallback` | Fires when the user closes the room selector without making a selection. |
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

The following methods are available on a room selector instance:

| Method | Description |
| -------- | ------------- |
| `getConfig()` | Returns the current configuration object for this frame. |
| `setConfig(config)` | Updates the configuration of this frame. |
| `getSelection()` | Returns information about the currently selected room. |
| `getUserInfo()` | Returns information about the currently authenticated user, or `null` if no user is logged in. |
| `login(email, passwordHash, password?, session?)` | Logs in to DocSpace using the specified credentials. |
| `logout()` | Logs out the current user. |
| `destroyFrame()` | Removes the SDK frame and inserts `destroyText` into the container element. |