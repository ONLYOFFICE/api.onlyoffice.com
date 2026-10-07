# getTemplates

> MetadataTemplateArrayWrapper getTemplates(visible)

`GET /api/2.0/files/metadata/templates`

Get metadata templates

Lists the metadata templates of the portal with their fields, the dictionary a file, a folder or a room is described with. Any member of the portal can read it, the list is the same for everyone. The call is read-only. The templates come back ordered by their creation, each with its fields in their display order and the choice options of the choice fields; the `visible` parameter narrows the list to the templates shown in the pickers or to the hidden ones, without it both are returned. An empty list means the portal has no templates yet. The custom text fields set on the entries are not templates and are not listed here: read them on the entry with `GET api/2.0/files/metadata/file/{fileId}`.

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
