# deleteBatchItems

> FileOperationArrayWrapper deleteBatchItems(DeleteBatchRequestDto)

`PUT /api/2.0/files/fileops/delete`

Delete files and folders

Starts a background job that deletes files and folders. With `immediately` false, the call moves them to the Trash of the caller. With `immediately` true, it deletes them for good. It always deletes for good the items in the Trash, in a private room, or on a third-party storage. The call deletes a folder with all its content. Requires the right to delete each listed item. Other callers get 403. In a room, a room manager can delete any item, and a content creator only their own. The call queues work, and a deletion for good cannot be undone. Repeat `GET api/2.0/files/fileops` until `finished` is true. A failure on one item shows in `error`, not as a status code. Do not repeat the call. A repeat deletes for good the items that the first call moved to the Trash. It moves the items restored in the meantime to the Trash again. After a deletion for good, a repeated call returns 404. The call returns the delete operations of the caller, including the new one. An empty selection queues nothing and returns the existing operations. To empty the Trash, use `PUT api/2.0/files/fileops/emptytrash`. The call also returns 403 if an item is locked by another user or open for editing. It also returns 403 for a room when `immediately` is false. If a listed file or folder does not exist, the call returns 404.  Raises the `folder.trashed` webhook for every listed folder moved to the trash, not for the folders inside it. Raises the `folder.deleted` webhook instead for a listed folder deleted for good, not moved to the trash. Raises the `room.deleted` webhook for every listed room. Raises the `agent.deleted` webhook instead for a listed AI agent. Raises the `file.trashed` webhook for every listed file moved to the trash, not for the files inside listed folders. Raises the `file.deleted` webhook instead for a listed file deleted for good, not moved to the trash.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DeleteBatchRequestDto** | body | [**DeleteBatchRequestDto**](../../models/delete-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The delete operations of the caller, the one just queued included | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller does not have the rights to delete one of the listed items, one of them is locked by another user or open for editing, or a room is sent to Trash without `immediately` | - | - |
| **404** | A listed file or folder does not exist | - | - |
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
