# getFolderHistory

> HistoryArrayWrapper getFolderHistory(folderId, fromDate, toDate, count, startIndex)

`GET /api/2.0/files/folder/{folderId}/log`

Get folder history

Returns the history of a folder and of the entries inside it. Each record names the action, its time, and the user who did it. The records of one action form one entry, and its other records are in `related`. The list starts with the most recent entry. Paging with `startIndex` and `count` counts records, so a page can hold fewer entries. The response headers carry the total number of records, and the body does not. Requires read access to the folder. Other callers get 403. A caller who only fills forms in a form-filling folder sees only the entries available to them. The call is read-only. If the folder does not exist, the call returns 404. The call returns 400 if `count` is out of range or a date has a wrong format. To get the history as a file, use `POST api/2.0/files/folder/{folderId}/log/report`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder whose activity log is read; the log covers the folder itself and the entries inside it. | [required] [example: `1`] |
| **fromDate** | query | **Date** (date-time) | The earliest moment an entry may have, read in the time zone of the portal; left out, the log starts at the oldest entry the portal still keeps. | [optional] [example: `2025-01-01T00:00:00.0000000Z`] |
| **toDate** | query | **Date** (date-time) | The latest moment an entry may have, read in the time zone of the portal; left out, the log ends at the newest entry. | [optional] [example: `2025-12-31T23:59:59.0000000Z`] |
| **count** | query | **Integer** (int32) | How many history records one page covers. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many history records to skip before the page begins, counted from the newest one. To take the next page, add the page size to it. | [optional] [example: `0`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | One page of the folder history, the most recent record first | [**HistoryArrayWrapper**](../../models/history-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, the `count` is outside its allowed range, or `fromDate` or `toDate` is not a date and time ending in `Z` or a UTC offset | - | - |
| **403** | The caller may not read this folder | - | - |
| **404** | The folder does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**HistoryArrayWrapper**](../../models/history-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
