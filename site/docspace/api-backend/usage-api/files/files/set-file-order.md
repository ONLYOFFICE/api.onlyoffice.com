# setFileOrder

> FileIntegerWrapper setFileOrder(fileId, OrderRequestDto)

`PUT /api/2.0/files/{fileId}/order`

Set file order

Puts a file at a given position inside its folder and answers with the file, its `order` reporting where it now stands. Positions count from 1, and the file that held the wanted position, together with everything after it, is shifted to make room, so the numbering of a folder stays without gaps; a position beyond the end of the folder places the file last. The value may also be sent as a dotted path, as in 1.2.3, in which case only its last segment is read. Ordering is what the manual sorting of a room is built on, and it only means something in rooms whose contents are indexed - elsewhere the value is stored and ignored. The caller needs edit access to the file, which room managers, content creators and members with editing rights have; a member acting on somebody else's file, a guest and an anonymous caller are refused with 403, and an unknown file is answered with 404. The call is mutating and idempotent. To move several items in one go use `PUT api/2.0/files/order`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to move. | [required] [example: `1`] |
| **OrderRequestDto** | body | [**OrderRequestDto**](../../models/order-request-dto.md) | The position the file is to take. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file with the position it now holds | [**FileIntegerWrapper**](../../models/file-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not reorder this file | - | - |
| **404** | The file does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileIntegerWrapper**](../../models/file-integer-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
