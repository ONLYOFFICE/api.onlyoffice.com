# updateTemplate

> MetadataTemplateWrapper updateTemplate(templateId, UpdateMetadataTemplate)

`PUT /api/2.0/files/metadata/templates/{templateId}`

Update a metadata template

Renames a metadata template or changes whether it is shown in the pickers. Only a DocSpace admin can change templates. The request is partial: a property left out keeps its value, the fields are not touched here and are changed with `PUT api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}`. The new name follows the rules of the creation: unique on the portal regardless of case and at most 255 characters. The answer is the whole template with its fields. A template that does not exist is answered with 404, a name already in use or too long with 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **templateId** | path | **Integer** (int32) | The template ID. | [required] [example: `1`] |
| **UpdateMetadataTemplate** | body | [**UpdateMetadataTemplate**](../../models/update-metadata-template.md) | The parameters for updating the template. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Updated metadata template | [**MetadataTemplateWrapper**](../../models/metadata-template-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A template with this name already exists, or the name is too long | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | Template not found | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**MetadataTemplateWrapper**](../../models/metadata-template-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
