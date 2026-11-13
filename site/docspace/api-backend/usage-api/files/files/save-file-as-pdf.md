# saveFileAsPdf

> FileWrapper saveFileAsPdf(id, SaveAsPdfRequest)

`POST /api/2.0/files/file/{id}/saveaspdf`

Save a file as PDF

Converts a file to PDF and saves the PDF as a new file in the folder from the body. It returns the created file, and the source stays as it is. The call adds `.pdf` to `title`. An empty `title` uses the name of the source. The document service converts the file within the request, so the call takes as long as the conversion. Requires read access to the source file and the right to create files in the destination folder. Other callers get 403. The call changes data. Do not repeat it. Each call adds another PDF with the same title. In a third-party storage, each PDF gets a unique title instead. The call marks the result as new in the room. It saves the result as a PDF form if the portal recognizes the source as a form. If the body has no `folderId` or `title`, the call returns 400. If the file or the folder does not exist, the call returns 404. If the PDF exceeds the storage quota, the call returns 402. To convert the file itself, use `PUT api/2.0/files/file/{fileId}/checkconversion`.  Raises the `file.created` webhook.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The file to convert; it is left untouched. | [required] [example: `1`] |
| **SaveAsPdfRequest** | body | [**SaveAsPdfRequest**](../../models/save-as-pdf-request.md) | The destination folder and the name of the PDF. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The PDF file that was created | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `folderId` or `title` | - | - |
| **402** | The PDF does not fit into the storage quota of the portal, the room or the user | - | - |
| **403** | The caller cannot read the source file or may not create files in the destination folder | - | - |
| **404** | The source file or the destination folder does not exist | - | - |
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
| **id** | path | **String** | The file to convert; it is left untouched. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |
| **ThirdPartySaveAsPdfRequest** | body | [**ThirdPartySaveAsPdfRequest**](../../models/third-party-save-as-pdf-request.md) | The destination folder and the name of the PDF. | [required] |

Return type: [**ThirdPartyFileWrapper**](../../models/third-party-file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
