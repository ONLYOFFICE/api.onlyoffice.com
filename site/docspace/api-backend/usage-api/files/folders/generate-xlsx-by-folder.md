# generateXlsxByFolder

> XlsxReportResponseWrapper generateXlsxByFolder(folderId)

`POST /api/2.0/files/folder/{folderId}/xlsx`

Generate XLSX report by folder

Rebuilds the spreadsheet with the answers to a form from the Complete folder of a form-filling room. Requires the right to update the results of the form, which a room manager has. Other callers get 403. The call changes data and queues work. You can repeat it. A repeat during a run returns that run. A later repeat rewrites the same spreadsheet. If that spreadsheet was deleted or moved, it creates a new one. The call returns the original form and the queued job in `task`. In `isNewFile`, it says whether it creates a new spreadsheet or rewrites the existing one. The file is not ready yet. Repeat `GET api/2.0/files/file/{fileId}/xlsx` with the ID of the form until the task is completed. The call returns 404 if the folder does not exist, holds no completed form, or the original form is deleted. It also returns 403 for another kind of folder or room, or a form whose filling is not started.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued report task together with the form the answers belong to | [**XlsxReportResponseWrapper**](../../models/xlsx-report-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The folder is not a completed-forms folder, the room of the submitted copy is not a form-filling room, the caller may not maintain the form, or the filling of the form is not started | - | - |
| **404** | The folder, the submitted copy or the original form was not found | - | - |
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
