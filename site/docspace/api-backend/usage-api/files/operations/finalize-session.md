# finalizeSession

> UploadSessionResponseWrapper finalizeSession(folderId, sessionId)

`PUT /api/2.0/files/{folderId}/session/{sessionId}/finalize`

Finalize an upload session

Stores the file of a chunked upload session from its parts and closes the session. A session from `POST api/2.0/files/file/{fileId}/edit_session` replaces the content of that file and keeps its version. A session for a folder creates a file, or adds a new version to the file with the same name. A PDF form loses its form-filling state. Any signed-in user with the session ID can call it. The call returns 201 with the file. It changes data and deletes the session with its parts. A repeated call returns 404. If the parts do not add up to the size of the session, the call returns 400. Then send the missing parts and repeat the call. It returns 402 if the file is over a quota or size limit. A missing, finalized, or expired session returns 404. If the file is not a PDF and the room is a form-filling room, the call returns 403.  Raises the `file.uploaded` webhook without `file.created`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the session was opened against. It is part of the route only and is not matched against the session, which is found by its own id. | [required] [example: `1`] |
| **sessionId** | path | **String** | The session to assemble, as returned in `id` when it was created: a 32-character hexadecimal string that identifies the session on its own. | [required] [example: `9f1c7a2b4d3e4f5a8b6c0d1e2f3a4b5c`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **201** | The assembled file and the identifiers of the closed session | [**UploadSessionResponseWrapper**](../../models/upload-session-response-wrapper.md) | - |
| **400** | The parts received so far do not add up to the size the session was opened for | - | - |
| **402** | Storing the file would exceed a storage quota or size limit | - | - |
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

- **Content-Type**: Not defined
- **Accept**: application/json
