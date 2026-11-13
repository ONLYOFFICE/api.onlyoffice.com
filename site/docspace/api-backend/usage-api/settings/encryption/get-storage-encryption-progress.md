# getStorageEncryptionProgress

> DoubleNullableWrapper getStorageEncryptionProgress()

`GET /api/2.0/settings/encryption/progress`

Get the storage encryption progress

Returns the progress of the encryption or decryption run of the installation storage, as a percentage from 0 to 100. To start a run, use `POST api/2.0/settings/encryption/start`. To see its direction, use `GET api/2.0/settings/encryption/settings`. Any signed-in user can call it. The call is read-only. This is the call to poll. Repeat it until the value reaches 100. The server keeps the final value for one minute after the run ends. After that, and when no run exists, the response is empty. So poll at least once a minute. In a custom build, the call returns -1. The call returns 415 if the installation does not offer encryption or is not self-hosted.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Encryption or decryption progress as a percentage, or empty when no run is in flight | [**DoubleNullableWrapper**](../../models/double-nullable-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **415** | Storage encryption is not available on this installation | - | - |
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
