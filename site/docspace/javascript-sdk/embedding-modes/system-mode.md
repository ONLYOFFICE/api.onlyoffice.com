---
sidebar_position: 8
---

# System mode

System mode initializes a lightweight, hidden SDK frame that displays a blank page with a loader. It renders no visible DocSpace UI. Instead, it provides access to a focused set of system-level methods for managing user sessions programmatically, such as authentication, hash generation, and user info retrieval — without embedding a visible interface.

The system mode does not support file operations (getFiles, createFile, createRoom, etc.) — they require a Manager.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initSystem({
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
    <title>DocSpace initSystem() Example</title>
    <script src="https://your-docspace.com/static/scripts/sdk/2.0.0/api.js"></script>
  </head>
  <body>
    <div id="ds-frame"></div>
    <script>
      const docSpace = DocSpace.SDK.initSystem({
        frameId: "ds-frame",
        src: "https://your-docspace.com",
        events: {
          onAppReady: async function () {
            const frame = DocSpace.SDK.frames["ds-frame"];
            const hashSettings = await frame.getHashSettings();
            const passwordHash = await frame.createHash("user-password", hashSettings);
            await frame.login("user@example.com", passwordHash);
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
import { SDK } from "@onlyoffice/docspace-sdk-js";

const sdk = new SDK();

const docSpace = sdk.initSystem({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  events: {
    onAppReady: async () => {
      const frame = sdk.frames["ds-frame"];
      const hashSettings = await frame.getHashSettings();
      const passwordHash = await frame.createHash("user-password", hashSettings);
      await frame.login("user@example.com", passwordHash);
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

### Lifecycle

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `destroyText` | string | Text inserted into the frame's `div` element when `destroyFrame()` is called. |

## Events

Events are passed as an object to the `events` key in the config.

```javascript
const docSpace = DocSpace.SDK.initSystem({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  events: {
    onAppReady: function () {},
    onAppError: function (error) {},
  },
});
```

| Event | Description |
| ------- | ------------- |
| `onAppReady` | Fires when the SDK frame has finished initializing and system methods are ready to call. |
| `onAppError` | Fires when an error occurs during initialization. |

## Methods

After initialization, the SDK instance can be accessed by its `frameId`:

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];
```

System mode supports a focused set of methods for session management. File and room operations such as `getFiles()`, `createRoom()`, and `getRooms()` are not available in this mode.

| Method | Description |
| -------- | ------------- |
| `setConfig(config)` | Updates the frame configuration. In system mode, only `theme` and `locale` are applied. |
| `getUserInfo()` | Returns information about the currently authenticated user, or `null` if no user is logged in. |
| `getHashSettings()` | Returns the DocSpace hash settings used for generating a password hash. |
| `createHash(password, hashSettings)` | Generates a hash string from a plain-text password using the specified hash settings. |
| `login(email, passwordHash, password?, session?)` | Logs in to DocSpace using the specified credentials. |
| `logout()` | Logs out the current user. |

## Use cases

`initSystem()` has multiple use cases. It can be used as an auth proxy to authenticate a user in the background, to switch between user accounts or to check authorization status. See some examples below.

### Application authentication (SSO Bridge)

Authenticate a user in the background without displaying a login form, for example, from a third-party application:

```javascript
const sdk = new SDK();

const system = sdk.initSystem({ frameId: "ds-auth", src: "https://your-docspace.com" });

const settings = await system.getHashSettings();
const hash = await system.createHash("p@ssw0rd", settings);
await system.login("user@example.com", hash, undefined, true);
```

### Switching users

Log out the current user and authenticate a different account:

```javascript
await system.logout();
const settings = await system.getHashSettings();
const hash = await system.createHash("otherPassword", settings);
await system.login("other@example.com", hash);

// Reinitialize the Manager frame for the new user
```

### Checking authorization status

Check whether a user is already authenticated before deciding what to display.

```javascript
const system = sdk.initSystem({ frameId: "ds-auth", src: "https://your-docspace.com" });

try {
  const user = await system.getUserInfo();
  // User is authenticated — open Manager
  sdk.initManager({ frameId: "ds-frame", src: "https://your-docspace.com" });
} catch {
  // User is not authenticated — show your own login form
  showLoginForm();
}
```

### Changing the theme/locale

Change the theme and locale without rebooting the DocSpace instance:

```javascript
await system.setConfig({ theme: 'Dark', locale: 'de' });
```

### Custom login UI

Hide the system frame visually and use it as a backend for your own login form. The frame can be hidden using `width: 0px` and `height: 0px`.

```javascript
const system = sdk.initSystem({
  frameId: "ds-auth",
  src: "https://your-docspace.com",
  width: "0px",
  height: "0px",
});
```
