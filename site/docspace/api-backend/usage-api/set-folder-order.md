# setFolderOrder

Referenced types are defined in the [full reference](../files.md).

> FolderIntegerWrapper setFolderOrder(folderId, OrderRequestDto)

`PUT /api/2.0/files/folder/{folderId}/order`

Set folder order

Puts a folder at a given position among the entries of its parent and answers with the folder, its `order` reporting where it now stands. Positions count from 1, and the entry that held the wanted position, together with everything after it, is shifted to make room, so the numbering of the parent stays without gaps; a position beyond the end places the folder last. The value may also be sent as a dotted path, as in 1.2.3, in which case only its last segment is read. Ordering is what the manual arrangement of a room is built on, and it only means something in rooms whose contents are indexed - elsewhere the value is stored and ignored. The caller needs edit access to the folder, which room managers and content creators have, and a member without it is refused, while a folder that does not exist is answered as not found. The call is mutating and idempotent. To move several entries in one go use `PUT api/2.0/files/order`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder to move. | [required] [example: `1`] |
| **OrderRequestDto** | body | [**OrderRequestDto**](../files.md#model-orderrequestdto) | The position the folder is to take. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The folder with the position it now holds | [**FolderIntegerWrapper**](../files.md#model-folderintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderIntegerWrapper**](../files.md#model-folderintegerwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
