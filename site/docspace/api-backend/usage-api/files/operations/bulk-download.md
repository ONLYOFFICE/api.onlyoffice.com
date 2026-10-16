# bulkDownload

> FileOperationArrayWrapper bulkDownload(DownloadRequestDto)

`PUT /api/2.0/files/fileops/bulkdownload`

Bulk download

Queues a background job that packs the requested files and folders into a single archive, and answers with the caller's download operations, including the one just started. The archive is not ready when the response arrives: poll `GET api/2.0/files/fileops` until the operation reports `finished`, then take the address of the archive from its `url`. Items listed in `fileConvertIds` are converted to the format named there before they are packed, while the items of `fileIds` are packed as they are. Read access to every listed item is required: an item the caller may not read fails the whole call with 403, and an id that resolves to nothing is answered as missing, so filter the selection beforehand. Only one download at a time is allowed per caller, and a second call made while the first is still running is refused with 403 as well. An empty selection queues nothing and simply answers with the operations that are already there. An anonymous caller may use the call for the items covered by the external link they hold.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DownloadRequestDto** | body | [**DownloadRequestDto**](../../models/download-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The download operations of the caller, the one just queued included | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or an item of `fileConvertIds` has no `key` or `value` | - | - |
| **401** | The caller is not signed in and holds no external link | - | - |
| **403** | None of the listed items that exist can be read by the caller, or another download of theirs is still running | - | - |
| **404** | None of the listed items exists, counted separately for the portal's own items and for those on third-party accounts | - | - |
| **500** | An id is a number that is not a 32-bit integer | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
