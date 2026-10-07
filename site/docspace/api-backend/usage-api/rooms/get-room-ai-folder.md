# getRoomAiFolder

> FolderContentWrapper getRoomAiFolder(id, filterType, count, startIndex, sortBy, sortOrder, filterValue)

`GET /api/2.0/files/rooms/{id}/ai`

Get the .ai folder of a room

Returns one page of the contents of the .ai folder that lies in the root of a room, in the same shape as `GET api/2.0/files/{folderId}` returns for any other folder. The rooms that hold such a folder are listed with `GET api/2.0/files/rooms?withAiFolder=true`. Any member who can read the room may call it; somebody who cannot is refused, and a room that does not exist or holds no .ai folder is answered as not found.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room whose .ai folder is listed, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **filterType** | query | **FilterType** | Narrows the listing to a single kind of entry, such as documents, spreadsheets or images. Omit it to list every kind the folder holds. | [optional] [example: `1`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `17`, `20`, `22`, `23`, `24`, `25`, `26`] |
| **count** | query | **Integer** (int32) | The size of one page of the listing. Pair it with `startIndex` to walk through the result, and compare the two with `total` in the response to see when the last page has been read. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching entries to skip before the returned page begins; add `count` to it to ask for the next page. | [optional] [example: `0`] |
| **sortBy** | query | **String** | The name of the field the entries are ordered by, matched case-insensitively against the file sort fields, such as `DateAndTime`, `AZ`, `Size` or `Type`. | [optional] [example: `DateAndTime`] |
| **sortOrder** | query | **SortOrder** | The direction in which the `sortBy` field is ordered. | [optional] [example: `1`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | The search string the listing is filtered by: it is matched as a substring of entry titles. Omit it to list the folder unfiltered. | [optional] [example: `skill`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | One page of the .ai folder contents, with the folder itself and the chain of its parents | [**FolderContentWrapper**](../models/folder-content-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, the `count` is outside its allowed range, or the `startIndex` is negative | - | - |
| **403** | The caller may not read this room | - | - |
| **404** | The room does not exist or holds no .ai folder | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderContentWrapper**](../models/folder-content-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
