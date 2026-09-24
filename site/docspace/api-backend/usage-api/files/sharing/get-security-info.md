# getSecurityInfo

> FileShareArrayWrapper getSecurityInfo(BaseBatchRequestDto)

`POST /api/2.0/files/share`

Get sharing rights in batch

Returns who has access to the files and folders listed in the request, merged into one list of subjects, and is the batch counterpart of `GET api/2.0/files/file/{id}/share` and `GET api/2.0/files/rooms/{id}/share`. Identifiers come from any listing operation, such as `GET api/2.0/files/{folderId}`. The caller needs read access to every listed entry: a single entry it cannot read makes the whole call fail instead of dropping that entry, so the list has to be filtered beforehand. Identifiers that match nothing are skipped without an error, and an empty list of identifiers gives an empty answer. The call is read-only. Each account or group appears once: the caller's own record comes first, the owner's record second, and the rest are ordered by display name. When the same subject holds different rights on the listed entries, its access is reported as the `Varies` value instead of a real level, which means the entries have to be inspected one by one to see the difference. Records that describe external links are included only for a caller that is allowed to read the links of the entry.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BaseBatchRequestDto** | body | [**BaseBatchRequestDto**](../../models/base-batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The merged sharing rights of the listed files and folders, one record per account or group | [**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
