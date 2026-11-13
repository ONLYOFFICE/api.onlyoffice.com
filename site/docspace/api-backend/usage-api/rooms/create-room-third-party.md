# createRoomThirdParty

> ThirdPartyFolderWrapper createRoomThirdParty(id, CreateThirdPartyRoomRequest)

`POST /api/2.0/files/rooms/thirdparty/{id}`

Create a third-party room

Creates a room in the Rooms section from a folder of a connected third-party storage account. The files of the room stay in that storage. First, connect the storage account for rooms with `POST api/2.0/files/thirdparty`. Requires a DocSpace admin or a room admin who connected this storage account. Other callers get 403. The call changes data. One storage account backs only one room. So a repeated call returns 403. With `createAsNewFolder`, the room is a new subfolder named after `title`. Otherwise the folder from the path becomes the room, and the call ignores `tags` and `logo`. The call ignores `indexing` and `denyDownload` in both modes. A public room and a form filling room get a primary external link. To read it, use `GET api/2.0/files/rooms/{id}/link`. The call returns 400 if the storage account is not connected. It returns 402 if the portal reached the room limit of its plan or its payment is overdue. It returns 403 if the storage account was not connected for rooms. It also returns 403 for a public room while the portal forbids external sharing. A room type of the AI rooms section also returns 403. With `createAsNewFolder`, a subfolder that cannot be created also returns 403. If `id` is not a folder of a connected storage account, the call returns 404.  Raises the `room.created` webhook when `roomType` is not `AiRoom`. Raises the `agent.created` webhook instead when `roomType` is `AiRoom`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The identifier of the folder in the connected third-party storage that becomes the room, or receives it as a subfolder. Folder identifiers of a connected account are strings and are returned by the folder listings of that account. | [required] [example: `box-12-\|280143035119`] |
| **CreateThirdPartyRoomRequest** | body | [**CreateThirdPartyRoomRequest**](../models/create-third-party-room-request.md) | The settings of the room to be created out of the folder. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room created out of the third-party folder, with string identifiers | [**ThirdPartyFolderWrapper**](../models/third-party-folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `title` or `roomType`, `private` is set, which a third-party storage does not support, `roomType` is not a known room type, `logo` has no `tmpFile`, a position outside 0-1280 or a size outside 1-1280, or the identifier refers to a storage account that is not connected | - | - |
| **402** | The portal has reached the room limit of its pricing plan or its payment is overdue | - | - |
| **403** | The caller is not the account that connected the storage or may not create rooms, the storage account was not connected for room storage or already backs a room, the room would be public while the portal forbids external sharing, or, with `createAsNewFolder`, the subfolder cannot be created, as when `title` is blank, `cover` is not a known cover, a tag name is empty or the logo cannot be applied | - | - |
| **404** | `id` is not a folder of a connected third-party storage: a plain number, an identifier with a storage type the portal does not know, or a folder the storage does not have | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ThirdPartyFolderWrapper**](../models/third-party-folder-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
