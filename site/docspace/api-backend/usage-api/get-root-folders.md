# getRootFolders

Referenced types are defined in the [full reference](../files.md).

> FolderContentIntegerArrayWrapper getRootFolders(userIdOrGroupId, filterType, withoutTrash, count, startIndex, sortBy, sortOrder, filterValue)

`GET /api/2.0/files/@root`

Get filtered sections

Returns every top-level section the calling account can see in one response, each of them a full section object carrying its own first page of content: Favorites, Recent, Shared with me, My documents, Trash, Rooms, Forms, Archive and, while AI access is enabled for the portal, AI agents. A section is left out when the account has none of it, which is why a guest gets no personal section, and Recent is listed only while it is switched on with `PUT api/2.0/files/displayrecent`. Pass `withoutTrash=true` to drop the Trash section. The filters, `count` and `startIndex` are applied to each section separately, so `count=1` returns one entry per section and every section reports its own `total`. Because it builds the content of all of them, this is the most expensive listing in the module: when a single section is enough, read it directly, for example with `GET api/2.0/files/@my`. The call modifies nothing in the sections and leaves their new-item badges untouched, though passing `sortBy` saves the requested order as the default order for this account.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userIdOrGroupId** | query | **UUID** (uuid) | Restricts the listing to the entries authored by this portal member, or by the members of this group; the same parameter accepts either kind of identifier. Omit it to list everything the caller can read. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **filterType** | query | **FilterType** | Narrows the content listed inside every returned section to a single kind of entry, such as documents, images or one type of room. Omit it to list every kind the sections hold. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `17`, `20`, `22`, `23`, `24`, `25`, `26`] |
| **withoutTrash** | query | **Boolean** | Set it to `true` to leave the Trash section out of the returned set of sections; with `false`, or when the parameter is omitted, the section is returned whenever the account has one of its own. | [optional] [example: `false`] |
| **count** | query | **Integer** (int32) | The size of the content page returned for each section separately, so a value of 1 yields one entry per section rather than one entry in total. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching entries skipped in each section before its page begins; add `count` to it to ask for the next page of every section. | [optional] [example: `0`] |
| **sortBy** | query | **String** | The name of the field the entries are ordered by, matched case-insensitively against the file sort fields: `DateAndTime`, `AZ`, `Size`, `Author`, `Type`, `New`, `DateAndTimeCreation`, `RoomType`, `Tags`, `Room`, `CustomOrder`, `LastOpened` and `UsedSpace`. A recognized value is also saved as the default order of the account and reused by later listings that omit the parameter, while a value matching none of the fields leaves that saved order in place. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **SortOrder** | The direction in which the `sortBy` field is ordered. It is saved together with `sortBy` as the default order of the account. | [optional] [example: `1`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | The search string the content of every section is filtered by: it is matched as a substring of entry titles and, for files, against the indexed document content as well. Omit it to list the sections unfiltered. | [optional] [example: `My Document`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The sections available to the caller, each with one page of its content | [**FolderContentIntegerArrayWrapper**](../files.md#model-foldercontentintegerarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to read one of the sections | - | - |
| **404** | One of the sections could not be resolved for this account | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderContentIntegerArrayWrapper**](../files.md#model-foldercontentintegerarraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
