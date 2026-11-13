# checkMoveOrCopyDestFolder

> CheckDestFolderWrapper checkMoveOrCopyDestFolder(returnSingleOperation, folderIds, fileIds, destFolderId, conflictResolveType, deleteAfter, content, toFillOut)

`GET /api/2.0/files/fileops/checkdestfolder`

Check the destination folder

Returns whether the destination folder accepts the listed files before a move or a copy. The call reads only `fileIds` and `destFolderId` from the request. A form-filling room accepts only PDF forms. Every other folder accepts every file. A file listed twice counts once. Requires the right to create content in the destination. Other callers get 403. The call also returns 403 for an archived room and for the Rooms, Forms, and AI agents section roots. The call is read-only. It does not look for name clashes. To find them, use `GET api/2.0/files/fileops/move`. If the destination does not exist, the call returns 404. Without `destFolderId`, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **returnSingleOperation** | query | **Boolean** | Which operations the answer carries: `true` returns the operation this call started and nothing else, `false` returns every operation of the same kind that the caller has running or unread. When nothing was queued, which happens for an empty selection, `true` falls back to the full list. | [optional] [example: `false`] |
| **folderIds** | query | **List** | The folders to move or copy, by id. A number addresses a folder stored in the portal itself, a string addresses a folder on a connected third-party account, and both kinds may be sent in one list. | [optional] [example: `[1, 2, 3]`] [nullable] |
| **fileIds** | query | **List** | The files to move or copy, by id. A number addresses a file stored in the portal itself, a string addresses a file on a connected third-party account, and both kinds may be sent in one list. | [optional] [example: `[1, 2, 3]`] [nullable] |
| **destFolderId** | query | **String** | The folder the items go to, by id — a number for a folder stored in the portal itself, a string for a folder on a connected third-party account. Take it from a folder listing such as `GET api/2.0/files/@root`; the caller has to be allowed to create items in it, and the id of a room addresses the root of that room. | [optional] [example: `1`] |
| **conflictResolveType** | query | **FileConflictResolveType** | What happens to an item whose name is already taken in the destination folder: `skip` leaves it where it is, `overwrite` replaces the entry at the destination, and `duplicate` places it beside that entry under a name with a numeric suffix. `GET api/2.0/files/fileops/move` reports which items would clash. | [optional] [enum: `Skip`, `Overwrite`, `Duplicate`] |
| **deleteAfter** | query | **Boolean** | Whether the finished operation is still reported: `false` keeps its final record readable through `GET api/2.0/files/fileops` until it has been read once, `true` drops the record as soon as the work is done. It deletes nothing: a move takes the sources away in any case, and a copy always leaves them. | [optional] [example: `false`] |
| **content** | query | **Boolean** | What is taken from a listed folder: `false` moves or copies the folder itself, `true` takes only what it contains, so its files and subfolders land in the destination and the folder is not recreated there. | [optional] [example: `false`] |
| **toFillOut** | query | **Boolean** | Marks every copied PDF form as a draft prepared for filling, which is how such a copy reports its filling status in a virtual data room. Files that are not forms are left unaffected. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the destination accepts all of the listed files, some of them or none, and which ones it accepts | [**CheckDestFolderWrapper**](../../models/check-dest-folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `destFolderId` is not given | - | - |
| **403** | The caller cannot create items in the destination folder, or the destination is the Rooms, Forms or AI agents section root, which holds rooms only | - | - |
| **404** | The destination folder does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CheckDestFolderWrapper**](../../models/check-dest-folder-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
