# getReportFolderHistory

> DocumentBuilderTaskWrapper getReportFolderHistory(folderId)

`GET /api/2.0/files/folder/{folderId}/log/report`

Get the folder history report generation status

Reports how far the history report of a folder has got, and is the operation to poll after `POST api/2.0/files/folder/{folderId}/log/report` has queued one. `percentage` climbs to 100, `isCompleted` turns true when the job is over however it ended, `error` carries the reason when it failed, and `resultFileId`, `resultFileName` and `resultFileUrl` name the file that was saved in the caller's My documents - a CSV report leaving the identifier empty. An empty answer means there is no report for this folder and caller, either because none was started or because a finished one has already been picked up by an earlier poll. The caller needs read access to the folder and may not be a guest, and the portal plan has to include the audit feature; a caller who fails the access rule is answered with 403 and a folder that does not exist with 404. The call is read-only, and each caller sees only their own report.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder whose history report is being polled. It is the folder that was             passed to the operation that started the report. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the report task, or nothing when there is none | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
