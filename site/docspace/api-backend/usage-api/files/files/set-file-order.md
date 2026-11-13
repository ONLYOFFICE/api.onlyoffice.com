# setFileOrder

> FileWrapper setFileOrder(fileId, OrderRequestDto)

`PUT /api/2.0/files/{fileId}/order`

Set file order

Moves a file to a position in its folder and returns the file with its new `order`. Positions start at 1. The call shifts the file at that position and all files after it, so the folder has no gaps. A position past the end puts the file last. In a dotted path such as `1.2.3`, the call reads only the last part. The order matters only in rooms with indexed contents. Elsewhere, the call stores it, but nothing uses it. Requires editing access to the file. Other callers get 403. The call changes data, and you can repeat it with the same body. If no file has this id, the call returns 404. If `order` is below 1 or is not a number, the call returns 400. To move several items, use `PUT api/2.0/files/order`.  Raises the `file.updated` webhook when the order changes.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to move. | [required] [example: `1`] |
| **OrderRequestDto** | body | [**OrderRequestDto**](../../models/order-request-dto.md) | The position the file is to take. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file with the position it now holds | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or `order` is below 1 or is neither a number nor a dotted path ending in one | - | - |
| **403** | The caller may not reorder this file | - | - |
| **404** | The file does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileWrapper**](../../models/file-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file to move. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |

Return type: [**ThirdPartyFileWrapper**](../../models/third-party-file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
