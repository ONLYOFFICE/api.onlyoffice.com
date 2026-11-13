# getReportFolderHistory

> DocumentBuilderTaskWrapper getReportFolderHistory(folderId)

`GET /api/2.0/files/folder/{folderId}/log/report`

Get the folder history report generation status

Returns the state of the history report that the caller started for a folder. Each caller sees only their own report. Any user with read access to the folder can call it, except a guest. Other callers get 403. The call is read-only. This is the call to poll after `POST api/2.0/files/folder/{folderId}/log/report`. Repeat it until `isCompleted` is true. It becomes true however the job ends. If the job fails, `error` gives the reason. After a success, `resultFileId`, `resultFileName`, and `resultFileUrl` name the file in My documents. If the caller has no report for this folder, the response is empty. If the folder does not exist, the call returns 404. It returns 402 if the login history and audit trail section is turned off for the portal.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The ID of the folder that was passed to             `POST api/2.0/files/folder/{folderId}/log/report`. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the report task, or nothing when there is none | [**DocumentBuilderTaskWrapper**](../../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
