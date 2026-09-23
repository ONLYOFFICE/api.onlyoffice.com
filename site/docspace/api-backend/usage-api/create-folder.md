# createFolder

Referenced types are defined in the [full reference](../files.md).

> FolderIntegerWrapper createFolder(folderId, CreateFolder)

`POST /api/2.0/files/folder/{folderId}`

Create a folder

Creates a folder inside the folder named in the path and answers with the folder as it was stored. The title is trimmed, may not be blank and is refused when it is longer than the limit the schema prints; titles are not required to be unique, so creating the same title twice leaves two folders side by side, which makes the call mutating and not idempotent. The caller needs the right to create content in the parent, which the room manager, a content creator and the owner of a personal section have; a member without that right, an archived parent, and a section root that only holds rooms - Rooms, Forms and AI agents - are all refused, as is a parent that does not exist. Rooms are not created here: use `POST api/2.0/files/rooms` for those, and this operation for ordinary folders within them. Members of the room are notified of the new folder. Read the identifier of the new folder from `id` and fill it with `POST api/2.0/files/{folderId}/upload`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the request is addressed to: when a folder is created it is the parent that receives the new folder, and when a folder is renamed it is the folder that gets the new title. | [required] [example: `1`] |
| **CreateFolder** | body | [**CreateFolder**](../files.md#model-createfolder) | The title carried by the request body. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The folder that was created | [**FolderIntegerWrapper**](../files.md#model-folderintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderIntegerWrapper**](../files.md#model-folderintegerwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
