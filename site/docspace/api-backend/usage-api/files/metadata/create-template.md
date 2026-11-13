# createTemplate

> MetadataTemplateWrapper createTemplate(CreateMetadataTemplateRequestDto)

`POST /api/2.0/files/metadata/templates`

Create a metadata template

Creates a metadata template of the portal together with its fields. Requires a DocSpace admin. Other callers get 403. The call changes data. A repeated call returns 400, since the name is then taken. A field without `order` goes after the fields with one, in the order of the request. The response is the created template with the generated option IDs. The values of `PUT api/2.0/files/metadata/file/{fileId}/values` refer to these IDs. To add fields later, use `POST api/2.0/files/metadata/templates/{templateId}/fields`. The call compares names regardless of case. It returns 400 if `fields` is empty, or the name is empty, `System`, or taken. It also returns 400 for a name over 255 characters, repeated field names, an unknown field type, or wrong options. A choice field needs at least one option, and its options must be unique. Other field types take no options. If any field is invalid, the call creates nothing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateMetadataTemplateRequestDto** | body | [**CreateMetadataTemplateRequestDto**](../../models/create-metadata-template-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created template with its fields and the generated identifiers of their options | [**MetadataTemplateWrapper**](../../models/metadata-template-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | An invalid template or field: no fields, a name in use, reserved or too long, an unknown field type, duplicate field names or wrong options | - | - |
| **403** | The caller is not a DocSpace admin | - | - |
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
