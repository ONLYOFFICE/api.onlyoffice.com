# getTimeZones

> TimezoneArrayWrapper getTimeZones()

`GET /api/2.0/settings/timezones`

Get time zones

Returns the time zones of the server, with the IANA ID and the display name of each. The list always includes UTC and is sorted by standard UTC offset, without daylight saving time. Requires a DocSpace admin, or the confirmation token of the setup wizard. Other signed-in users get 403. An invalid or expired token returns 401. The call is read-only. It returns the whole list without paging. Use the returned `id` values where the portal asks for a time zone.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every time zone known to the host, with its IANA ID and display name | [**TimezoneArrayWrapper**](../../models/timezone-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | The caller is not signed in and sent no setup wizard token, or the token is invalid or expired | - | - |
| **403** | The caller is signed in but is not a DocSpace admin and sent no setup wizard token | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TimezoneArrayWrapper**](../../models/timezone-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
