# saveSmtpSettings

Referenced types are defined in the [full reference](../api.md).

> SmtpSettingsWrapper saveSmtpSettings(SmtpSettingsDto)

`POST /api/2.0/smtpsettings/smtp`

Save SMTP settings

Stores the SMTP relay that this portal will hand all of its own mail to, replacing whatever was saved before and taking the portal off the mail configuration of the installation. Nothing has to be called first; the caller needs the portal-settings right of a DocSpace administrator, and the SMTP settings section has to be enabled for the portal, otherwise the call is answered with 402. The call is mutating and idempotent - the same body saved twice leaves the same settings - and it applies to the next message the portal sends. The settings are stored unverified, no connection to `host` is attempted, so queue `GET api/2.0/smtpsettings/smtp/test` afterwards to find out whether they work. `host` and `senderAddress` must not be empty, `senderDisplayName` has to be present, and `enableAuth` true also requires `credentialsUserName` and `credentialsUserPassword`; a request that misses any of them is rejected and nothing is saved. `port` falls back to `25` when it is omitted, and `useNtlm` is accepted but not stored, so the saved settings always authenticate with a plain user name and password. The answer repeats the stored settings with the password emptied. Use `DELETE api/2.0/smtpsettings/smtp` to return to the configuration of the installation.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SmtpSettingsDto** | body | [**SmtpSettingsDto**](../api.md#model-smtpsettingsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The SMTP settings now stored for the portal, with an empty password | [**SmtpSettingsWrapper**](../api.md#model-smtpsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The SMTP settings section is not enabled for this portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SmtpSettingsWrapper**](../api.md#model-smtpsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
