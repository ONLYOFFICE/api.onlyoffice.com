# getSocketSettings

Referenced types are defined in the [full reference](../api.md).

> SocketSettingsWrapper getSocketSettings()

`GET /api/2.0/settings/socket`

Get the socket settings

Returns the base URL of the portal's real-time notification hub (Socket.IO), which the client connects to for live updates such as file changes, presence, or quota alerts. Requires an authenticated session; every role can read it. This is a read-only, idempotent call. The value comes from server-side configuration and cannot be changed through this API; an empty `url` means the portal has no notification hub configured and the client should not attempt to connect.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Base URL of the portal's real-time notification hub | [**SocketSettingsWrapper**](../api.md#model-socketsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SocketSettingsWrapper**](../api.md#model-socketsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
