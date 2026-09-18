---
sidebar_position: 11
---

# Personal mode

Personal mode embeds the current user's personal space — My Documents, Favorites, Recent, and Trash — without exposing the rest of the portal's rooms.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initPersonal({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
});
```

Only `frameId` and `src` are required. All other parameters are optional and have sensible defaults.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md).

## Configuration, events, and methods

`initPersonal()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md). It forces `mode` to Personal and defaults `showMenu` and `infoPanelVisible` to `true` (pass `showMenu: false`/`infoPanelVisible: false` to hide them).

`navigateSection()` works in Personal mode as well as [Forms mode](./forms-mode.md) — calling it from any other mode throws an error.

## Use cases

### Opening a specific section on load

Set `personalDestination` to skip the default "My Documents" landing section:

```javascript
const docSpace = DocSpace.SDK.initPersonal({
  frameId: "ds-personal",
  src: "https://your-docspace.com",
  personalDestination: "favorites",
});
```

Available sections: `"my-documents"`, `"favorites"`, `"recent"`, `"trash"`, `"settings"`.

### Navigating between sections at runtime

Use `navigateSection()` on the returned instance instead of reinitializing the frame, and track the active section from the host page with `onNavigate`:

```javascript
const docSpace = DocSpace.SDK.initPersonal({
  frameId: "ds-personal",
  src: "https://your-docspace.com",
  events: {
    onAppReady: function () {
      document.getElementById("trash-button").onclick = () => {
        docSpace.navigateSection("trash");
      };
    },
    onNavigate: function (data) {
      console.log("Section changed:", data.section);
    },
  },
});
```
