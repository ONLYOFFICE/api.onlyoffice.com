# getTrashFolder

Referenced types are defined in the [full reference](../files.md).

> FolderContentIntegerWrapper getTrashFolder(userIdOrGroupId, filterType, applyFilterOption, count, startIndex, sortBy, sortOrder, filterValue)

`GET /api/2.0/files/@trash`

Get the Trash section

Returns the caller's Trash section: the files and folders this account has deleted, kept there until they are restored or discarded. Each member has a Trash of their own and sees only what they deleted themselves. Restore an entry by moving it back with `PUT api/2.0/files/fileops/move`, or discard the whole section with `PUT api/2.0/files/fileops/emptytrash`; both start a background operation that is polled through `GET api/2.0/files/fileops`. This call itself modifies nothing, though passing `sortBy` saves the requested order as the default order for this account. Only the top level of the section is listed, so the contents of a deleted folder are not expanded into it, and `filterValue` is matched against titles alone here rather than against document content. `folders` and `files` hold one page of the result, `total` counts everything that matches before `count` and `startIndex` are applied, and `current` describes the section folder. An account that is given no Trash of its own, an outsider for instance, receives 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | query | **UUID** (uuid) | Restricts the listing to the entries authored by this portal member, or by the members of this group; the same parameter accepts either kind of identifier. Omit it to list everything the caller can read. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **filterType** | query | **FilterType** | Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list every kind the section holds. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `17`, `20`, `22`, `23`, `24`, `25`, `26`] |
| **applyFilterOption** | query | **ApplyFilterOption** | Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come back unfiltered, with `Folders` the files do, and with `All` both halves are filtered. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **count** | query | **Integer** (int32) | The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two with `total` in the response to see when the last page has been read. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next page. | [optional] [example: `0`] |
| **sortBy** | query | **String** | The name of the field the entries are ordered by, matched case-insensitively against the file sort fields: `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`, `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the account and reused by later listings that omit the parameter, while a value matching none of the fields leaves that saved order in place. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **SortOrder** | The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order of the account. | [optional] [example: `1`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | The search string the section is filtered by, matched as a substring of entry titles. Omit it to list the section unfiltered. | [optional] [example: `My Document`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The Trash section with one page of the entries the caller deleted | [**FolderContentIntegerWrapper**](../files.md#model-foldercontentintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to read the Trash section | - | - |
| **404** | This account has no Trash section | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderContentIntegerWrapper**](../files.md#model-foldercontentintegerwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
