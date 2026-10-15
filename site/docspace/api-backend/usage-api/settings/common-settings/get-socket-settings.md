# getSocketSettings

> SocketSettingsWrapper getSocketSettings()

`GET /api/2.0/settings/socket`

Get the socket settings

Returns the base URL of the portal's real-time notification hub (Socket.IO), which the client connects to for live updates such as file changes, presence, or quota alerts. Requires an authenticated session; every role can read it. This is a read-only, idempotent call. The value comes from server-side configuration and cannot be changed through this API; an empty `url` means the portal has no notification hub configured and the client should not attempt to connect.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Base URL of the portal's real-time notification hub | [**SocketSettingsWrapper**](../../models/socket-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SocketSettingsWrapper**](../../models/socket-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
