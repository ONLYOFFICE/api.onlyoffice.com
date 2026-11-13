# copyBatchItems

> FileOperationArrayWrapper copyBatchItems(BatchRequestDto)

`PUT /api/2.0/files/fileops/copy`

Copy files and folders

Starts a background job that copies files and folders into `destFolderId`. With `content` true, the call copies the content of each listed folder, not the folder. Requires the right to create content in the destination and to copy every listed item. Other callers get 403. In a room, room managers and content creators can create content. A room that forbids downloads denies copying to the Read role. The call queues work. Repeat `GET api/2.0/files/fileops` until `finished` is true. Its `files` and `folders` then name the copies. What a repeated call does depends on `conflictResolveType`. With `Skip`, it skips clashing files, except encrypted files, rooms, and copies into knowledge folders. With `Overwrite`, it adds a new version to each earlier copy of a file. With `Duplicate`, it makes new copies under new names. The call returns the copy operations of the caller, including the new one. An empty selection queues nothing and returns the existing operations. To find name clashes first, use `GET api/2.0/files/fileops/move`. To check that the destination accepts the files, use `GET api/2.0/files/fileops/checkdestfolder`. To move the items instead, use `PUT api/2.0/files/fileops/move`. The call also returns 403 if the destination is inside a listed folder. A listed folder that would exceed a room or user quota also returns 403. It also returns 403 if a file to overwrite is locked, open for editing, or not editable by the caller. A file that is not a PDF form sent to a form-filling room also returns 403. A listed file too large for a knowledge folder also returns 403. If the destination or a listed file or folder does not exist, the call returns 404. The call returns 415 for a file format the portal does not accept for upload. It also returns 415 for a format a knowledge folder cannot index.  Raises the `folder.copied` webhook for every copied folder, and for its subfolders only within one storage. Raises the `room.copied` webhook for every listed room copied into its own section, an AI agent included. Raises the `file.copied` webhook for every copied file, and for files inside copied folders only within one storage.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BatchRequestDto** | body | [**BatchRequestDto**](../../models/batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The copy operations of the caller, the one just queued included | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot create items in the destination folder or cannot copy one of the listed items, the destination is a listed folder or lies inside one, a listed folder would exceed the room or user quota, a file that is not a PDF form goes to a form-filling room, a file is too large for a knowledge folder, or a file to overwrite is locked, open for editing or cannot be edited by the caller | - | - |
| **404** | The destination folder, a listed file or a listed folder does not exist | - | - |
| **415** | A listed file has a format the portal does not accept for upload, or one a knowledge folder cannot index | - | - |
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
