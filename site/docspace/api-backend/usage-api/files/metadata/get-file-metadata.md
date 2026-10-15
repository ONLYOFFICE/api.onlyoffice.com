# getFileMetadata

> EntryMetadataWrapper getFileMetadata(fileId)

`GET /api/2.0/files/metadata/file/{fileId}`

Get file metadata

Returns the metadata of a file: the templates assigned to it, directly or inherited from a cascading folder above it, each with its fields, and the custom text fields set on the file. The caller needs read access to the file: a member of the portal, or an anonymous caller through an external link that grants access to the file or to a folder above it, with the link key in the `Request-Token` header or in the `share` query parameter. The call is read-only. A field carries its value inside it; a field the file holds no value for comes without a `value`. The custom fields are name and value pairs and are not part of any template. A file without metadata is answered with empty lists, not with an error. The same shape is returned by `PUT api/2.0/files/metadata/file/{fileId}/values` after a write. A request with neither a session nor a link key is answered with 401; a file the caller cannot read with 403, a file that does not exist with 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | File metadata | [**EntryMetadataWrapper**](../../models/entry-metadata-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | The caller has neither a session nor an external link key | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | File not found | - | - |
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
