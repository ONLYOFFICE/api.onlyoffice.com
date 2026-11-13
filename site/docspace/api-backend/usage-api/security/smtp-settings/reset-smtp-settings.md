# resetSmtpSettings

> SmtpSettingsWrapper resetSmtpSettings()

`DELETE /api/2.0/smtpsettings/smtp`

Reset SMTP settings

Deletes the SMTP settings of the portal. After this call, the portal uses the mail settings of the installation. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the SMTP settings section is turned off for the portal, the call returns 402. The call cannot be undone. To use the deleted settings again, save them with `POST api/2.0/smtpsettings/smtp`. You can repeat the call. If the portal has no settings of its own, it changes nothing. The call returns the settings now in use, with `isDefaultSettings` true. A standalone installation returns its values, and a cloud portal returns empty fields. The password is always empty.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The settings in force after the reset - the configuration of the installation, or an empty settings object in a cloud portal | [**SmtpSettingsWrapper**](../../models/smtp-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The SMTP settings section is not enabled for this portal | - | - |
| **403** | The caller has no portal-settings right | - | - |
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
