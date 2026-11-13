# getSmtpOperationStatus

> SmtpOperationStatusWrapper getSmtpOperationStatus()

`GET /api/2.0/smtpsettings/smtp/test/status`

Get SMTP test status

Returns the state of the SMTP test email that `GET api/2.0/smtpsettings/smtp/test` started for the portal. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the SMTP settings section is turned off for the portal, the call returns 402. This is the call to poll. Repeat it until `completed` is true. The call changes data only once. The first answer with `completed` true deletes the finished job. So keep `error` from that answer. If `error` is empty, the mail server accepted the email. An empty answer means that no test was started, or its result was already returned.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the test message of the portal, or an empty answer when no test is on record | [**SmtpOperationStatusWrapper**](../../models/smtp-operation-status-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
