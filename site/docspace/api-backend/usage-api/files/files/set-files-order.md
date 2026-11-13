# setFilesOrder

> FileEntryArrayWrapper setFilesOrder(OrdersRequestDto)

`PUT /api/2.0/files/order`

Set order of files

Moves several files and folders to new positions and returns the moved entries with their positions. Each item of `items` names an entry, its type, and its position from 1. In a dotted path such as `1.2.3`, the call reads only the last part. The call applies the items one by one in the sent order, and each item shifts its neighbors. So the result depends on the order of `items`. Requires the right to manage the room of every entry, which a room manager has. Other callers get 403. An entry outside a room also returns 403. The call changes data, and you can repeat it with the same body. The request is not one transaction. If an item fails, the items before it stay moved. The order matters only in rooms with indexed contents. If an entry does not exist or has the wrong `entryType`, the call returns 404. If an `order` is below 1 or is not a number, the call returns 400. For one file, use `PUT api/2.0/files/{fileId}/order`.  Raises the `folder.updated` webhook for every folder in the list whose order changes. Raises the `file.updated` webhook for every file in the list whose order changes.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **OrdersRequestDto** | body | [**OrdersRequestDto**](../../models/orders-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The files and folders that were moved, with the positions they now hold | [**FileEntryArrayWrapper**](../../models/file-entry-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `items`, an item has no `entryId` or `entryType`, or an `order` is below 1 or is neither a number nor a dotted path ending in one | - | - |
| **403** | The caller may not administer the room of an entry, or an entry lies outside any room | - | - |
| **404** | An entry does not exist or is sent with the wrong `entryType` | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileEntryArrayWrapper**](../../models/file-entry-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
