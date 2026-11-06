# assignFolderTemplates

> MetadataOperationWrapper assignFolderTemplates(folderId, AssignMetadataTemplates)

`PUT /api/2.0/files/metadata/folder/{folderId}/templates`

Assign templates to a folder

Assigns one or more metadata templates to a folder or a room and, with `cascade` set, propagates them to every folder and file below it. The caller needs the right to create in the folder (a room manager or a content creator); for a room that is its manager. The assignment itself finishes in the request and writes no values. The cascade is asynchronous: a pass is queued that assigns the templates to the whole subtree and copies the values the folder holds, and the answer is that pass with the `templateIds` it propagates. Poll `GET api/2.0/files/metadata/folder/{folderId}/templates/progress` until `isCompleted` is true; a failed pass reports its `error` there. The `conflictResolveType` decides what happens to a value an entry already holds: `Skip` keeps it, `Overwrite` replaces it with the folder's value. A folder inside the subtree that cascades the same template keeps its own values for its content. Without a cascade the answer is a completed operation without an identifier; a template that already cascades keeps cascading, it is turned off with `PUT api/2.0/files/metadata/folder/{folderId}/templates/{templateId}`. A caller without the right to create in the folder is answered with 403; a folder, or a template, that does not exist with 404.

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
