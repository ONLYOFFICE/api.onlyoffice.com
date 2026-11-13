# createEditSession

> ChunkedUploadSessionResultWrapper createEditSession(fileId, fileSize)

`POST /api/2.0/files/file/{fileId}/edit_session`

Create the editing session

Opens a chunked upload session that replaces the content of an existing file. WebDAV apps save over a document this way. No content is stored yet. Send the parts to `POST api/2.0/files/{folderId}/session/{sessionId}/upload`, with the folder of the file as `folderId`. Then store the content with `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. The new content replaces the current version and adds no version. The file also loses its encrypted state and its converted copy. Requires editing access to the file. Other callers get 403. A guest also gets 403. The call changes data. A repeated call opens another session. A `fileSize` of -1 means the size is unknown, as for a WebDAV body without Content-Length. If the file does not exist, the call returns 404. The call returns 400 if `fileSize` is below -1. It returns 402 if `fileSize` is over the portal limit for chunked uploads. It also returns 403 if the file is locked, open in the editor, in the trash, or encrypted.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose content the session will replace; take the id from a folder listing or from the file itself. | [required] [example: `1`] |
| **fileSize** | query | **Long** (int64) | The number of bytes the new content will take. It is checked against the portal limit for chunked uploads before the session opens, and a session left at 0 takes the whole content in a single part. | [optional] [example: `1024`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created editing session, wrapped in the success envelope | [**ChunkedUploadSessionResultWrapper**](../../models/chunked-upload-session-result-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `fileSize` is below -1 | - | - |
| **402** | The declared `fileSize` exceeds the portal limit for chunked uploads | - | - |
| **403** | The caller cannot edit this file, or the file is locked, open in the editor, in the trash or encrypted | - | - |
| **404** | No file with the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ChunkedUploadSessionResultWrapper**](../../models/chunked-upload-session-result-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file whose content the session will replace; take the id from a folder listing or from the file itself. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |

Return type: [**ThirdPartyChunkedUploadSessionResultWrapper**](../../models/third-party-chunked-upload-session-result-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
