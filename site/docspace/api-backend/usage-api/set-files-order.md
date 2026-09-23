# setFilesOrder

Referenced types are defined in the [full reference](../files.md).

> FileEntryIntegerArrayWrapper setFilesOrder(OrdersRequestDtoInteger)

`PUT /api/2.0/files/order`

Set order of files

Puts several files and folders at given positions in one go and answers with the entries that were moved, each with the position it now holds. Every item of `items` names an entry by its identifier and its kind - a file or a folder - and the position it is to take, counting from 1; a position may also be sent as a dotted path, as in 1.2.3, of which only the last segment is read. The items are applied one after another in the order they are sent, and each of them shifts its neighbours, so the result depends on that order; the whole request is not one transaction, and a failure in the middle leaves the items before it moved. Every item has to lie in a room the caller may administer, which the room admin and a DocSpace admin acting as room manager do: read-only access, a guest and an anonymous caller are refused, and an identifier that matches nothing is answered as not found. Ordering only means something in rooms whose contents are indexed. The call is mutating. For a single file use `PUT api/2.0/files/{fileId}/order`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **OrdersRequestDtoInteger** | body | [**OrdersRequestDtoInteger**](../files.md#model-ordersrequestdtointeger) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The files and folders that were moved, with the positions they now hold | [**FileEntryIntegerArrayWrapper**](../files.md#model-fileentryintegerarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileEntryIntegerArrayWrapper**](../files.md#model-fileentryintegerarraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
