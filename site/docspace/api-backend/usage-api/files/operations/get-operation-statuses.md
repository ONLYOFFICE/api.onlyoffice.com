# getOperationStatuses

> FileOperationArrayWrapper getOperationStatuses(id)

`GET /api/2.0/files/fileops`

Get active file operations

Returns the background file operations of the caller that still run or have an unread result. The list starts with duplications, then moves and copies, deletions, downloads, mark-as-read jobs, and builder runs. Anyone can call it without signing in. Each caller sees only their own operations. An anonymous caller sees the operations of their external link session. This is the call to poll. Repeat it until `finished` is true. A finished operation appears in one answer only, here or in the answer of the call that started it. So an empty list means nothing is left to report, not that the work failed. An unknown `id` returns an empty list. To read one kind of operation, use `GET api/2.0/files/fileops/{operationType}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | query | **String** | The operation to report on, as returned in `id` when it was started; without it every operation of the caller is reported. An id that is not among the caller's operations gives an empty answer rather than an error. | [optional] [example: `b2f3e9a4-7c15-4d8e-9f60-3a1c5e7d0b42`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file operations of the caller that are still running or not yet read | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
