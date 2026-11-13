# getLoginHistoryReport

> DocumentBuilderTaskWrapper getLoginHistoryReport()

`GET /api/2.0/security/audit/login/report`

Get login history report status

Returns the state of the caller's login history report job. This is the call to poll after `POST api/2.0/security/audit/login/report`. Repeat it until `isCompleted` is true. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. In a cloud installation, the call returns 402 if the pricing plan has no audit option. It also returns 402 if the login history and audit trail section is turned off. The call is read-only and shows only the caller's own job, never the report of another admin. The audit trail report has its own status call, `GET api/2.0/security/audit/events/report`. An empty answer means the caller has no login history report job. After a failed build, `error` holds the failure message. After a successful build, `resultFileId`, `resultFileName`, and `resultFileUrl` describe the file. The portal saves the file in the caller's My documents section. After the next report of this kind starts, the call no longer shows the finished job.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the caller's login history report, or an empty answer when none is known | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal's pricing plan has no audit option, or the login history and audit trail section is not enabled | - | - |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
