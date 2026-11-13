# logOutAllExceptThisConnection

> StringWrapper logOutAllExceptThisConnection()

`PUT /api/2.0/security/activeconnections/logoutallexceptthis`

Log out other connections

Ends all active connections of the calling user except the connection of this request. Any signed-in user can call it, including a guest. The call keeps the connection in the portal cookie of the request. Without the cookie, for example with a token in the `Authorization` header, it ends every connection. To see which connection stays, first read `loginEvent` of `GET api/2.0/security/activeconnections`. The tokens and cookies of the ended connections stop working. This cannot be undone, but you can repeat the call. It returns the display name of the calling user. If the call fails, it still returns 200 with an empty result. Then you cannot tell which connections it ended.

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
