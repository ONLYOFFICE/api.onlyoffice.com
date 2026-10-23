# updateFolderTemplate

> MetadataOperationWrapper updateFolderTemplate(folderId, templateId, UpdateFolderMetadataTemplateRequest)

`PUT /api/2.0/files/metadata/folder/{folderId}/templates/{templateId}`

Update a template assignment on a folder

Turns the cascade of a metadata template the folder or the room already carries on or off, without taking the template off the folder. The template must be assigned first, with `PUT api/2.0/files/metadata/folder/{folderId}/templates` or inherited from a folder above. The caller needs the right to create in the folder (a room manager or a content creator); for a room that is its manager. With `cascade` true the template is marked as cascading with the given `conflictResolveType`, an inherited assignment becomes the folder's own, and the pass the assignment runs is queued, also when the cascade was already on: the answer is that pass, poll `GET api/2.0/files/metadata/folder/{folderId}/templates/progress` until `isCompleted` is true. With `cascade` false the folder keeps the template and its values, the entries below keep them as their own, entries created later no longer inherit the template from this folder, a running pass stops at its next batch, and the answer is a completed operation without an identifier; `conflictResolveType` is ignored and a cascade already off stays so. A caller without the right to create in the folder is answered with 403; a folder or a template that does not exist, or a template the folder does not carry, with 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder ID. | [required] [example: `1`] |
| **templateId** | path | **Integer** (int32) | The ID of a template the folder already carries. | [required] [example: `1`] |
| **UpdateFolderMetadataTemplateRequest** | body | [**UpdateFolderMetadataTemplateRequest**](../../models/update-folder-metadata-template-request.md) | The new state of the assignment. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Cascade operation status; a completed operation without an ID when the cascade was turned off | [**MetadataOperationWrapper**](../../models/metadata-operation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read | - | - |
| **403** | The caller cannot create in the folder, or is not the manager of the room | - | - |
| **404** | The folder or the template does not exist, or the template is not assigned to the folder | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**MetadataOperationWrapper**](../../models/metadata-operation-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
