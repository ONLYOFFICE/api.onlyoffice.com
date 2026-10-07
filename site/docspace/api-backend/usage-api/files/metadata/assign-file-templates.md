# assignFileTemplates

> assignFileTemplates(fileId, AssignMetadataTemplates)

`PUT /api/2.0/files/metadata/file/{fileId}/templates`

Assign templates to a file

Assigns one or more metadata templates to a file, so its fields can be filled with `PUT api/2.0/files/metadata/file/{fileId}/values`. The caller needs the right to edit the file. The assignment writes no values and is idempotent: a template the file already carries is skipped, the others are added, an empty list changes nothing. The call finishes in the request, nothing runs in the background. A template a cascading folder above the file already provides stays inherited. A file the caller cannot edit is answered with 403; a file, or a template, that does not exist with 404. To take a template off the file use `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file ID. | [required] [example: `1`] |
| **AssignMetadataTemplates** | body | [**AssignMetadataTemplates**](../../models/assign-metadata-templates.md) | The parameters for assigning templates. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | OK | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `templateIds` | - | - |
| **403** | The caller cannot edit the file | - | - |
| **404** | The file or one of the templates does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
