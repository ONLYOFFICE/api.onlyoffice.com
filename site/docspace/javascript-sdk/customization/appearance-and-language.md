---
sidebar_position: 1
---

# Appearance and language

This page walks through the settings that affect how the embedded frame looks and what language it uses: `theme`, which controls the color scheme of the frame's own chrome (Manager, selectors, and the editor's surrounding UI), two narrower settings that are easy to confuse with theming — `showHeaderBanner` and `stylesUrl` — and `locale`, plus runtime patterns for all of them: matching your app's dark mode and language, and switching either at runtime.

None of this controls your host application's branding (logo, company name) — that is a portal-wide setting, not a per-frame configuration option. See [White label settings](/docspace/api-backend/usage-api/settings/rebranding/save-white-label-settings.md) if you need to customize the ONLYOFFICE Apps logo shown across the portal.

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

This is also what controls the editor's own theme in Editor and Viewer modes — use `theme`, not `editorCustomization.uiTheme`. `uiTheme` accepts the same three values (`"Base"`/`"Dark"`/`"System"`), but `theme` already covers the whole frame, so there's rarely a reason to set both.

## Header banner

`showHeaderBanner` controls the ONLYOFFICE Apps promotional/informational banners in the header — unrelated to your application's UI, but listed here since it affects the visual chrome of the frame. It only has an effect in **Manager mode**; no other mode's header reads this field.

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  showHeaderBanner: "none",
});
```

Accepts `"all"`, `"info"` (informational only), or `"none"`. Full reference: [TFrameConfig#showHeaderBanner](../usage-sdk/type-aliases/TFrameConfig.md#showHeaderBanner), [HeaderBannerDisplaying enum](../usage-sdk/enumerations/HeaderBannerDisplaying.md).

## Custom stylesheet

`stylesUrl` applies a custom stylesheet inside the frame, on top of the selected theme — use it for fine-grained CSS tweaks that `theme` alone doesn't cover. It works in every mode, including Manager and System — though the timing differs there: it isn't part of the frame's initial URL, so it's applied only after the frame has loaded and requested its config, which can produce a brief flash of unstyled content. In every other mode — [Editor](../embedding-modes/editor-mode.md), [Viewer](../embedding-modes/viewer-mode.md), selectors, Uploader, Forms, Chat, Personal, and Public room — it's included in the URL from the first render:

```javascript
const docSpace = DocSpace.SDK.initPersonal({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  stylesUrl: "https://your-app.com/docspace-overrides.css",
});
```

Only an absolute `http`/`https` URL is accepted — a relative path is silently dropped, with no error and no stylesheet applied. The portal applies it via a plain `<link rel="stylesheet">` tag, so it isn't blocked by CORS — but it is gated by the portal's own Content Security Policy: the stylesheet's origin must be one of the domains registered in [Developer Tools → Embed SDK](../get-started/authentication-security.md#registering-allowed-embed-origins), the same allowlist that governs which origins can embed the portal at all. A file hosted anywhere else is blocked outright by the portal's `style-src` policy before the browser even attempts to load it — it shows up in the browser's network panel as `(blocked:csp)`, not a CORS error. In practice this is rarely a constraint, since the natural place to host a custom stylesheet is your own embedding page's domain, which you already need registered for the SDK to work at all.

Full parameter reference: [TFrameConfig#stylesUrl](../usage-sdk/type-aliases/TFrameConfig.md#stylesUrl).

## Locale and language

The `locale` parameter sets the language of the ONLYOFFICE Apps user interface, independently of the host application's own language.

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  locale: "en-US",
});
```

Accepts a BCP 47 language tag — either a bare language code (`"de"`) or a language-region code (`"en-US"`). If omitted, the interface follows the language configured on the ONLYOFFICE Apps portal (or the signed-in user's own language preference).

`locale` only affects the frame — it never changes the signed-in user's own profile language, in any mode. In Manager and System mode it updates live via `setConfig()`; in every other mode it's read once from the frame's initial URL, so changing it later needs a reload — see [Switching theme or language at runtime](#switching-theme-or-language-at-runtime) below.

For the current, authoritative list of languages your portal supports, call [Get supported languages](/docspace/api-backend/usage-api/settings/common-settings/get-supported-cultures.md) (`GET /api/2.0/settings/cultures`) rather than hardcoding a list — supported languages are configured per portal, and not every language has both a two-letter and a region-qualified form (for example, German may only be available as `"de"`, without a `"de-DE"` variant).

Full parameter reference: [TFrameConfig#locale](../usage-sdk/type-aliases/TFrameConfig.md#locale).

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

### Matching your app's language

Pass through the language your application is already using. Since a portal may offer a language only in its bare form (`"de"`, not `"de-DE"`), check the tag against the portal's supported languages and fall back to the bare language code when the exact tag isn't there:

```javascript
// The portal's supported languages, fetched by your backend from GET /api/2.0/settings/cultures
const supported = ["en-US", "de", "fr", "es"];

const preferred = navigator.language; // e.g. "de-DE"
const locale = supported.includes(preferred) ? preferred : preferred.split("-")[0];

const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  locale,
});
```

### Switching theme or language at runtime

`setConfig()` on an existing instance applies **immediately, without reinitializing the frame** in Manager and System mode — both read the updated config reactively:

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];
await frame.setConfig({ theme: "Dark", locale: "de" });
```

Every other mode (Editor, Viewer, selectors, Uploader, Forms, Chat, Personal, Public room) reads `theme` and `locale` once, at the frame's initial load, baked into the page it serves — a later `setConfig()` call for either field isn't picked up by that initial render. The call itself still resolves normally (the returned config reflects the new `theme`/`locale` values), but nothing in the frame visibly changes. For those modes, pass `true` as the second argument to force a full, reliable reload instead: `frame.setConfig({ theme: "Dark", locale: "de" }, true)`.

See also: [Set config](../samples/basic-samples/set-config.md).
