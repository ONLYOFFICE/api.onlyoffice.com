# getOperationStatusesByType

> FileOperationArrayWrapper getOperationStatusesByType(operationType, id)

`GET /api/2.0/files/fileops/{operationType}`

Get file operations by type

Returns the background file operations of the caller that are of one kind, named by the number in the route: `1` for a copy, `2` for a deletion, `3` for a download, `4` for a mark-as-read and `7` for a duplication. The answer carries the same records as `GET api/2.0/files/fileops`, with the same rule that a finished operation is reported once and then dropped, and `id` narrows it further to a single operation. Moves, kind `0`, cannot be read through this route: the address `api/2.0/files/fileops/move` belongs to another operation, so read moves from `GET api/2.0/files/fileops` and pick the records whose `operation` is `0`. A kind that has no queue of its own — `5` for an import, `6` for a conversion — is accepted and answers with an empty array, while a number outside the operation type is rejected as an invalid request. The call changes nothing and never shows another account's operations.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **operationType** | path | **FileOperationType** | The kind of operation the answer is limited to. Only the kinds that have a queue of their own ever carry records — a copy, a deletion, a download, a mark-as-read and a duplication — and moves cannot be read through this route at all, because its address belongs to another operation. | [required] [example: `2`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`] |
| **id** | query | **String** | The operation to report on, as returned in `id` when it was started; without it every operation of the caller is reported. An id that is not among the caller's operations gives an empty answer rather than an error. | [optional] [example: `b2f3e9a4-7c15-4d8e-9f60-3a1c5e7d0b42`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The operations of the caller that are of the requested kind | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
