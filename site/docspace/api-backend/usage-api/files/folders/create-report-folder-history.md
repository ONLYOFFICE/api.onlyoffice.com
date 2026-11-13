# createReportFolderHistory

> DocumentBuilderTaskWrapper createReportFolderHistory(folderId, format, from, to)

`POST /api/2.0/files/folder/{folderId}/log/report`

Start the folder history report generation

Starts a job that saves the history of a folder as a report file in the caller's My documents. The file is an XLSX spreadsheet, or a CSV file if `format` is `Csv`. If both `from` and `to` are left out, the report covers the whole history. Any user with read access to the folder can call it, except a guest. Other callers get 403. The call queues work and returns the task, not the report. Repeat `GET api/2.0/files/folder/{folderId}/log/report` until `isCompleted` is true. Then take the file from `resultFileId` and `resultFileUrl`. For a CSV file too large for the editor, the URL downloads the file. You can repeat the call. While a report of the same folder and caller runs, the call returns that task. It starts no second report. After the report ends, a repeat starts a new report and saves one more file. An XLSX report keeps at most the 200,000 most recent events by default, and fewer for long events. Its header says how many events it left out. A CSV report has every event of the period. Only a DocSpace admin gets the IP address, browser, and platform columns. To stop a running report, use `DELETE api/2.0/files/folder/{folderId}/log/report`. If the folder does not exist, the call returns 404. It returns 402 only if the login history and audit trail section is turned off for the portal.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder whose history is exported; the report covers the folder itself and the entries inside it. | [required] [example: `1`] |
| **format** | query | **AuditReportFormat** | The file format of the report: `Xlsx` for a spreadsheet, or `Csv` for a comma-separated text file. | [optional] [example: `Xlsx`] [enum: `0`, `1`] |
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
