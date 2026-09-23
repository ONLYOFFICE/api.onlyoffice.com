# uploadSession

Referenced types are defined in the [full reference](../files.md).

> UploadSessionResponseIntegerWrapper uploadSession(folderId, sessionId, File)

`POST /api/2.0/files/{folderId}/session/{sessionId}`

Upload the next chunk

Sends the next part of a file into the session opened for it, as the multipart `File` field, and lets the server keep count: parts are appended in the order they arrive, so two of these calls must never run in parallel on one session. While bytes are still missing the answer describes the session and `uploaded` is false; when the last part completes the declared size the file is written, its upload links are cleared, it is marked as new for the room, and the answer comes back with 201, `uploaded` true and the whole file in `file`. A session created for a payload smaller than `chunkUploadSize` from `GET api/2.0/files/settings` finishes on the first such call and needs no separate finalize step. A part larger than that limit is refused. The first part of a PDF is inspected, and a PDF that is not a fillable form is refused when the session targets a form-filling room. The session is addressed by its id, and the folder in the path is not matched against it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the session was opened against. It is part of the route only and is not matched against the session, which is found by its own id. | [required] [example: `1`] |
| **sessionId** | path | **String** | The session this part belongs to, as returned in `id` when it was created; the parts of one session must be sent one after another, not in parallel. | [required] [example: `9f1c7a2b4d3e4f5a8b6c0d1e2f3a4b5c`] |
| **File** | form | **File** (binary) | The next part of the file, sent as the multipart field of the same name. Parts are appended in the order they arrive, and a part larger than the portal chunk size is refused. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The progress of the session, or the stored file once the last part has arrived | [**UploadSessionResponseIntegerWrapper**](../files.md#model-uploadsessionresponseintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**UploadSessionResponseIntegerWrapper**](../files.md#model-uploadsessionresponseintegerwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## FilesQuotaApi
