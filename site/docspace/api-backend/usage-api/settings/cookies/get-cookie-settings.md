# getCookieSettings

> CookieSettingsWrapper getCookieSettings()

`GET /api/2.0/settings/cookiesettings`

Get the cookie lifetime settings

Returns how long an authentication session of this portal stays valid: `lifeTime` in minutes together with the `enabled` flag that says whether that limit is applied at all. The caller needs the portal-settings right of a DocSpace administrator - the portal owner and a DocSpace administrator qualify, any other member is refused - and the call is read-only. The pair describes the whole portal rather than the calling user, and it is never empty: a portal nobody has configured answers `lifeTime` 1440, one day, with `enabled` false. Read the two fields together, because the number alone does not say how long a session lasts - while `enabled` is false the stored number is ignored and an issued session is honoured for a year, and `lifeTime` 0 with `enabled` true means a session that never expires on its own. On an installation whose configuration hides the cookie section the built-in default pair comes back instead of the stored one. `GET api/2.0/settings` carries the same flag as `cookieSettingsEnabled` without the number; change the pair with `PUT api/2.0/settings/cookiesettings`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The authentication session lifetime of the portal in minutes together with the flag that says whether that limit is applied | [**CookieSettingsWrapper**](../../models/cookie-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CookieSettingsWrapper**](../../models/cookie-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
