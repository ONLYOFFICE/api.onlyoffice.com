# terminateReportFolderHistory

Referenced types are defined in the [full reference](../files.md).

> terminateReportFolderHistory(folderId)

`DELETE /api/2.0/files/folder/{folderId}/log/report`

Terminate the folder history report generation

Gives up the history report the caller has started for a folder with `POST api/2.0/files/folder/{folderId}/log/report`. The request only asks the background worker to stop, and the answer carries no body, so a following `GET api/2.0/files/folder/{folderId}/log/report` is what shows the task ending as cancelled. Asking to terminate when nothing is running is accepted and changes nothing, which makes the call safe to repeat. A report that has already finished is not undone by this call and its file stays in My documents. The caller needs read access to the folder and may not be a guest, and the portal plan has to include the audit feature; a caller who fails the access rule is answered with 403 and a folder that does not exist with 404. Each caller can only terminate their own report.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder whose running history report is to be given up. It is the folder that             was passed to the operation that started the report. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The request to stop the report was accepted | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not export the history of this folder | - | - |
| **404** | The folder does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
