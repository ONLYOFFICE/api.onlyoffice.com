---
sidebar_position: 4
description: How authentication works in the DocSpace Embed SDK and how to configure your integration securely.
tags: ["DocSpace", "Embed SDK", "Integration", "Security"]
---

# Authentication and security

Choosing the right authentication approach depends on who your users are and whether they have DocSpace accounts:

- **Your users already have DocSpace accounts** — rely on the existing browser session. The iframe picks it up automatically. See [Session-based authentication](#session-based-authentication) below.
- **You control the login UI** — authenticate programmatically using `getHashSettings()` → `createHash()` → `login()` before initializing any frame. See the [Authorization sample](../samples/advanced-samples/authorization.md) and [Login sample](../samples/basic-samples/login.md).
- **Your backend already manages its own access tokens** — skip the DocSpace session and cookies entirely, and authorize API calls with a Bearer token your backend issues. See [OAuth authentication](#oauth-authentication) below.
- **Your users have no DocSpace account** — embed a public room using `requestToken`. No login required on the viewer's side. See [Token-based auth for public rooms](#token-based-auth-for-public-rooms) below.

## Session-based authentication

The simplest option when your users already have DocSpace accounts: *api.js* uses the active DocSpace application session to authenticate them. If the user is logged in to the DocSpace portal that the SDK will connect to, then *api.js* recognizes and uses that active session — no extra configuration needed.

If the users are not authenticated, they will see a page asking them to sign in to DocSpace whenever they are not already signed in. Authentication is also possible through the SDK [login](../usage-sdk/classes/SDKInstance.md#login) method.

## OAuth authentication

A more advanced, cookie-free alternative to session-based authentication: instead of relying on the DocSpace session cookie, the frame authorizes every API call with a Bearer access token that your own backend provides. Reach for this when your host application already has its own OAuth infrastructure and you'd rather manage tokens directly than depend on DocSpace's session/cookie behavior. It works the same way in every embedding mode.

Supply a `getToken` callback in the frame config:

``` ts
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  getToken: async () => {
    const response = await fetch("/api/docspace-token");
    const { accessToken } = await response.json();
    return accessToken;
  },
  events: {
    onAuthError: ({ code, message }) => {
      console.warn(`Auth failed: ${code} ${message}`);
      docSpace.destroyFrame();
    },
  },
});
```

Your backend should perform the OAuth authorization-code / refresh-token exchange and return a fresh, minimally-scoped DocSpace access token. `getToken` is called on demand — when the frame first needs a token, and again after a portal request comes back `401` — and also proactively, about a minute before the current token expires, so a request is never made with a token that's already stale. See [OAuth 2.0](../../api-backend/get-started/authentication/oauth2/oauth2.md) for how to register an application and obtain tokens.

Proactive refresh needs an expiry to schedule against. For a JWT access token, the SDK reads it straight from the token's own `exp` claim — nothing to configure. For an opaque (non-JWT) token, set `tokenExpiresAt` (epoch milliseconds) in the config, but only the very first token you return needs it: every token your backend returns after that carries its own expiry the same way (a JWT's `exp`, or, for another opaque token, none — `tokenExpiresAt` isn't consulted again after the first token). A token the SDK can't find an expiry for still works, it's just not refreshed ahead of time — the next refresh only happens reactively, after that token fails a request with a `401`.

It's recommended to always include the **Profile** scope (`accounts.self:read`) alongside whatever resource scopes you need (`files:*`, `rooms:*`) — the frame fetches your own profile internally regardless of mode, and without this scope that request fails. Some modes tolerate the failure and keep working; Manager mode does not and may fail to render.

:::warning
Never expose `client_secret` or refresh tokens to the browser. Perform the token exchange on your backend and return only the short-lived access token to `getToken`.
:::

If you already have a valid token and don't need the SDK to refresh it, pass it directly via `accessToken` instead of a callback. A static `accessToken` is never refreshed by the SDK — proactively or on a `401` — so use `getToken` for anything that needs to outlive the token's own TTL.

[`login()`](../usage-sdk/classes/SDKInstance.md#login) and [`logout()`](../usage-sdk/classes/SDKInstance.md#logout) are unavailable in OAuth mode — both reject with `SDKErrorCode.ModeMismatch`, since the host owns the session instead of the portal's own cookie-based one: `login()` rejects with *"login is not available in OAuth mode: the host supplies the access token via getToken"*, `logout()` with *"logout is not available in OAuth mode: revoke the token on the host and call destroyFrame"*. There's no session cookie to end in the first place, so ending a session is a host-side action, not a frame call: stop renewing the token on your backend (revoke the refresh token, if your OAuth provider supports that), then call [`destroyFrame()`](../usage-sdk/classes/SDKInstance.md#destroyframe) — nothing else in the browser would otherwise stop the frame from working with whatever token it was last given.

If the frame's own UI exposes a sign-out action (Manager mode's profile menu, when shown) and a visitor uses it, the frame latches into a signed-out state for the rest of that frame's lifetime — it stops asking for tokens entirely instead of silently fetching a new one and carrying on as if nothing happened. [`onSignOut`](../events-and-callbacks/events-and-callbacks.md#available-events) still fires, the same as in session-based auth. This latch lives inside the iframe's own document, so it doesn't need to be undone: a fresh `init*()` call creates a new frame with a clean state.

The frame never shows DocSpace's own sign-in page in OAuth mode. If no usable token is available, it stays on a loader and reports the problem through `onAuthError` instead of `onAppError`, with a `code` identifying what went wrong:

- `TOKEN_RESOLVE_FAILED` — `getToken` threw, rejected, or returned nothing, or neither `getToken` nor `accessToken` is set. Reported by the SDK itself.
- `TOKEN_UNAVAILABLE` — the frame asked for its first token and got none back within 10 seconds. Reported by the portal.
- `TOKEN_REFRESH_FAILED` — the frame asked for a fresh token after a `401` and got none back. Reported by the portal.
- `UNAUTHORIZED` — the portal still answered `401` with a freshly obtained token — it's expired, revoked, or missing a scope the current page needs. Reported by the portal.

A `getToken` failure on the very first token request typically fires both of the first two, not just one: `TOKEN_RESOLVE_FAILED` arrives immediately from the SDK, and `TOKEN_UNAVAILABLE` follows about 10 seconds later — the portal waits out its own timeout for a token reply that was never going to arrive, since `getToken` never produced one to send.

Treat all four as the same kind of problem in practice: something is wrong with the token your backend is producing, or the session it depends on at the OAuth provider has ended. Re-check `getToken`'s own logic first; if that isn't it, call `destroyFrame()` and send the user back through your own re-authentication flow rather than leaving the frame stuck on its loader. There's no dedicated `onAuthSuccess` for OAuth mode — that event only fires from DocSpace's own confirm-by-link login page — so a successful token resolution is visible only indirectly, through the frame loading and firing `onAppReady`.

Full parameter reference: [TFrameConfig#getToken](../usage-sdk/type-aliases/TFrameConfig.md#gettoken), [TFrameConfig#accessToken](../usage-sdk/type-aliases/TFrameConfig.md#accesstoken).

## Token-based auth for public rooms

To embed a **public room** without requiring the viewer to be a DocSpace user, pass a `requestToken` in the frame config:

``` ts
DocSpace.SDK.initPublicRoom({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  requestToken: "<your-room-access-token>",
  id: "your-room-or-folder-id",
});
```

The token is scoped to a specific room and grants access to its contents without requiring the viewer to have a DocSpace account. See [Public room mode](../embedding-modes/public-room-mode.md) for the full parameter reference.

`requestToken` isn't accepted by every init method — only [Public room](../embedding-modes/public-room-mode.md), [Manager](../embedding-modes/manager-mode.md), and [Editor](../embedding-modes/editor-mode.md)/[Viewer](../embedding-modes/viewer-mode.md) mode read it; selector, Uploader, Forms, Chat, Personal, and System mode ignore it. In Manager mode it opens the room's classic shared-link path (`/rooms/shared/?key=...`) instead of the dedicated Public room UI shown above — for a public-facing embed, `initPublicRoom` is the intended entry point.

:::warning
Never expose admin-level tokens in client-side code. Obtain `requestToken` values server-side and inject them into the page at render time.
:::

## Registering allowed embed origins

For the Embed SDK to work correctly, it must be launched on the server. Note that running the HTML file directly will not work. Please make sure you are using a server environment.

You need to add the URL of your server's root directory to the **Developer Tools** section of DocSpace:

1. Go to the DocSpace settings.
2. Navigate to the **Developer Tools** section.
3. On the **Embed SDK** tab, in the **Enter the address of DocSpace to embed** field, add the URL of your server's root directory.

![Developer Tools URL whitelist](/assets/images/docspace/add-in-js-sdk-root-url.png#gh-light-mode-only)![Developer Tools URL whitelist](/assets/images/docspace/add-in-js-sdk-root-url.dark.png#gh-dark-mode-only)

Only exact origins are matched — subdomains and paths are not automatically included. Add each distinct origin separately.

## SameSite cookie requirements

When DocSpace is embedded in an iframe on a different domain, the browser must send its session cookie along with the cross-origin request — otherwise the embedded DocSpace behaves as if no user is logged in. There's nothing to configure for the common case: with both sides served over HTTPS and the embedding page's origin registered under [Developer Tools](#registering-allowed-embed-origins), the portal sets the cookie's `SameSite=None; Secure; Partitioned` attributes automatically. Without HTTPS, the cookie falls back to `SameSite=Strict` and isn't sent inside the iframe at all, breaking session-based authentication (see the note in [Get started](./get-started.md#prerequisites)).

The `Partitioned` attribute is what keeps this working even when the browser blocks third-party cookies outright — Chrome, Firefox, and Safari 18.4+ all still allow a partitioned cookie through, scoped to the embedding page's origin.

If you need to force a specific mode regardless of these defaults, the DocSpace server reads a `web.samesite` key from its configuration (empty/unset by default, which is what enables the automatic behavior above).

## Content Security Policy (CSP)

Before initializing the iframe, the SDK checks whether the embedding domain is in DocSpace's CSP allowlist. If not, initialization fails with:

> *"The current domain is not set in the Content Security Policy (CSP) settings."*

The current CSP allowlist can be checked via `GET /api/2.0/security/csp`. To add your domain, register it in **DocSpace settings → Developer Tools → Embed SDK** as described in [Registering allowed embed origins](#registering-allowed-embed-origins) above.

The check compares only the embedding page's host and port against the allowlist — the scheme (`http` vs `https`) isn't part of the comparison, so an `http` and `https` variant of the same host are indistinguishable to the SDK. It's also skipped automatically when the embedding page and `src` share the same origin.

`checkCSP: false` skips this fetch entirely — it's a client-side optimization for when you already know your origin is allowlisted (avoiding the extra round trip to `/api/2.0/security/csp` on every load), not a way to bypass the restriction. The portal still sends its own CSP headers regardless of this setting, and the browser enforces `frame-ancestors` on top of them — an unauthorized origin's iframe will still be blocked even with `checkCSP: false`, it just fails later (as a browser-level CSP violation) instead of showing the SDK's own error page.
