# createFolder

> FolderWrapper createFolder(folderId, CreateFolderRequest)

`POST /api/2.0/files/folder/{folderId}`

Create a folder

Creates a folder in the parent folder named in the path. Requires the right to create content in the parent folder. Other callers get 403. The room manager, a content creator, and the owner of a personal section have this right. The call changes data. Do not repeat it. Each call creates one more folder. In portal storage, every new folder has the same title. In a connected storage, a taken title gets a free name instead. The portal notifies the room members about each new folder. Take the ID of the new folder from `id`. To upload files into it, use `POST api/2.0/files/{folderId}/upload`. To create a room, use `POST api/2.0/files/rooms`. The call returns 400 if the title is empty, has only spaces, or is too long. It returns 403 if the parent does not exist or is in the archive. It also returns 403 in the Rooms, Forms, and AI agents section roots, which hold only rooms. For a string ID that is not a folder of a connected storage, the call returns 404.  Raises the `folder.created` webhook.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the request is addressed to: when a folder is created it is the parent that receives the new folder, and when a folder is renamed it is the folder that gets the new title. | [required] [example: `1`] |
| **CreateFolderRequest** | body | [**CreateFolderRequest**](../../models/create-folder-request.md) | The title carried by the request body. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The folder that was created | [**FolderWrapper**](../../models/folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `title`, or the title is empty, blank or longer than 165 characters | - | - |
| **403** | The caller may not create content in the parent folder, or the parent does not exist, lies in the archive or is a section root that holds only rooms | - | - |
| **404** | The parent folder id is a string that is not the id of a folder in a known third-party storage | - | - |
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
