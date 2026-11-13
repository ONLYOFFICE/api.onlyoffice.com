# getRoomGroups

> RoomGroupArrayWrapper getRoomGroups(includeMembers, searchArea)

`GET /api/2.0/files/group`

List room groups

Returns the room groups of the caller in the section of `searchArea`, each with its rooms. Groups of other members never appear, even for a DocSpace admin. Any signed-in user can call it, including a guest. The call is read-only. The list has no paging or total, and its order is not fixed. An empty array means the caller has no groups in this section. With `includeMembers` set to false, `rooms` is null in every entry, but `totalRooms` is still filled. Each `rooms` list skips archived rooms, rooms of the other section, and rooms the caller can no longer read. The `totalRooms` count uses the same rule. A skipped room returns after it leaves the archive or the caller gets access again. If `searchArea` is not `Active`, `Forms`, or `PrivateRooms`, the call returns 400. To get one group, use `GET api/2.0/files/group/{id}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **includeMembers** | query | **Boolean** | Whether the rooms of each group are listed in the answer: true fills the `rooms` array of every entry, false leaves it out and reports only how many there are in `totalRooms`. | [optional] [example: `true`] |
| **searchArea** | query | **SearchArea** | The section to list the groups of: Active for Rooms and Forms for Forms. Active when omitted. | [optional] [example: `Active`] [enum: `Active`, `Archive`, `Any`, `RecentByLinks`, `Templates`, `Knowledge`, `ResultStorage`, `AiAgents`, `Forms`, `FormTemplates`, `AiHub`, `PrivateRooms`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room groups of the calling account | [**RoomGroupArrayWrapper**](../../models/room-group-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The `searchArea` names a section other than `Active`, `Forms` and `PrivateRooms` | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomGroupArrayWrapper**](../../models/room-group-array-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
