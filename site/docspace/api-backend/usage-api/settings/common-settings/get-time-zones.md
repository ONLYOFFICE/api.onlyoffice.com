# getTimeZones

> TimezonesRequestsArrayWrapper getTimeZones()

`GET /api/2.0/settings/timezones`

Get time zones

Returns every time zone known to the host machine, each with its IANA identifier and a human-readable display name, ordered from the most negative to the most positive UTC offset. This call is not for a normal logged-in session: it requires a confirmation link bearing the Wizard or Administrators claim, of the kind generated during initial portal setup or issued by an administrator, and the link is consumed as part of authenticating the request. This is a read-only, idempotent call, and the list is not paginated. Use the returned `id` values wherever the portal expects a time zone identifier; an unrecognized value is rejected there, not here.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every time zone known to the host, with its IANA ID and display name | [**TimezonesRequestsArrayWrapper**](../../models/timezones-requests-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TimezonesRequestsArrayWrapper**](../../models/timezones-requests-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
