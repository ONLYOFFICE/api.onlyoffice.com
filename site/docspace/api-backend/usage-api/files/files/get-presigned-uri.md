# getPresignedUri

> StringWrapper getPresignedUri(fileId)

`GET /api/2.0/files/file/{fileId}/presigneduri`

Get file download link

Builds a download address for the current version of a file and answers with it as a plain string. The address points at the portal's own file handler and carries the file identifier, the version it was built for and a time-limited authentication key, so it can be handed to a downloader that cannot sign in to the portal itself; it stops working once that key has expired, and it keeps naming the version that was current when it was built rather than following later edits. The caller needs read access to the file: a member of the room it lies in gets an address, a caller without access to the room is refused, an unknown identifier is answered as not found and an anonymous caller is rejected. The operation is read-only and safe to repeat, though every call mints a new key. Nothing is downloaded here - follow the address to fetch the bytes. For the variant the document service signs, which comes back as an object with the file type and a token, use `GET api/2.0/files/file/{fileId}/presigned`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The download address of the current file version | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The file is a PDF form in a form-filling room whose filling has not started, and the caller may only fill forms there | - | - |
| **403** | The caller cannot read the file | - | - |
| **404** | The file id resolves to nothing | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file the operation addresses. Take the identifier from a listing such as &#x60;GET api/2.0/files/\{folderId\}&#x60;: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
