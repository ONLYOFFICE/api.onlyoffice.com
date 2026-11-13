# createFileInMyDocuments

> FileWrapper createFileInMyDocuments(CreateFileRequest)

`POST /api/2.0/files/@my/file`

Create a file in My documents

Creates a file in the My documents section of the caller and returns it. The extension in the title sets the format. The portal changes a known text, spreadsheet, or presentation extension to DOCX, XLSX, or PPTX. A title without an extension gets DOCX. The portal keeps an unknown extension and a few other formats. If `enableExternalExt` is true, the portal keeps the extension of the title in lower case. If `templateId` is set, the portal copies that file and ignores `formId`. Otherwise, a nonzero `formId` makes the portal copy that form from the form gallery. If neither is set, the portal uses its blank template for the format and the language of the caller. If there is no such template, or `enableExternalExt` is true, the file is empty. Any signed-in user can call it, except a guest. A guest who has My documents gets 403. The call changes data. Do not repeat it. Each call creates another file. The returned title shows the extension that the portal stored. To create a file in a room or another folder, use `POST api/2.0/files/{folderId}/file`. The call returns 400 if `title` is missing, empty, or too long. It returns 402 if the file does not fit into a storage quota. It returns 403 if the template does not exist or the caller cannot read it. It returns 404 for an unknown `formId` or a gallery form without a file of the format of the title. If a string `templateId` is not a file of a connected third-party storage, the call also returns 404.  Raises the `file.created` webhook.

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
| **403** | The caller is a guest whose My documents still exists, or the template does not exist or cannot be read | - | - |
| **404** | `templateId` is a string that is not the id of a file in a known third-party storage, or the form gallery has no form with this `formId` or no file of the title's format for it | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileWrapper**](../../models/file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
