# changeRoomGroupIcon

> RoomGroupWrapper changeRoomGroupIcon(id, IconRequest)

`POST /api/2.0/files/group/{id}/icon`

Change room group icon

Changes the icon of a room group of the caller. Any signed-in user can call it, including a guest. A missing group or a group of another account returns 404, even for a DocSpace admin. The call changes data. You can repeat it with the same body. An empty `icon` removes the icon, and a null or missing `icon` changes nothing. The call returns 400 if `icon` is neither a built-in cover nor an empty string. It also returns 400 if the body is missing or is not JSON.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room group to re-icon, identified by the value `GET api/2.0/files/group` reports for it. A group of another account cannot be addressed and reads as missing. | [required] [example: `42`] |
| **IconRequest** | body | [**IconRequest**](../../models/icon-request.md) | The icon to give the group. A body that leaves the icon out is accepted and changes nothing. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room group with the new icon | [**RoomGroupWrapper**](../../models/room-group-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or the icon is neither a built-in cover nor an empty string | - | - |
| **404** | The group does not exist or belongs to another account | - | - |
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
