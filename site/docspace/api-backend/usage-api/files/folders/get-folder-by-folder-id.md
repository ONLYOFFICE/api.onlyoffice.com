# getFolderByFolderId

> FolderContentWrapper getFolderByFolderId(folderId, userIdOrGroupId, sharedBy, filterType, roomId, folderType, excludeSubject, applyFilterOption, withSubFolders, extension, searchArea, formsItemKey, formsItemType, count, startIndex, sortBy, sortOrder, filterValue, location, metadataTemplateId, metadataFilters, includeHiddenMetadata)

`GET /api/2.0/files/{folderId}`

Get a folder by ID

Returns one page of the contents of a folder. The response has the subfolders in `folders`, the files in `files`, and the folder itself in `current`. The chain of parent folders is in `pathParts`. Requires read access to the folder. Other callers get 403. Without signing in, a caller needs an external link to the folder. The call changes data of the caller only. It clears the new-item marks of the folder. It also saves a valid `sortBy` and `sortOrder` as the default order of the account. You can repeat it. With a filter, the call searches the whole subtree by default. The text filter also searches indexed document content. Indexing runs in the background, so a new file can be missing from the results at first. Use `count` and `startIndex` to page through the result. The `total` field counts all matching entries. To filter by metadata with a typed body, use `POST api/2.0/files/{folderId}/search`. The call returns 400 for a wrong parameter type, a `count` out of range, or a negative `startIndex`. An invalid metadata filter also returns 400. It also returns 400 if `roomId` is not a number but the folder ID is. It also returns 403 for a folder in the trash. If the folder does not exist, the call returns 404. For an anonymous caller, it returns 403 instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder whose contents are listed. Each section root has an operation of its own, such as `GET api/2.0/files/@my`, and every other folder is opened by the identifier a listing gave for it. | [required] [example: `1`] |
| **userIdOrGroupId** | query | **UUID** (uuid) | Restricts the listing to the entries authored by this portal member, or by the members of this group; the same parameter accepts either kind of identifier. Omit it to list everything the caller can read. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **sharedBy** | query | **UUID** (uuid) | Restricts the listing to the entries this member shared, which narrows a shared listing down to what one person handed out. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **filterType** | query | **FilterType** | Narrows the listing to a single kind of entry, such as documents, spreadsheets, images or one type of room. Omit it to list every kind the folder holds. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `17`, `20`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`] |
| **roomId** | query | **Integer** (int32) | Keeps only the entries that lie in this room, which matters when the listing being read gathers entries from more than one of them. | [optional] [example: `1`] |
| **folderType** | query | **List** | Keeps only the folders of these kinds, each given as the number of a folder type; it is how a listing is narrowed down to, say, the form-filling folders of a room. | [optional] [example: `[2]`] [enum: `0`, `1`, `2`, `3`, `5`, `6`, `8`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `19`, `20`, `21`, `22`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`, `37`, `38`, `39`, `40`, `41`, `42`] |
| **excludeSubject** | query | **Boolean** | Turns `userIdOrGroupId` around: with true the entries of that member or group are the ones left out, with false they are the only ones kept. | [optional] [example: `false`] |
| **applyFilterOption** | query | **ApplyFilterOption** | Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come back unfiltered, with `Folders` the files do, and with `All` both halves are filtered. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **withSubFolders** | query | **Boolean** | Whether a narrowed request reaches into the subfolders: with true, which is what an omitted parameter means, matching entries are gathered from the whole subtree, with false only the top level is read. It makes a difference only once `filterType`, `userIdOrGroupId` or `filterValue` narrows the request, because an unfiltered listing always shows the top level alone. | [optional] [example: `true`] |
| **extension** | query | **String** | Keeps only the files carrying one of these extensions, several of them separated by commas; the leading dot is optional. | [optional] [example: `docx,pdf`] |
| **searchArea** | query | **SearchArea** | Which area a listing that spans several of them is taken from - the active rooms, the archive, the room templates or the form-filling rooms. A folder that belongs to one area only settles the area itself and ignores the parameter. | [optional] [example: `1`] [enum: `Active`, `Archive`, `Any`, `RecentByLinks`, `Templates`, `Knowledge`, `ResultStorage`, `AiAgents`, `Forms`, `FormTemplates`, `AiHub`, `PrivateRooms`] |
| **formsItemKey** | query | **String** | Keeps only the completed forms whose form field of this name holds a value. Take the name from `GET api/2.0/files/{folderId}/formfilter`, and use it in the folder that gathers the completed copies of a form-filling room. | [optional] [example: `first_name`] |
| **formsItemType** | query | **String** | The kind of the form field named by `formsItemKey`, taken from the same list; the two are sent together. | [optional] [example: `text`] |
| **count** | query | **Integer** (int32) | The size of one page of the listing. Pair it with `startIndex` to walk through the result, and compare the two with `total` in the response to see when the last page has been read. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next page. | [optional] [example: `0`] |
| **sortBy** | query | **String** | The name of the field the entries are ordered by, matched case-insensitively against the file sort fields: `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`, `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the account and reused by later listings that omit the parameter, while a value matching none of the fields leaves that saved order in place. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **SortOrder** | The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order of the account. | [optional] [example: `1`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | The search string the listing is filtered by: it is matched as a substring of entry titles and, for files, against the indexed document content as well. Omit it to list the folder unfiltered. | [optional] [example: `My Document`] |
| **location** | query | **RequestLocation** | Where the entries of a tag-based listing have to live to be kept: `Room` keeps what lies in a room, `Documents` what lies in a personal section, and `Link` what was reached through an external link that is still valid. It shapes the Favorites and Recent listings and does nothing in an ordinary folder. | [optional] [example: `1`] [enum: `1`, `2`, `3`] |
| **metadataTemplateId** | query | **Integer** (int32) | The ID of the metadata template the entries must be assigned to. On its own it narrows the listing to the entries carrying the template; together with the metadata filters it also pins the template the filtered fields belong to. Supported for the rooms, the trash, the regular folders and the Shared with me, Recent and Favorites sections (the third-party entries never carry metadata and are left out); the Templates and Private sections reject it with 400. | [optional] [example: `1`] |
| **metadataFilters** | query | **String** | The URL-encoded JSON array of the metadata filter conditions, e.g. [\{fieldId:1,op:contains,value:ACME\},\{fieldId:2,op:range,from:2026-01-01,to:2026-06-30\},\{fieldId:3,op:in,optionIds:[...]\}]. A string field takes eq (the whole value) or contains (a part of it); a number or a date field takes range with inclusive bounds, or gt, gte, lt, lte with the single bound in value; a choice field takes in. A date-only bound covers the whole day, so to:2026-06-30 includes the values stored on 30 June and gt:2026-06-30 starts after it. A custom field is addressed by its name instead of the fieldId: \{name:Client,op:eq,value:ACME\}. The same filter is taken as a typed request body by POST api/2.0/files/\{folderId\}/search. | [optional] [example: `[{"fieldId":1,"op":"eq","value":"ACME"}]`] |
| **includeHiddenMetadata** | query | **Boolean** | Whether the text search, and the metadataMatches it reports, also look at the values of the hidden metadata templates (created with visible false for the metadata a service keeps for itself, which the web client never shows). False, the default, leaves them out, so an entry is not found by such a value; true takes them in. metadataTemplateId and metadataFilters are not concerned: a hidden template or field named there is searched either way. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | One page of the folder contents, with the folder itself and the chain of its parents | [**FolderContentWrapper**](../../models/folder-content-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, the `count` is outside its allowed range, the `startIndex` is negative, or the `roomId` is not a number while the folder id is one | - | - |
| **403** | The caller may not read this folder, the folder lies inside Trash, or an anonymous caller asks for a folder that does not exist | - | - |
| **404** | The folder does not exist | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderContentWrapper**](../../models/folder-content-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **String** | The folder whose contents are listed. Each section root has an operation of its own, such as &#x60;GET api/2.0/files/@my&#x60;, and every other folder is opened by the identifier a listing gave for it. | [required] [example: `sbox-42`] |
| **roomId** | query | **String** | Keeps only the entries that lie in this room, which matters when the listing being read gathers entries from more than one of them. | [optional] [example: `sbox-42`] |

Return type: [**ThirdPartyFolderContentWrapper**](../../models/third-party-folder-content-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
