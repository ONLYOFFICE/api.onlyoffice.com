# finalizeSession

> UploadSessionResponseIntegerWrapper finalizeSession(folderId, sessionId)

`PUT /api/2.0/files/{folderId}/session/{sessionId}/finalize`

Finalize an upload session

Assembles the parts received so far into the file the session was opened for and closes the session. What comes out depends on how the session started: one opened against an existing file through `POST api/2.0/files/file/{fileId}/edit_session` replaces that content in place and keeps the version number, while one opened against a folder either creates the file or, when a file of the same name was taken over, stores the content as its next version. A form loses its filling state on the way in. The answer arrives with 201 and carries the identifiers of the file together with the file itself. The call ends the session: the record and the buffered parts are removed, so it cannot be repeated and there is nothing left to abort afterwards. Running it before all the declared bytes have arrived assembles whatever is there, so read the progress from the chunk calls first. An unknown, already closed or expired session id fails instead of answering as missing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the session was opened against. It is part of the route only and is not matched against the session, which is found by its own id. | [required] [example: `1`] |
| **sessionId** | path | **String** | The session to assemble, as returned in `id` when it was created: a 32-character hexadecimal string that identifies the session on its own. | [required] [example: `9f1c7a2b4d3e4f5a8b6c0d1e2f3a4b5c`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The assembled file and the identifiers of the closed session | [**UploadSessionResponseIntegerWrapper**](../../models/upload-session-response-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**UploadSessionResponseIntegerWrapper**](../../models/upload-session-response-integer-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
