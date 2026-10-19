# createTemplate

> MetadataTemplateWrapper createTemplate(CreateMetadataTemplateRequestDto)

`POST /api/2.0/files/metadata/templates`

Create a metadata template

Creates a metadata template for the whole portal, optionally with its fields in one call. Only a DocSpace admin can create templates. The template name must be unique on the portal regardless of case, at most 255 characters, and the name `System` is reserved. Every field needs a name unique within the template and a type from the published set; a choice field requires at least one option and the options must be unique, a field of another type takes no options. A field without `order` is placed after the fields that have one, in the order of the request. The template and its fields are stored together: an invalid field rejects the whole request and nothing is created. The answer is the created template with its fields and the generated option identifiers, which the values written with `PUT api/2.0/files/metadata/file/{fileId}/values` refer to. A name already in use or an invalid field is answered with 400; the request of a member who is not a DocSpace admin with 403.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateMetadataTemplateRequestDto** | body | [**CreateMetadataTemplateRequestDto**](../../models/create-metadata-template-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | New metadata template | [**MetadataTemplateWrapper**](../../models/metadata-template-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | An invalid template or field: a name in use, reserved or too long, an unknown field type, duplicate field names or wrong options | - | - |
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
