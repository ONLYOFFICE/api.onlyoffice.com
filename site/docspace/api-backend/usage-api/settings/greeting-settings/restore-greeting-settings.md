# restoreGreetingSettings

> StringWrapper restoreGreetingSettings()

`POST /api/2.0/settings/greetingsettings/restore`

Restore the greeting settings

Drops the custom greeting title of the current portal and puts back the title configured for the installation, which is an empty value unless the installation defines a portal name of its own. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused. The change is immediate for every user of the portal and a second call changes nothing, so a retry after a failed attempt is safe. The answer is the greeting in force afterwards: the configured title when there is one, and the localized default caption when the stored title ends up empty - in that case `GET api/2.0/settings/greetingsettings/isdefault` starts answering `true`. Only the caption is touched: the portal logos and the white-label logo text keep their values and are reset separately by `PUT api/2.0/settings/whitelabel/logos/restore` and `PUT api/2.0/settings/whitelabel/logotext/restore`. To set a title instead of the default one use `POST api/2.0/settings/greetingsettings`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The greeting title in force after the restore, or the localized default caption when the installation configures none | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
