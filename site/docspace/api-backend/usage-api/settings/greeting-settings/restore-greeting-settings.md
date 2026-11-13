# restoreGreetingSettings

> StringWrapper restoreGreetingSettings()

`POST /api/2.0/settings/greetingsettings/restore`

Restore the greeting settings

Resets the greeting title of the current portal to the portal name configured for the installation. If the installation configures no name, the stored title becomes empty. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data, and the change applies immediately to every user of the portal. You can repeat it, and a second call changes nothing. It returns the title in force after the reset. For an empty title, it returns the localized default caption. Then `GET api/2.0/settings/greetingsettings/isdefault` returns `true`. The call does not reset the portal logos or the white-label logo text. To reset them, use `PUT api/2.0/settings/whitelabel/logos/restore` and `PUT api/2.0/settings/whitelabel/logotext/restore`. To set a custom title, use `POST api/2.0/settings/greetingsettings`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The greeting title in force after the restore, or the localized default caption when the installation configures none | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
