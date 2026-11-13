# updateLoginSettings

> LoginSettingsWrapper updateLoginSettings(LoginSettingsRequestDto)

`PUT /api/2.0/settings/security/loginsettings`

Update login settings

Updates the brute-force protection of the portal sign-in. After `attemptCount` failed attempts within `checkPeriod` seconds, the portal blocks the sign-in for `blockTime` seconds. The call replaces all three values together. So to change one value, first read the others with `GET api/2.0/settings/security/loginsettings`. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data, and you can repeat it with the same body. The new values apply to attempts made after this call. Running counters and blocks stay as they are. The portal counts failed attempts per user name and IP address. So one blocked member does not block the rest of the portal. A blocked pair cannot sign in even with the correct password, unless it passes the CAPTCHA. The call returns 400 if the body cannot be read, or a value is missing or out of range. It returns the stored settings and whether they match the defaults.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **LoginSettingsRequestDto** | body | [**LoginSettingsRequestDto**](../../models/login-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The brute-force protection settings as they were stored, with the flag that says whether they match the shipped defaults | [**LoginSettingsWrapper**](../../models/login-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or `attemptCount`, `checkPeriod` or `blockTime` is missing or outside 1-9999 | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
