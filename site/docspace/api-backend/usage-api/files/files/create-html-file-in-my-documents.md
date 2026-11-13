# createHtmlFileInMyDocuments

> FileWrapper createHtmlFileInMyDocuments(CreateTextOrHtmlFileRequest)

`POST /api/2.0/files/@my/html`

Create an HTML file in My documents

Creates an HTML file in the My documents section of the caller, or updates one with the same title. The call saves `content` as the file content and returns the file. The portal adds `.html` to a title without it. If `createNewIfExist` is true, the portal adds a version to the file with this title. If there is no such file, it creates one. If `createNewIfExist` is false, the default, the portal creates another file with a unique title, such as `Notes (1).html`. The portal does not update a file that is locked, open for editing, or encrypted. It creates another file with the same title instead. Any signed-in user can call it, except a guest. A guest who has My documents gets 403. Other guests get 404. The call changes data. A repeat with `createNewIfExist` true adds a version. A repeat with false adds a numbered copy. To create the file in a room or another folder, use `POST api/2.0/files/{folderId}/html`. The call returns 400 if `title` or `content` is missing, or if `title` is blank or too long. It returns 402 if the content is too large for an upload or for a storage quota.  Raises the `file.created` webhook for a new file and for a new version of an existing file.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateTextOrHtmlFileRequest** | body | [**CreateTextOrHtmlFileRequest**](../../models/create-text-or-html-file-request.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created or updated HTML file | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `title` or `content`, or the title is empty, blank or longer than 165 characters | - | - |
| **402** | The content exceeds the maximum upload size, or the file does not fit into the storage quota of the portal, the room or the user | - | - |
| **403** | The caller is a guest whose My documents still exists, where a guest may not create files | - | - |
| **404** | The caller is a guest, who has no My documents | - | - |
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
