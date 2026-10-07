# checkMoveOrCopyDestFolder

> CheckDestFolderWrapper checkMoveOrCopyDestFolder(returnSingleOperation, folderIds, fileIds, destFolderId, conflictResolveType, deleteAfter, content, toFillOut)

`GET /api/2.0/files/fileops/checkdestfolder`

Check the destination folder

Reports whether the destination folder accepts the listed files, before a move or a copy is started. Only `fileIds` and `destFolderId` are read from the request: `result` says whether all of the files are accepted, only some of them or none, and `files` names the ones that are. The check is about what the destination allows to be stored in it rather than about name clashes — everywhere except a form-filling room every file is accepted, while a form-filling room accepts only PDF forms, so a text document offered to one comes back as none accepted. The caller needs create access to the destination, so a room the caller cannot write to and an archived room are refused with 403, a destination that does not exist is answered as missing, and a request without `destFolderId` is rejected as an invalid request. Folder ids and the copying options of the request play no part here. The call changes nothing; for same-named entries at the destination use `GET api/2.0/files/fileops/move`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **returnSingleOperation** | query | **Boolean** | Which operations the answer carries: `true` returns the operation this call started and nothing else, `false` returns every operation of the same kind that the caller has running or unread. When nothing was queued, which happens for an empty selection, `true` falls back to the full list. | [optional] [example: `false`] |
| **folderIds** | query | [**List**](../../models/check-move-or-copy-batch-items-folder-ids-parameter-item.md) | The folders to move or copy, by id. A number addresses a folder stored in the portal itself, a string addresses a folder on a connected third-party account, and both kinds may be sent in one list. | [optional] [example: `[1, 2, 3]`] [nullable] |
| **fileIds** | query | [**List**](../../models/check-move-or-copy-batch-items-folder-ids-parameter-item.md) | The files to move or copy, by id. A number addresses a file stored in the portal itself, a string addresses a file on a connected third-party account, and both kinds may be sent in one list. | [optional] [example: `[1, 2, 3]`] [nullable] |
| **destFolderId** | query | **checkMoveOrCopyBatchItems_destFolderId_parameter** | The folder the items go to, by id — a number for a folder stored in the portal itself, a string for a folder on a connected third-party account. Take it from a folder listing such as `GET api/2.0/files/@root`; the caller has to be allowed to create items in it, and the id of a room addresses the root of that room. | [optional] |
| **conflictResolveType** | query | **FileConflictResolveType** | What happens to an item whose name is already taken in the destination folder: `skip` leaves it where it is, `overwrite` replaces the entry at the destination, and `duplicate` places it beside that entry under a name with a numeric suffix. `GET api/2.0/files/fileops/move` reports which items would clash. | [optional] [enum: `Skip`, `Overwrite`, `Duplicate`] |
| **deleteAfter** | query | **Boolean** | Whether the finished operation is still reported: `false` keeps its final record readable through `GET api/2.0/files/fileops` until it has been read once, `true` drops the record as soon as the work is done. It deletes nothing: a move takes the sources away in any case, and a copy always leaves them. | [optional] [example: `false`] |
| **content** | query | **Boolean** | What is taken from a listed folder: `false` moves or copies the folder itself, `true` takes only what it contains, so its files and subfolders land in the destination and the folder is not recreated there. | [optional] [example: `false`] |
| **toFillOut** | query | **Boolean** | Marks every copied PDF form as a draft prepared for filling, which is how such a copy reports its filling status in a virtual data room. Files that are not forms are left unaffected. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the destination accepts all of the listed files, some of them or none, and which ones it accepts | [**CheckDestFolderWrapper**](../../models/check-dest-folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `destFolderId` is not given | - | - |
| **403** | The caller cannot create items in the destination folder | - | - |
| **404** | The destination folder does not exist | - | - |
| **500** | A listed file is on a third-party account and the destination accepts it, or a listed file does not exist while the destination is a form-filling room | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CheckDestFolderWrapper**](../../models/check-dest-folder-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
