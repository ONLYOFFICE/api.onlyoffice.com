# createLoginHistoryReport

> DocumentBuilderTaskWrapper createLoginHistoryReport(format, from, to)

`POST /api/2.0/security/audit/login/report`

Start login history report

Starts a background job that builds a login history report of the portal, and returns the job state. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. In a cloud installation, the call returns 402 if the pricing plan has no audit option. It also returns 402 if the login history and audit trail section is turned off. Without `from` and `to`, the report covers the login history lifetime of `GET api/2.0/security/audit/settings/lifetime`, up to now. The call moves an earlier `from` to the start of the lifetime and a future `to` to now. It ignores the other filters of `GET api/2.0/security/audit/login/filter`. The call queues work. Repeat `GET api/2.0/security/audit/login/report` until `isCompleted` is true. The portal saves the file in the caller's My documents section. An XLSX report keeps at most 200,000 of the most recent events by default, and fewer for long events. Its header says how many events it left out. A CSV report has every event of the period. If a CSV file is too large for the editor, `resultFileUrl` downloads it instead of opening it. Each caller has one job per report kind. While the job runs, a repeated call returns that job and starts no second one. After the job ends, a repeated call builds a new file. To cancel the job, use `DELETE api/2.0/security/audit/login/report`. The call returns 400 if the period ends before it starts or lies entirely outside the lifetime.

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
