# getFileMetadata

> EntryMetadataWrapper getFileMetadata(fileId)

`GET /api/2.0/files/metadata/file/{fileId}`

Get file metadata

Returns the metadata templates of a file with their fields and values, and the custom text fields of the file. A template can be assigned directly or inherited from a cascading folder above. The response does not tell these apart. Requires read access to the file. Other callers get 403. An anonymous caller can use an external link to the file or to a folder above it. Pass the link key in the `Request-Token` header or the `share` query parameter. Without a session or a link key, the call returns 401. The call is read-only. A field without a value on the file has no `value`. For a file, `cascade` is always false, and `conflictResolveType` is absent. The custom fields are name and value pairs outside any template. A file without metadata returns empty lists. The `hasMetadataFields` flag is true if a visible template has a field or the file has a custom field. After a write, `PUT api/2.0/files/metadata/file/{fileId}/values` returns the same object. If no file has this ID, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The templates assigned to the file with their fields and values, and the custom fields of the file | [**EntryMetadataWrapper**](../../models/entry-metadata-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | The caller has neither a session nor an external link key | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | No file with this identifier exists | - | - |
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
