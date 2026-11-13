# addRoomGroup

> RoomGroupWrapper addRoomGroup(RoomGroupRequestDto)

`POST /api/2.0/files/group`

Add a new room group

Creates a room group, a personal collection of rooms with a name and an icon. Other members of the portal never see the group. Any signed-in user can call it, including a guest. The call checks read access to each listed room. It changes data. Do not repeat it. Each call creates another group. The call returns 400 for a blank or too long name, or an unknown icon. It also returns 400 if `searchArea` is not `Active`, `Forms`, or `PrivateRooms`. It also returns 400 for a malformed room identifier or a disconnected storage account. An empty `rooms` list returns 403. If no listed room can be added, the call creates no group. It returns 403 if a listed identifier exists but is not a room the caller can read. If all existing rooms are readable but in the other section, it returns 400. If no listed room exists, it returns 404. A string identifier that names no third-party storage also returns 404. If only some rooms can be added, the call creates the group with them but returns 403. So read `GET api/2.0/files/group` before you retry.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **RoomGroupRequestDto** | body | [**RoomGroupRequestDto**](../../models/room-group-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created room group with the rooms that were linked to it | [**RoomGroupWrapper**](../../models/room-group-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `name`, `icon` or `rooms`, the name is blank or longer than 128 characters, the icon is not a built-in cover, `searchArea` names a section other than `Active`, `Forms` and `PrivateRooms`, a room identifier is neither a positive number nor a non-numeric string, a third-party room identifier refers to a storage account that is not connected, or none of the listed rooms can be added and the existing ones all belong to the other section than `searchArea` | - | - |
| **403** | The `rooms` list is empty, the listed rooms exist but none of them is a room the caller can read, or only some of them could be added - the group is then created with those | - | - |
| **404** | None of the listed rooms exists, or a string room identifier does not name a third-party storage | - | - |
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
