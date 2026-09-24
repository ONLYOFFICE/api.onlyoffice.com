# getFileInfo

> FileIntegerWrapper getFileInfo(fileId, version)

`GET /api/2.0/files/file/{fileId}`

Get file information

Returns one file as the portal stores it, together with the state it has for the caller: the title, the folder it lies in, the size, the current version and revision group, the addresses for viewing and editing it, the actions the caller is allowed to perform on it, the sharing rights it was reached through, and the thumbnail state. `version` picks an older version instead of the current one; the default of -1 means the current version. When the file belongs to another person's own section and the caller cannot read the folder holding it, the answer reports the Shared with me section as its folder, so that a client can show it in a place the caller can actually open. The caller needs read access to the file, which any member of the room it lies in has; a caller without access to the room is refused and an anonymous caller without an external share link is rejected. The operation is read-only. For every version at once use `GET api/2.0/files/file/{fileId}/history`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to read. | [required] [example: `1`] |
| **version** | query | **Integer** (int32) | The version to read, as reported by `GET api/2.0/files/file/{fileId}/history`; -1, the default, reads the current version. | [optional] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file as it is stored, with the state it has for the caller | [**FileIntegerWrapper**](../../models/file-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileIntegerWrapper**](../../models/file-integer-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
