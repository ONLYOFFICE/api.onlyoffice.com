# createUploadSessionInFolder

> ChunkedUploadSessionWrapper createUploadSessionInFolder(folderId, SessionRequest)

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
| **200** | The created upload session | [**ChunkedUploadSessionWrapper**](../../models/chunked-upload-session-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `fileName` | - | - |
| **402** | The declared `fileSize` exceeds the portal limit for chunked uploads or the size allowed in a knowledge folder | - | - |
| **403** | The caller cannot add content to the target folder, the folder is a section root, or a knowledge folder does not accept this format | - | - |
| **404** | No folder with the specified ID | - | - |
| **415** | The installation restricts uploadable formats and the file extension is not among them | - | - |
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
| **folderId** | path | **String** | The folder that receives the file; take the id from a listing such as &#x60;GET api/2.0/files/@root&#x60;. A room or an ordinary folder inside one is accepted, a section root is not. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyChunkedUploadSessionWrapper**](../../models/third-party-chunked-upload-session-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
