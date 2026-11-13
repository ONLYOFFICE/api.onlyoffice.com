# copyFileAs

> FileEntryBaseWrapper copyFileAs(fileId, CopyAsRequest)

`POST /api/2.0/files/file/{fileId}/copyas`

Copy a file

Copies a file into a folder under a new title and returns the copy. If the new title has another extension, the call converts the content. The extension of `destTitle` decides the action. The same extension as the source copies the content as it is. Another extension makes the document service convert it first. With `toForm=true`, the call converts a document into a PDF form. Requires read access to the file and the right to create files in the destination folder. Other callers get 403. The call changes data. Do not repeat it. Each call adds another copy. If `destFolderId` is neither a number nor a string, the call copies nothing and returns an empty body. It also returns 403 for an encrypted file, and for a file or a destination in a private room. If the file or the folder does not exist, the call returns 404. If the copy exceeds the storage quota or the converted content exceeds the maximum upload size, the call returns 402. If the installation does not accept the format of the new title, the call returns 415. If the new title is empty and the source has no extension, the call returns 400. To copy many items without conversion, use `PUT api/2.0/files/fileops/copy`.  Raises the `file.created` webhook. Raises the `file.uploaded` webhook as well when the copy is converted to another format.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to copy. | [required] [example: `1`] |
| **CopyAsRequest** | body | [**CopyAsRequest**](../../models/copy-as-request.md) | The title, the destination and the conversion options of the copy. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The copy that was created | [**FileEntryBaseWrapper**](../../models/file-entry-base-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `destTitle` or `destFolderId`, or the new title is empty while the source file has no extension | - | - |
| **402** | The copy does not fit into the storage quota of the portal, the room or the user, or the converted content exceeds the maximum upload size | - | - |
| **403** | The caller may not read the file, the destination folder does not exist, the caller may not create files in it, or the file or the destination lies in a private room | - | - |
| **404** | The file or the destination folder does not exist | - | - |
| **415** | The installation filters uploads and does not accept the format of the new title | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileEntryBaseWrapper**](../../models/file-entry-base-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file to copy. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
