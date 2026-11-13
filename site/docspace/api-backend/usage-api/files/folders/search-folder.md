# searchFolder

> FolderContentWrapper searchFolder(folderId, FolderMetadataSearch)

`POST /api/2.0/files/{folderId}/search`

Search a folder by metadata

Returns one page of the contents of a folder, filtered by metadata. The response has the same shape as for `GET api/2.0/files/{folderId}`. Requires read access to the folder. Other callers get 403. The call changes data of the caller only. It clears the new-item marks of the folder. It also saves a valid `sortBy` as the default order of the account. The call ignores an unknown `sortBy`. You can repeat it. All conditions of `metadataFilters` must match. Without a template, conditions, and `filterValue`, the call lists the folder unfiltered. By default, the search covers the whole subtree. Use `count` and `startIndex` to page through the result. The `total` field counts all matches. Take the template and field IDs from `GET api/2.0/files/metadata/templates`. A folder of a connected storage has no metadata, so a filter there returns an empty page. The call returns 400 for an unknown template or field, or a field outside the named template. It also returns 400 for more than 20 conditions or a filter in the Templates or Private section. If the folder does not exist, the call returns 404. To combine metadata with the user, extension, or form filters, use `GET api/2.0/files/{folderId}`.

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
