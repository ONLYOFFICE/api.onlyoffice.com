# getStorageEncryptionProgress

> DoubleNullableWrapper getStorageEncryptionProgress()

`GET /api/2.0/settings/encryption/progress`

Get the storage encryption progress

Returns how far the running encryption or decryption of the installation storage has got, as a percentage from 0 to 100. It reports the run started by `POST api/2.0/settings/encryption/start`, whose direction, encryption or decryption, is told by `GET api/2.0/settings/encryption/settings`. An empty response means no run is in flight and no recent result is remembered: the value of a finished run is kept for one minute after it completes and then dropped, so poll often enough not to miss the end of the operation. A value of -1 means the build does not offer storage encryption at all, and on an installation that is not a server one the call is refused rather than answered. Unlike the other encryption operations, this one asks for no portal-settings permission: any authenticated member of the portal may read the progress, which is intentional, because the portals are unavailable while the run is on and their users need to see when it ends. Nothing is written and the call is safe to repeat.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Encryption or decryption progress as a percentage, or empty when no run is in flight | [**DoubleNullableWrapper**](../../models/double-nullable-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **405** | Storage encryption is not available on this installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DoubleNullableWrapper**](../../models/double-nullable-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
