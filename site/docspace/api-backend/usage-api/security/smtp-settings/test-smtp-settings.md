# testSmtpSettings

> SmtpOperationStatusWrapper testSmtpSettings()

`GET /api/2.0/smtpsettings/smtp/test`

Test SMTP settings

Starts a job that sends a test email through the saved SMTP settings of the portal. The portal sends it to the email address of the caller. First, save the settings with `POST api/2.0/smtpsettings/smtp`. Without them, the job uses the settings of the installation. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the SMTP settings section is turned off for the portal, the call returns 402. The call queues work and sends an email. While a test runs, a repeated call returns the same job. After the test ends, each call sends another email. The call returns before the email is sent. Repeat `GET api/2.0/smtpsettings/smtp/test/status` until `completed` is true. Then an empty `error` means that the mail server accepted the email. Otherwise, `error` holds the reason. A failed test does not make the request fail. By default, the limit is 5 calls in 15 minutes per user. More calls return 429.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued test message, to be polled until `completed` is true | [**SmtpOperationStatusWrapper**](../../models/smtp-operation-status-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The SMTP settings section is not enabled for this portal | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SmtpOperationStatusWrapper**](../../models/smtp-operation-status-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
