# logOutAllExceptThisConnection

> StringWrapper logOutAllExceptThisConnection()

`PUT /api/2.0/security/activeconnections/logoutallexceptthis`

Log out other connections

Closes every active connection of the calling user except the one this request was made with, so the current client keeps working while every other browser and device is signed out. Any signed-in user may call it for their own account and nothing has to be called first. The connection to keep is the one behind the portal authentication cookie: a request authenticated with a token in the `Authorization` header has none, and then every connection of the user is closed, including the one that token belongs to - read `loginEvent` from `GET api/2.0/security/activeconnections` first to see which connection, if any, will survive. The call is mutating and destructive for the other sessions, and idempotent: the tokens behind them stop working, their clients are disconnected at once and a logout entry is written to the portal audit trail. It answers with the display name of the calling user, while an empty answer with status 200 means the attempt failed and nothing can be assumed about what was closed.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The display name of the calling user, or an empty result when the operation failed | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
