# startEditFile

> StringWrapper startEditFile(fileId, StartEditRequest)

`POST /api/2.0/files/file/{fileId}/startedit`

Open an editing session

Opens an editing session on the file and returns its document key. An editor app passes this key to the document service to join co-editing of this revision. While the session lasts, nobody can delete or move the file. With `editingAlone` false, the portal asks the document service to track the document. The caller then needs the right to edit, review, comment, fill forms, or edit filters. With `editingAlone` true, the caller claims the file alone. If anybody already edits the file, the call returns 403. Requires editing access to the file. Other callers get 403. With `editingAlone` true, an anonymous caller without editing access gets 401. The call changes data, but not the document. While the session lasts, a repeated call with `editingAlone` true returns 403. That call also deletes the portal's record of every editing session of the file. With `editingAlone` false, each call returns the same key until the file gets a new version. A version from an autosave keeps the key. The call also returns 403 if the file is locked or in Trash, or if the document service rejects tracking. If the file does not exist, it returns 404. With `editingAlone` false, a format that the editors cannot open returns 415. To keep the session alive, call `GET api/2.0/files/file/{fileId}/trackeditfile`. To end it, call that operation with `isFinish` true.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to open the editing session on. The caller needs edit access to it. | [required] [example: `1`] |
| **StartEditRequest** | body | [**StartEditRequest**](../../models/start-edit-request.md) | The session options. The body is required even when it only carries the default, so send an empty object to open an ordinary co-editing session. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The document key of the editing session | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | An anonymous caller who may not edit the file claims the session with `editingAlone=true` | - | - |
| **403** | The caller cannot edit the file, the file is locked or in Trash, somebody is already editing it and the session was claimed alone, or the document service did not accept the tracking request | - | - |
| **404** | The file id resolves to nothing | - | - |
| **415** | The file is in a format the editors can neither edit nor open for viewing | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file to open the editing session on. The caller needs edit access to it. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
