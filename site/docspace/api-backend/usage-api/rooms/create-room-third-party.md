# createRoomThirdParty

> ThirdPartyFolderWrapper createRoomThirdParty(id, CreateThirdPartyRoomRequest)

`POST /api/2.0/files/rooms/thirdparty/{id}`

Create a third-party room

Turns a folder of a connected third-party storage account into a room of the `Rooms` section, so that the files of the room keep living in that storage instead of the portal. Connect the account first with `POST api/2.0/files/thirdparty` and take the path parameter from a folder listing of that account: it is the identifier of a folder in the storage, not of a room. One connected account can back one room only, so a second call over the same account is refused, and so is an account that was not connected for room storage. The caller needs the right to create rooms, which a portal user and a guest do not have; a public room is refused while the administrator restricts external access, and reaching the room limit of the tariff is refused too. With `createAsNewFolder` the room is a new subfolder named after `title`, otherwise the folder from the path becomes the room itself and `indexing`, `denyDownload`, `tags` and `logo` are then dropped. The answer is the new room, whose identifiers are strings; a public or a form-filling room already has its primary link, readable with `GET api/2.0/files/rooms/{id}/link`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The identifier of the folder in the connected third-party storage that becomes the room, or receives it as a subfolder. Folder identifiers of a connected account are strings and are returned by the folder listings of that account. | [required] [example: `box-12-\|280143035119`] |
| **CreateThirdPartyRoomRequest** | body | [**CreateThirdPartyRoomRequest**](../models/create-third-party-room-request.md) | The settings of the room to be created out of the folder. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room created out of the third-party folder, with string identifiers | [**ThirdPartyFolderWrapper**](../models/third-party-folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `title` or `roomType`, `roomType` is not a known room type, `logo` has no `tmpFile`, a position outside 0-1280 or a size outside 1-1280, or the identifier refers to a storage account that is not connected | - | - |
| **402** | The portal has reached the room limit of its pricing plan or its payment is overdue | - | - |
| **403** | The caller is not the account that connected the storage or may not create rooms, the storage account was not connected for room storage or already backs a room, the room would be public while the portal forbids external sharing, or, with `createAsNewFolder`, the subfolder cannot be created, as when `title` is blank, `cover` is not a known cover, a tag name is empty or the logo cannot be applied | - | - |
| **404** | `id` is not a folder of a connected third-party storage: a plain number, an identifier with a storage type the portal does not know, or a folder the storage does not have | - | - |
| **500** | The identifier carries a storage account number beyond the 32-bit range, or `logo.width` or `logo.height` is larger than 2147483647 | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ThirdPartyFolderWrapper**](../models/third-party-folder-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
