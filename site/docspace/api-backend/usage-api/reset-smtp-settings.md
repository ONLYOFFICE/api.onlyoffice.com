# resetSmtpSettings

Referenced types are defined in the [full reference](../api.md).

> SmtpSettingsWrapper resetSmtpSettings()

`DELETE /api/2.0/smtpsettings/smtp`

Reset SMTP settings

Deletes the SMTP settings of this portal and puts it back on the mail configuration of the installation, so the portal stops using the relay saved by `POST api/2.0/smtpsettings/smtp`. Nothing has to be called first; the caller needs the portal-settings right of a DocSpace administrator, and the SMTP settings section has to be enabled for the portal, otherwise the call is answered with 402. The call is destructive and cannot be undone - the host, the sender identity and the credentials are gone and have to be entered again - but it is idempotent, and on a portal that has no settings of its own it changes nothing. Portal mail itself keeps working as long as the installation has a relay of its own configured. The answer holds the settings that are in force after the reset, always with `isDefaultSettings` true: the server-wide values in a standalone installation, an empty settings object in a cloud portal, and an empty `credentialsUserPassword` in both. Read them back at any time with `GET api/2.0/smtpsettings/smtp`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The settings in force after the reset - the configuration of the installation, or an empty settings object in a cloud portal | [**SmtpSettingsWrapper**](../api.md#model-smtpsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The SMTP settings section is not enabled for this portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SmtpSettingsWrapper**](../api.md#model-smtpsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
