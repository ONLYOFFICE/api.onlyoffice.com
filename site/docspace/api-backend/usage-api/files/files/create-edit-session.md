# createEditSession

> ChunkedUploadSessionResponseWrapperIntegerWrapper createEditSession(fileId, fileSize)

`POST /api/2.0/files/file/{fileId}/edit_session`

Create the editing session

Opens a chunked session that replaces the content of an existing file, which is how WebDAV clients save over a document. The answer carries the session id the later calls quote, the address of the standalone chunk handler, the expiry and the reserved size, and nothing is written until the parts reach `POST api/2.0/files/{folderId}/session/{sessionId}/upload` and the session is closed with `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize`, where `folderId` is the folder the file lives in. Unlike an upload into a folder, the finished content does not become a new version: it overwrites the current one, and the file loses its encrypted flag and its stored conversion result in the process. The caller must be allowed to edit the file, as the owner, a room manager and a member invited with editing rights are; a reader and a guest get 403. A file that does not exist is answered as missing, and a payload above the portal limit for chunked uploads is refused before the session is created.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose content the session will replace; take the id from a folder listing or from the file itself. | [required] [example: `1`] |
| **fileSize** | query | **Long** (int64) | The number of bytes the new content will take. It is checked against the portal limit for chunked uploads before the session opens, and a session left at 0 takes the whole content in a single part. | [optional] [example: `1024`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created editing session, wrapped in the success envelope | [**ChunkedUploadSessionResponseWrapperIntegerWrapper**](../../models/chunked-upload-session-response-wrapper-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot edit this file | - | - |
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

- **Content-Type**: Not defined
- **Accept**: application/json
