# getSmtpSettings

> SmtpSettingsWrapper getSmtpSettings()

`GET /api/2.0/smtpsettings/smtp`

Get SMTP settings

Returns the SMTP relay this portal sends its own mail through - host, port, sender identity and authentication flags - as it is stored for the portal. Nothing has to be called first; the caller needs the portal-settings right of a DocSpace administrator, and the SMTP settings section has to be enabled for the portal, otherwise the call is answered with 402. The call is read-only and safe to repeat. `isDefaultSettings` is true when the portal has no settings of its own and runs on the mail configuration of the installation: a standalone installation then shows those server-wide values, while a cloud portal is answered with an empty settings object instead, so an empty `host` together with `isDefaultSettings` true means nothing was ever saved here. `credentialsUserPassword` always comes back empty - the stored password cannot be read back, and a client that saves the settings again has to ask the user for it once more. `port` is the port that was saved, and settings saved without one are stored with `25`. To find out whether the returned relay actually accepts mail, queue a test with `GET api/2.0/smtpsettings/smtp/test`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The SMTP settings stored for the portal, with an empty password and `isDefaultSettings` telling whether the configuration of the installation is in use | [**SmtpSettingsWrapper**](../../models/smtp-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The SMTP settings section is not enabled for this portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SmtpSettingsWrapper**](../../models/smtp-settings-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
