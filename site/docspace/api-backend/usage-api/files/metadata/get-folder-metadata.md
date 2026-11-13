# getFolderMetadata

> EntryMetadataWrapper getFolderMetadata(folderId)

`GET /api/2.0/files/metadata/folder/{folderId}`

Get folder metadata

Returns the metadata templates of a folder or a room with their fields and values, and its custom text fields. A template can be assigned directly or inherited from a cascading folder above. Requires read access to the folder. Other callers get 403. An anonymous caller can use an external link to the folder or to a folder above it. Pass the link key in the `Request-Token` header or the `share` query parameter. Without a session or a link key, the call returns 401. The call is read-only. A field without a value on the folder has no `value`. A template has `cascade` true if this folder passes it down to its content. Then `conflictResolveType` gives the rule for existing values. Otherwise, `conflictResolveType` is absent. The custom fields are name and value pairs outside any template. A folder without metadata returns empty lists. The `hasMetadataFields` flag is true if a visible template has a field or the folder has a custom field. To turn a cascade on or off, use `PUT api/2.0/files/metadata/folder/{folderId}/templates/{templateId}`. If no folder or room has this ID, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The templates assigned to the folder with their fields, values and cascade state, and the custom fields of the folder | [**EntryMetadataWrapper**](../../models/entry-metadata-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | The caller has neither a session nor an external link key | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | No folder or room with this identifier exists | - | - |
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
