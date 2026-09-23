# getMyFolder

Referenced types are defined in the [full reference](../files.md).

> FolderContentIntegerWrapper getMyFolder(userIdOrGroupId, filterType, applyFilterOption, count, startIndex, sortBy, sortOrder, filterValue)

`GET /api/2.0/files/@my`

Get the My documents section

Returns the contents of the caller's My documents section, the personal storage that belongs to this account alone and stays invisible to other members until something in it is shared explicitly. Any authenticated member that has a personal section can read it; guest accounts are not given one, and the call then answers 404. Nothing in the section is modified, though passing `sortBy` saves the requested order as the default order for this account. Without a filter only the top level of the section is listed; as soon as `filterType`, `userIdOrGroupId` or `filterValue` narrows the request, the search descends through the whole subtree. `filterValue` is matched against titles and against indexed document content, and the index is written asynchronously, so a file uploaded a moment ago can be missing from a search for a short while. `folders` and `files` hold one page of the result, `total` counts everything that matches before `count` and `startIndex` are applied, and `current` describes the section folder. To open a folder inside the section, call `GET api/2.0/files/{folderId}` with its identifier.

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
| **200** | The My documents section with one page of its contents | [**FolderContentIntegerWrapper**](../files.md#model-foldercontentintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to read the My documents section | - | - |
| **404** | This account has no personal section | - | - |
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
