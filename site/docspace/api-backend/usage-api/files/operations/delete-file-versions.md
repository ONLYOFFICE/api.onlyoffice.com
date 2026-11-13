# deleteFileVersions

> FileOperationArrayWrapper deleteFileVersions(DeleteVersionBatchRequestDto)

`PUT /api/2.0/files/fileops/deleteversion`

Delete file versions

Starts a background job that deletes versions from the history of one file. The file stays with its other versions. An empty `versions` list deletes the whole file instead. Requires the right to delete the file. Other callers get 403. A DocSpace admin also gets 403 for a file in the personal documents of another user. The call queues work, and deleted versions cannot be restored. Repeat `GET api/2.0/files/fileops` until `finished` is true. A failure during the job shows in `error`, not as a status code. The call skips version numbers that do not exist, so you can repeat it. The call returns the delete operations of the caller, including the new one. To delete the file itself, use `PUT api/2.0/files/fileops/delete`. The call also returns 403 if `versions` includes the current version. It also returns 403 if the file is locked, open for editing, in an archived room, or in the Trash. If the file does not exist, the call returns 404. The call returns 400 if the body cannot be read or has no `fileId` or `versions`.  Raises the `file.updated` webhook once for every removed version. Raises the `file.deleted` webhook instead when `versions` is empty, which deletes the whole file for good.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DeleteVersionBatchRequestDto** | body | [**DeleteVersionBatchRequestDto**](../../models/delete-version-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The delete operations of the caller, the one just queued included | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `fileId` or `versions` | - | - |
| **403** | The caller cannot delete the file, the file is locked by another user, open for editing, in an archived room or in Trash, or `versions` includes the current version | - | - |
| **404** | The file does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
