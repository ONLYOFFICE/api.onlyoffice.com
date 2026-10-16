# getFileInfo

> FileWrapper getFileInfo(fileId, version)

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
| **200** | The file as it is stored, with the state it has for the caller | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | An anonymous caller has no external link | - | - |
| **403** | The caller cannot read the file | - | - |
| **404** | The file id, or the requested version of it, resolves to nothing, or the file is a PDF form in a form-filling room whose filling has not started and the caller may only fill forms there | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileWrapper**](../../models/file-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file to read. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |

Return type: [**ThirdPartyFileWrapper**](../../models/third-party-file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
