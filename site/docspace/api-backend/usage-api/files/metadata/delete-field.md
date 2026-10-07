# deleteField

> deleteField(templateId, fieldId)

`DELETE /api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}`

Delete a metadata field

Deletes a metadata field from its template together with every value written for it on any file, folder or room of the portal. Only a DocSpace admin can change templates. The deletion is irreversible: the affected entries lose the value at once, their search documents are rebuilt and the clients viewing them are told to refresh. The template and its other fields stay as they are. A field that does not exist, or that belongs to another template than the one in the route, is answered with 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **templateId** | path | **Integer** (int32) | The template ID. | [required] [example: `1`] |
| **fieldId** | path | **Integer** (int32) | The field ID. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | OK | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | Field not found | - | - |
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
