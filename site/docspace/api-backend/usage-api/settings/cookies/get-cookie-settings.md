# getCookieSettings

> CookieSettingsWrapper getCookieSettings()

`GET /api/2.0/settings/cookiesettings`

Get the cookie lifetime settings

Returns how long a sign-in session of the portal stays valid. The answer has `lifeTime` in minutes and the `enabled` flag that turns this limit on. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. The pair is for the whole portal, not for the calling user. A portal that nobody has configured returns `lifeTime` 1440, one day, with `enabled` false. Read the two fields together. While `enabled` is false, the portal ignores the number and a session lasts a year. If `lifeTime` is 0 and `enabled` is true, sessions never expire on their own. If the installation hides the cookie section, the call returns the default pair instead of the stored one. The `cookieSettingsEnabled` field of `GET api/2.0/settings` has the same flag without the number. To change the pair, use `PUT api/2.0/settings/cookiesettings`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The authentication session lifetime of the portal in minutes together with the flag that says whether that limit is applied | [**CookieSettingsWrapper**](../../models/cookie-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
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
