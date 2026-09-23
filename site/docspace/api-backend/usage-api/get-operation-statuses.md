# getOperationStatuses

Referenced types are defined in the [full reference](../files.md).

> FileOperationArrayWrapper getOperationStatuses(id)

`GET /api/2.0/files/fileops`

Get active file operations

Returns the background file operations of the caller that are still running or whose finished result has not been read yet, grouped by kind: duplications first, then moves and copies, deletions, downloads and mark-as-read. This is the polling target for every operation in this section — an operation appears here as soon as it is queued and carries `progress` from 0 to 100, `finished`, the `error` of a failed item and, for a download, the address of the archive in `url`. A record is dropped once its finished state has been handed out, so a completed operation is reported once and an empty array means there is nothing left to report rather than that the work failed. Pass `id` to follow a single operation; an id that is not among the caller's operations gives an empty array. Operations are private to the account that started them, an anonymous caller being scoped to the session of the external link. The call changes nothing. To follow one kind only use `GET api/2.0/files/fileops/{operationType}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | query | **String** | The operation to report on, as returned in `id` when it was started; without it every operation of the caller is reported. An id that is not among the caller's operations gives an empty answer rather than an error. | [optional] [example: `b2f3e9a4-7c15-4d8e-9f60-3a1c5e7d0b42`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file operations of the caller that are still running or not yet read | [**FileOperationArrayWrapper**](../files.md#model-fileoperationarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../files.md#model-fileoperationarraywrapper)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
