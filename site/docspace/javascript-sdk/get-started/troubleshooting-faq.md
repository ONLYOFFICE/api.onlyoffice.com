---
sidebar_position: 5
description: Common errors and fixes, debugging tips, and known limitations when integrating the DocSpace Embed SDK.
tags: ["DocSpace", "Embed SDK", "Troubleshooting", "FAQ"]
---

# Troubleshooting & FAQ

This page collects fixes for the errors integrators run into most often, tips for debugging a frame that isn't behaving as expected, and known limitations of the current SDK. For a deeper look at how authentication, CSP, and cookies work together, see [Authentication & Security](./authentication-security.md).

## Common errors and fixes

### "The current domain is not set in the Content Security Policy (CSP) settings."

This is the error `initManager()`, `initEditor()`, and every other init method return when the embedding domain isn't in DocSpace's CSP allowlist. See [Content Security Policy (CSP)](./authentication-security.md#content-security-policy-csp) for how to check and update the allowlist.

:::note
This exact message is also shown for init failures that have nothing to do with CSP — see [Known limitations](#known-limitations) below before assuming your CSP settings are wrong.
:::

### Cross-origin / "domain not allowed" errors

The SDK doesn't rely on traditional CORS response headers — instead, the embedding origin must be explicitly whitelisted in DocSpace. If requests from your page are being rejected, see [Registering allowed embed origins](./authentication-security.md#registering-allowed-embed-origins) and confirm the origin is added exactly (scheme, host, and port), since subdomains and paths aren't matched automatically.

### Blank iframe (frame loads but shows nothing)

Check these in order:

1. The container element referenced by `frameId` exists in the DOM *before* `initManager`/`initEditor` is called.
2. `src` points at a reachable DocSpace instance served over HTTPS — mixed content (an HTTPS page loading an HTTP `src`) is silently blocked by the browser. See [Prerequisites](./get-started.md#prerequisites).
3. The origin is whitelisted, per [Registering allowed embed origins](./authentication-security.md#registering-allowed-embed-origins).
4. The browser console and the `onAppError` event (see [Debugging tips](#debugging-tips)) for the actual error — a blank frame is usually a swallowed init error rather than a rendering issue.

### Authentication loops (user is repeatedly asked to sign in)

This is almost always a cross-origin cookie problem: the browser isn't sending the DocSpace session cookie back with the embedded request. Confirm `SameSite: "None"` and `Secure: true` are set on the DocSpace server, per [SameSite cookie requirements](./authentication-security.md#samesite-cookie-requirements), and that both the DocSpace server and the embedding page are served over HTTPS.

If cookies are configured correctly but the loop persists, the viewer's browser may be blocking third-party cookies outright (Safari's Intelligent Tracking Prevention, Chrome's third-party cookie restrictions, or a strict privacy mode). In that case, session-based authentication cannot work regardless of server configuration — use [token-based auth for public rooms](./authentication-security.md#token-based-auth-for-public-rooms) instead.

### "Message bus is not connected with frame"

This means an SDK method was called on an instance whose frame isn't ready yet, or has already been destroyed. Wait for the `onAppReady` or `onContentReady` event before calling instance methods, and stop calling methods on an instance after `destroyFrame()`.

## Debugging tips

The fastest way to see what the SDK is actually doing is to attach handlers to its lifecycle events and log them to the console:

```js
const instance = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.example.com",
  events: {
    onAppReady: (e) => console.log("onAppReady", e),
    onAppError: (e) => console.log("onAppError", e),
    onContentReady: (e) => console.log("onContentReady", e),
  },
});
```

`onAppError` fires with the same error text shown in the frame itself, so logging it is often faster than reading the rendered error page. Combine this with the browser's Network tab to confirm requests to your DocSpace instance are actually reaching it (rather than being blocked by mixed content or an ad blocker).

For the full list of available events and their payloads, see [TFrameEvents](../usage-sdk/type-aliases/TFrameEvents.md).

## Known limitations

- **The CSP error message is generic.** `initManager()`, `initEditor()`, and the other init methods all surface the same [`cspErrorText`](../usage-sdk/variables/cspErrorText.md) string for *any* init failure, not only an actual CSP allowlist violation — a missing or misspelled `src`, for example, produces the identical "not in CSP settings" message. Don't assume a real CSP misconfiguration until you've also checked `src`, network reachability, and the browser console.
- **`checkCSP: false` is all-or-nothing.** There's currently no way to relax the CSP check for debugging without disabling it completely, which is why it's not recommended outside local development — see [Content Security Policy (CSP)](./authentication-security.md#content-security-policy-csp).
