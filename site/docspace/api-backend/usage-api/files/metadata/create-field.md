# createField

> MetadataFieldWrapper createField(templateId, MetadataFieldRequest)

`POST /api/2.0/files/metadata/templates/{templateId}/fields`

Add a metadata field

Adds a field to an existing metadata template. Only a DocSpace admin can change templates. The field name must be unique within the template regardless of case and at most 255 characters, the type must be one of the published ones, a choice field needs at least one option and unique option values, a field of another type takes no options. A field without `order` is placed after the last field of the template. The entries the template is already assigned to get the field without a value: nothing is written on them and no cascade runs. The answer is the created field with its generated option identifiers. A template that does not exist is answered with 404, an invalid field with 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **templateId** | path | **Integer** (int32) | The template ID. | [required] [example: `1`] |
| **MetadataFieldRequest** | body | [**MetadataFieldRequest**](../../models/metadata-field-request.md) | The parameters of the field. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | New metadata field | [**MetadataFieldWrapper**](../../models/metadata-field-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | Invalid field: an empty, repeated or too long name, an unknown type, options on a non-choice field or a choice field without options | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | Template not found | - | - |
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
