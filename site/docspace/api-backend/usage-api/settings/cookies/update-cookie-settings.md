# updateCookieSettings

> StringWrapper updateCookieSettings(CookieSettingsRequestDto)

`PUT /api/2.0/settings/cookiesettings`

Update the cookie lifetime settings

Changes how long a sign-in session of the portal stays valid. Send the limit in minutes as `lifeTime`, and turn it on with `enabled`. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the installation hides the cookie section, the call saves nothing and returns 402. The call changes a `lifeTime` over 9999 to 9999. A value of 0 or less clears the number. With `enabled` true, sessions then never expire on their own. Any positive `lifeTime` ends every session issued before the call. If `enabled` is also true, the portal closes their connections. The call signs the caller in again and returns a new session cookie. Use that cookie for later calls. The call changes data. Each repeat with a positive `lifeTime` ends all sessions again, and a repeat with 0 or less ends no session. It returns a localized confirmation message. To read the stored pair, use `GET api/2.0/settings/cookiesettings`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CookieSettingsRequestDto** | body | [**CookieSettingsRequestDto**](../../models/cookie-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A localized message confirming that the session lifetime has been saved | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The installation hides the cookie lifetime section, or the portal's payment has lapsed | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
