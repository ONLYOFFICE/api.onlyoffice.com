# getOperationStatusesByType

> FileOperationArrayWrapper getOperationStatusesByType(operationType, id)

`GET /api/2.0/files/fileops/{operationType}`

Get file operations by type

Returns the background file operations of the caller of one kind, named by `operationType`. Anyone can call it without signing in. Each caller sees only their own operations. As in `GET api/2.0/files/fileops`, a finished operation appears in one answer and then leaves the list. A kind without a queue of its own, such as an import or a conversion, returns an empty list. To read moves, use `GET api/2.0/files/fileops` and pick the move records. The path `api/2.0/files/fileops/move` belongs to another operation. If `operationType` is not a known kind, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **operationType** | path | **FileOperationType** | The kind of operation the answer is limited to. Only the kinds that have a queue of their own ever carry records — a copy, a deletion, a download, a mark-as-read and a duplication — and moves cannot be read through this route at all, because its address belongs to another operation. | [required] [example: `2`] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`] |
| **id** | query | **String** | The operation to report on, as returned in `id` when it was started; without it every operation of the caller is reported. An id that is not among the caller's operations gives an empty answer rather than an error. | [optional] [example: `b2f3e9a4-7c15-4d8e-9f60-3a1c5e7d0b42`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The operations of the caller that are of the requested kind | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `operationType` is neither the number nor the name of an operation type | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
