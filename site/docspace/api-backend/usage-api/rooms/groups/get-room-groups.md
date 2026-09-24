# getRoomGroups

> RoomGroupArrayWrapper getRoomGroups(includeMembers)

`GET /api/2.0/files/group`

List room groups

Returns every room group of the calling account, each with the rooms it gathers. Only groups the caller created are listed: groups of other members never appear here, and an account that has never made one gets an empty array back. Set `includeMembers` to false to leave the `rooms` array out of every entry and keep the name, the icon and `totalRooms` alone, which is the cheaper form when the list is only being shown as a menu. Archived rooms are skipped in both the `rooms` array and the `totalRooms` count, and reappear once the room is taken out of the archive. The listing is neither paged nor filtered - it always carries the whole set - and the order of the entries is not contractual, so sort them on the client when the order matters. The call is read-only. Use `GET api/2.0/files/group/{id}` when the identifier of a single group is already known, and `POST api/2.0/files/group` to add one.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **includeMembers** | query | **Boolean** | Whether the rooms of each group are listed in the answer: true fills the `rooms` array of every entry, false leaves it out and reports only how many there are in `totalRooms`. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room groups of the calling account | [**RoomGroupArrayWrapper**](../../models/room-group-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomGroupArrayWrapper**](../../models/room-group-array-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
