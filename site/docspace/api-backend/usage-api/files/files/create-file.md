# createFile

> FileWrapper createFile(folderId, CreateFileRequest)

`POST /api/2.0/files/{folderId}/file`

Create a file

Creates a file in the folder named in the route and answers with the stored file. The extension in the title decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to the portal's own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown extension and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the title verbatim and skips that rewriting. The content comes from one of three sources, tried in this order: `formId` copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read - a number for a file in the portal, a string for one in a connected third-party storage - and with neither of them the portal's blank template for that format and the caller's language is used. The caller needs the right to create files in the folder, and the room roots, Archive and the template sections are refused even to an admin. The call is mutating and not idempotent. To create the file in the caller's own section use `POST api/2.0/files/@my/file`.

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
| **403** | The caller may not create files in the folder, the folder does not exist or is a section where files cannot be created, the template does not exist or cannot be read, or the form gallery has no file of the title's format | - | - |
| **404** | The folder id or `templateId` is a string that is not the id of an item in a known third-party storage | - | - |
| **500** | `templateId` is a fraction, a number outside the 32-bit range or a numeric string, the form gallery does not know `formId` or cannot be reached, or the folder id is 0 and the caller is a guest without My documents | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
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
