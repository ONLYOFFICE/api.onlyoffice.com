# createFileInMyDocuments

> FileIntegerWrapper createFileInMyDocuments(CreateFileJsonElement)

`POST /api/2.0/files/@my/file`

Create a file in My documents

Creates a file in the caller's own My documents section and answers with the stored file. The extension in the title decides the format: an extension of a known text, spreadsheet or presentation format is rewritten to the portal's own DOCX, XLSX or PPTX, a title with no extension at all gets DOCX added, while an unknown extension and the few formats the portal keeps as they are stay untouched; `enableExternalExt=true` stores the title verbatim and skips that rewriting. The content comes from one of three sources, tried in this order: `formId` copies a ready form out of the form gallery, `templateId` copies an existing file the caller can read - a number for a file in the portal, a string for one in a connected third-party storage - and with neither of them the portal's blank template for that format and the caller's language is used. The call is mutating and not idempotent: each call adds another file. A guest has no My documents section of their own, so a guest cannot use this operation at all, and a template the caller cannot read is refused. To create a file in a room or any other folder use `POST api/2.0/files/{folderId}/file`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateFileJsonElement** | body | [**CreateFileJsonElement**](../../models/create-file-json-element.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file created in My documents: its id and the title the portal actually stored, whose extension may differ from the requested one; `thumbnailStatus` says whether the preview is already built | [**FileIntegerWrapper**](../../models/file-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileIntegerWrapper**](../../models/file-integer-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
