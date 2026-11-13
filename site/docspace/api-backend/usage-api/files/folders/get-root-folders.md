# getRootFolders

> FolderContentArrayWrapper getRootFolders(userIdOrGroupId, filterType, withoutTrash, count, startIndex, sortBy, sortOrder, filterValue)

`GET /api/2.0/files/@root`

Get filtered sections

Returns every top-level section that the caller can see, each with its first page of content. Sections come in this order: Favorites, Recent, Shared with me, My documents, Trash, Rooms, Forms, and Archive. While the private rooms app is on, Private rooms comes before Archive. While AI access is on for the portal, the AI agents and AI hub sections follow. The list has Recent only after `PUT api/2.0/files/displayrecent` turns it on. It skips My documents if the account has none, which is usual for a guest. To skip Trash, set `withoutTrash` to `true`. Any signed-in user can call it. The call is read-only, but a valid `sortBy` becomes the account's default order. It does not clear new-item marks. The filters, `count`, and `startIndex` apply to each section. So `count=1` returns one entry per section, and each section has its own `total`. This is the most expensive listing of the module. When you need one section, read it directly, for example with `GET api/2.0/files/@my`. The call returns 400 if `count` is outside its allowed range.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | query | **UUID** (uuid) | Restricts the listing to the entries authored by this portal member, or by the members of this group; the same parameter accepts either kind of identifier. Omit it to list everything the caller can read. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **filterType** | query | **FilterType** | Narrows the content listed inside every returned section to a single kind of entry, such as documents, images or one type of room. Omit it to list every kind the sections hold. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `17`, `20`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`] |
| **withoutTrash** | query | **Boolean** | Set it to `true` to leave the Trash section out of the returned set of sections; with `false`, or when the parameter is omitted, the section is returned whenever the account has one of its own. | [optional] [example: `false`] |
| **count** | query | **Integer** (int32) | The size of the content page returned for each section separately, so a value of 1 yields one entry per section rather than one entry in total. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching entries skipped in each section before its page begins; add `count` to it to ask for the next page of every section. | [optional] [example: `0`] |
| **sortBy** | query | **String** | The name of the field the entries are ordered by, matched case-insensitively against the file sort fields: `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`, `CustomOrder`, `LastOpened` and `UsedSpace`. Omit it to use the saved default order of the account. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **SortOrder** | The direction in which the `sortBy` field is ordered. | [optional] [example: `1`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | The search string the content of every section is filtered by: it is matched as a substring of entry titles and, for files, against the indexed document content as well. Omit it to list the sections unfiltered. | [optional] [example: `My Document`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The sections available to the caller, each with one page of its content | [**FolderContentArrayWrapper**](../../models/folder-content-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, the `count` is outside its allowed range, or the `startIndex` is negative | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderContentArrayWrapper**](../../models/folder-content-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
