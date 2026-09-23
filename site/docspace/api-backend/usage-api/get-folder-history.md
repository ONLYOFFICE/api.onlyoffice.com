# getFolderHistory

Referenced types are defined in the [full reference](../files.md).

> HistoryArrayWrapper getFolderHistory(folderId, fromDate, toDate, count, startIndex)

`GET /api/2.0/files/folder/{folderId}/log`

Get folder history

Lists what has happened to a folder and to the entries inside it - creations, renames, uploads, moves, deletions and changes of access - each record naming the action, the moment it happened and the member behind it. Records that belong to one action are grouped, so a batch arrives as a single entry carrying the rest of itself in `related`, and the list runs from the most recent record backwards. `fromDate` and `toDate` narrow the period, `startIndex` and `count` page through the result, and the number of records matching the request is reported in the response headers rather than in the body. Any member who can read the folder may read its history; a caller without access is answered with 403 and a folder that does not exist with 404. When the folder is a form-filling folder the caller reached through a filling invitation, the history is narrowed to what that caller may see. The call is read-only. To take the same history away as a spreadsheet, start a report with `POST api/2.0/files/folder/{folderId}/log/report`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder whose activity log is read; the log covers the folder itself and the entries inside it. | [required] [example: `1`] |
| **fromDate** | query | **Date** (date-time) | The earliest moment an entry may have, read in the time zone of the portal; left out, the log starts at the oldest entry the portal still keeps. | [optional] [example: `2025-01-01T00:00:00.0000000Z`] |
| **toDate** | query | **Date** (date-time) | The latest moment an entry may have, read in the time zone of the portal; left out, the log ends at the newest entry. | [optional] [example: `2025-12-31T23:59:59.0000000Z`] |
| **count** | query | **Integer** (int32) | How many entries one page holds. The number of entries that match the query is reported in the response headers, not in the body. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many entries to skip before the page begins, counted from the newest one, so pages are taken by adding the page size to it. | [optional] [example: `0`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | One page of the folder history, the most recent record first | [**HistoryArrayWrapper**](../files.md#model-historyarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read this folder | - | - |
| **404** | The folder does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**HistoryArrayWrapper**](../files.md#model-historyarraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
