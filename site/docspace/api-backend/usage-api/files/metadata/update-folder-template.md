# updateFolderTemplate

> MetadataOperationWrapper updateFolderTemplate(folderId, templateId, UpdateFolderMetadataTemplateRequest)

`PUT /api/2.0/files/metadata/folder/{folderId}/templates/{templateId}`

Update a template assignment on a folder

Turns the cascade of a metadata template on a folder or a room on or off. The template stays on the folder. First, assign the template with `PUT api/2.0/files/metadata/folder/{folderId}/templates`, or inherit it from a folder above. Requires the right to create content in the folder, or a room manager for a room itself. Other callers get 403. The root folders of sections also return 403. The call changes data. With `cascade` true, the template cascades with the given `conflictResolveType`. An inherited assignment becomes the folder's own. The call queues a pass, even if the cascade was already on. The response is that pass. Repeat `GET api/2.0/files/metadata/folder/{folderId}/templates/progress` until `isCompleted` is true. With `cascade` false or left out, the call turns the cascade off. The folder then keeps the template and its values. The entries below keep them as their own assignments. New entries no longer inherit the template from this folder. A running pass stops at its next batch. The response is then a completed operation without an ID, and the call ignores `conflictResolveType`. You can repeat the call. With `cascade` true, each call queues a new pass. It runs after the earlier passes in the same room or section. If a pass of this template with the same `conflictResolveType` has not started yet, the call returns it instead. The call returns 404 if the folder or template does not exist, or the template is not on the folder. If the body cannot be read, the call returns 400.

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
