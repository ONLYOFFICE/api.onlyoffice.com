---
sidebar_position: 3
---

# Locale and language

The `locale` parameter sets the language of the DocSpace user interface, independently of the host application's own language.

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  locale: "en-US",
});
```

Accepts either a two-letter language code (`"de"`) or a four-letter language-region code (`"en-US"`). If omitted, the interface follows the language configured on the DocSpace portal (or the signed-in user's own language preference).

For the current, authoritative list of languages your portal supports, call [Get supported languages](../../api-backend/usage-api/get-supported-cultures.api.mdx) (`GET /api/2.0/settings/cultures`) rather than hardcoding a list — supported languages are configured per portal, and not every language has both a two-letter and a region-qualified form (for example, German may only be available as `"de"`, without a `"de-DE"` variant).

Full parameter reference: [TFrameConfig#locale](../usage-sdk/type-aliases/TFrameConfig.md#locale).

## Use cases

### Matching your app's language

Pass through the language your application is already using, converting it to a locale DocSpace recognizes:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  locale: navigator.language, // e.g. "en-US", "de"
});
```

### Switching language at runtime

Use `setConfig()` on an existing instance to change the locale without reinitializing the frame:

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];
await frame.setConfig({ locale: "de" });
```

See also: [Set config](../samples/basic-samples/set-config.md).
