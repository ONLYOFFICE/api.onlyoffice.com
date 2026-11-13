# saveSmtpSettings

> SmtpSettingsWrapper saveSmtpSettings(SmtpSettingsDto)

`POST /api/2.0/smtpsettings/smtp`

Save SMTP settings

Saves the SMTP settings of the portal and replaces the saved ones or the settings of the installation. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the SMTP settings section is turned off for the portal, the call returns 402. The call changes data. You can repeat it with the same body. The portal uses the new settings for its next email. The call does not connect to `host` or check the settings. To check them, use `GET api/2.0/smtpsettings/smtp/test` after this call. If `port` is omitted, the portal saves `25`. The call does not save `useNtlm`, so the portal never signs in with NTLM. It returns the saved settings with an empty password. The call returns 400 if `host` or `senderAddress` is empty, or `senderDisplayName` is missing. It also returns 400 if `enableAuth` is true and `credentialsUserName` or `credentialsUserPassword` is empty. It also returns 400 if a text field is too long or `port` is out of range. Nothing is saved after a 400. To return to the settings of the installation, use `DELETE api/2.0/smtpsettings/smtp`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SmtpSettingsDto** | body | [**SmtpSettingsDto**](../../models/smtp-settings-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The SMTP settings now stored for the portal, with an empty password | [**SmtpSettingsWrapper**](../../models/smtp-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, `host` or `senderAddress` is empty, `senderDisplayName` is missing, `enableAuth` is true without `credentialsUserName` or `credentialsUserPassword`, a text field is longer than 255 characters, or `port` is outside 1-65535 | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
