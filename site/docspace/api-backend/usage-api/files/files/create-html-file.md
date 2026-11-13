# createHtmlFile

> FileWrapper createHtmlFile(folderId, CreateTextOrHtmlFileRequest)

`POST /api/2.0/files/{folderId}/html`

Create an HTML file

Creates an HTML file in a folder from `content`, or saves it as a new version of a file. It returns the stored file. The call adds `.html` to the title if the title does not end with it. The parameter `createNewIfExist` works the opposite way to its name. With `true`, the call updates the file with this title and adds a version to its history. With `false`, the default, each call creates another file with a unique title, such as `Notes (1).html`. The call never updates a file that is locked, encrypted, in the trash, or open for editing. It also never updates a file that the caller cannot edit. In these cases, it creates a new file instead. Requires the right to create files in the folder. Other callers get 403. The call changes data. Do not repeat it. Each call adds a file or a version. If the folder does not exist, the call returns 404. If the content exceeds the maximum upload size or the storage quota, the call returns 402. If `content` is missing, the call returns 400. To create the file in your own section, use `POST api/2.0/files/@my/html`.  Raises the `file.created` webhook for a new file and for a new version of an existing file.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the file is created in. | [required] [example: `1`] |
| **CreateTextOrHtmlFileRequest** | body | [**CreateTextOrHtmlFileRequest**](../../models/create-text-or-html-file-request.md) | The title, the content and the collision behaviour of the new file. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created or updated HTML file | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `title` or `content`, or the title is empty, blank or longer than 165 characters | - | - |
| **402** | The content exceeds the maximum upload size, or the file does not fit into the storage quota of the portal, the room or the user | - | - |
| **403** | The caller may not create files in this folder, the folder is a section where files cannot be created, or the folder lies in a form-filling room, which takes PDF files only | - | - |
| **404** | The folder does not exist | - | - |
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
