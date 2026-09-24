# getLoginHistoryReport

> DocumentBuilderTaskWrapper getLoginHistoryReport()

`GET /api/2.0/security/audit/login/report`

Get login history report status

Returns the state of the login history report the calling user has started, and is the operation to poll after `POST api/2.0/security/audit/login/report`. The caller needs the portal-settings right of a DocSpace administrator plus the audit option of the portal's pricing plan, otherwise the call is answered with 402. Jobs are kept per user and per report kind: this operation never shows another administrator's report, nor the audit trail report, which has its own status at `GET api/2.0/security/audit/events/report`. The answer is empty when no report of this kind is known for the caller; otherwise `percentage` grows towards 100, `isCompleted` turns true when the build has ended, `error` carries the failure message when it ended badly, and `resultFileName` and `resultFileUrl` point at the file saved to the caller's My documents section, while `resultFileId` is filled for an XLSX report only. The operation is read-only and safe to poll every few seconds; a finished job is dropped as soon as the next report of this kind is started.

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
