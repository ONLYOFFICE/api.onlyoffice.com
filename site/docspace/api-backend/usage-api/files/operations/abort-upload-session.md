# abortUploadSession

> abortUploadSession(sessionId, folderId)

`DELETE /api/2.0/files/{folderId}/session/{sessionId}`

Abort an upload session

Deletes a chunked upload session and the parts it has received. The file does not appear in the folder. Only the account that opened the session can delete it. Other callers get 403. The call cannot be undone, and a repeated call returns 404. The call returns 404 if the session does not exist, is finalized, has expired, or was opened for another folder. The response has no body. A session expires 12 hours after it opens or gets its last part. So an abandoned upload needs no call.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **sessionId** | path | **String** | The session to cancel, as returned in `id` when it was created: a 32-character hexadecimal string that identifies the session on its own. | [required] [example: `9f1c7a2b4d3e4f5a8b6c0d1e2f3a4b5c`] |
| **folderId** | path | **Integer** (int32) | The folder the session was opened against. Take it from the path the session was created on. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The session and the parts received so far have been discarded | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The session was opened by another account | - | - |
| **404** | No open session with the specified ID in this folder: it never existed, was finalized or aborted, has expired, or belongs to another folder | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **String** | The folder the session was opened against. Take it from the path the session was created on. | [required] [example: `sbox-42`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
