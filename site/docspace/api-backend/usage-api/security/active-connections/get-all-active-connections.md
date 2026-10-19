# getAllActiveConnections

> ActiveConnectionsWrapper getAllActiveConnections()

`GET /api/2.0/security/activeconnections`

Get active connections

Lists the connections the calling user currently has open on this portal - one item per successful sign-in that is still active - so a client can show where the account is signed in and close what does not belong there. Any signed-in user may call it, nothing has to be called first, and the answer always covers the caller alone: the operation is read-only, idempotent and cannot show another user's connections. Items cover the last year and are ordered newest sign-in first, with the caller's own connection moved to the top and its browser, platform, IP address and location refreshed from the current request. `loginEvent` is the ID of that own connection and is `0` when the request was authenticated with a token in the `Authorization` header instead of the portal cookie; nothing is then marked as current, and a user with no stored connections gets a single item describing the current request. `country` and `city` are resolved from the IP address and stay empty when it cannot be located. Pass an item's `id` to `PUT api/2.0/security/activeconnections/logout/{loginEventId}` to end that one connection.

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
