# getFolderMetadata

> EntryMetadataWrapper getFolderMetadata(folderId)

`GET /api/2.0/files/metadata/folder/{folderId}`

Get folder metadata

Returns the metadata of a folder or a room: the templates assigned to it, directly or inherited from a cascading folder above it, each with its fields, and the custom text fields set on it. The caller needs read access to the folder: a member of the portal, or an anonymous caller through an external link that grants access to the folder or to a folder above it, with the link key in the `Request-Token` header or in the `share` query parameter. The call is read-only. A field carries its value inside it; a field the folder holds no value for comes without a `value`. The custom fields are name and value pairs and are not part of any template. A folder without metadata is answered with empty lists, not with an error. Whether a template cascades from this folder to its content is not reported here. A request with neither a session nor a link key is answered with 401; a folder the caller cannot read with 403, a folder that does not exist with 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Folder metadata | [**EntryMetadataWrapper**](../../models/entry-metadata-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | The caller has neither a session nor an external link key | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | Folder not found | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EntryMetadataWrapper**](../../models/entry-metadata-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
