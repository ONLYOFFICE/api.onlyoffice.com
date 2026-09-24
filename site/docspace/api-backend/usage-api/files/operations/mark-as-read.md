# markAsRead

> FileOperationArrayWrapper markAsRead(BaseBatchRequestDto)

`PUT /api/2.0/files/fileops/markasread`

Mark files and folders as read

Queues a background job that clears the new-item badge from the requested files and folders for the calling account, and answers with the caller's mark-as-read operations, including the one just started. Poll `GET api/2.0/files/fileops` until the operation reports `finished`. Marking a folder clears the badges of everything inside it as well. Items the caller cannot read are passed over in silence rather than refused, so the call succeeds even when the whole selection is inaccessible, and an empty selection queues nothing and answers with the operations that are already there. Repeating the call on items that are already read changes nothing, and nothing is opened, moved or modified by it — only the caller's own badges are affected, while other members keep theirs. To see what is currently marked as new use `GET api/2.0/files/{folderId}/news` for one folder and `GET api/2.0/files/rooms/news` for the rooms of the caller.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BaseBatchRequestDto** | body | [**BaseBatchRequestDto**](../../models/base-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The mark-as-read operations of the caller, the one just queued included | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
