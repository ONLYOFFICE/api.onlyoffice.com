# deleteFavoritesFromBody

> BooleanWrapper deleteFavoritesFromBody(BaseBatchRequestDto)

`DELETE /api/2.0/files/favorites`

Delete favorite files and folders

Removes the favorite mark from the listed files and folders for the calling account. Nothing is deleted from storage: the entries keep their place, their content and their sharing, and only disappear from `GET api/2.0/files/@favorites`; to delete the entries themselves call `PUT api/2.0/files/fileops/delete` instead. Marks of other members are untouched, and read access to each item is enough to call it. The ids go into the JSON body documented here; the same route also accepts them as repeated `fileIds` and `folderIds` query parameters, but only in a request that carries no JSON body at all. Numeric ids address entries stored in the portal itself, string ids entries on a connected third-party account. The answer is `true` whenever the request was understood, which an empty request, an id that does not exist and an item that was never marked all achieve, so it does not report how many marks were dropped. `returnSingleOperation` arrives with the shared body and does nothing here. Repeating the call is safe. Use `POST api/2.0/files/favorites` to mark entries again.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BaseBatchRequestDto** | body | [**BaseBatchRequestDto**](../../models/base-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always true: the marks named in the request are gone or were never there | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
