# setFolderOrder

> FolderWrapper setFolderOrder(folderId, OrderRequestDto)

`PUT /api/2.0/files/folder/{folderId}/order`

Set folder order

Moves a folder to a position among the entries of its parent folder. Requires editing access to the folder. Other callers get 403. The room manager and content creators have this access. The call changes data. You can repeat it with the same body. The entry at that position and all entries after it move down by one. A position after the end puts the folder last. The order matters only in rooms with indexing turned on. Elsewhere the call saves it, but nothing uses it. The response has the new position in `order`. The call returns 400 if `order` is below 1 or has a wrong format. If the folder does not exist, the call returns 404. To move several entries in one call, use `PUT api/2.0/files/order`.  Raises the `folder.updated` webhook when the order changes.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder to move. | [required] [example: `1`] |
| **OrderRequestDto** | body | [**OrderRequestDto**](../../models/order-request-dto.md) | The position the folder is to take. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The folder with the position it now holds | [**FolderWrapper**](../../models/folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or `order` is below 1 or is neither a number nor a dotted path ending in one | - | - |
| **403** | The caller may not reorder this folder | - | - |
| **404** | The folder does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderWrapper**](../../models/folder-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **String** | The folder to move. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyFolderWrapper**](../../models/third-party-folder-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
