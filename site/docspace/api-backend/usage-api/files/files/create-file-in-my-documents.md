# createFileInMyDocuments

> FileWrapper createFileInMyDocuments(CreateFileRequest)

`POST /api/2.0/files/@my/file`

Create a file in My documents

Creates a file in the caller's own My documents section and answers with the stored file. The extension in the title decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to the portal's own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown extension and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the title verbatim and skips that rewriting. The content comes from one of three sources, tried in this order: `formId` copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read - a number for a file in the portal, a string for one in a connected third-party storage - and with neither of them the portal's blank template for that format and the caller's language is used. The call is mutating and not idempotent: each call adds another file. A guest has no My documents section of their own, so a guest cannot use this operation at all, and a template the caller cannot read is refused. To create a file in a room or any other folder use `POST api/2.0/files/{folderId}/file`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateFileRequest** | body | [**CreateFileRequest**](../../models/create-file-request.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file created in My documents: its id and the title the portal actually stored, whose extension may differ from the requested one; `thumbnailStatus` says whether the preview is already built | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `title`, or the title is empty or longer than 165 characters | - | - |
| **402** | The new file does not fit into the storage quota of the portal, the room or the user | - | - |
| **403** | The template does not exist or cannot be read, or the form gallery has no file of the title's format | - | - |
| **404** | `templateId` is a string that is not the id of a file in a known third-party storage | - | - |
| **500** | `templateId` is a fraction, a number outside the 32-bit range or a numeric string, the form gallery does not know `formId` or cannot be reached, or the caller is a guest, who has no My documents | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileWrapper**](../../models/file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
