# deleteField

> deleteField(templateId, fieldId)

`DELETE /api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}`

Delete a metadata field

Deletes a metadata field with its values on all files, folders, and rooms. Requires a DocSpace admin. Other callers get 403. The deletion cannot be undone. The template and its other fields stay. A template always keeps at least one field. If this is the last field, the call returns 400 and deletes nothing. To delete the whole template, use `DELETE api/2.0/files/metadata/templates/{templateId}`. If the template has no field with this ID, the call returns 404. So a repeated call also returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **templateId** | path | **Integer** (int32) | The template ID. | [required] [example: `1`] |
| **fieldId** | path | **Integer** (int32) | The field ID. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The field and every value written for it are deleted; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The field is the last one of the template; delete the template instead | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | The template does not exist, or it has no field with this identifier | - | - |
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

- **Content-Type**: Not defined
- **Accept**: application/json
