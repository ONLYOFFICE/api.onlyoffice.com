---
sidebar_position: 1
---

# Theming

There's one theme setting in this SDK — `theme`, which controls the color scheme of the frame's own chrome (Manager, selectors, and the editor's surrounding UI) — plus two narrower settings that are easy to confuse with theming: `showHeaderBanner` and `stylesUrl`. This page walks through what each one actually controls, plus two runtime patterns: matching your app's dark mode, and switching the theme at runtime.

None of this controls your host application's branding (logo, company name) — that is a portal-wide setting, not a per-frame configuration option. See [White label settings](../../api-backend/usage-api/save-white-label-settings.api.mdx) if you need to customize the DocSpace logo shown across the portal.

## Frame theme

The `theme` parameter controls the color scheme of the entire embedded frame, including Manager, Editor, Viewer, and selector modes.

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  theme: "Dark",
});
```

Accepts `"Base"` (light), `"Dark"`, or `"System"` (follows the OS/browser color scheme). Full reference: [TFrameConfig#theme](../usage-sdk/type-aliases/TFrameConfig.md#theme), [Theme enum](../usage-sdk/enumerations/Theme.md).

## Header banner

`showHeaderBanner` controls DocSpace's own promotional/informational banners in the header — unrelated to your application's UI, but listed here since it affects the visual chrome of the frame:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  showHeaderBanner: "none",
});
```

Accepts `"all"`, `"info"` (informational only), or `"none"`. Full reference: [TFrameConfig#showHeaderBanner](../usage-sdk/type-aliases/TFrameConfig.md#showheaderbanner), [HeaderBannerDisplaying enum](../usage-sdk/enumerations/HeaderBannerDisplaying.md).

## Custom stylesheet

`stylesUrl` applies a custom stylesheet inside the frame, on top of the selected theme — use it for fine-grained CSS tweaks that `theme` alone doesn't cover:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  stylesUrl: "https://your-app.com/docspace-overrides.css",
});
```

Full parameter reference: [TFrameConfig#stylesUrl](../usage-sdk/type-aliases/TFrameConfig.md#stylesurl).

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

See also: [Set config](../samples/basic-samples/set-config.md).
