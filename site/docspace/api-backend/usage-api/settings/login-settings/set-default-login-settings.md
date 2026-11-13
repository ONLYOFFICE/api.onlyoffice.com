# setDefaultLoginSettings

> LoginSettingsWrapper setDefaultLoginSettings()

`DELETE /api/2.0/settings/security/loginsettings`

Reset login settings

Resets the brute-force protection of the portal sign-in to the defaults. The defaults are 5 failed attempts, a window of 60 seconds, and a block of 60 seconds. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data and takes no parameters. It overwrites the current values without a confirmation. To keep them, first read them with `GET api/2.0/settings/security/loginsettings`. You can repeat the call. The reset applies to attempts made after this call. Sign-ins that are already blocked stay blocked until their block ends. Running attempt counters stay as they are. The sign-in form asks for a captcha one attempt before the block. The call returns the restored settings with `isDefault` set to `true`. To set your own values, use `PUT api/2.0/settings/security/loginsettings`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The brute-force protection settings restored to the shipped defaults | [**LoginSettingsWrapper**](../../models/login-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
