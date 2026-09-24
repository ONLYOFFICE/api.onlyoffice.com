# testSmtpSettings

> SmtpOperationStatusRequestsWrapper testSmtpSettings()

`GET /api/2.0/smtpsettings/smtp/test`

Test SMTP settings

Queues a background job that sends a test message through the SMTP settings currently stored for the portal to the email address of the calling user, and returns the state of that job. Save the settings with `POST api/2.0/smtpsettings/smtp` first: the job always takes the stored settings and nothing can be passed to it here. The caller needs the portal-settings right of a DocSpace administrator, and the SMTP settings section has to be enabled for the portal, otherwise the call is answered with 402. The call is mutating, it sends mail, and it is rate-limited to five requests per fifteen minutes per user and path by default, answering 429 above that; while a test is still running the same job is returned instead of a second one being started. The message has not been sent when the answer arrives: poll `GET api/2.0/smtpsettings/smtp/test/status` until `completed` is true, then read `error` - empty means the relay accepted the message, otherwise it carries the reason. `percents` climbs to 100 and `status` names the step reached, such as `Connect to host` or `Send test message`. An unreachable relay is reported in `error` after a 30-second connection timeout, not as a failed request.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued test message, to be polled until `completed` is true | [**SmtpOperationStatusRequestsWrapper**](../../models/smtp-operation-status-requests-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The SMTP settings section is not enabled for this portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SmtpOperationStatusRequestsWrapper**](../../models/smtp-operation-status-requests-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
