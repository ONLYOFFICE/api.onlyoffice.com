# generateXlsx

Referenced types are defined in the [full reference](../files.md).

> XlsxReportResponseWrapper generateXlsx(fileId)

`POST /api/2.0/files/file/{fileId}/xlsx`

Generate a form answers report

Queues generation of the spreadsheet that collects every answer submitted for a PDF form in a form-filling room, and answers at once with the queued task, the original form and a flag telling whether the report file is being created now or an existing one refreshed in place. Either identifier works: the id of the original form, or the id of an XLSX or CSV result file inside the room's Complete folder, from which the portal resolves the form behind it. The form must already have been opened for filling with `PUT api/2.0/files/file/{fileId}/startfilling` and must still live in the form-filling room that started it. The caller must be allowed to update that form's report. The call is mutating and asynchronous: the spreadsheet is not ready when the response arrives, so poll `GET api/2.0/files/file/{fileId}/xlsx` with the original form's id until the task reports completion, then take the produced file from the task. Calling it again while a run is still going answers with that run instead of starting a second one.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The generation task, the original form and the new-file flag | [**XlsxReportResponseWrapper**](../files.md#model-xlsxreportresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not update the report, or the file is not a started form of a form-filling room | - | - |
| **404** | The file id, or the original form behind a result file, resolves to nothing | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**XlsxReportResponseWrapper**](../files.md#model-xlsxreportresponsewrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
