# terminateTasks

> FileOperationArrayWrapper terminateTasks(id)

`PUT /api/2.0/files/fileops/terminate/{id}`

Cancel file operations

Cancels a background file operation of the caller and returns the operations that are left. Without `id`, the call cancels every running operation of the caller. Anyone can call it without signing in. A caller can cancel only their own operations. An anonymous caller reaches only the operations of their external link session. The call stops the job but does not undo it. Items already copied, moved, or deleted stay that way. You can repeat the call. An unknown `id` cancels nothing and is not an error. The answer is usually empty. After the job stops, `GET api/2.0/files/fileops` lists it once, finished, with the status `Canceled`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The operation to cancel, as returned in `id` when it was started. A call that leaves the route segment out cancels every operation of the caller, and an id that is not among their operations cancels nothing without being an error. | [required] [example: `b2f3e9a4-7c15-4d8e-9f60-3a1c5e7d0b42`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The operations of the caller that are left after the cancellation | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
