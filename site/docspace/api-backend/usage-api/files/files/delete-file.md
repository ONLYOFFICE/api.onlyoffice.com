# deleteFile

> FileOperationArrayWrapper deleteFile(fileId, DeleteFileRequest, returnSingleOperation)

`DELETE /api/2.0/files/file/{fileId}`

Delete a file

Queues the deletion of a file. It returns the file operations of the caller, including this one. By default, the call moves the file to the trash, where you can restore it. With `immediately=true`, the call deletes the file for good. It always deletes for good a file in the trash, an encrypted file, or a third-party file. Requires the right to delete the file. Other callers get 403, including an editor. A room manager has this right, and a content creator has it for their own files. The call queues work. Do not repeat it. A repeat after the move to the trash deletes the file for good. The file may still be there when the response arrives. Repeat `GET api/2.0/files/fileops` until the operation has `finished` set to true. Then read its `error` to learn if the deletion failed. With `deleteAfter=true`, `GET api/2.0/files/fileops` stops listing the operation when it ends. So you cannot read its result. With `returnSingleOperation=true`, the call returns only this deletion. If the file is locked by another user or open for editing, the call returns 403. If no file has this id, the call returns 404. To delete several items, use `PUT api/2.0/files/fileops/delete`.  Raises the `file.trashed` webhook once the queued operation moves the file to the trash. Raises the `file.deleted` webhook instead when the file is deleted for good, not moved to the trash.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to delete. | [required] [example: `1`] |
| **DeleteFileRequest** | body | [**DeleteFileRequest**](../../models/delete-file-request.md) | When and how the file is deleted. | [required] |
| **returnSingleOperation** | query | **Boolean** | Which operations the answer carries: `true` returns the operation this call started and nothing else, `false` returns every operation of the same kind that the caller has running or unread. When nothing was queued, which happens for an empty selection, `true` falls back to the full list. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file operations of the caller, including the deletion just queued | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not delete the file, or the file is locked by somebody else or open in an editing session | - | - |
| **404** | The file id resolves to nothing | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file to delete. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
