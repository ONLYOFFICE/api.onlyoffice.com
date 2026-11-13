# changeRoomCover

> FolderWrapper changeRoomCover(id, CoverRequestDto)

`POST /api/2.0/files/rooms/{id}/cover`

Change the room cover

Changes the cover image and the background color of a room, and returns the room. You can send either field alone. An empty `cover` removes the cover, and an empty `color` restores the default. An empty body changes nothing. The room shows its cover only while it has no logo. A logo from `POST api/2.0/files/rooms/{id}/logo` hides the cover but keeps it. Requires the room manager role in the room. Other callers get 403. An archived room also returns 403. The call changes data, and you can repeat it with the same body. The cover stays after archiving and unarchiving. The call returns 400 for an unknown `cover` or an invalid `color`. If the room does not exist or was deleted, the call returns 404.  Raises the `room.updated` webhook when the color or the cover changes. Raises the `agent.updated` webhook instead when the room is an AI agent.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to change, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **CoverRequestDto** | body | [**CoverRequestDto**](../models/cover-request-dto.md) | The cover and the colour to apply. Either half may be sent on its own, and an empty object leaves the room as it is. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room as it is after the cover change | [**FolderWrapper**](../models/folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, `color` is not six hexadecimal digits, `cover` is not an identifier from the cover gallery, or a third-party identifier refers to a storage account that is not connected | - | - |
| **403** | The caller may not edit this room, or the room is archived | - | - |
| **404** | No room with this ID exists, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderWrapper**](../models/folder-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The room to change, named by the identifier that &#x60;GET api/2.0/files/rooms&#x60; reports for it. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyFolderWrapper**](../models/third-party-folder-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
