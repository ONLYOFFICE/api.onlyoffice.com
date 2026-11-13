# generateXlsx

> XlsxReportResponseWrapper generateXlsx(fileId)

`POST /api/2.0/files/file/{fileId}/xlsx`

Generate a form answers report

Queues a spreadsheet with all answers to a PDF form in a form-filling room. It returns the task, the original form, and whether the report file is new. Pass the id of the original form, or of an XLSX or CSV result file in the Complete folder. For a result file, the portal finds the form behind it. Before this call, start filling the form with `PUT api/2.0/files/file/{fileId}/startfilling`. The form must still be in the room that started it. Requires a DocSpace admin, or the room role room manager or content creator. Other callers get 403. It also returns 403 if form filling has not started or the room is not a form-filling room. The call changes data and queues work. A repeated call during a run returns that run. After the run, a repeated call rebuilds the spreadsheet in the same file. If that file was deleted or moved, the call creates a new one. Then `isNewFile` is true. The spreadsheet is not ready when the response arrives. To track it, poll `GET api/2.0/files/file/{fileId}/xlsx` with the id of the original form. When the task completes, take the file from the task. If the file or the form behind a result file does not exist, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The generation task, the original form and the new-file flag | [**XlsxReportResponseWrapper**](../../models/xlsx-report-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not update the report, or the file is not a started form of a form-filling room | - | - |
| **404** | The file id, or the original form behind a result file, resolves to nothing | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**XlsxReportResponseWrapper**](../../models/xlsx-report-response-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
