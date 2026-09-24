# getFolderByFolderId

> FolderContentIntegerWrapper getFolderByFolderId(folderId, userIdOrGroupId, sharedBy, filterType, roomId, folderType, excludeSubject, applyFilterOption, withSubFolders, extension, searchArea, formsItemKey, formsItemType, count, startIndex, sortBy, sortOrder, filterValue, Location)

`GET /api/2.0/files/{folderId}`

Get a folder by ID

Returns one page of the contents of a folder - its subfolders in `folders`, its files in `files`, the folder itself in `current` and the chain of parents in `pathParts` - and is the operation a client browses the file tree with. `filterType`, `filterValue`, `extension`, `userIdOrGroupId`, `sharedBy` and `folderType` narrow what is listed, `applyFilterOption` decides whether those filters bite on the files, on the folders or on both, and `withSubFolders`, which is on unless it is switched off, lets a narrowed request descend through the whole subtree instead of the top level alone. `filterValue` is matched against titles and against indexed document content, and indexing is asynchronous, so a file uploaded a moment ago can be missing from a search for a short while. `count` and `startIndex` page through the result while `total` counts everything that matches, and `sortBy` with `sortOrder` both order the page and are saved as the default order of the account. Reading a room or an ordinary folder clears its new-item marks for the caller. A caller who may not read the folder is answered with 403, and a folder that does not exist with 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder whose contents are listed. Each section root has an operation of its own, such as `GET api/2.0/files/@my`, and every other folder is opened by the identifier a listing gave for it. | [required] [example: `1`] |
| **userIdOrGroupId** | query | **UUID** (uuid) | Restricts the listing to the entries authored by this portal member, or by the members of this group; the same parameter accepts either kind of identifier. Omit it to list everything the caller can read. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **sharedBy** | query | **UUID** (uuid) | Restricts the listing to the entries this member shared, which narrows a shared listing down to what one person handed out. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **filterType** | query | **FilterType** | Narrows the listing to a single kind of entry, such as documents, spreadsheets, images or one type of room. Omit it to list every kind the folder holds. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `17`, `20`, `22`, `23`, `24`, `25`, `26`] |
| **roomId** | query | **Integer** (int32) | Keeps only the entries that lie in this room, which matters when the listing being read gathers entries from more than one of them. | [optional] [example: `1`] |
| **folderType** | query | **List** | Keeps only the folders of these kinds, each given as the number of a folder type; it is how a listing is narrowed down to, say, the form-filling folders of a room. | [optional] [example: `[2]`] [enum: `0`, `1`, `2`, `3`, `5`, `6`, `8`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `19`, `20`, `21`, `22`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`] |
| **excludeSubject** | query | **Boolean** | Turns `userIdOrGroupId` around: with true the entries of that member or group are the ones left out, with false they are the only ones kept. | [optional] [example: `false`] |
| **applyFilterOption** | query | **ApplyFilterOption** | Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come back unfiltered, with `Folders` the files do, and with `All` both halves are filtered. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **withSubFolders** | query | **Boolean** | Whether a narrowed request reaches into the subfolders: with true, which is what an omitted parameter means, matching entries are gathered from the whole subtree, with false only the top level is read. It makes a difference only once `filterType`, `userIdOrGroupId` or `filterValue` narrows the request, because an unfiltered listing always shows the top level alone. | [optional] [example: `true`] |
| **extension** | query | **String** | Keeps only the files carrying one of these extensions, several of them separated by commas; the leading dot is optional. | [optional] [example: `docx,pdf`] |
| **searchArea** | query | **SearchArea** | Which area a listing that spans several of them is taken from - the active rooms, the archive, the room templates or the form-filling rooms. A folder that belongs to one area only settles the area itself and ignores the parameter. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`] |
| **formsItemKey** | query | **String** | Keeps only the completed forms whose form field of this name holds a value. Take the name from `GET api/2.0/files/{folderId}/formfilter`, and use it in the folder that gathers the completed copies of a form-filling room. | [optional] [example: `first_name`] |
| **formsItemType** | query | **String** | The kind of the form field named by `formsItemKey`, taken from the same list; the two are sent together. | [optional] [example: `text`] |
| **count** | query | **Integer** (int32) | The size of one page of the listing. Pair it with `startIndex` to walk through the result, and compare the two with `total` in the response to see when the last page has been read. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next page. | [optional] [example: `0`] |
| **sortBy** | query | **String** | The name of the field the entries are ordered by, matched case-insensitively against the file sort fields: `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`, `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the account and reused by later listings that omit the parameter, while a value matching none of the fields leaves that saved order in place. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **SortOrder** | The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order of the account. | [optional] [example: `1`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | The search string the listing is filtered by: it is matched as a substring of entry titles and, for files, against the indexed document content as well. Omit it to list the folder unfiltered. | [optional] [example: `My Document`] |
| **Location** | query | **Location** | Where the entries of a tag-based listing have to live to be kept: `Room` keeps what lies in a room, `Documents` what lies in a personal section, and `Link` what was reached through an external link that is still valid. It shapes the Favorites and Recent listings and does nothing in an ordinary folder. | [optional] [example: `1`] [enum: `1`, `2`, `3`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | One page of the folder contents, with the folder itself and the chain of its parents | [**FolderContentIntegerWrapper**](../../models/folder-content-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read this folder | - | - |
| **404** | The folder does not exist | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderContentIntegerWrapper**](../../models/folder-content-integer-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
