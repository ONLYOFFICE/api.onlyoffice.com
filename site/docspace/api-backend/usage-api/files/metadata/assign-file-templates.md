# assignFileTemplates

> assignFileTemplates(fileId, AssignMetadataTemplates)

`PUT /api/2.0/files/metadata/file/{fileId}/templates`

Assign templates to a file

Assigns metadata templates to a file. After this call, fill their fields with `PUT api/2.0/files/metadata/file/{fileId}/values`. Requires editing access to the file. Other callers get 403. The call changes data but writes no values. You can repeat it with the same body. The call skips templates that the file already has, and an empty list changes nothing. If the file or any template does not exist, the call returns 404 and assigns nothing. The call returns 400 if the body has no `templateIds`. To remove a template, use `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file ID. | [required] [example: `1`] |
| **AssignMetadataTemplates** | body | [**AssignMetadataTemplates**](../../models/assign-metadata-templates.md) | The parameters for assigning templates. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The templates are assigned to the file, the ones it already carried are skipped; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
