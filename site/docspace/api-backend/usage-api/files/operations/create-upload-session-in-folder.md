# createUploadSessionInFolder

> ChunkedUploadSessionWrapper createUploadSessionInFolder(folderId, SessionRequest)

`POST /api/2.0/files/{folderId}/session`

Create an upload session

Opens a chunked upload session for a file in the folder and returns it. If `fileSize` is below `chunkUploadSize` from `GET api/2.0/files/settings`, send the whole file in one `POST api/2.0/files/{folderId}/session/{sessionId}`. That call stores the file and returns 201. For a larger file, send the parts to `POST api/2.0/files/{folderId}/session/{sessionId}/upload`. Then store the file with `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`. Requires the right to create content in the folder. Other callers get 403. In a room, its owner, room managers, and content creators have it. A guest has it there only as a content creator. In My documents, the owner and anyone with read and write access to the folder have it. A section root, an archived room, and an AI agent or AI project root also return 403. The call changes data. A repeated call opens another session. It creates the folders of `relativePath` that do not exist yet. If the folder has a file with this name, `createNewIfExist` true stores a copy with a numeric suffix. With false, the upload adds a new version to that file if the caller can edit it. A guest never adds a version this way. A session expires 12 hours after it opens or gets its last part. A missing folder returns 404. The call returns 400 for a negative `fileSize`. In a private room, it also returns 400 if the name is not a lowercase UUID with an optional extension. The call returns 402 if `fileSize` is over the limit for chunked uploads or for a knowledge folder. It returns 403 if a private room gets a file without `encrypted`, or a knowledge folder gets an unsupported format. It also returns 403 for a `relativePath` into a knowledge folder or an instructions room. If the installation does not allow uploads with this extension, the call returns 415.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder that receives the file; take the id from a listing such as `GET api/2.0/files/@root`. A room or an ordinary folder inside one is accepted, a section root is not. | [required] [example: `1`] |
| **SessionRequest** | body | [**SessionRequest**](../../models/session-request.md) | The file the session is opened for, and how a clash with an existing name is settled. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created upload session | [**ChunkedUploadSessionWrapper**](../../models/chunked-upload-session-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, has no `fileName`, `fileSize` is negative, or the name of a file in a private room is not a lowercase UUID with an optional lowercase extension | - | - |
| **402** | The declared `fileSize` exceeds the portal limit for chunked uploads or the size allowed in a knowledge folder | - | - |
| **403** | The caller cannot add content to the target folder, the folder is a section root, a knowledge folder does not accept this format, a `relativePath` points into a knowledge folder or an instructions room, or the file going into a private room is not marked `encrypted` | - | - |
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
