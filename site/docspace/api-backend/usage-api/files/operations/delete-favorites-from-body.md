# deleteFavoritesFromBody

> BooleanWrapper deleteFavoritesFromBody(BaseBatchRequestDto)

`DELETE /api/2.0/files/favorites`

Delete favorite files and folders

Deletes the favorite marks of the calling account from files and folders. The entries themselves stay unchanged and no longer appear in `GET api/2.0/files/@favorites`. Marks of other users stay. Any signed-in user can call it. The call skips items without read access. The call changes data. You can repeat it with the same body. It returns `true` even when it deletes nothing. The call reads only `fileIds` and `folderIds` from the body. The route also accepts them as repeated query parameters, but only in a request without a body. To delete the entries themselves, use `PUT api/2.0/files/fileops/delete`. To mark entries again, use `POST api/2.0/files/favorites`. If a string id points to a storage account that is not connected, the call returns 400. If it names an unknown storage type, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BaseBatchRequestDto** | body | [**BaseBatchRequestDto**](../../models/base-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always true: the marks named in the request are gone or were never there | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or a third-party identifier refers to a storage account that is not connected | - | - |
| **404** | A third-party identifier names a storage type the portal does not know | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
