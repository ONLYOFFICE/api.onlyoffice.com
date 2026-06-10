---
sidebar_position: 6
---

# System mode

System mode initializes a lightweight, hidden SDK frame that displays a blank page with a loader. It renders no visible DocSpace UI. Instead, it provides access to a focused set of system-level methods for managing user sessions programmatically, such as authentication, hash generation, and user info retrieval — without embedding a visible interface.

File and room operations such as `getFiles()`, `createFile()`, and `createRoom()` are not processed by the DocSpace server when called from a system frame — use [Manager mode](./manager-mode.md) for those.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initSystem({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
});
```

Only the parameters `frameId` and `src` are required. All other parameters are optional and have sensible defaults.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md). For a complete HTML example, see [Initialize system](../samples/basic-samples/init-system.md).

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

System mode exposes a focused set of methods for session management. Calling file or room operations such as `getFiles()`, `createRoom()`, or `getRooms()` on a system frame is not prevented by the SDK, but the DocSpace server does not process them in this mode.

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

Authenticate a user in the background without displaying a login form, for example, from a third-party application. See also: [Authorization](../samples/advanced-samples/authorization.md).

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
