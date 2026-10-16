# startEditFile

> StringWrapper startEditFile(fileId, StartEditRequest)

`POST /api/2.0/files/file/{fileId}/startedit`

Open an editing session

Opens an editing session on the file and answers with the document key that identifies it, the value an editor client passes to the document service in order to join the co-editing session for that exact revision. The file is marked as being edited for as long as the session lasts, which keeps it from being deleted or moved. With `editingAlone=false` the portal builds the editor configuration, requires write mode plus at least one of the edit, review, comment, form-filling or filter permissions, and asks the document service to start tracking the document. With `editingAlone=true` the caller claims the file for itself, and the call is refused with 403 when anybody is already editing it. The caller needs edit access: a member with read access, a guest and an anonymous caller whose external link does not grant editing are all refused. The call is mutating and not idempotent. Keep the session alive with `GET api/2.0/files/file/{fileId}/trackeditfile`, and end it by calling that operation with `isFinish=true`.

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
| **500** | The file lies in a third-party storage that cannot deliver it, or, with `editingAlone=true`, the file is locked by somebody else or lies in Trash | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
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
