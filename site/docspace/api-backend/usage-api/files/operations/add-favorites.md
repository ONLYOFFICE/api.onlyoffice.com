# addFavorites

> BooleanWrapper addFavorites(BaseBatchRequestDto)

`POST /api/2.0/files/favorites`

Add favorite files and folders

Marks files and folders as favorites of the calling account. Other users do not see the mark, and the entries stay where they are. Any signed-in user can call it. The call skips items without read access, unknown ids, and encrypted files of a private room. The call changes data. You can repeat it with the same body, and a marked item stays listed once. It returns `true` even when it marks nothing. To see the result, use `GET api/2.0/files/@favorites`. A marked entry in the trash is not listed there until it is restored. The call reads only `fileIds` and `folderIds` from the body. To delete marks, use `DELETE api/2.0/files/favorites`. To mark one file, use `GET api/2.0/files/favorites/{fileId}`. If a string id points to a storage account that is not connected, the call returns 400. If it names an unknown storage type, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BaseBatchRequestDto** | body | [**BaseBatchRequestDto**](../../models/base-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always true: the request was understood, which does not mean that anything was marked | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
