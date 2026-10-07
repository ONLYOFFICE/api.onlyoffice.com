# copyFileAs

> FileEntryBaseWrapper copyFileAs(fileId, CopyAsRequest)

`POST /api/2.0/files/file/{fileId}/copyas`

Copy a file

Copies one file into another folder under a new title, converting its content when the new title names a different format, and answers with the copy that was created. The extension of `destTitle` decides what happens: the same extension as the source copies the bytes as they are, a different one has the document service convert them first, and `toForm=true` converts a document into a PDF form. `password` unlocks a source file that is protected by one. `destFolderId` is read as a number for a folder inside the portal and as a string for a folder in a connected third-party storage; anything else is answered with an empty body and nothing is copied. The caller needs read access to the source file and the right to create files in the destination folder, and is otherwise refused with 403; a missing file or folder is answered with 404, and a format that cannot be converted with 400. The call is mutating and not idempotent - each call adds another copy. To copy many items at once, and without converting, use `PUT api/2.0/files/fileops/copy`.

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
| **403** | The caller may not read the file, the destination folder does not exist, or the caller may not create files in it | - | - |
| **404** | The file or the destination folder does not exist | - | - |
| **415** | The installation filters uploads and does not accept the format of the new title | - | - |
| **500** | The document service fails to convert the content, `destFolderId` is a fraction or outside the 32-bit range, or the file is a PDF form in a form-filling room whose filling has not started and the caller may only fill forms there | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
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
