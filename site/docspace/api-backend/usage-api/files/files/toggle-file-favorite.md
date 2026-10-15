# toggleFileFavorite

> BooleanWrapper toggleFileFavorite(fileId, favorite)

`GET /api/2.0/files/favorites/{fileId}`

Set the file favorite status

Sets or clears the favorite mark of one file for the calling account: `true` adds the file to the favorites, `false` takes it out again. The call changes stored state even though it is a GET, so it is not one to issue speculatively; repeating it with the same value changes nothing further. The mark is personal, no other member sees it, and the file stays where it is stored. Read access is enough, so a room member with view-only rights and a guest may call it. The answer only echoes the value that was asked for: an identifier that resolves to nothing and a file the caller cannot read are skipped without a word, an encrypted file of a private room is never marked, and the requested value still comes back, so read the outcome from `GET api/2.0/files/@favorites` instead. A file moved to the Trash keeps its mark and is left out of that listing until it is restored. To mark several entries at once, or to mark folders, use `POST api/2.0/files/favorites` and `DELETE api/2.0/files/favorites`.

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
| **403** | Changing the favorite mark is refused for the caller | - | - |
| **404** | A third-party file identifier names a storage type the portal does not know | - | - |
| **500** | A third-party file identifier carries a storage account number beyond the 32-bit range | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
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
