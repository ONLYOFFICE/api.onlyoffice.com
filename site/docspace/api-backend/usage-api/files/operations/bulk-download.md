# bulkDownload

> FileOperationArrayWrapper bulkDownload(DownloadRequestDto)

`PUT /api/2.0/files/fileops/bulkdownload`

Bulk download

Starts a background job that packs files and folders into one archive. The call converts the files of `fileConvertIds` before it packs them. Requires the right to download the listed items. If the caller can download none of them, the call returns 403. A room that forbids downloads denies this right to the Read role. The settings of an external link can deny it too. The call checks the portal's own items and the items on third-party storage as two separate groups. Each group with listed items needs one item the caller can download. The archive skips the items the caller cannot download and the ids that do not exist. A caller who is not signed in needs an external link to the items. Without one, the call returns 401. The call queues work. Repeat `GET api/2.0/files/fileops` until `finished` is true. Then take the archive address from `url`. Do not repeat the call while the job runs. Until it ends, each call of the same caller returns 403, even with an empty selection. At other times, an empty selection queues nothing and returns the existing operations. The call returns the download operations of the caller, including the new one. If no listed item of a group exists, the call returns 404. The call returns 400 if the body cannot be read or an item of `fileConvertIds` has no `key` or `value`.  Raises the `folder.downloaded` webhook for each listed folder or room when the job packs it, not for the folders inside. Raises the `file.downloaded` webhook for each listed file when the job packs it, not for the files inside listed folders.

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
| **403** | The caller can download none of the listed items that exist, counted separately for the portal's own items and for those on third-party accounts, or another download of theirs is still queued or running | - | - |
| **404** | None of the listed items exists, counted separately for the portal's own items and for those on third-party accounts | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
