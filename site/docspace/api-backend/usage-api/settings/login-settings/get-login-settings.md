# getLoginSettings

> LoginSettingsWrapper getLoginSettings()

`GET /api/2.0/settings/security/loginsettings`

Get login settings

Returns the brute-force protection of the portal sign-in. It has the tolerated failed attempts, the counting window, and the block time. The window and the block time are in seconds. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. It supports `If-Modified-Since` with the `Last-Modified` value of an earlier answer. If the settings have not changed since then, the call returns 304 with an empty body. A portal that nobody configured allows 5 failed attempts in 60 seconds and blocks for 60 seconds. Then `isDefault` is `true`, and it becomes `false` when any of the three values differs. The answer does not show which accounts or addresses are blocked now. To read past lockouts in the login history, use `GET api/2.0/security/audit/login/filter`. To change the values, use `PUT api/2.0/settings/security/loginsettings`. To restore the defaults, use `DELETE api/2.0/settings/security/loginsettings`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The brute-force protection settings of the portal: the tolerated attempts, the counting window and the block in seconds, and whether they match the shipped defaults | [**LoginSettingsWrapper**](../../models/login-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **304** | The brute-force protection settings have not changed since the `Last-Modified` value sent back in `If-Modified-Since`; the body is empty | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**LoginSettingsWrapper**](../../models/login-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
