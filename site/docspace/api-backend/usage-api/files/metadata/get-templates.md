# getTemplates

> MetadataTemplateArrayWrapper getTemplates(visible)

`GET /api/2.0/files/metadata/templates`

Get metadata templates

Returns the metadata templates of the portal with their fields. A template is a set of fields that describes a file, a folder, or a room. Any signed-in user can call it. The call is read-only. Every caller gets the same list. The templates come in the order of their creation. Their fields come in display order, with the options of choice fields. Without `visible`, the call returns both shown and hidden templates. The author and the last editor of a template come as user objects. An empty list means the portal has no templates. The custom text fields of entries are not templates, and the call does not return them. To read them, use `GET api/2.0/files/metadata/file/{fileId}` or `GET api/2.0/files/metadata/folder/{folderId}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **visible** | query | **Boolean** | Filters the templates by their visibility. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | List of metadata templates | [**MetadataTemplateArrayWrapper**](../../models/metadata-template-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**MetadataTemplateArrayWrapper**](../../models/metadata-template-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
