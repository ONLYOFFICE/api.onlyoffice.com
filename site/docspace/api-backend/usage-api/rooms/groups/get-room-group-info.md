# getRoomGroupInfo

> RoomGroupWrapper getRoomGroupInfo(id, includeMembers)

`GET /api/2.0/files/group/{id}`

Get room group info

Returns one room group of the calling account together with the rooms it gathers. Groups are personal: an identifier that belongs to another member is answered the same way as one that was never created or has already been deleted, and a portal administrator is no exception to that rule. Take the identifier from `GET api/2.0/files/group`, which lists the groups the caller owns. Set `includeMembers` to false to get the group without the `rooms` array, which is the cheaper form when only the name, the icon and the number of rooms are needed; `totalRooms` is filled either way. A room moved to the archive is left out of both `rooms` and `totalRooms` while its membership survives, so taking the room out of the archive brings it back into the group. Rooms stored in the portal are listed before rooms on connected third-party accounts. The call is read-only and changes nothing about the group or the rooms it refers to.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room group to act on, identified by the value `GET api/2.0/files/group` reports for it. A group of another account cannot be addressed and reads as missing. | [required] [example: `42`] |
| **includeMembers** | query | **Boolean** | Whether the rooms of the group are listed in the answer: true fills the `rooms` array, false leaves it out and reports only how many there are in `totalRooms`. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room group with the rooms it gathers | [**RoomGroupWrapper**](../../models/room-group-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomGroupWrapper**](../../models/room-group-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
