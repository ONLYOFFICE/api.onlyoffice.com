# getMyFolder

> FolderContentWrapper getMyFolder(userIdOrGroupId, filterType, applyFilterOption, count, startIndex, sortBy, sortOrder, filterValue, metadataTemplateId, metadataFilters, includeHiddenMetadata)

`GET /api/2.0/files/@my`

Get the My documents section

Returns one page of the caller's personal My documents section. Other members do not see its entries until the owner shares them. Any signed-in user can call it. A guest usually has no personal section, and the call then returns 404. The call is read-only, but a valid `sortBy` becomes the account's default order. Without filters, the call lists only the top level of the section. With `filterType`, `userIdOrGroupId`, `filterValue`, or a metadata filter, it searches the whole section. It matches `filterValue` against titles and indexed document content. A new file can be missing from that search until the portal indexes it. The `total` field counts all matching entries. The call returns 400 if `metadataTemplateId` or `metadataFilters` names an unknown template or field, or has a malformed condition. To open a folder of the section, use `GET api/2.0/files/{folderId}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | query | **UUID** (uuid) | Restricts the listing to the entries authored by this portal member, or by the members of this group; the same parameter accepts either kind of identifier. Omit it to list everything the caller can read. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **filterType** | query | **FilterType** | Narrows the listing to a single kind of entry, such as documents, images or one type of room. Omit it to list every kind the section holds. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `17`, `20`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`] |
| **applyFilterOption** | query | **ApplyFilterOption** | Chooses which half of the listing `filterType` and `filterValue` are applied to: with `Files` the folders come back unfiltered, with `Folders` the files do, and with `All` both halves are filtered. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **count** | query | **Integer** (int32) | The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two with `total` in the response to see when the last page has been read. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next page. | [optional] [example: `0`] |
| **sortBy** | query | **String** | The name of the field the entries are ordered by, matched case-insensitively against the file sort fields: `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`, `CustomOrder`, `LastOpened` and `UsedSpace`. Omit it to use the saved default order of the account. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **SortOrder** | The direction in which the `sortBy` field is ordered. | [optional] [example: `1`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | The text to search for in the section. Omit it to list the section unfiltered. | [optional] [example: `My Document`] |
| **metadataTemplateId** | query | **Integer** (int32) | The ID of the metadata template the entries must be assigned to. On its own it narrows the listing to the entries carrying the template; together with the metadata filters it also pins the template the filtered fields belong to. The third-party entries never carry metadata and are left out when the filter is set. | [optional] [example: `1`] |
| **metadataFilters** | query | **String** | The URL-encoded JSON array of the metadata filter conditions, e.g. [\{fieldId:1,op:contains,value:ACME\},\{fieldId:2,op:range,from:2026-01-01,to:2026-06-30\},\{fieldId:3,op:in,optionIds:[...]\}]. A string field takes eq or contains; a number or a date field takes range with inclusive bounds, or gt, gte, lt, lte with the bound in value; a date-only bound covers the whole day. A custom field is addressed by its name instead of the fieldId: \{name:Client,op:eq,value:ACME\}. | [optional] [example: `[{"fieldId":1,"op":"eq","value":"ACME"}]`] |
| **includeHiddenMetadata** | query | **Boolean** | Whether the text search, and the metadataMatches it reports, also look at the values of the hidden metadata templates (created with visible false for the metadata a service keeps for itself, which the web client never shows). False, the default, leaves them out, so an entry is not found by such a value; true takes them in. metadataTemplateId and metadataFilters are not concerned: a hidden template or field named there is searched either way. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The My documents section with one page of its contents | [**FolderContentWrapper**](../../models/folder-content-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, the `count` is outside its allowed range, the `startIndex` is negative, or the metadata filter names an unknown template or field | - | - |
| **404** | This account has no personal section | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderContentWrapper**](../../models/folder-content-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
