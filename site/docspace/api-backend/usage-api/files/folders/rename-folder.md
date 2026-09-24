# renameFolder

> FolderIntegerWrapper renameFolder(folderId, CreateFolder)

`PUT /api/2.0/files/folder/{folderId}`

Rename a folder

Gives a folder a new title and answers with the folder as it now stands. The title is trimmed, may not be blank and is refused when it is longer than the limit the schema prints; a title that matches the current one leaves the folder untouched, and titles need not be unique among the neighbours. The caller needs the right to rename the folder, which the room manager, a content creator acting on a folder of their own and the owner of a personal section have, while a guest is refused with 403 whatever their access; a folder in the Trash section or in an archived room cannot be renamed either, and a folder that does not exist is answered as not found. A room may be renamed here as well, in which case the caller needs the right to edit the room, and `PUT api/2.0/files/rooms/{id}` is the operation that changes its other settings. The call is mutating and idempotent; on a folder stored in a connected third-party account the identifier of the folder may change with the title.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the request is addressed to: when a folder is created it is the parent that receives the new folder, and when a folder is renamed it is the folder that gets the new title. | [required] [example: `1`] |
| **CreateFolder** | body | [**CreateFolder**](../../models/create-folder.md) | The title carried by the request body. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The folder with its new title | [**FolderIntegerWrapper**](../../models/folder-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not rename this folder | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderIntegerWrapper**](../../models/folder-integer-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
