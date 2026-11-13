# deleteFolder

> FileOperationArrayWrapper deleteFolder(folderId, DeleteFolderRequest)

`DELETE /api/2.0/files/folder/{folderId}`

Delete a folder

Queues a job that deletes a folder with all its contents. It returns the file operations of the caller, including the new job. Requires the right to delete the folder. Other callers get 403. The room manager and a content creator who owns the folder have this right. Editing access is not enough, and a guest also gets 403. The call queues work and changes data. Do not repeat it. A repeat deletes for good the folder that the first call moved to the trash. After a deletion for good, a repeated call returns 404. The folder may still exist when the response arrives. Repeat `GET api/2.0/files/fileops` until the job has `finished` set to true. Then read its `error` to see if the deletion failed. If `deleteAfter` is true, `GET api/2.0/files/fileops` does not list the job after it finishes. By default, the job moves the folder to the trash, where you can restore it. If `immediately` is true, the deletion is final. The deletion is always final in the trash and for a private room itself. Its subfolders go to the trash. The same applies to the root folder of a connected storage. If a file inside is blocked, for example open for editing, the job deletes nothing. The call also returns 403 for a room if `immediately` is not true. If the folder does not exist, the call returns 404. To delete several items in one call, use `PUT api/2.0/files/fileops/delete`.  Raises the `folder.trashed` webhook for the folder only, when the queued job moves it to the trash. Raises the `folder.deleted` webhook instead when the job deletes the folder for good. Raises the `room.deleted` webhook instead when the folder is a room. Raises the `agent.deleted` webhook instead when it is an AI agent.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder to delete, together with everything it holds. | [required] [example: `10`] |
| **DeleteFolderRequest** | body | [**DeleteFolderRequest**](../../models/delete-folder-request.md) | How the deletion is to be carried out. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file operations of the caller, including the deletion just queued | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not delete the folder, or the folder is a room and `immediately` is not set | - | - |
| **404** | The folder does not exist | - | - |
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
| **folderId** | path | **String** | The folder to delete, together with everything it holds. | [required] [example: `sbox-42`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
