# getRoomsNotificationSettings

Referenced types are defined in the [full reference](../api.md).

> RoomsNotificationSettingsWrapper getRoomsNotificationSettings()

`GET /api/2.0/settings/notification/rooms`

Get muted rooms

Returns the rooms the calling user has silenced, as the `disabledRooms` list of their identifiers. The list describes the caller's own account only, the call is read-only, and an empty list means nothing is silenced. Every signed-in member reads its own list, whatever its role - owner, administrator, user or guest - and no permission is demanded. The identifiers come back the way `POST api/2.0/settings/notification/rooms` stored them, in the order they were added and without paging; they are kept as opaque values, so both the numeric identifier of a portal room and the string identifier of a room on a connected third-party account appear here, and an identifier stays in the list after the room itself is deleted. While a room is on this list its activity is left out of the hourly room digest and of the daily feed, the letters that room would send at once are not sent, and its new-item counters are hidden from the Files responses. Silencing a room changes nothing for its other members. The kinds of notification this list is applied to are switched with `POST api/2.0/settings/notification`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The identifiers of the rooms the calling user has silenced | [**RoomsNotificationSettingsWrapper**](../api.md#model-roomsnotificationsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomsNotificationSettingsWrapper**](../api.md#model-roomsnotificationsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
