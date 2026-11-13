# getApiKeys

> ApiKeyResponseArrayWrapper getApiKeys()

`GET /api/2.0/keys`

Get the API keys

Returns the API keys that the caller can see. A DocSpace admin gets every key of the portal. Other users get only the keys they created. Any signed-in user can call it, except a guest. A guest gets 403. The call is read-only. The list includes expired and deactivated keys, so check `expiresAt` and `isActive`. For a user, an empty list means they created no keys, not that the portal has none.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every key of the portal for a DocSpace admin, or the keys created by the caller for anybody else | [**ApiKeyResponseArrayWrapper**](../models/api-key-response-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ApiKeyResponseArrayWrapper**](../models/api-key-response-array-wrapper.md)

## Authorization

[Basic](api-keys.md#basic), [OAuth2](api-keys.md#oauth2) (scopes: read, write), [ApiKeyBearer](api-keys.md#apikeybearer), [asc_auth_key](api-keys.md#asc_auth_key), [Bearer](api-keys.md#bearer), [OpenId](api-keys.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
