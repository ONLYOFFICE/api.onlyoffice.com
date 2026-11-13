# uploadAsyncSession

> ChunkedUploadSessionWrapper uploadAsyncSession(folderId, sessionId, chunkNumber, file)

`POST /api/2.0/files/{folderId}/session/{sessionId}/upload`

Upload a numbered chunk

Uploads one part of a file to a chunked upload session under the number in `chunkNumber`. The session keeps parts by number. So you can resend a failed part with the same number. Without `chunkNumber`, the call numbers parts in the order they arrive. Split the file into parts of at most `chunkUploadSize` from `GET api/2.0/files/settings`. Any signed-in user with the session ID can call it. The call ignores the folder in the path. It changes data. With `chunkNumber`, a repeated part replaces the part with that number. Without it, the session stores a repeated part as the next part. Then the file has that part twice, or the session never stores the file. The call returns the session, not the file. After the last part, store the file with `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. A session below `chunkUploadSize` stores the file on this call but still needs that call. In such a session, each repeated call stores the file again and adds a version. A session from `POST api/2.0/files/file/{fileId}/edit_session` keeps the version instead. To store the file with the last part, use `POST api/2.0/files/{folderId}/session/{sessionId}`. The call returns 400 if the request has no `File` part, or `chunkNumber` is below 1. It returns 402 if the part is over `chunkUploadSize`, or the file is over a quota or size limit. If the session does not exist, is finalized, or has expired, the call returns 404. If the file is not a PDF and the room is a form-filling room, the call returns 403.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the session was opened against. It is part of the route only and is not matched against the session, which is found by its own id. | [required] [example: `1`] |
| **sessionId** | path | **String** | The session this part belongs to, as returned in `id` when it was created; a 32-character hexadecimal string. | [required] [example: `9f1c7a2b4d3e4f5a8b6c0d1e2f3a4b5c`] |
| **chunkNumber** | query | **Integer** (int32) | The position of this part in the file, counted from 1. Sending the same number again replaces that part instead of adding one, which is how a failed part is retried; leaving the number out makes the server count the parts itself. | [optional] [example: `1`] |
| **file** | form | **File** (binary) | The part of the file to store, sent as the multipart field of the same name. It is kept under the number given beside it, and a part larger than the portal chunk size is refused. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The session with its progress after the part was stored | [**ChunkedUploadSessionWrapper**](../../models/chunked-upload-session-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request has no `File` part, or `chunkNumber` is 0 or negative | - | - |
| **402** | The part is larger than `chunkUploadSize`, or a session below that size would exceed a storage quota or size limit when storing the file | - | - |
| **403** | A session below `chunkUploadSize` stores a file that is not a PDF in a form-filling room | - | - |
| **404** | No open session with the specified ID in this folder: it never existed, was finalized or aborted, has expired, or belongs to another folder | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ChunkedUploadSessionWrapper**](../../models/chunked-upload-session-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **String** | The folder the session was opened against. It is part of the route only and is not matched against the session, which is found by its own id. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyChunkedUploadSessionWrapper**](../../models/third-party-chunked-upload-session-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
