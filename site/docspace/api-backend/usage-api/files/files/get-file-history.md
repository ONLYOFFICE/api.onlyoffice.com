# getFileHistory

> HistoryArrayWrapper getFileHistory(fileId, fromDate, toDate, count, startIndex)

`GET /api/2.0/files/file/{fileId}/log`

Get file history

Returns the activity log of one file from the portal audit trail. The log shows who renamed, moved, shared, converted, locked, or edited the file, and when. Requires read access to the file. Other callers get 403. The call is read-only. Entries come newest first. The call merges the events of one action into one entry, and its `related` list holds the others. The response headers carry the total number of entries, not the body. If no file has this id, the call returns 404. The call returns 400 if `fromDate` or `toDate` has no `Z` or UTC offset. To read the log of a folder or a room, use `GET api/2.0/files/folder/{folderId}/log`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose activity log is read; only files stored in the portal itself have one. | [required] [example: `1`] |
| **fromDate** | query | **Date** (date-time) | The earliest moment an entry may have, read in the time zone of the portal; left out, the log starts at the oldest entry the portal still keeps. | [optional] [example: `2025-01-01T00:00:00.0000000Z`] |
| **toDate** | query | **Date** (date-time) | The latest moment an entry may have, read in the time zone of the portal; left out, the log ends at the newest entry. | [optional] [example: `2025-12-31T23:59:59.0000000Z`] |
| **count** | query | **Integer** (int32) | How many entries one page holds. The number of entries that match the query is reported in the response headers, not in the body. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many entries to skip before the page begins, counted from the newest one, so pages are taken by adding the page size to it. | [optional] [example: `0`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The activity entries of the file, newest first | [**HistoryArrayWrapper**](../../models/history-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, the `count` is outside its allowed range, or `fromDate` or `toDate` is not a date and time ending in `Z` or a UTC offset | - | - |
| **403** | The caller has no read access to the file | - | - |
| **404** | No file with this identifier exists | - | - |
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
