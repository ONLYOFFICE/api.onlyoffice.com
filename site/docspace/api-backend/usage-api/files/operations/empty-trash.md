# emptyTrash

> FileOperationArrayWrapper emptyTrash(single, folderType)

`PUT /api/2.0/files/fileops/emptytrash`

Empty the Trash folder

Starts a background job that deletes for good the content of the Trash of the caller. With `folderType`, the call deletes only the items that came from sections or rooms of those types. Without it, the call empties the whole Trash. Any signed-in user can call it. The call queues work, and the deletion cannot be undone. Repeat `GET api/2.0/files/fileops` until `finished` is true. You can repeat the call. A repeat while a job of this call still runs can show `error` for the items that job deleted. On an empty Trash, the call queues nothing and returns the existing operations. The call returns the delete operations of the caller, including the new one. To move items to the Trash, use `PUT api/2.0/files/fileops/delete`. If `folderType` is not a folder type, the call returns 400.  Raises the `folder.deleted` webhook for every folder lying directly in the trash. Raises the `file.deleted` webhook for each file directly in the trash, not for the files inside trashed folders.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **single** | query | **Boolean** | Which operations the answer carries: `true` returns the operation this call started and nothing else, `false` returns every delete operation that the caller has running or unread. | [optional] [example: `false`] |
| **folderType** | query | **List** | Limits the sweep to the items whose original location was inside a section or a room of one of the named types, leaving the rest of the Trash untouched; without the parameter the whole Trash is emptied. `5` covers what was deleted from personal documents, `14` what was deleted from rooms. | [optional] [example: `[5]`] [enum: `0`, `1`, `2`, `3`, `5`, `6`, `8`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `19`, `20`, `21`, `22`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`, `37`, `38`, `39`, `40`, `41`, `42`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The delete operations of the caller, the one just queued included | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `folderType` holds a value that is not a folder type | - | - |
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

- **Content-Type**: Not defined
- **Accept**: application/json
