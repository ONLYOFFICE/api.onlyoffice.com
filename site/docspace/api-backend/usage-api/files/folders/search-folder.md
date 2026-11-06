# searchFolder

> FolderContentWrapper searchFolder(folderId, FolderMetadataSearch)

`POST /api/2.0/files/{folderId}/search`

Search a folder by metadata

Lists one page of the contents of a folder narrowed by metadata, in the shape `GET api/2.0/files/{folderId}` returns: subfolders in `folders`, files in `files`, the folder itself in `current`. The filter is a typed body: `metadataTemplateId` alone keeps the entries the template is assigned to, every condition in `metadataFilters` must hold at once, and `filterValue` adds a text search over titles and metadata values; the template and field IDs come from `GET api/2.0/files/metadata/templates`, and a body with none of them lists the folder unfiltered. The caller needs read access to the folder. No entry is changed, but a recognised `sortBy` is saved as the account's default order while an unrecognised one is ignored, and opening a room or an ordinary folder clears its new-item marks for the caller. `withSubFolders` searches the whole subtree unless switched off; `total` counts every match, and `count` with `startIndex` page through them. A folder in a connected third-party storage carries no metadata, so a filter there returns an empty page. An unknown template or field, a field outside the named template, more than 20 conditions, or a filter in the Templates or Private section is refused with 400; a folder the caller may not read with 403, a missing one with 404. To combine metadata with the user, extension or form filters, use `GET api/2.0/files/{folderId}`, which takes the same filter as a JSON string.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder or room to search in; take the id from a listing such as `GET api/2.0/files/@root`. A numeric id addresses a folder of the portal, a string one a folder in a connected third-party storage. | [required] [example: `1`] |
| **FolderMetadataSearch** | body | [**FolderMetadataSearch**](../../models/folder-metadata-search.md) | The search parameters. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | One page of the folder contents that match the filter, with the folder itself and the chain of its parents | [**FolderContentWrapper**](../../models/folder-content-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | Invalid metadata filter, or a metadata filter on a section that cannot apply it | - | - |
| **403** | You don't have enough permission to view the folder content | - | - |
| **404** | The required folder was not found | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderContentWrapper**](../../models/folder-content-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **String** | The folder or room to search in; take the id from a listing such as &#x60;GET api/2.0/files/@root&#x60;. A numeric id addresses a folder of the portal, a string one a folder in a connected third-party storage. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyFolderContentWrapper**](../../models/third-party-folder-content-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
