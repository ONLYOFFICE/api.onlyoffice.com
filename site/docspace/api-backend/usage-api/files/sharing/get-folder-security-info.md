# getFolderSecurityInfo

> FileShareArrayWrapper getFolderSecurityInfo(id, count, startIndex)

`GET /api/2.0/files/folder/{id}/share`

Get folder sharing rights

Returns the accounts and groups that have access to a folder or room, with the access level of each. The owner comes first, and accounts that have not accepted their invitation come last. The list has no external links. To read them, use `GET api/2.0/files/folder/{id}/links`. Any signed-in user can call it, except a guest. A guest gets 403. A caller who cannot read the folder also gets 403. For a room or a folder in a public room, read access is enough. Any other folder requires the right to change its access. A caller who can only read such a folder gets an empty list. The total in the response headers still counts the hidden entries. The call is read-only. Use `startIndex` and `count` to page through the list. The response headers carry the total. A `count` out of range returns 400. If the folder does not exist, the call returns 404. For a room, use `GET api/2.0/files/rooms/{id}/share`, which also filters by kind and name.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The folder or room the operation addresses. A folder stored on the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `10`] |
| **count** | query | **Integer** (int32) | How many entries at most to answer with, in the operations of this folder that return a list; an operation that answers with a single object is not affected by it. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many entries of such a list to skip before answering, used together with `count` to walk through it page by page. | [optional] [example: `0`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The accounts and groups that hold rights on the folder, the owner first | [**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, or the `count` is outside its allowed range | - | - |
| **403** | The caller is a guest or may not read the folder | - | - |
| **404** | The folder does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The folder or room the operation addresses. A folder stored on the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `sbox-42`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
