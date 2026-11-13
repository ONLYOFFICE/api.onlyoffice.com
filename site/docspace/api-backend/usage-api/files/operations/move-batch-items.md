# moveBatchItems

> FileOperationArrayWrapper moveBatchItems(BatchRequestDto)

`PUT /api/2.0/files/fileops/move`

Move files and folders

Starts a background job that moves files and folders into `destFolderId`. With `content` true, the call moves the content of each listed folder, not the folder. Requires the right to create content in the destination and to remove the items from their source. Other callers get 403. In a room, room managers and content creators have the right to create content. In a room, a content creator can move only the items they created. The call queues work. Repeat `GET api/2.0/files/fileops` until `finished` is true. What a repeated call does depends on `conflictResolveType`. With `Skip`, it changes nothing. With `Overwrite`, it adds to each listed file a new version of itself. With `Duplicate`, it gives each listed folder a new name and a new id. The call returns the move operations of the caller, including the new one. An empty selection queues nothing and returns the existing operations. A room can move only between the Rooms section and the archive. To archive a room, use `PUT api/2.0/files/rooms/{id}/archive`. To find name clashes first, use `GET api/2.0/files/fileops/move`. To check that the destination accepts the files, use `GET api/2.0/files/fileops/checkdestfolder`. To keep the originals, use `PUT api/2.0/files/fileops/copy`. The call also returns 403 if the destination is inside a listed folder. A listed folder that would exceed a room or user quota also returns 403. It also returns 403 if a listed file is locked or open for editing. A file open for editing inside a listed folder also returns 403. A file to overwrite that is locked, open for editing, or not editable by the caller also returns 403. A file that is not a PDF form sent to a form-filling room also returns 403. A folder or several files moved into a form-filling room from outside also return 403. A listed file too large for a knowledge folder also returns 403. If the destination or a listed file or folder does not exist, the call returns 404. The call returns 415 for a file format the portal does not accept for upload. It also returns 415 for a format a knowledge folder cannot index.  Raises the `folder.moved` webhook for each listed folder, and for subfolders of a merged folder. Raises the `folder.copied` webhook instead for a listed folder merged into an existing one. Raises the `folder.restored` webhook instead for a folder moved out of the trash. Raises the `room.archived` webhook for every listed room moved to the archive. Raises the `room.restored` webhook for every listed room moved out of the archive. Raises the `file.moved` webhook for each listed file, and for files of merged folders. Raises the `file.restored` webhook instead for a file moved out of the trash.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BatchRequestDto** | body | [**BatchRequestDto**](../../models/batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The move operations of the caller, the one just queued included | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot create items in the destination folder or cannot take one of the items out of its source, the destination is a listed folder or lies inside one, a folder or several files are moved into a form-filling room from outside it, a listed folder would exceed the room or user quota, a file that is not a PDF form goes to a form-filling room, a file is too large for a knowledge folder, a listed file is locked or open for editing, a file inside a listed folder is open for editing, or a file to overwrite is locked, open for editing or cannot be edited by the caller | - | - |
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
