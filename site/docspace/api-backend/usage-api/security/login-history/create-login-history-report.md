# createLoginHistoryReport

> DocumentBuilderTaskWrapper createLoginHistoryReport(format, from, to)

`POST /api/2.0/security/audit/login/report`

Start login history report

Queues a report of the portal's login history and returns the state of the background job that builds it. By default the report covers the period reaching from now back by the login history lifetime that `GET api/2.0/security/audit/settings/lifetime` reports; `from` and `to` narrow it, a `from` older than that window is moved up to its start, a `to` in the future is moved back to now, and a period that ends before it starts is answered with 400. No other filter of `GET api/2.0/security/audit/login/filter` applies here. The caller needs the portal-settings right of a DocSpace administrator plus the audit option of the portal's pricing plan, otherwise the call is answered with 402. The file is not ready when the response arrives - poll `GET api/2.0/security/audit/login/report` until `isCompleted` is true, then take `resultFileUrl`, and treat a non-empty `error` as a failed build. The finished file is saved to the caller's My documents section, as an XLSX workbook by default or as CSV when `format=Csv`, and `resultFileId` identifies it in either format; `resultFileUrl` opens it in the editor, except for a CSV file too large for the editor, which it downloads instead. An XLSX report keeps only the most recent events, at most 200,000 by default and fewer when the events are long, and its header says how many were left out; `format=Csv` exports every event of the period. One job runs per caller and kind: calling again while the previous one is still building returns that job instead of starting a second, and `DELETE api/2.0/security/audit/login/report` cancels it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **format** | query | **AuditReportFormat** | The format the report file is written in: a spreadsheet workbook, which is the default, or a comma-separated text file. | [optional] [example: `Xlsx`] [enum: `0`, `1`] |
| **from** | query | **Date** (date-time) | The earliest moment a reported event may have been recorded at, read as a UTC instant. | [optional] [example: `2026-09-01T00:00:00Z`] |
| **to** | query | **Date** (date-time) | The latest moment a reported event may have been recorded at, read as a UTC instant in the same way as `from`. | [optional] [example: `2026-09-30T23:59:59Z`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued job that builds the login history report | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, or the requested period ends before it starts or lies entirely outside the login history lifetime | - | - |
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
