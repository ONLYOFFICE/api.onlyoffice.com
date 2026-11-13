# getSmtpSettings

> SmtpSettingsWrapper getSmtpSettings()

`GET /api/2.0/smtpsettings/smtp`

Get SMTP settings

Returns the SMTP settings that the portal sends its mail through. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the SMTP settings section is turned off for the portal, the call returns 402. The call is read-only. If `isDefaultSettings` is true, the portal has no settings of its own and uses those of the installation. A standalone installation then returns its values, and a cloud portal returns empty fields. The password in `credentialsUserPassword` is always empty. So ask the user for it before you save the settings again. To check that the mail server accepts mail, use `GET api/2.0/smtpsettings/smtp/test`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The SMTP settings stored for the portal, with an empty password and `isDefaultSettings` telling whether the configuration of the installation is in use | [**SmtpSettingsWrapper**](../../models/smtp-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
