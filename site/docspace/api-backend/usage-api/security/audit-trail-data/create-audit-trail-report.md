# createAuditTrailReport

> DocumentBuilderTaskWrapper createAuditTrailReport(format)

`POST /api/2.0/security/audit/events/report`

Start audit trail report

Queues a report of the portal's audit trail and returns the state of the background job that builds it. The report covers the period reaching from now back by the audit trail lifetime that `GET api/2.0/security/audit/settings/lifetime` reports and is never filtered: the query parameters of `GET api/2.0/security/audit/events/filter` do not apply here. The caller needs the portal-settings right of a DocSpace administrator plus the audit option of the portal's pricing plan, otherwise the call is answered with 402. The file is not ready when the response arrives - poll `GET api/2.0/security/audit/events/report` until `isCompleted` is true, then take `resultFileUrl`, and treat a non-empty `error` as a failed build. The finished file is saved to the caller's My documents section, as an XLSX workbook by default or as CSV when `format=Csv`, in which case `resultFileId` stays empty and only the name and the URL identify it. One job runs per caller and kind: calling again while the previous one is still building returns that job instead of starting a second, and `DELETE api/2.0/security/audit/events/report` cancels it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **format** | query | **AuditReportFormat** | The format the report file is written in. The workbook format is the default and is the only one that leaves the finished file addressable by ID: a report asked for as CSV comes back with an empty `resultFileId`, so it can only be reached through `resultFileName` and `resultFileUrl`. | [optional] [example: `Xlsx`] [enum: `0`, `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued job that builds the audit trail report | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal's pricing plan has no audit option, or the login history and audit trail section is not enabled | - | - |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
