# getAllPermissions

> StringArrayWrapper getAllPermissions()

`GET /api/2.0/keys/permissions`

Get API key permissions

Returns every scope that the `permissions` array of an API key accepts. Use these values in `POST api/2.0/keys` and `PUT api/2.0/keys/{keyId}`. Those calls accept no other value. Any signed-in user can call it, except a guest. A guest gets 403. The call is read-only. The list is in alphabetical order and the same for every caller. Besides the scopes of each area, it has `*:read`, `*:write`, and `*`. The value `*` means a key without scope restrictions.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The scope values accepted in the permissions array of an API key | [**StringArrayWrapper**](../models/string-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringArrayWrapper**](../models/string-array-wrapper.md)

## Authorization

[Basic](api-keys.md#basic), [OAuth2](api-keys.md#oauth2) (scopes: read, write), [ApiKeyBearer](api-keys.md#apikeybearer), [asc_auth_key](api-keys.md#asc_auth_key), [Bearer](api-keys.md#bearer), [OpenId](api-keys.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
