# getAllActiveConnections

> ActiveConnectionsWrapper getAllActiveConnections()

`GET /api/2.0/security/activeconnections`

Get active connections

Returns the active connections of the calling user on this portal. Each item is an active sign-in from the last year, except one case without a cookie. Any signed-in user can call it, including a guest. The list never shows other users' connections, even to a DocSpace admin. The call is read-only. Items come newest first. If the request has a portal cookie, its connection comes first. That item shows the browser, platform, IP address, and location of this request. The `loginEvent` field holds the ID of that connection. Without the cookie, for example with a token in the `Authorization` header, `loginEvent` is 0. Then, if the user has no active connections, the list has one item for this request. To end one connection, pass its `id` to `PUT api/2.0/security/activeconnections/logout/{loginEventId}`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The caller's active connections, newest sign-in first, with `loginEvent` pointing at the connection the request itself was made with | [**ActiveConnectionsWrapper**](../../models/active-connections-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ActiveConnectionsWrapper**](../../models/active-connections-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
