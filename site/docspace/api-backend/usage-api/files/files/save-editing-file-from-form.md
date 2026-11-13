# saveEditingFileFromForm

> FileWrapper saveEditingFileFromForm(fileId, downloadUri, fileExtension, file, forcesave)

`PUT /api/2.0/files/file/{fileId}/saveediting`

Save edited file content

Replaces the content of a file with an edited copy and returns the file. Send the content as the `File` part of a `multipart/form-data` body. Without that part, the call saves the raw request body. An empty body then empties the file. The call does not download content from `downloadUri`. It reads only the extension from it, when `fileExtension` is empty. If `fileExtension` differs from the stored format, the portal converts the content. If a third-party storage cannot convert it, the portal saves a renamed copy. Requires editing access to the file. Other callers get 403. The call changes data. Do not repeat it. Each call adds a version. If the last save of the file was an autosave, the call replaces that version instead. With `forcesave` true, the call saves an autosave and keeps the editing session open. Without it, the call closes a session opened with `editingAlone` true. The call returns 403 if the file is locked by another user, is in Trash, or is encrypted. It also returns 403 for a file in a private room. Without `forcesave`, it also returns 403 while the file is open for co-editing. If the file does not exist, the call returns 404. If a string `fileId` points to a storage account that is not connected, the call returns 400. If the content exceeds the storage quota, it returns 402. For large content, use `POST api/2.0/files/file/{fileId}/edit_session`.  Raises the `file.updated` webhook for the saved file, also for a renamed copy in third-party storage, never `file.created`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose content is replaced. The submitted content is written onto this file, so it has to be the file the editing session was opened on rather than a copy of it. | [required] [example: `1`] |
| **downloadUri** | query | **String** | An address the document service saved the document at. This operation does not fetch the content from it - the content always comes from the request body - and reads it only for the extension, when no file extension is given. | [optional] [example: `https://example.com/file.txt`] |
| **fileExtension** | form | **String** | The format the submitted content is in, with the leading dot, as in `.docx`. When it differs from the format the file is stored in, the portal converts the content before saving it. Left empty, the extension is read off the download address, and failing that the stored format is assumed. | [optional] |
| **file** | form | **File** (binary) | The edited content, sent as the `File` part of a `multipart/form-data` body. When the part is missing the raw request body is saved as the content instead, so an empty body empties the file. | [optional] |
| **forcesave** | form | **Boolean** | Records the write as an editor autosave: the file keeps its running editing session and the previous autosave revision is overwritten. Left off, the write closes the solo editing session, is refused while somebody else has the file open, and adds a version to the history. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file is saved and the stored version is returned | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A form field has the wrong type, or a third-party file identifier refers to a storage account that is not connected | - | - |
| **402** | The content does not fit into the portal's storage quota, even with the overshoot allowed for editor saves | - | - |
| **403** | The caller cannot edit the file, or it is locked, in Trash, or open in somebody else's editing session | - | - |
| **404** | The file id resolves to nothing | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileWrapper**](../../models/file-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file whose content is replaced. The submitted content is written onto this file, so it has to be the file the editing session was opened on rather than a copy of it. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |

Return type: [**ThirdPartyFileWrapper**](../../models/third-party-file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
