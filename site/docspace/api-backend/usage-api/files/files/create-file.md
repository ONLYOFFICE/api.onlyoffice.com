# createFile

> FileWrapper createFile(folderId, CreateFileRequest)

`POST /api/2.0/files/{folderId}/file`

Create a file

Creates a file in a folder and returns the stored file. The extension in `title` decides the format. The call changes a known text, spreadsheet, or presentation extension to DOCX, XLSX, or PPTX. It adds DOCX to a title without an extension. It keeps an unknown extension and the few formats that the portal stores as they are. With `enableExternalExt=true`, the call keeps the extension of `title` in lower case and does not change the format. If `templateId` is set, the call copies that file, which the caller must be able to read. Otherwise, `formId` copies a form from the form gallery. Without both, the call uses the blank template of the format in the caller's language. Requires the right to create files in the folder. Other callers get 403. The call changes data. Do not repeat it. Each call creates another file. The call returns 403 in the Rooms root, the archive, and the template sections, even for a DocSpace admin. It also returns 403 for a missing or unreadable template. The call returns 404 for an unknown `formId` or a gallery form without a file of this format. It also returns 404 if `templateId` is a string that matches no third-party file. If the new file exceeds the storage quota, the call returns 402. The call returns 400 if `title` is missing, empty, or too long. To create the file in your own section, use `POST api/2.0/files/@my/file`.  Raises the `file.created` webhook.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the file is created in. | [required] [example: `1`] |
| **CreateFileRequest** | body | [**CreateFileRequest**](../../models/create-file-request.md) | The title of the new file and the source of its content. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file created in the folder: its id and the title the portal actually stored, whose extension may differ from the requested one; `thumbnailStatus` says whether the preview is already built | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `title`, or the title is empty or longer than 165 characters | - | - |
| **402** | The new file does not fit into the storage quota of the portal, the room or the user | - | - |
| **403** | The caller may not create files in the folder, the folder does not exist or is a section where files cannot be created, the template does not exist or cannot be read, or the file is not a PDF and the folder lies in a form-filling room | - | - |
| **404** | The folder id or `templateId` is a string that is not the id of an item in a known third-party storage, or the form gallery has no form with this `formId` or no file of the title's format for it | - | - |
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
| **folderId** | path | **String** | The folder the file is created in. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyFileWrapper**](../../models/third-party-file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
