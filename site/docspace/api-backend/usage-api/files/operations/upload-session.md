# uploadSession

> UploadSessionResponseWrapper uploadSession(folderId, sessionId, file)

`POST /api/2.0/files/{folderId}/session/{sessionId}`

Upload the next chunk

Uploads the next part of a file to a chunked upload session. Send the part as the multipart `File` field. The call adds parts in the order they arrive. Do not send two parts to one session at the same time. Any signed-in user with the session ID can call it. The call finds the session by its ID and ignores the folder in the path. The call changes data. Do not repeat a part. The session stores a repeated part as the next part. Then the file has that part twice, or the session never stores the file. While bytes are missing, the response has `uploaded` false. When the parts reach the size of the session, the call stores the file. It then returns 201, `uploaded` true, and the file in `file`. A session below `chunkUploadSize` from `GET api/2.0/files/settings` stores the file on the first call. It needs no `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. After the call that stores the file, a repeated call returns 404. The call returns 400 if the request has no `File` part. It returns 402 if the part is over `chunkUploadSize`, or the file is over a quota or size limit. If the session does not exist, is finalized, or has expired, the call returns 404. If the file is not a PDF and the room is a form-filling room, the call returns 403.  Raises the `file.uploaded` webhook on the request that completes the upload, without `file.created`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the session was opened against. It is part of the route only and is not matched against the session, which is found by its own id. | [required] [example: `1`] |
| **sessionId** | path | **String** | The session this part belongs to, as returned in `id` when it was created; the parts of one session must be sent one after another, not in parallel. | [required] [example: `9f1c7a2b4d3e4f5a8b6c0d1e2f3a4b5c`] |
| **file** | form | **File** (binary) | The next part of the file, sent as the multipart field of the same name. Parts are appended in the order they arrive, and a part larger than the portal chunk size is refused. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The part is stored and bytes are still missing; `uploaded` is false | [**UploadSessionResponseWrapper**](../../models/upload-session-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **201** | The last part has arrived and the file is stored; `uploaded` is true and `file` holds the file | [**UploadSessionResponseWrapper**](../../models/upload-session-response-wrapper.md) | - |
| **400** | The request has no `File` part | - | - |
| **402** | The part is larger than `chunkUploadSize`, or storing the file would exceed a storage quota or size limit | - | - |
| **403** | A file that is not a PDF is stored in a form-filling room | - | - |
| **404** | No open session with the specified ID in this folder: it never existed, was finalized or aborted, has expired, or belongs to another folder | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**UploadSessionResponseWrapper**](../../models/upload-session-response-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **String** | The folder the session was opened against. It is part of the route only and is not matched against the session, which is found by its own id. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyUploadSessionResponseWrapper**](../../models/third-party-upload-session-response-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
