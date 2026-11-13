# updateTemplate

> MetadataTemplateWrapper updateTemplate(templateId, UpdateMetadataTemplate)

`PUT /api/2.0/files/metadata/templates/{templateId}`

Update a metadata template

Renames a metadata template or changes whether it is shown in the pickers. Requires a DocSpace admin. Other callers get 403. The call changes data, and you can repeat it with the same body. A property left out keeps its value. This call does not change the fields. To change a field, use `PUT api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}`. With `visible` false, the template keeps its assignments and values. Its fields leave the pickers, the filling, and the default text search. An entry with the template then has `hasMetadataFields` false if no other visible template or custom field gives it fields. With `visible` true, the call reverses this. The response is the whole template with its fields. If no template has this ID, the call returns 404. The call returns 400 if another template has the new name in any case. It also returns 400 for a name over 255 characters.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **templateId** | path | **Integer** (int32) | The template ID. | [required] [example: `1`] |
| **UpdateMetadataTemplate** | body | [**UpdateMetadataTemplate**](../../models/update-metadata-template.md) | The parameters for updating the template. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The whole template after the change, with its fields as they were | [**MetadataTemplateWrapper**](../../models/metadata-template-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A template with this name already exists, or the name is too long | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | No metadata template with this identifier exists on the portal | - | - |
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
