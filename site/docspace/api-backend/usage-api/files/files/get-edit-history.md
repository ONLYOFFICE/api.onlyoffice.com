# getEditHistory

> EditHistoryArrayWrapper getEditHistory(fileId)

`GET /api/2.0/files/file/{fileId}/edit/history`

Get version history

Returns the editing revisions of a file, oldest first, as the document service understands them: each entry carries the version and the revision group it belongs to, the account that saved it, when it was saved, the comment left on it, the document key of that revision and, where the portal stored them, the changes it introduced. Only the revisions a person saved are listed - the autosaves an editing session writes in between are left out, which is what separates this list from the plain version list of `GET api/2.0/files/file/{fileId}/history`. The caller needs the right to read the history of the file, which editing access and above grant: commenting access, read-only access, a guest, a member without access to the room and an anonymous caller are all refused, and so is a file kept in a connected third-party storage, which keeps no history in the portal. The operation is read-only. Take one entry to `GET api/2.0/files/file/{fileId}/edit/diff` to show its changes, or to `POST api/2.0/files/file/{fileId}/restoreversion` to bring it back.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The editing revisions of the file, oldest first | [**EditHistoryArrayWrapper**](../../models/edit-history-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EditHistoryArrayWrapper**](../../models/edit-history-array-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
