# createRoomThirdParty

> FolderStringWrapper createRoomThirdParty(id, CreateThirdPartyRoom)

`POST /api/2.0/files/rooms/thirdparty/{id}`

Create a third-party room

Turns a folder of a connected third-party storage account into a room of the `Rooms` section, so that the files of the room keep living in that storage instead of the portal. Connect the account first with `POST api/2.0/files/thirdparty` and take the path parameter from a folder listing of that account: it is the identifier of a folder in the storage, not of a room. One connected account can back one room only, so a second call over the same account is refused, and so is an account that was not connected for room storage. The caller needs the right to create rooms, which a portal user and a guest do not have; a public room is refused while the administrator restricts external access, and reaching the room limit of the tariff is refused too. With `createAsNewFolder` the room is a new subfolder named after `title`, otherwise the folder from the path becomes the room itself and `indexing`, `denyDownload`, `tags` and `logo` are then dropped. The answer is the new room, whose identifiers are strings; a public or a form-filling room already has its primary link, readable with `GET api/2.0/files/rooms/{id}/link`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The identifier of the folder in the connected third-party storage that becomes the room, or receives it as a subfolder. Folder identifiers of a connected account are strings and are returned by the folder listings of that account. | [required] [example: `box-12-\|280143035119`] |
| **CreateThirdPartyRoom** | body | [**CreateThirdPartyRoom**](../models/create-third-party-room.md) | The settings of the room to be created out of the folder. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room created out of the third-party folder, with string identifiers | [**FolderStringWrapper**](../models/folder-string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderStringWrapper**](../models/folder-string-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
