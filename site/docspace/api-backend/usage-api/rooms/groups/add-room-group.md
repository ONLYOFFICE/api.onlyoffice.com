# addRoomGroup

> RoomGroupWrapper addRoomGroup(RoomGroupRequestDto)

`POST /api/2.0/files/group`

Add a new room group

Creates a room group, a personal collection that gathers rooms the caller already works with under one name and icon; it belongs to the account that created it and is never shown to other members of the portal. Pass the group name, the identifier of one of the built-in covers offered by `GET api/2.0/files/rooms/covers`, and a list of at least one room - a number for a room stored in the portal, a string for a room on a connected third-party account. Any role may create its own group, a guest included: what is checked is read access to each listed room, not the role of the caller. Repeated identifiers are collapsed, and a value that is not a room identifier at all is rejected as an invalid request. When none of the listed rooms can be read the group is not created; when only some of them can, the group is created with those rooms and the call is still reported as failed, so re-read `GET api/2.0/files/group` before retrying. A room may sit in several groups, and two groups of the same account may carry the same name. The answer is the stored group with its rooms.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **RoomGroupRequestDto** | body | [**RoomGroupRequestDto**](../../models/room-group-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created room group with the rooms that were linked to it | [**RoomGroupWrapper**](../../models/room-group-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `name`, `icon` or `rooms`, the name is blank or longer than 128 characters, the icon is not a built-in cover, `searchArea` names a section other than `Active` and `Forms`, a room identifier is neither a positive number nor a non-numeric string, a third-party room identifier refers to a storage account that is not connected, or none of the listed rooms can be added and the existing ones all belong to the other section than `searchArea` | - | - |
| **403** | The `rooms` list is empty, the listed rooms exist but none of them is a room the caller can read, or only some of them could be added - the group is then created with those | - | - |
| **404** | None of the listed rooms exists, or a string room identifier does not name a third-party storage | - | - |
| **500** | A third-party room identifier carries a storage account number beyond the 32-bit range | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomGroupWrapper**](../../models/room-group-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
