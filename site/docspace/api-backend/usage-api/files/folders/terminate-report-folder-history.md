# terminateReportFolderHistory

> terminateReportFolderHistory(folderId)

`DELETE /api/2.0/files/folder/{folderId}/log/report`

Terminate the folder history report generation

Stops the history report that the caller started for a folder with `POST api/2.0/files/folder/{folderId}/log/report`. Each caller can stop only their own report. Any user with read access to the folder can call it, except a guest. Other callers get 403. The call only queues a request to stop the job and returns no body. To see the task end as cancelled, use `GET api/2.0/files/folder/{folderId}/log/report`. If no report runs, the call changes nothing, so you can repeat it. A finished report stays, and its file remains in My documents. If the folder does not exist, the call returns 404. It returns 402 if the login history and audit trail section is turned off for the portal.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The ID of the folder that was passed to             `POST api/2.0/files/folder/{folderId}/log/report`. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The request to stop the report was accepted | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
