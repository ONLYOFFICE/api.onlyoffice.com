# getRoomsNewItems

> NewItemsRoomNewItemsArrayWrapper getRoomsNewItems()

`GET /api/2.0/files/rooms/news`

Get new items in all rooms

Collects everything that is marked as new for the caller across the active rooms into one answer, grouped first by the day an entry changed and then by the room it belongs to. An entry becomes new when somebody else creates or changes it in a room the caller has already opened, so the caller's own work never shows up here, and neither does anything from a room they have never visited. Only files are listed: a new subfolder is not an item, although files created inside it are, at any depth. The days come newest first, and inside a day the rooms and their files follow the same order by change time. The archive is out of scope, only rooms of the active section are covered. Reading the list clears nothing: the marks stay until the room itself is opened with `GET api/2.0/files/rooms/{id}`. An empty array means that this account has nothing new. For one room, use `GET api/2.0/files/rooms/{id}/news`.

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
