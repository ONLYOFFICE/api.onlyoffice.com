# getSecurityInfo

> FileShareArrayWrapper getSecurityInfo(BaseBatchRequestDto)

`POST /api/2.0/files/share`

Get sharing rights in batch

Returns who has access to the listed files and folders, merged into one list. Each account or group appears once. To read the rights of one entry, use `GET api/2.0/files/file/{id}/share` or `GET api/2.0/files/rooms/{id}/share`. Requires read access to every listed entry. If the caller cannot read one entry, the whole call returns 403, so filter the list first. The call is read-only. It skips IDs that match nothing, and an empty list gives an empty answer. The caller's own record comes first, then the owner's record, then the rest by display name. If a subject has different rights on the entries, or none on some, its access is `Varies`. To see the difference, read the entries one by one. It shows external links only to a caller who may read them.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BaseBatchRequestDto** | body | [**BaseBatchRequestDto**](../../models/base-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The merged sharing rights of the listed files and folders, one record per account or group | [**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read one of the listed files or folders | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
