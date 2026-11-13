# getSupportedCultures

> StringArrayWrapper getSupportedCultures()

`GET /api/2.0/settings/cultures`

Get supported languages

Returns the codes of the languages that the installation supports, such as `en-US`. Anyone can call it without signing in, even when the portal is unpaid. The call is read-only. It returns the whole list without paging. It supports `If-None-Match` with the `ETag` of the last answer. If the list did not change, it returns 304 with an empty body.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Language codes of every culture currently enabled on the portal | [**StringArrayWrapper**](../../models/string-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **304** | The list of enabled cultures has not changed since the `ETag` sent back in `If-None-Match`; the body is empty | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringArrayWrapper**](../../models/string-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
