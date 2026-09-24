# startEditFile

> StringWrapper startEditFile(fileId, StartEdit)

`POST /api/2.0/files/file/{fileId}/startedit`

Open an editing session

Opens an editing session on the file and answers with the document key that identifies it, the value an editor client passes to the document service in order to join the co-editing session for that exact revision. The file is marked as being edited for as long as the session lasts, which keeps it from being deleted or moved. With `editingAlone=false` the portal builds the editor configuration, requires write mode plus at least one of the edit, review, comment, form-filling or filter permissions, and asks the document service to start tracking the document. With `editingAlone=true` the caller claims the file for itself, and the call is refused with 403 when anybody is already editing it. The caller needs edit access: a member with read access, a guest and an anonymous caller whose external link does not grant editing are all refused. The call is mutating and not idempotent. Keep the session alive with `GET api/2.0/files/file/{fileId}/trackeditfile`, and end it by calling that operation with `isFinish=true`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to open the editing session on. The caller needs edit access to it. | [required] [example: `1`] |
| **StartEdit** | body | [**StartEdit**](../../models/start-edit.md) | The session options. The body is required even when it only carries the default, so send an empty object to open an ordinary co-editing session. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The document key of the editing session | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot edit the file, or the file is already being edited and the session was claimed alone | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
