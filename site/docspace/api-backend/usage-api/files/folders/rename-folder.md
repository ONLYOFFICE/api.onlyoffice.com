# renameFolder

> FolderWrapper renameFolder(folderId, CreateFolderRequest)

`PUT /api/2.0/files/folder/{folderId}`

Rename a folder

Renames a folder or a room. Requires the right to rename the folder. Other callers get 403. The room manager, a content creator who owns the folder, and the owner of a personal section have this right. For a room, the call requires the right to edit the room. A guest gets 403 in any case. The call changes data. If the title is the same as the current one, the call changes nothing, so you can repeat it. In a connected storage, the folder ID can change with the title. So take the ID from the response. The call returns 400 if the title is empty, has only spaces, or is too long. It also returns 403 for a folder in the trash or in the archive. If the folder does not exist, the call returns 404. To change the other settings of a room, use `PUT api/2.0/files/rooms/{id}`.  Raises the `folder.updated` webhook when the title changes. Raises the `room.updated` webhook instead when the folder is a room. Raises the `agent.updated` webhook instead when it is an AI agent.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the request is addressed to: when a folder is created it is the parent that receives the new folder, and when a folder is renamed it is the folder that gets the new title. | [required] [example: `1`] |
| **CreateFolderRequest** | body | [**CreateFolderRequest**](../../models/create-folder-request.md) | The title carried by the request body. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The folder with its new title | [**FolderWrapper**](../../models/folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `title`, or the title is empty, blank or longer than 165 characters | - | - |
| **403** | The caller may not rename this folder, or the folder lies in Trash or in the archive | - | - |
| **404** | The folder does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderWrapper**](../../models/folder-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **String** | The folder the request is addressed to: when a folder is created it is the parent that receives the new folder, and when a folder is renamed it is the folder that gets the new title. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyFolderWrapper**](../../models/third-party-folder-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
