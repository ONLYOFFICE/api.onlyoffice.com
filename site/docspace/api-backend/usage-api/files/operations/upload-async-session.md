# uploadAsyncSession

> ChunkedUploadSessionWrapper uploadAsyncSession(folderId, sessionId, chunkNumber, file)

`POST /api/2.0/files/{folderId}/session/{sessionId}/upload`

Upload a numbered chunk

Stores one part of a file under the number given in `chunkNumber`, which is what the ordinary chunked flow uses: parts are kept by their number rather than by arrival, so a part that failed can be resent under the same number without restarting the session. Numbering starts at 1, and leaving the number out makes the server count the parts itself. The answer is always the session, never the file, and this call never completes the upload: the file appears only after `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. Use `POST api/2.0/files/{folderId}/session/{sessionId}` instead when the parts go strictly in order and the upload should complete by itself. A part bigger than `chunkUploadSize` from `GET api/2.0/files/settings` is refused, so that value is also the size to split the payload by. The first part of a PDF is inspected, and a PDF that is not a fillable form is refused when the session targets a form-filling room. The session is found by its id alone.

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
| **402** | The part is larger than `chunkUploadSize`, or a session below that size would exceed a storage quota or size limit when storing the file | - | - |
| **404** | No open session with the specified ID: it never existed, was finalized or aborted, or has expired | - | - |
| **500** | The request has no `File` part, or a session below `chunkUploadSize` stores a file that is not a PDF in a form-filling room | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
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
