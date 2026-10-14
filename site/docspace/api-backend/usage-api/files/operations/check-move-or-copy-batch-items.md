# checkMoveOrCopyBatchItems

> FileEntryBaseArrayWrapper checkMoveOrCopyBatchItems(returnSingleOperation, folderIds, fileIds, destFolderId, conflictResolveType, deleteAfter, content, toFillOut)

`GET /api/2.0/files/fileops/move`

Check move or copy conflicts

Reports which of the requested files and folders already have a same-named entry in `destFolderId`, so that the clash can be settled before the move or the copy is started. Nothing is moved, copied or changed by the call, although the address is shared with `PUT api/2.0/files/fileops/move`: the answer is the part of the request that clashes, and an empty array means the batch would go through without one. The `conflictResolveType` of the request is not taken into account — clashing items are reported whatever it says — and encrypted files are left out of the report. A source id that resolves to nothing is not an error and is passed over. The caller needs create access to the destination: an archived room and a room the caller cannot write to are refused with 403, a destination that does not exist is answered as missing, and a request without `destFolderId` is rejected as an invalid request. To learn whether the destination accepts the files at all use `GET api/2.0/files/fileops/checkdestfolder`.

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
| **200** | The listed items that already have a same-named entry in the destination folder | [**FileEntryBaseArrayWrapper**](../../models/file-entry-base-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `destFolderId` is not given | - | - |
| **403** | The caller cannot create items in the destination folder, or the destination is a listed folder or lies inside one | - | - |
| **404** | The destination folder does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileEntryBaseArrayWrapper**](../../models/file-entry-base-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
