# unassignFolderTemplate

> unassignFolderTemplate(folderId, templateId)

`DELETE /api/2.0/files/metadata/folder/{folderId}/templates/{templateId}`

Unassign a template from a folder

Removes a metadata template from a folder or a room, together with the values of its fields. Requires the right to create content in the folder, or a room manager for a room itself. Other callers get 403. The root folders of sections also return 403. The deletion of the values cannot be undone. If this folder cascaded the template, the cascade stops here. A running pass also stops for this template. The folders and files below keep the template and their values as direct assignments. To remove it from them, call this operation or `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}` on each entry. To stop the cascade but keep the template and values on the folder, use `PUT api/2.0/files/metadata/folder/{folderId}/templates/{templateId}`. Set `cascade` to false there. A repeated call changes nothing. If the folder or the template does not exist, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder ID. | [required] [example: `1`] |
| **templateId** | path | **Integer** (int32) | The template ID. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The template and its values are removed from the folder, and a cascade of it from this folder stops; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot create in the folder, or is not the manager of the room | - | - |
| **404** | The folder or the template does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
