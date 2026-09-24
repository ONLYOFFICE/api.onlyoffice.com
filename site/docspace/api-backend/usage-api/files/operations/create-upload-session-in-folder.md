# createUploadSessionInFolder

> ChunkedUploadSessionResponseIntegerWrapper createUploadSessionInFolder(folderId, SessionRequest)

`POST /api/2.0/files/{folderId}/session`

Create an upload session

Opens a chunked upload session for a file in the folder named by the path and returns the session itself, which is the difference from the deprecated `POST api/2.0/files/{folderId}/upload/create_session` and its success envelope. The answer gives `id`, quoted by every later call, `location` for the standalone chunk handler used by clients that bypass this API, `expired`, and `bytes_total` echoing the reserved size. Whether parts are really needed follows from `fileSize`: below `chunkUploadSize` from `GET api/2.0/files/settings` the whole payload goes in one `POST api/2.0/files/{folderId}/session/{sessionId}`, which stores the file and answers 201, and above it the parts go one by one to `POST api/2.0/files/{folderId}/session/{sessionId}/upload` and the file appears only after `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. The caller must be allowed to add content to the folder, so readers, editors and guests are refused, a section root is refused as well, and an unknown folder is answered as missing. Nothing is written until the parts arrive, and an abandoned session disappears twelve hours later.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an ordinary folder inside one is accepted, a section root is not. | [required] [example: `1`] |
| **SessionRequest** | body | [**SessionRequest**](../../models/session-request.md) | The file the session is opened for, and how a clash with an existing name is settled. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created upload session | [**ChunkedUploadSessionResponseIntegerWrapper**](../../models/chunked-upload-session-response-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ChunkedUploadSessionResponseIntegerWrapper**](../../models/chunked-upload-session-response-integer-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
