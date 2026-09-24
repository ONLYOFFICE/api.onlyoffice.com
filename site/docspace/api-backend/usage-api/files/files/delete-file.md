# deleteFile

> FileOperationArrayWrapper deleteFile(fileId, Delete, ReturnSingleOperation)

`DELETE /api/2.0/files/file/{fileId}`

Delete a file

Queues the deletion of one file and answers with the caller's file operations, the one just created among them. The file is not gone when the response arrives: poll `GET api/2.0/files/fileops` until the operation reports `finished`, and read its `error` to learn whether the deletion succeeded. By default the file is moved to Trash, from where it can be restored; `immediately=true` deletes it for good instead, and inside a room, where there is no Trash, deletion is always final. `deleteAfter=true` postpones the deletion until the editing session on the file has ended, so a file somebody is working on is not pulled away. `returnSingleOperation=true` narrows the answer to this deletion instead of listing every active operation of the caller. The caller needs the right to delete the file, which the room admin, a DocSpace admin acting as room manager and a content creator acting on their own file have; editing access alone, read access, a guest and a member without access to the room are all refused. The call is destructive. To delete several items at once use `PUT api/2.0/files/fileops/delete`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to delete. | [required] [example: `1`] |
| **Delete** | body | [**Delete**](../../models/delete.md) | When and how the file is deleted. | [required] |
| **ReturnSingleOperation** | query | **Boolean** | Which operations the answer carries: `true` returns the operation this call started and nothing else, `false` returns every operation of the same kind that the caller has running or unread. When nothing was queued, which happens for an empty selection, `true` falls back to the full list. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file operations of the caller, including the deletion just queued | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
