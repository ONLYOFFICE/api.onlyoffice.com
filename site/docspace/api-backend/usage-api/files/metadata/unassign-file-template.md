# unassignFileTemplate

> unassignFileTemplate(fileId, templateId)

`DELETE /api/2.0/files/metadata/file/{fileId}/templates/{templateId}`

Unassign a template from a file

Removes a metadata template from a file together with the values of its fields. The caller needs the right to edit the file. The removal is irreversible for the values, the template itself stays on the portal and on the other entries. It applies to a directly assigned template and to one inherited from a cascading folder alike; a later cascade from that folder assigns it again. A file the caller cannot edit is answered with 403; a file, or a template, that does not exist with 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file ID. | [required] [example: `1`] |
| **templateId** | path | **Integer** (int32) | The template ID. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | OK | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | The file or the template does not exist | - | - |
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
