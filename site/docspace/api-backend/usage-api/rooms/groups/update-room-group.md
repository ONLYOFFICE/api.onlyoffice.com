# updateRoomGroup

> RoomGroupWrapper updateRoomGroup(id, UpdateRoomGroupRequest)

`PUT /api/2.0/files/group/{id}`

Update room group

Updates a room group of the caller. It can rename the group, add rooms, and remove rooms in one call. Any signed-in user can call it, including a guest. A missing group or a group of another account returns 404, even for a DocSpace admin. The call changes data. You can repeat it with the same body. It applies the name first, then `roomsToAdd`, then `roomsToRemove`. A later failure does not undo the earlier steps. An empty body changes nothing. If every field the body sends is null, the call returns 400. The call removes a linked room even without access, unless an earlier step of the call fails. If no room of `roomsToAdd` can be added, the call fails. It returns 403 if a listed identifier exists but is not a room the caller can read. If all existing rooms are readable but in the other section, it returns 400. If no listed room exists, it returns 404. These rules also apply to the identifiers of `roomsToRemove` that are not in the group, without the section check. If only some rooms can be applied, the call applies them but returns 403. A string identifier that names no third-party storage also returns 404. The call returns 400 for a blank or too long name, a malformed room identifier, or a disconnected storage account.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room group to change, identified by the value `GET api/2.0/files/group` reports for it. A group of another account cannot be addressed and reads as missing. | [required] [example: `42`] |
| **UpdateRoomGroupRequest** | body | [**UpdateRoomGroupRequest**](../../models/update-room-group-request.md) | The changes to apply. Carrying none of them leaves the group as it is, and each of them may be sent on its own or together with the others. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room group as stored after the change | [**RoomGroupWrapper**](../../models/room-group-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or names its members with every one of them null, the new name is blank or longer than 128 characters, a room identifier is neither a positive number nor a non-numeric string, a third-party room identifier refers to a storage account that is not connected, or none of the rooms of `roomsToAdd` can be added and the existing ones all belong to the other section than the group | - | - |
| **403** | The rooms of `roomsToAdd`, or the rooms of `roomsToRemove` that are not in the group, exist but none of them is a room the caller can read, or only some of the rooms could be applied - the earlier steps stay applied | - | - |
| **404** | The group does not exist or belongs to another account, none of the rooms of `roomsToAdd` or of the rooms of `roomsToRemove` that are not in the group exists, or a string room identifier does not name a third-party storage | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomGroupWrapper**](../../models/room-group-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
