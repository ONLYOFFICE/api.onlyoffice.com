# resetRoomQuota

> FolderIntegerArrayWrapper resetRoomQuota(UpdateRoomsRoomIdsRequestDtoInteger)

`PUT /api/2.0/files/rooms/resetquota`

Reset the room quota limit

Returns every listed room to the default room quota of the portal and streams the updated rooms back in the order they were given. This is not the same as removing the limit: the room stops carrying its own value and starts following the portal default, which a portal administrator can change at any time. The per-room quota feature has to be on, the caller must be a manager of each listed room, and an archived room or a room in the trash is refused. The list is not transactional, so rooms processed before a failing one keep the default and the rest keep what they had. Only numeric room ids are processed, which means ids of rooms stored in a connected third-party account are silently skipped. Use `PUT api/2.0/files/rooms/roomquota` to set an explicit value, and a quota of -1 in `PUT api/2.0/files/rooms/{id}` to leave the room with no custom limit at all.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateRoomsRoomIdsRequestDtoInteger** | body | [**UpdateRoomsRoomIdsRequestDtoInteger**](../../models/update-rooms-room-ids-request-dto-integer.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The rooms as they are after the default limit was restored | [**FolderIntegerArrayWrapper**](../../models/folder-integer-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderIntegerArrayWrapper**](../../models/folder-integer-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
