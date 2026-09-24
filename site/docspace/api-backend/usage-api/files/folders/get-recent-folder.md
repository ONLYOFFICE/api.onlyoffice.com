# getRecentFolder

> FolderContentIntegerWrapper getRecentFolder(userIdOrGroupId, filterType, excludeSubject, applyFilterOption, searchArea, extension, count, startIndex, sortBy, sortOrder, filterValue)

`GET /api/2.0/files/recent`

Get the Recent section

Returns the Recent section: the files the calling account has opened lately. The section holds files only, so `folders` comes back empty, and it is personal, so another member's history is not visible here. A file is added when it is opened and can also be added explicitly with `POST api/2.0/files/file/{fileId}/recent`; `DELETE api/2.0/files/recent` clears the whole history, and `PUT api/2.0/files/displayrecent` switches the section on and off for the account, which also decides whether `GET api/2.0/files/@root` includes it. Nothing in the section is modified, though passing `sortBy` saves the requested order as the default order for this account. The listing is ordered by the moment the caller last opened each file, newest first, and `sortBy` and `sortOrder` do not change that order. `files` holds one page, `total` counts the files matching the request before `count` and `startIndex` are applied, and `current` describes the section folder itself.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | query | **UUID** (uuid) | Restricts the listing to the files authored by this portal member, or by the members of this group; the same parameter accepts either kind of identifier. Omit it to list the whole history. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **filterType** | query | **FilterType** | Narrows the listing to a single kind of file, such as documents, spreadsheets or images. Omit it to list every kind the history holds. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `17`, `20`, `22`, `23`, `24`, `25`, `26`] |
| **excludeSubject** | query | **Boolean** | Inverts `userIdOrGroupId`: with `true` the files of that member or group are the ones left out of the listing instead of the only ones kept. | [optional] [example: `false`] |
| **applyFilterOption** | query | **ApplyFilterOption** | Chooses which half of a listing `filterType` and `filterValue` are applied to. The Recent section holds files only, so the value does not change what comes back. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **searchArea** | query | **SearchArea** | The area a listing is taken from. The Recent section is assembled from the caller's own open history rather than from an area, so the value does not change which files are returned. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`] |
| **extension** | query | **List** | The file extensions the listing is limited to, matched against the end of the file name. The leading dot is optional, and the parameter is repeated once per extension. | [optional] [example: `.docx`] |
| **count** | query | **Integer** (int32) | The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two with `total` in the response to see when the last page has been read. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next page. | [optional] [example: `0`] |
| **sortBy** | query | **String** | The name of the field the entries are ordered by, matched case-insensitively against the file sort fields: `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`, `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the account and reused by later listings that omit the parameter, while a value matching none of the fields leaves that saved order in place. The Recent section keeps its own newest-first order, so the value does not reorder this listing. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **SortOrder** | The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order of the account. The Recent section keeps its own newest-first order, so the value does not reorder this listing. | [optional] [example: `1`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | The search string the history is filtered by: it is matched as a substring of file titles and against the indexed document content as well. Omit it to list the whole history. | [optional] [example: `My Document`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The Recent section with one page of the files the caller opened lately | [**FolderContentIntegerWrapper**](../../models/folder-content-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to read the Recent section | - | - |
| **404** | The Recent section could not be resolved for this account | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderContentIntegerWrapper**](../../models/folder-content-integer-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
