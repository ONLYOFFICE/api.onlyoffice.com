# getFileHistory

Referenced types are defined in the [full reference](../files.md).

> HistoryArrayWrapper getFileHistory(fileId, fromDate, toDate, count, startIndex)

`GET /api/2.0/files/file/{fileId}/log`

Get file history

Returns the activity log of a single file - who renamed, moved, shared, converted, locked or edited it, and when - as the portal recorded it in its audit trail. Entries arrive newest first, and the events that belong to one action are folded into a single entry whose `related` list carries the rest of them. `fromDate` and `toDate` are read in the portal's time zone and narrow the range; `startIndex` and `count` page through the result, and the number of matching entries is reported in the response headers rather than in the body. The caller needs read access to the file, so a member of the room it lies in, the admin of that room and a DocSpace admin all see the same log, while a caller without access to the room is refused with 403 and an unknown id is answered with 404. The operation is read-only. Only files stored in the portal itself have a log here - a file kept in a connected third-party storage has none. For the log of a folder or a room use `GET api/2.0/files/folder/{folderId}/log`.

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
| **200** | The activity entries of the file, newest first | [**HistoryArrayWrapper**](../files.md#model-historyarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no read access to the file | - | - |
| **404** | No file with this identifier exists | - | - |
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
