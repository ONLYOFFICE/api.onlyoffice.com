# getNewFolderItems

> FileEntryBaseArrayWrapper getNewFolderItems(folderId)

`GET /api/2.0/files/{folderId}/news`

Get new folder items

Returns the entries of a folder that are new for the caller. These are files and folders created or changed since the caller last opened the folder. The list starts with the most recently changed entry. Each user gets their own list. Requires read access to the folder. Other callers get 403. The call is read-only. It does not clear the new-item marks, so a repeated call returns the same entries. To clear them, open the folder with `GET api/2.0/files/{folderId}`. A mark disappears when its entry is deleted or moved out of reach. The call returns the whole list in one response, without paging and filters. It also returns 403 for a folder in the trash. If the folder does not exist, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The entries of the folder that are new for the caller | [**FileEntryBaseArrayWrapper**](../../models/file-entry-base-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read this folder, or the folder lies inside Trash | - | - |
| **404** | The folder does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileEntryBaseArrayWrapper**](../../models/file-entry-base-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **String** | The folder the operation acts on. Take the identifier from a listing such as &#x60;GET api/2.0/files/@root&#x60; or &#x60;GET api/2.0/files/\{folderId\}&#x60;: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `sbox-42`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
