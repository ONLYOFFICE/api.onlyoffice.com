---
sidebar_position: 1
---

# Theming

The SDK lets you switch between light and dark UI themes and pick a theme for the document editor. It does not control your host application's branding (logo, company name) — that is a portal-wide setting, not a per-frame configuration option. See [White label settings](../../api-backend/usage-api/save-white-label-settings.api.mdx) if you need to customize the DocSpace logo shown across the portal.

## Frame theme

The `theme` parameter controls the color scheme of the entire embedded frame, including Manager, Editor, Viewer, and selector modes.

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  theme: "Dark",
});
```

| Value | Description |
| ------- | ------------- |
| `"Base"` | The light theme. |
| `"Dark"` | The dark theme. |
| `"System"` | Follows the OS/browser color scheme. |

## Editor theme

Editor mode has its own theme setting, independent of the frame theme, configured via `editorCustomization.uiTheme`:

```javascript
const docSpace = DocSpace.SDK.initEditor({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
  editorCustomization: {
    uiTheme: "theme-dark",
  },
});
```

Accepted values: `"theme-light"`, `"theme-classic-light"`, `"theme-dark"`, `"theme-contrast-dark"`, `"theme-white"`, `"theme-night"`, or `"default-light"` / `"default-dark"` to follow the default light/dark theme. The default is `"theme-classic-light"`.

## Header banner

`showHeaderBanner` controls DocSpace's own promotional/informational banners in the header — unrelated to your application's UI, but listed here since it affects the visual chrome of the frame:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  showHeaderBanner: "none",
});
```

| Value | Description |
| ------- | ------------- |
| `"all"` | Show all header banners. |
| `"info"` | Show only informational banners. |
| `"none"` | Hide all header banners. |

## Use cases

### Matching your app's dark mode

Read the host page's color scheme and pass it through at initialization:

```javascript
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  theme: prefersDark ? "Dark" : "Base",
});
```

### Switching theme at runtime

Use `setConfig()` on an existing instance to change the theme without reinitializing the frame:

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];
await frame.setConfig({ theme: "Dark" });
```
