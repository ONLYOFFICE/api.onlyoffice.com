# getFolders

> FileEntryBaseArrayWrapper getFolders(folderId)

`GET /api/2.0/files/{folderId}/subfolders`

Get subfolders

Lists the folders that sit directly inside the folder named in the path, ordered by title, without their own contents and without the files that lie beside them. The whole list arrives at once - there are no paging or filtering parameters here - so for a large folder, or when the files are wanted as well, use `GET api/2.0/files/{folderId}`, which pages and filters. A folder that holds no subfolders answers with an empty list. The caller needs read access to the folder, and only the subfolders they may see are listed, so a member of a room can get fewer entries than its manager; a caller without access is answered with 403, and a folder that does not exist, or one that has been deleted for good, is answered as not found. The call is read-only and leaves the new-item marks of the folder alone.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The direct subfolders of the folder, ordered by title | [**FileEntryBaseArrayWrapper**](../../models/file-entry-base-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read this folder | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileEntryBaseArrayWrapper**](../../models/file-entry-base-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
