# terminateAuditTrailReport

> terminateAuditTrailReport()

`DELETE /api/2.0/security/audit/events/report`

Terminate audit trail report

Cancels the audit trail report the calling user has running and drops it from the build queue. The caller needs the portal-settings right of a DocSpace administrator plus the audit option of the portal's pricing plan, otherwise the call is answered with 402. Cancellation is handed to the same background service that builds the report, so a successful answer means the request was accepted rather than that the job has already stopped: poll `GET api/2.0/security/audit/events/report` to watch it disappear. The operation returns no content and touches only the caller's own audit trail report - the login history report is cancelled by `DELETE api/2.0/security/audit/login/report`, and no report of another user can be reached from here. It is idempotent: cancelling when nothing is running is not an error. A job stopped before it finished writing leaves nothing in My documents, and a report cancelled by mistake has to be built again with `POST api/2.0/security/audit/events/report`.

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
