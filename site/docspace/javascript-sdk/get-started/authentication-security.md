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

A more advanced, cookie-free alternative to session-based authentication: instead of relying on the DocSpace session cookie, the frame authorizes every API call with a Bearer access token that your own backend provides. Reach for this when your host application already has its own OAuth infrastructure and you'd rather manage tokens directly than depend on DocSpace's session/cookie behavior.

Supply a `getToken` callback in the frame config:

``` ts
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.example.com",
  getToken: async () => {
    const response = await fetch("/api/docspace-token");
    const { accessToken } = await response.json();
    return accessToken;
  },
});
```

Your backend should perform the OAuth authorization-code / refresh-token exchange and return a fresh, minimally-scoped DocSpace access token. `getToken` is called again whenever the frame needs a new token. See [OAuth 2.0](../../api-backend/get-started/authentication/oauth2/oauth2.md) for how to register an application and obtain tokens.

It's recommended to always include the **Profile** scope (`accounts.self:read`) alongside whatever resource scopes you need (`files:*`, `rooms:*`) — the frame fetches your own profile internally regardless of mode, and without this scope that request fails. Some modes tolerate the failure and keep working; Manager mode does not and may fail to render.

:::warning
Never expose `client_secret` or refresh tokens to the browser. Perform the token exchange on your backend and return only the short-lived access token to `getToken`.
:::

If you already have a valid token and don't need the SDK to refresh it, pass it directly via `accessToken` instead of a callback — optionally with `tokenExpiresAt` for proactive refresh. The SDK cannot refresh a static `accessToken` on its own, so prefer `getToken` for anything longer-lived than the token's TTL.

If the SDK can't resolve a token — `getToken` throws, rejects, or returns nothing — it fires `onAuthError` instead of `onAuthSuccess`. See [Events and callbacks](../events-and-callbacks/events-and-callbacks.md#available-events) for details.

Full parameter reference: [TFrameConfig#getToken](../usage-sdk/type-aliases/TFrameConfig.md#gettoken), [TFrameConfig#accessToken](../usage-sdk/type-aliases/TFrameConfig.md#accesstoken).

## Token-based auth for public rooms

To embed a **public room** without requiring the viewer to be a DocSpace user, pass a `requestToken` in the frame config:

``` ts
DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.example.com",
  requestToken: "<your-room-access-token>",
});
```

The token is scoped to a specific room and grants access to its contents without requiring the viewer to have a DocSpace account. The `requestToken` parameter is supported by all init methods, not just `initManager`.

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

When DocSpace is embedded in an iframe on a different domain, the browser must send session cookies with the cross-origin request. Without this setting, the embedded DocSpace behaves as if no user is logged in.

Note that `"Secure": true` requires both the DocSpace server and the embedding page to be served over HTTPS. Without HTTPS, browsers will not send cookies with the `Secure` flag set.

Set the following in `appsettings.json` on the DocSpace server:

``` json
{
  "CookieSettings": {
    "SameSite": "None",
    "Secure": true
  }
}
```

## Content Security Policy (CSP)

Before initializing the iframe, the SDK checks whether the embedding domain is in DocSpace's CSP allowlist. If not, initialization fails with:

> *"The current domain is not set in the Content Security Policy (CSP) settings."*

The current CSP allowlist can be checked via `GET /api/2.0/security/csp`. To add your domain, register it in **DocSpace settings → Developer Tools → Embed SDK** as described in [Registering allowed embed origins](#registering-allowed-embed-origins) above.

You can set `checkCSP: false` in the frame config to skip the check, but this is not recommended for production — doing so allows the SDK to initialize on any domain, including unauthorized ones.
