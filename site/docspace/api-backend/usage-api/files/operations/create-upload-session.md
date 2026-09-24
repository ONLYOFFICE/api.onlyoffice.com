# createUploadSession

> ChunkedUploadSessionResponseWrapperIntegerWrapper createUploadSession(folderId, SessionRequest)

`POST /api/2.0/files/{folderId}/upload/create_session`

Chunked upload

Deprecated in favour of `POST api/2.0/files/{folderId}/session`, which opens the same session and returns it without the success envelope used here; new callers should go there. Reserves a chunked upload of a file in the folder named by the path: the title comes from `fileName`, the declared payload size from `fileSize`, and the answer carries the session id every later call quotes, the address of the standalone chunk handler, the moment an idle session is dropped and the reserved byte count. No content is stored yet. Send the payload as multipart parts to `POST api/2.0/files/{folderId}/session/{sessionId}/upload`, keeping each part within `chunkUploadSize` from `GET api/2.0/files/settings`, then close the session with `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. The caller needs the right to add content to the target folder, which room managers and content creators have and readers, editors and guests do not: they get 403, as does a section root such as Rooms or Archive, while an unknown folder is answered as missing. A payload above the portal limit for chunked uploads is refused before the session exists.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an ordinary folder inside one is accepted, a section root is not. | [required] [example: `1`] |
| **SessionRequest** | body | [**SessionRequest**](../../models/session-request.md) | The file the session is opened for, and how a clash with an existing name is settled. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created session, wrapped in the success envelope | [**ChunkedUploadSessionResponseWrapperIntegerWrapper**](../../models/chunked-upload-session-response-wrapper-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot add content to the target folder | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ChunkedUploadSessionResponseWrapperIntegerWrapper**](../../models/chunked-upload-session-response-wrapper-integer-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
