---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

# TAuthErrorCode

Failure categories reported through [TFrameEvents.onAuthError](TFrameEvents.md#onAuthError) in OAuth mode.

- `"TOKEN_RESOLVE_FAILED"` — the SDK could not obtain a token: [TFrameConfig.getToken](TFrameConfig.md#getToken) threw or
  rejected, or neither `getToken` nor [TFrameConfig.accessToken](TFrameConfig.md#accessToken) is set. Fired by the SDK itself.
- `"TOKEN_UNAVAILABLE"` — the frame asked for its first token and received none within 10 seconds.
  Fired by the portal; usually follows `"TOKEN_RESOLVE_FAILED"`.
- `"TOKEN_REFRESH_FAILED"` — the frame asked for a fresh token after a `401` and received none.
  Fired by the portal.
- `"UNAUTHORIZED"` — the portal did not accept the token: it answered `401` again with a freshly
  obtained token, or treated the frame as anonymous on start. The token is invalid, expired or lacks the
  scopes the page needs. Fired by the portal.

```ts
type TAuthErrorCode = 
  | "TOKEN_RESOLVE_FAILED"
  | "TOKEN_UNAVAILABLE"
  | "TOKEN_REFRESH_FAILED"
  | "UNAUTHORIZED";
```

## Example

```typescript
events: {
  onAuthError: ({ code }) => {
    if (code === "UNAUTHORIZED") redirectToLogin();
  },
}
```
