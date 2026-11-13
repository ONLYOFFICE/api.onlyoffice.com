# deleteTemplate

> deleteTemplate(templateId)

`DELETE /api/2.0/files/metadata/templates/{templateId}`

Delete a metadata template

Deletes a metadata template with its fields, assignments, and the values of its fields on all files, folders, and rooms. Requires a DocSpace admin. Other callers get 403. The deletion cannot be undone, and the call asks for no confirmation. All entries lose the template immediately. The call returns 404 for an unknown ID, so a repeated call also returns 404. To remove the template from one entry only, use `DELETE api/2.0/files/metadata/file/{fileId}/templates/{templateId}` or `DELETE api/2.0/files/metadata/folder/{folderId}/templates/{templateId}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **templateId** | path | **Integer** (int32) | The template ID. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The template, its fields, its assignments and their values are deleted; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | No metadata template with this identifier exists on the portal, or it was already deleted | - | - |
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
