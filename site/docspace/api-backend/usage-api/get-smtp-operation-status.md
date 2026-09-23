# getSmtpOperationStatus

Referenced types are defined in the [full reference](../api.md).

> SmtpOperationStatusRequestsWrapper getSmtpOperationStatus()

`GET /api/2.0/smtpsettings/smtp/test/status`

Get SMTP test status

Returns the state of the test message that `GET api/2.0/smtpsettings/smtp/test` queued for this portal, and is the operation to poll while that test runs. A test has to be queued first; the caller needs the portal-settings right of a DocSpace administrator, and the SMTP settings section has to be enabled for the portal, otherwise the call is answered with 402. The call changes no settings, but it is not free of consequence: the first answer that reports `completed` true also discards the finished job, so a later call no longer knows about it - take `error` from that answer and keep it. An empty answer means the portal has no test on record, either because none was queued or because its result has already been read. While the job runs, `percents` climbs to 100 and `status` names the step reached, such as `Connect to host` or `Send test message`; `error` is empty until something fails and stays empty when the relay accepted the message. `id` identifies the queued job, of which a portal only ever has one.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the test message of the portal, or an empty answer when no test is on record | [**SmtpOperationStatusRequestsWrapper**](../api.md#model-smtpoperationstatusrequestswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The SMTP settings section is not enabled for this portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SmtpOperationStatusRequestsWrapper**](../api.md#model-smtpoperationstatusrequestswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
