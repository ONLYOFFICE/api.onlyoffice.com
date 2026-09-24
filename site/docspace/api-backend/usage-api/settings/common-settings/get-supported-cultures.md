# getSupportedCultures

> STRINGArrayWrapper getSupportedCultures()

`GET /api/2.0/settings/cultures`

Get supported languages

Returns the two- or four-letter language codes of every culture currently enabled on the portal (for example `en-US`), used to populate a language picker before or after login. No permission is required; anonymous callers can read it too. This is a read-only, idempotent call, and the list is not paginated. The response supports conditional requests: an unchanged result is signaled instead of resending the same list. The set of enabled cultures is a portal-wide configuration value, not a per-user preference.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Language codes of every culture currently enabled on the portal | [**STRINGArrayWrapper**](../../models/string-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**STRINGArrayWrapper**](../../models/string-array-wrapper.md)

## Authorization

[cookieAuth](../settings.md#cookieauth), [bearerAuth](../settings.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
