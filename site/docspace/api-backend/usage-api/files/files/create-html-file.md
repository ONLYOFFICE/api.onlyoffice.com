# createHtmlFile

> FileWrapper createHtmlFile(folderId, CreateTextOrHtmlFileRequest)

`POST /api/2.0/files/{folderId}/html`

Create an HTML file

Creates an HTML file in the folder named in the route out of the markup passed as the content, and answers with the stored file. The `.html` extension is added to the title unless the title already ends with it, and a request carrying no content is rejected as an invalid request. `createNewIfExist` acts the other way round than its name reads: with `true` the file that already carries this title is updated, the markup replacing its content and a version appearing in its history, while with `false`, which is also the default, another file is created and its title made unique, as in Notes (1).html. Updating needs the existing file to be editable by the caller, so one that is locked, open in an editing session, encrypted or in Trash is left alone and a new file appears beside it instead. The caller needs the right to create files in the folder and is otherwise refused with 403. The call is mutating. To create the file in the caller's own section use `POST api/2.0/files/@my/html`.

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
| **403** | The caller may not create files in this folder, or the folder is a section where files cannot be created | - | - |
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
