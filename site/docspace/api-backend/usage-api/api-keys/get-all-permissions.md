# getAllPermissions

> STRINGArrayWrapper getAllPermissions()

`GET /api/2.0/keys/permissions`

Get API key permissions

Returns every scope value the portal accepts in the `permissions` array of an API key. Read it before `POST api/2.0/keys` or `PUT api/2.0/keys/{keyId}`, because any other value is rejected with 400. Any portal member except a guest may call it, and the call is read-only. The answer is a flat list sorted alphabetically, holding the per-area scopes such as `accounts:read`, `files:write` and `rooms:write`, the portal-wide `*:read` and `*:write`, and `*` which stands for a key without scope restrictions. The list is fixed for the portal and identical for every caller, so it can be cached by the client.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The scope values accepted in the permissions array of an API key | [**STRINGArrayWrapper**](../models/string-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**STRINGArrayWrapper**](../models/string-array-wrapper.md)

## Authorization

[Basic](api-keys.md#basic), [OAuth2](api-keys.md#oauth2) (scopes: read, write), [ApiKeyBearer](api-keys.md#apikeybearer), [asc_auth_key](api-keys.md#asc_auth_key), [Bearer](api-keys.md#bearer), [OpenId](api-keys.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
