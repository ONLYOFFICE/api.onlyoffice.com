# assignFolderTemplates

> MetadataOperationWrapper assignFolderTemplates(folderId, AssignMetadataTemplates)

`PUT /api/2.0/files/metadata/folder/{folderId}/templates`

Assign templates to a folder

Assigns metadata templates to a folder or a room. With `cascade` true, it also passes them down to the content. Requires the right to create content in the folder, or a room manager for a room itself. Other callers get 403. The root folders of sections also return 403. The call changes data but writes no values. With `cascade` false, the assignment ends in the request. The response is then a completed operation without an ID. With `cascade` true, the call also queues a pass over all folders and files below. The pass assigns the templates and copies the values of the folder. The response is that pass with the `templateIds` it passes down. Repeat `GET api/2.0/files/metadata/folder/{folderId}/templates/progress` until `isCompleted` is true. A failed pass reports its `error` there. The `conflictResolveType` value `Skip` keeps an existing value below, and `Overwrite` replaces it with the folder value. A folder below that cascades the same template keeps its own values for its content. A template that already cascades keeps cascading. To turn a cascade off, use `PUT api/2.0/files/metadata/folder/{folderId}/templates/{templateId}`. You can repeat the call. With `cascade` true, each call queues a new pass. It runs after the earlier passes in the same room or section. If a pass with the same templates and `conflictResolveType` has not started yet, the call returns it instead. An empty list changes nothing. If the folder or any template does not exist, the call returns 404. The call returns 400 if the body has no `templateIds`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder ID. | [required] [example: `1`] |
| **AssignMetadataTemplates** | body | [**AssignMetadataTemplates**](../../models/assign-metadata-templates.md) | The parameters for assigning templates. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Cascade operation status; a completed operation without an ID when no cascade is requested | [**MetadataOperationWrapper**](../../models/metadata-operation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `templateIds` | - | - |
| **403** | The caller cannot create in the folder, or is not the manager of the room | - | - |
| **404** | The folder or one of the templates does not exist | - | - |
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
