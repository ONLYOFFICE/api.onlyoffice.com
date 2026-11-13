# getCascadeProgress

> MetadataOperationWrapper getCascadeProgress(folderId)

`GET /api/2.0/files/metadata/folder/{folderId}/templates/progress`

Get cascade progress

Returns the running cascade pass of a folder, or the most recent one if none is running. A pass starts with `PUT api/2.0/files/metadata/folder/{folderId}/templates` or `PUT api/2.0/files/metadata/folder/{folderId}/templates/{templateId}`. Requires read access to the folder. Other callers get 403. The call is read-only. This is the call to poll. Repeat it until `isCompleted` is true. The `templateIds` field names the templates of the pass. The `progress` field is the share of the subtree done. A failed pass has an `error`. A completed pass without an error has written all its templates and values. If the folder has no pass to report, the response is a completed operation with empty `templateIds`. If no folder or room has this ID, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Cascade operation status; a completed operation without an ID when the folder has no cascade to report | [**MetadataOperationWrapper**](../../models/metadata-operation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot read the folder | - | - |
| **404** | No folder or room with this identifier exists | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**MetadataOperationWrapper**](../../models/metadata-operation-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
