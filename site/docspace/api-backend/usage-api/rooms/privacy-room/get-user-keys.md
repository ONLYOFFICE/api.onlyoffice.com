# getUserKeys

> EncryptionKeyArrayWrapper getUserKeys()

`GET /api/2.0/privacyroom/keys`

Get own encryption keys

Returns every encryption key pair of the calling user, including the encrypted private half. Any signed-in user can call it. The call is read-only. If the caller has no key yet, the answer is an empty list or has no body. A guest cannot create keys, so a guest gets this empty answer unless they had keys before. A user without a key cannot be invited to a private room. To create a key, use `POST api/2.0/privacyroom/keys`. To get the keys of a private room, use `GET api/2.0/privacyroom/{roomId}/access`. To get the keys of one file, use `GET api/2.0/files/file/{fileId}/publickeys`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The encryption keys of the current user | [**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
