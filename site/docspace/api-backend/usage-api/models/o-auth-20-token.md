# OAuth20Token
The OAuth 2.0 token issued by a third-party provider.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **access\_token** | **String** | The token sent to the provider with every request made on behalf of the account. | [optional] [example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`] [nullable] |
| **refresh\_token** | **String** | The token used to obtain a new access token when the current one expires. A provider that issues no refresh token leaves it empty, and the account then has to be connected again to keep working. | [optional] [example: `def50200a1b2c3d4e5f6...`] [nullable] |
| **expires\_in** | **Long** (int64) | How long the access token stays usable, in seconds counted from `timestamp`. Zero means the provider did not say, and the token is then treated as expired. | [optional] [example: `3600`] |
| **client\_id** | **String** | The OAuth 2.0 client ID of the application the token was issued to. | [optional] [example: `my-client-id`] [nullable] |
| **client\_secret** | **String** | The client secret of the application the token was issued to, needed when the token is refreshed. | [optional] [example: `my-client-secret`] [nullable] |
| **redirect\_uri** | **URI** (uri) | The redirect URL the authorization code behind this token was obtained with; providers require the same value again when the token is refreshed. | [optional] [example: `https://app.example.com/callback`] [nullable] |
| **timestamp** | **Date** (date-time) | When the token was issued, in UTC. This is the point `expires_in` is counted from. | [optional] [example: `2026-01-01T00:00:00Z`] |
| **isExpired** | **Boolean** | Whether the access token can no longer be used and has to be refreshed. It is also true when the provider did not say how long the token lives. | [optional] [example: `false`] |
