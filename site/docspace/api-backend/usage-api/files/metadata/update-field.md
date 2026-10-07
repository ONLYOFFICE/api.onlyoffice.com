# updateField

> MetadataFieldWrapper updateField(templateId, fieldId, UpdateMetadataFieldRequest)

`PUT /api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}`

Update a metadata field

Changes the name, the type, the options or the display order of a metadata field. Only a DocSpace admin can change templates. The request is partial: a property left out keeps its value. The type can be changed only while no entry holds a value for the field, and an option can be removed only while no entry has selected it; a new option is sent without an identifier and gets one in the answer. A new name must be unique within the template regardless of case. The values already written are left as they are. The field is addressed through its own template: a field reached through another template's route is answered with 404, the same as a field that does not exist. A conflicting name, a type change on a field with values or the removal of an option in use is answered with 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **templateId** | path | **Integer** (int32) | The template ID. | [required] [example: `1`] |
| **fieldId** | path | **Integer** (int32) | The field ID. | [required] [example: `1`] |
| **UpdateMetadataFieldRequest** | body | [**UpdateMetadataFieldRequest**](../../models/update-metadata-field-request.md) | The parameters of the field update. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Updated metadata field | [**MetadataFieldWrapper**](../../models/metadata-field-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | Invalid field, a name another field of the template has, a type change on a field with values or the removal of an option in use | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | Field not found | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**MetadataFieldWrapper**](../../models/metadata-field-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
