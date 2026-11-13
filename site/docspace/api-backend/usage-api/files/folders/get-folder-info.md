# getFolderInfo

> FolderWrapper getFolderInfo(folderId)

`GET /api/2.0/files/folder/{folderId}`

Get folder information

Returns the properties of one folder or room, without its contents. Requires read access to the folder. Other callers get 403. Without signing in, a caller needs an external link to the folder. Without such a link, the call returns 401. The call is read-only. It does not clear the new-item marks of the folder. If the folder does not exist, the call returns 404. To list the contents, use `GET api/2.0/files/{folderId}`. To get the chain of parent folders, use `GET api/2.0/files/folder/{folderId}/path`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The folder itself - its title, its parent, the moments it was created and changed, the access the caller has to it, how many items in it are new for them, and the room settings when the folder is a room; nothing about the items it holds | [**FolderWrapper**](../../models/folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | An anonymous caller has no external link that grants access to the folder | - | - |
| **403** | The caller may not read this folder | - | - |
| **404** | The folder does not exist | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderWrapper**](../../models/folder-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **String** | The folder the operation acts on. Take the identifier from a listing such as &#x60;GET api/2.0/files/@root&#x60; or &#x60;GET api/2.0/files/\{folderId\}&#x60;: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyFolderWrapper**](../../models/third-party-folder-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
