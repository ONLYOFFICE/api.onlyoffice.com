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
| **403** | The caller may not read the history of the file, as with an anonymous caller, read-only or commenting access, or a file in a third-party storage | - | - |
| **404** | The file id resolves to nothing | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EditHistoryArrayWrapper**](../../models/edit-history-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file the operation addresses. Take the identifier from a listing such as &#x60;GET api/2.0/files/\{folderId\}&#x60;: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
