# createField

> MetadataFieldWrapper createField(templateId, MetadataFieldRequest)

`POST /api/2.0/files/metadata/templates/{templateId}/fields`

Add a metadata field

Adds a field to a metadata template. Requires a DocSpace admin. Other callers get 403. The call changes data. A repeated call returns 400, since the field name is then taken. A field without `order` goes after the last field of the template. Entries with the template get the field without a value. The response is the created field with the generated option IDs. If no template has this ID, the call returns 404. The call returns 400 if the name is empty, over 255 characters, or taken in any case. It also returns 400 for an unknown type or wrong options. A choice field needs at least one option, and its options must be unique. Other field types take no options.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **templateId** | path | **Integer** (int32) | The template ID. | [required] [example: `1`] |
| **MetadataFieldRequest** | body | [**MetadataFieldRequest**](../../models/metadata-field-request.md) | The parameters of the field. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created field with the generated identifiers of its options | [**MetadataFieldWrapper**](../../models/metadata-field-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | Invalid field: an empty, repeated or too long name, an unknown type, options on a non-choice field or a choice field without options | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | No metadata template with this identifier exists on the portal | - | - |
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
