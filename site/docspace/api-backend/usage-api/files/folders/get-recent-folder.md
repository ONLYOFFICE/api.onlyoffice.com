# getRecentFolder

> FolderContentWrapper getRecentFolder(userIdOrGroupId, filterType, excludeSubject, applyFilterOption, searchArea, extension, count, startIndex, sortBy, sortOrder, filterValue, metadataTemplateId, metadataFilters, includeHiddenMetadata)

`GET /api/2.0/files/recent`

Get the Recent section

Returns one page of the files that the caller opened recently. Each account has its own history, and the section holds files only, so `folders` is empty. Any signed-in user can call it. The call is read-only, but a valid `sortBy` becomes the account's default order. The call always sorts the list by the last opening time, newest first. So `sortBy` and `sortOrder` do not change the order here. Without `searchArea`, or with `Active`, the call lists files from personal sections and rooms, except form-filling rooms. With `searchArea` set to `Forms`, it lists only files from form-filling rooms. If `searchArea` is `PrivateRooms`, the call returns 400. Any other `searchArea` value lists all recent files. The call ignores `applyFilterOption`. The `total` field counts all matching files. The call also returns 400 if `metadataTemplateId` or `metadataFilters` names an unknown template or field, or has a malformed condition. The portal adds a file to the section when the caller opens it. To add a file without opening it, use `POST api/2.0/files/file/{fileId}/recent`. To clear the history, use `DELETE api/2.0/files/recent`. This call works whether `PUT api/2.0/files/displayrecent` shows or hides the section.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | query | **UUID** (uuid) | Restricts the listing to the files authored by this portal member, or by the members of this group; the same parameter accepts either kind of identifier. Omit it to list the whole history. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **filterType** | query | **FilterType** | Narrows the listing to a single kind of file, such as documents, spreadsheets or images. Omit it to list every kind the history holds. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `17`, `20`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`] |
| **excludeSubject** | query | **Boolean** | Inverts `userIdOrGroupId`: with `true` the files of that member or group are the ones left out of the listing instead of the only ones kept. | [optional] [example: `false`] |
| **applyFilterOption** | query | **ApplyFilterOption** | Accepted for compatibility with the other folder listings and ignored: the Recent section holds files only. | [optional] [example: `1`] [enum: `0`, `1`, `2`] |
| **searchArea** | query | **SearchArea** | The section of the portal that the recent files must come from. `Active`, which is what an omitted parameter means, stands for the personal sections and the rooms other than form-filling rooms; `Forms` stands for the form-filling rooms. | [optional] [example: `8`] [enum: `Active`, `Archive`, `Any`, `RecentByLinks`, `Templates`, `Knowledge`, `ResultStorage`, `AiAgents`, `Forms`, `FormTemplates`, `AiHub`, `PrivateRooms`] |
| **extension** | query | **List** | The file extensions the listing is limited to, matched against the end of the file name. The leading dot is optional, and the parameter is repeated once per extension. | [optional] [example: `.docx`] |
| **count** | query | **Integer** (int32) | The size of one page of section content. Pair it with `startIndex` to walk the listing, and compare the two with `total` in the response to see when the last page has been read. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next page. | [optional] [example: `0`] |
| **sortBy** | query | **String** | The name of the field the entries are ordered by, matched case-insensitively against the file sort fields: `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`, `CustomOrder`, `LastOpened` and `UsedSpace`. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **SortOrder** | The direction in which the `sortBy` field is ordered. | [optional] [example: `1`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | The search string the history is filtered by: it is matched as a substring of file titles and against the indexed document content as well. Omit it to list the whole history. | [optional] [example: `My Document`] |
| **metadataTemplateId** | query | **Integer** (int32) | The ID of the metadata template the recent files must be assigned to. On its own it narrows the listing to the files carrying the template; together with the metadata filters it also pins the template the filtered fields belong to. The third-party files never carry metadata and are left out when the filter is set. | [optional] [example: `1`] |
| **metadataFilters** | query | **String** | The URL-encoded JSON array of the metadata filter conditions, e.g. [\{fieldId:1,op:contains,value:ACME\},\{fieldId:2,op:range,from:2026-01-01,to:2026-06-30\},\{fieldId:3,op:in,optionIds:[...]\}]. A string field takes eq or contains; a number or a date field takes range with inclusive bounds, or gt, gte, lt, lte with the bound in value; a date-only bound covers the whole day. A custom field is addressed by its name instead of the fieldId: \{name:Client,op:eq,value:ACME\}. | [optional] [example: `[{"fieldId":1,"op":"eq","value":"ACME"}]`] |
| **includeHiddenMetadata** | query | **Boolean** | Whether the text search, and the metadataMatches it reports, also look at the values of the hidden metadata templates (created with visible false for the metadata a service keeps for itself, which the web client never shows). False, the default, leaves them out, so an entry is not found by such a value; true takes them in. metadataTemplateId and metadataFilters are not concerned: a hidden template or field named there is searched either way. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The Recent section with one page of the files the caller opened lately | [**FolderContentWrapper**](../../models/folder-content-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, the `count` is outside its allowed range, the `startIndex` is negative, `searchArea` is `PrivateRooms`, or the metadata filter names an unknown template or field | - | - |
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
