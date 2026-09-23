# terminateTasks

Referenced types are defined in the [full reference](../files.md).

> FileOperationArrayWrapper terminateTasks(id)

`PUT /api/2.0/files/fileops/terminate/{id}`

Cancel file operations

Cancels a background file operation of the caller and answers with the operations that are left. Pass the `id` that was reported when the operation started to stop that one; a call that leaves the trailing route segment out stops every operation the caller has running, of every kind. Cancelling stops the job where it stands and does not undo it: what has already been copied, moved or deleted stays that way, so a cancelled batch can leave part of itself at the destination and part of it at the source, and the result has to be read back rather than assumed. The cancelled record is dropped from `GET api/2.0/files/fileops` at once, which is why the answer here is usually empty. An id that is not among the caller's operations cancels nothing and is not an error. Operations are private to the account that started them, an anonymous caller being scoped to the session of the external link, so the call can never reach an operation of anyone else.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The operation to cancel, as returned in `id` when it was started. A call that leaves the route segment out cancels every operation of the caller, and an id that is not among their operations cancels nothing without being an error. | [required] [example: `b2f3e9a4-7c15-4d8e-9f60-3a1c5e7d0b42`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The operations of the caller that are left after the cancellation | [**FileOperationArrayWrapper**](../files.md#model-fileoperationarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
