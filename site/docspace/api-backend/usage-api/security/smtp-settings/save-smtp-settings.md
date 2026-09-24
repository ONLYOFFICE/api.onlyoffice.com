# saveSmtpSettings

> SmtpSettingsWrapper saveSmtpSettings(SmtpSettingsDto)

`POST /api/2.0/smtpsettings/smtp`

Save SMTP settings

Stores the SMTP relay that this portal will hand all of its own mail to, replacing whatever was saved before and taking the portal off the mail configuration of the installation. Nothing has to be called first; the caller needs the portal-settings right of a DocSpace administrator, and the SMTP settings section has to be enabled for the portal, otherwise the call is answered with 402. The call is mutating and idempotent - the same body saved twice leaves the same settings - and it applies to the next message the portal sends. The settings are stored unverified, no connection to `host` is attempted, so queue `GET api/2.0/smtpsettings/smtp/test` afterwards to find out whether they work. `host` and `senderAddress` must not be empty, `senderDisplayName` has to be present, and `enableAuth` true also requires `credentialsUserName` and `credentialsUserPassword`; a request that misses any of them is rejected and nothing is saved. `port` falls back to `25` when it is omitted, and `useNtlm` is accepted but not stored, so the saved settings always authenticate with a plain user name and password. The answer repeats the stored settings with the password emptied. Use `DELETE api/2.0/smtpsettings/smtp` to return to the configuration of the installation.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SmtpSettingsDto** | body | [**SmtpSettingsDto**](../../models/smtp-settings-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The SMTP settings now stored for the portal, with an empty password | [**SmtpSettingsWrapper**](../../models/smtp-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The SMTP settings section is not enabled for this portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SmtpSettingsWrapper**](../../models/smtp-settings-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
