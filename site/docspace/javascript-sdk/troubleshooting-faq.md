---
slug: /docspace/javascript-sdk/get-started/troubleshooting-faq
description: Common errors and fixes, debugging tips, and known limitations when integrating the DocSpace Embed SDK.
tags: ["DocSpace", "Embed SDK", "Troubleshooting", "FAQ"]
---

# Troubleshooting & FAQ

This page collects fixes for the errors integrators run into most often, tips for debugging a frame that isn't behaving as expected, and known limitations of the current SDK. For a deeper look at how authentication, CSP, and cookies work together, see [Authentication & Security](./get-started/authentication-security.md).

## Common errors and fixes

### "The current domain is not set in the Content Security Policy (CSP) settings."

This is the error every init method reports through `onAppError` and renders inside the frame when the embedding domain isn't in DocSpace's CSP allowlist. See [Content Security Policy (CSP)](./get-started/authentication-security.md#content-security-policy-csp) for how to check and update the allowlist.

:::note
The frame shows the same CSP error page for init failures that have nothing to do with CSP. Check the `onAppError` payload and the browser console for the real cause before assuming your CSP settings are wrong. See [Known limitations](#known-limitations) below.
:::

### Cross-origin / "domain not allowed" errors

The SDK doesn't rely on traditional CORS response headers. Instead, the embedding origin must be explicitly whitelisted in DocSpace. If requests from your page are being rejected, see [Registering allowed embed origins](./get-started/authentication-security.md#registering-allowed-embed-origins). The SDK compares only the host and port, case-insensitively, so add the entry as a host and port, without a scheme or path. An entry with a path, such as `https://example.com/app`, never matches, and subdomains aren't matched automatically.

### Blank iframe (frame loads but shows nothing)

Check these in order:

1. The container element referenced by `frameId` exists in the DOM *before* `initManager`/`initEditor` is called. If there's no element with this ID, the init method returns `null` and inserts nothing.
2. `src` is set and points at a reachable DocSpace instance served over HTTPS. When `src` is empty or isn't a valid URL, the SDK logs `SDK Warning: src is empty` or `src "..." is not a valid URL` to the console. Mixed content (an HTTPS page loading an HTTP `src`) is silently blocked by the browser. See [Prerequisites](./get-started/get-started.md#prerequisites).
3. The origin is whitelisted, per [Registering allowed embed origins](./get-started/authentication-security.md#registering-allowed-embed-origins).
4. The browser console and the `onAppError` event (see [Debugging tips](#debugging-tips)) for the actual error. A blank frame is usually a swallowed init error rather than a rendering issue.

### Authentication loops (user is repeatedly asked to sign in)

This is almost always a cross-origin cookie problem: the browser isn't sending the DocSpace session cookie back with the embedded request. You don't need to configure the cookie attributes manually. DocSpace sets `Secure` and `SameSite=None` on the authentication cookie automatically, and adds the `Partitioned` attribute, when both of these conditions are met:

- the request comes over HTTPS;
- the CSP allowlist isn't empty.

Otherwise, the cookie falls back to `SameSite=Strict`, and the embedded frame loses the session. So make sure that both the DocSpace server and the embedding page are served over HTTPS, and that the embedding origin is in the allowlist. The mode can be overridden with the `web:samesite` configuration key on the DocSpace server, but this is rarely needed.

Thanks to the `Partitioned` attribute, browsers that support [CHIPS](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) (Chrome, Firefox, and Safari 18.4+) keep the session cookie in separate storage under the embedding site, even when third-party cookies are blocked. If the loop persists in a browser without CHIPS support or in a strict privacy mode, use [token-based auth for public rooms](./get-started/authentication-security.md#token-based-auth-for-public-rooms) instead.

### "Message bus is not connected with frame"

This means an SDK method was called on an instance whose frame isn't ready yet, or has already been destroyed. Wait for the `onAppReady` or `onContentReady` event before calling instance methods, and stop calling methods on an instance after `destroyFrame()`.

`setConfig()` is the only method that you can call before the frame connects. Also note that calling an init method again with the same `frameId` reloads the frame and rejects all pending method calls with `Frame reloaded`.

### A method returned an error, but the promise didn't reject

Instance methods reject only on SDK-side errors, such as a timeout, a disconnected frame, or a method that isn't available in the current mode. When a DocSpace API call fails, the portal sends the error back as a regular method result, so the promise resolves:

- for HTTP errors, the result is an object with `message`, `name`, `code`, and `status` fields;
- for some errors, the result is an empty object `{}`;
- for a method that the current mode doesn't support, the result is the `"Wrong method for this mode"` string.

This means `try`/`catch` catches only SDK errors, and checking `result.status` catches only HTTP errors. To detect success reliably, check for a field that a successful result always has, such as `id`:

```js
const room = await instance.createRoom("Project room", 5);
if (!room?.id) {
  console.error("Failed to create the room", room);
}
```

## SDK error codes

When an instance method rejects, the error has one of the following codes:

| Code | Description |
| --- | --- |
| `TIMEOUT` | The frame didn't answer within `methodTimeout` (30 seconds by default). |
| `DISCONNECTED` | The frame isn't connected (`Message bus is not connected with frame`), was reloaded (`Frame reloaded`), or was destroyed (`Frame destroyed`). |
| `CSP_VIOLATION` | The embedding origin isn't in the DocSpace CSP allowlist. |
| `MODE_MISMATCH` | The method isn't available in the current mode. For example, `upload()` and `setCustomActions()` work only in the Forms mode, and `navigateSection()` works only in the Forms and Personal modes. |
| `INVALID_CONFIG` | The frame config is invalid. |
| `UPLOAD_FAILED` | A file upload failed. |
| `PARSE_ERROR` | A message from the frame couldn't be parsed. |
| `TOKEN_RESOLVE_FAILED` | The SDK couldn't get an access token. |

## Debugging tips

The fastest way to see what the SDK is actually doing is to attach handlers to its lifecycle events and log them to the console:

```js
const instance = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "{PORTAL_SRC}",
  events: {
    onAppReady: (e) => console.log("onAppReady", e),
    onAppError: (e) => console.log("onAppError", e),
    onContentReady: (e) => console.log("onContentReady", e),
  },
});
```

`onAppError` receives the real cause of the error, even when the frame shows the generic CSP error page, so logging it is often faster than reading the rendered page. Combine this with the browser's Network tab to confirm requests to your DocSpace instance are actually reaching it (rather than being blocked by mixed content or an ad blocker).

`onAppError` fires only for SDK-side errors: CSP check failures, message parsing errors, a disconnected frame, or token errors. DocSpace API errors don't trigger it (see [A method returned an error, but the promise didn't reject](#a-method-returned-an-error-but-the-promise-didnt-reject)). Authorization errors in an OAuth frame arrive in the `onAuthError` event with `{ code: "UNAUTHORIZED" }`.

For the full list of available events and their payloads, see [TFrameEvents](./usage-sdk/type-aliases/TFrameEvents.md).

## Known limitations

- **The frame shows the same CSP error page for any init failure.** When the CSP check fails for any reason, the SDK renders the same CSP error page inside the frame, not only for an actual allowlist violation. The `onAppError` payload tells the cases apart: `Invalid URL` for an empty or invalid `src`, `CSP validation failed: ...` when the portal can't be reached, and the "not set in the Content Security Policy (CSP) settings" message only when the domain is really missing from the allowlist. Check `onAppError` and the browser console before changing your CSP settings. To detect an allowlist violation in code, check for the `CSP_VIOLATION` error code.
- **`checkCSP: false` is all-or-nothing.** There's currently no way to relax the CSP check for debugging without disabling it completely, which is why it's not recommended outside local development. See [Content Security Policy (CSP)](./get-started/authentication-security.md#content-security-policy-csp).
