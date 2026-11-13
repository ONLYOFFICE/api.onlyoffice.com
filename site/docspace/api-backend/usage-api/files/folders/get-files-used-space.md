# getFilesUsedSpace

> FilesStatisticsResultWrapper getFilesUsedSpace()

`GET /api/2.0/files/filesusedspace`

Get used space of files

Returns the storage space that documents take in each section of the portal, in bytes. The sections are My documents, Trash, Rooms, Archive, and AI agents if that feature is on. They come in a fixed order. The figures cover the whole portal, not the account of the caller. A file in the trash still takes space until the trash is emptied. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. The response does not include the portal quota or storage outside documents.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The space taken by documents in each section, in bytes | [**FilesStatisticsResultWrapper**](../../models/files-statistics-result-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FilesStatisticsResultWrapper**](../../models/files-statistics-result-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
