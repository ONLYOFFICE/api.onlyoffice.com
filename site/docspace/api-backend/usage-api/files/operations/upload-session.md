# uploadSession

> UploadSessionResponseWrapper uploadSession(folderId, sessionId, file)

`POST /api/2.0/files/{folderId}/session/{sessionId}`

Upload the next chunk

Sends the next part of a file into the session opened for it, as the multipart `File` field, and lets the server keep count: parts are appended in the order they arrive, so two of these calls must never run in parallel on one session. While bytes are still missing the answer describes the session and `uploaded` is false; when the last part completes the declared size the file is written, its upload links are cleared, it is marked as new for the room, and the answer comes back with 201, `uploaded` true and the whole file in `file`. A session created for a payload smaller than `chunkUploadSize` from `GET api/2.0/files/settings` finishes on the first such call and needs no separate finalize step. A part larger than that limit is refused. The first part of a PDF is inspected, and a PDF that is not a fillable form is refused when the session targets a form-filling room. The session is addressed by its id, and the folder in the path is not matched against it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the session was opened against. It is part of the route only and is not matched against the session, which is found by its own id. | [required] [example: `1`] |
| **sessionId** | path | **String** | The session this part belongs to, as returned in `id` when it was created; the parts of one session must be sent one after another, not in parallel. | [required] [example: `9f1c7a2b4d3e4f5a8b6c0d1e2f3a4b5c`] |
| **file** | form | **File** (binary) | The next part of the file, sent as the multipart field of the same name. Parts are appended in the order they arrive, and a part larger than the portal chunk size is refused. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The progress of the session, or the stored file once the last part has arrived | [**UploadSessionResponseWrapper**](../../models/upload-session-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The part is larger than `chunkUploadSize`, or storing the file would exceed a storage quota or size limit | - | - |
| **404** | No open session with the specified ID: it never existed, was finalized or aborted, or has expired | - | - |
| **500** | The request has no `File` part, or a file that is not a PDF is stored in a form-filling room | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
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
