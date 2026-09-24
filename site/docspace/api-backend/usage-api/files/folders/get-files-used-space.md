# getFilesUsedSpace

> FilesStatisticsResultWrapper getFilesUsedSpace()

`GET /api/2.0/files/filesusedspace`

Get used space of files

Reports how much storage the portal spends on documents, split by section - My documents, Trash, Rooms, Archive and, where the feature is on, AI agents - each entry naming the section and the space it takes in bytes. The figures cover the whole portal rather than the calling account, and moving an entry between sections moves its space with it, which is why deleting a file to the Trash does not free anything until the Trash is emptied. Only a caller who may change portal settings, that is the owner and the portal administrators, is allowed here; a room administrator, an ordinary member and a guest are all refused. The call is read-only, takes no parameters and answers with the sections in a fixed order. The quota of the portal as a whole, storage outside documents included, is not part of this answer.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The space taken by documents in each section, in bytes | [**FilesStatisticsResultWrapper**](../../models/files-statistics-result-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
