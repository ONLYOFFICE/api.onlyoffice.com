# updateField

> MetadataFieldWrapper updateField(templateId, fieldId, UpdateMetadataFieldRequest)

`PUT /api/2.0/files/metadata/templates/{templateId}/fields/{fieldId}`

Update a metadata field

Changes the name, the type, the options, or the display order of a metadata field. Requires a DocSpace admin. Other callers get 403. The call changes data. A property left out keeps its value. The `options` list replaces all options of the field. Send a new option without an ID. The response gives it a new ID. So a repeat replaces the options of the first call with new options and new IDs. If an entry has selected one of them by then, the repeat returns 400. To repeat safely, send the options with the IDs from the response. The values already written stay as they are. The call returns 400 if another field of the template has the new name in any case. It also returns 400 if you change the type of a field with values. It also returns 400 if you remove an option that an entry has selected, or if the field is invalid. If the template has no field with this ID, the call returns 404. A field of another template also returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **templateId** | path | **Integer** (int32) | The template ID. | [required] [example: `1`] |
| **fieldId** | path | **Integer** (int32) | The field ID. | [required] [example: `1`] |
| **UpdateMetadataFieldRequest** | body | [**UpdateMetadataFieldRequest**](../../models/update-metadata-field-request.md) | The parameters of the field update. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The field after the change, with a generated identifier for every new option | [**MetadataFieldWrapper**](../../models/metadata-field-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | Invalid field, a name another field of the template has, a type change on a field with values or the removal of an option in use | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | The template does not exist, or it has no field with this identifier | - | - |
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
