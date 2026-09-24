# abortUploadSession

> abortUploadSession(sessionId, folderId)

`DELETE /api/2.0/files/{folderId}/session/{sessionId}`

Abort an upload session

Cancels a chunked upload opened with `POST api/2.0/files/{folderId}/session` and discards the parts already received, so nothing of it reaches the folder. The session is found by the id in the path alone: the folder segment is not matched against it, and neither is the account that opened it, which makes the id the only secret protecting the transfer. The call is destructive and is not safe to repeat, because the record is gone afterwards: a second attempt, a session already closed by `PUT api/2.0/files/{folderId}/session/{sessionId}/finalize` and a session that expired after twelve hours of silence all fail rather than answer as missing. Finalizing removes the session too, so there is nothing left to abort once the file exists. The answer carries no body. An upload that is simply abandoned needs no call at all, since the session and its buffered parts are dropped when it expires.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **sessionId** | path | **String** | The session to cancel, as returned in `id` when it was created: a 32-character hexadecimal string that identifies the session on its own. | [required] [example: `9f1c7a2b4d3e4f5a8b6c0d1e2f3a4b5c`] |
| **folderId** | path | **Integer** (int32) | The folder the session was opened against. It is part of the route only and is not matched against the session, which is found by its own id. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The session and the parts received so far have been discarded | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
