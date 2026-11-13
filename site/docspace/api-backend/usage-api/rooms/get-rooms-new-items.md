# getRoomsNewItems

> NewItemsRoomNewItemsArrayWrapper getRoomsNewItems()

`GET /api/2.0/files/rooms/news`

Get new items in all rooms

Returns the items marked as new for the caller in all active rooms. The list is grouped by the day of the change, then by room. Any signed-in user can call it. An item is new when another user creates or changes it in a room that the caller has opened. So the list never has the caller's own changes. The list has only files, including files in subfolders at any depth. A new subfolder is not an item. Days come newest first. Inside a day, rooms and files follow the same order by change time. The call is read-only and does not clear the marks. Opening the room with `GET api/2.0/files/rooms/{id}` clears them. An empty array means that the caller has nothing new. To get the new items of one room, use `GET api/2.0/files/rooms/{id}/news`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new entries of every active room, grouped by day and by room | [**NewItemsRoomNewItemsArrayWrapper**](../models/new-items-room-new-items-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**NewItemsRoomNewItemsArrayWrapper**](../models/new-items-room-new-items-array-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
