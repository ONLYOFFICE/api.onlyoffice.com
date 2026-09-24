# saveEditingFileFromForm

> FileIntegerWrapper saveEditingFileFromForm(fileId, DownloadUri, FileExtension, File, Forcesave)

`PUT /api/2.0/files/file/{fileId}/saveediting`

Save edited file content

Replaces the content of an existing file with an edited copy and answers with the file as it now stands. The content is the `File` part of a `multipart/form-data` body, and when no such part is sent the raw request body is saved instead, so an empty body empties the file. The `DownloadUri` query parameter does not supply content here; it is only read for the extension when `FileExtension` is empty. `fileExtension` names the format of the content being sent, and when it differs from the stored format the portal converts the content, or keeps it under a renamed copy when a third-party storage cannot convert it. The caller needs edit access to the file. The call is mutating and not idempotent: an ordinary call adds a version to the file history, while `forcesave=true` records an editor autosave, which overwrites the previous autosave revision instead of adding another version and leaves a running editing session in place. It is refused with 403 when the file is locked, lies in Trash, or is open in an editing session started by somebody else, and an unknown file id is reported as missing. For content too large to post in one request use `POST api/2.0/files/file/{fileId}/edit_session`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose content is replaced. The submitted content is written onto this file, so it has to be the file the editing session was opened on rather than a copy of it. | [required] [example: `1`] |
| **DownloadUri** | query | **String** | An address the document service saved the document at. This operation does not fetch the content from it - the content always comes from the request body - and reads it only for the extension, when no file extension is given. | [optional] [example: `https://example.com/file.txt`] |
| **FileExtension** | form | **String** | The format the submitted content is in, with the leading dot, as in `.docx`. When it differs from the format the file is stored in, the portal converts the content before saving it. Left empty, the extension is read off the download address, and failing that the stored format is assumed. | [optional] |
| **File** | form | **File** (binary) | The edited content, sent as the `File` part of a `multipart/form-data` body. When the part is missing the raw request body is saved as the content instead, so an empty body empties the file. | [optional] |
| **Forcesave** | form | **Boolean** | Records the write as an editor autosave: the file keeps its running editing session and the previous autosave revision is overwritten. Left off, the write closes the solo editing session, is refused while somebody else has the file open, and adds a version to the history. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file is saved and the stored version is returned | [**FileIntegerWrapper**](../../models/file-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The file id cannot be resolved to a storage that could accept the content | - | - |
| **403** | The caller cannot edit the file, or it is locked, in Trash, or open in somebody else's editing session | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileIntegerWrapper**](../../models/file-integer-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json
