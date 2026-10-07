# createReportFolderHistory

> DocumentBuilderTaskWrapper createReportFolderHistory(folderId, format, from, to)

`POST /api/2.0/files/folder/{folderId}/log/report`

Start the folder history report generation

Queues a background job that renders the history of a folder into a spreadsheet, or into a CSV file when `format` asks for one, and saves the result in the caller's My documents. The answer is the queued task, not the report: poll `GET api/2.0/files/folder/{folderId}/log/report` until `isCompleted` is true, then take the file from `resultFileId`, `resultFileName` and `resultFileUrl`; the URL of a CSV file too large for the editor downloads it instead of opening it. An XLSX report keeps only the most recent events, at most 200,000 by default and fewer when the events are long, and its header says how many were left out; `format=Csv` exports every event of the period. `from` and `to` limit the exported period; leaving both out exports the whole history. While a report for the same folder and caller is still running, this call joins it and answers with the running task instead of starting a second one, so retrying is safe. The caller needs read access to the folder and may not be a guest - otherwise the call is refused with 403, and a folder that does not exist with 404; the report is available on every pricing plan, and 402 comes only when the login history and audit trail section is turned off for the portal. Only a portal administrator gets the address, browser and platform columns. Give up a running report with `DELETE api/2.0/files/folder/{folderId}/log/report`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder whose history is exported; the report covers the folder itself and the entries inside it. | [required] [example: `1`] |
| **format** | query | **AuditReportFormat** | The shape the report is written in: `Xlsx` produces a spreadsheet and `Csv` a comma-separated text file, and either is saved as a file in My documents. | [optional] [example: `Xlsx`] [enum: `0`, `1`] |
| **from** | query | **Date** (date-time) | The earliest moment an exported entry may have, read in the time zone of the portal; left out, the report starts at the oldest entry the portal still keeps. | [optional] [example: `2025-01-01T00:00:00`] |
| **to** | query | **Date** (date-time) | The latest moment an exported entry may have, read in the time zone of the portal; left out, the report ends at the newest entry. | [optional] [example: `2025-12-31T23:59:59`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued report task | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The login history and audit trail section is turned off for this portal | - | - |
| **403** | The caller may not export the history of this folder | - | - |
| **404** | The folder does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
