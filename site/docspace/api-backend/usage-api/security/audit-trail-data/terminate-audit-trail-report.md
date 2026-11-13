# terminateAuditTrailReport

> terminateAuditTrailReport()

`DELETE /api/2.0/security/audit/events/report`

Terminate audit trail report

Cancels the caller's audit trail report job and removes it from the queue. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. In a cloud installation, the call returns 402 if the pricing plan has no audit option. It also returns 402 if the login history and audit trail section is turned off. The call queues the cancellation for the service that builds reports. So a 200 response means that the service got the request, not that the job has stopped. To check, repeat `GET api/2.0/security/audit/events/report` until it returns an empty answer. The call affects only the caller's own audit trail report. To cancel the login history report, use `DELETE api/2.0/security/audit/login/report`. You can repeat the call, and a call with no running job is not an error. A job cancelled before it saved the file leaves nothing in My documents. To build the report again, use `POST api/2.0/security/audit/events/report`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The cancellation of the caller's audit trail report has been accepted | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal's pricing plan has no audit option, or the login history and audit trail section is not enabled | - | - |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
