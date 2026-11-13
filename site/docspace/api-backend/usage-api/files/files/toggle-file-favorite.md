# toggleFileFavorite

> BooleanWrapper toggleFileFavorite(fileId, favorite)

`GET /api/2.0/files/favorites/{fileId}`

Set the file favorite status

Adds one file to the favorites of the calling account, or deletes it from them. If `favorite` is `true`, the call adds the mark. If it is `false` or missing, the call deletes the mark. Other users do not see the mark, and the file stays where it is. Any signed-in user can call it. Although this is a GET, the call changes data. You can repeat it with the same value. The call skips an unknown file and a file without read access. It never marks an encrypted file of a private room. It returns the value of `favorite` even when it changes nothing. To see the result, use `GET api/2.0/files/@favorites`. A marked file in the trash is not listed there until it is restored. To change the marks of several files and folders, use `POST api/2.0/files/favorites` or `DELETE api/2.0/files/favorites`. If a string id points to a storage account that is not connected, the call returns 400. It also returns 400 if `favorite` is not a boolean. If a string id names an unknown storage type, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |
| **favorite** | query | **Boolean** | Which state to put the mark in: `true` adds the file to the favorites of the calling account, `false` removes it from them. Leaving the field out of the request removes the mark rather than setting it. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Echo of the requested state, which does not prove that the mark was changed | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, or a third-party file identifier refers to a storage account that is not connected | - | - |
| **404** | A third-party file identifier names a storage type the portal does not know | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file the operation addresses. Take the identifier from a listing such as &#x60;GET api/2.0/files/\{folderId\}&#x60;: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
