# updateRoomsQuota

> FolderArrayWrapper updateRoomsQuota(UpdateRoomsQuotaRequestDto)

`PUT /api/2.0/files/rooms/roomquota`

Change the room quota limit

Sets one custom storage limit, in bytes, on each listed room. It returns the updated rooms in the order of `roomIds`. Requires the room manager role in each room. Other callers get 403. The call changes data, and you can repeat it with the same body. A room that already has this limit stays the same and is still returned. The call skips unknown rooms and rooms in third-party storage. The call is not atomic. If a room fails, the rooms before it keep the new limit. So check each room after a failed call. The call returns 403 if the room quota feature is turned off, or `quota` exceeds the portal storage limit. For AI agents, it checks the agent quota feature instead. It also returns 403 for a room in Trash or in the archive. To restore the portal default, use `PUT api/2.0/files/rooms/resetquota`. To remove the custom limit, send a `quota` of `-1` to `PUT api/2.0/files/rooms/{id}`.  Raises the `room.updated` webhook for every listed room, even when its quota does not change. Raises the `agent.updated` webhook instead for a listed AI agent. Raises the `folder.updated` webhook instead for a listed ID that is a folder, not a room.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateRoomsQuotaRequestDto** | body | [**UpdateRoomsQuotaRequestDto**](../../models/update-rooms-quota-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The rooms as they are after the new limit was applied | [**FolderArrayWrapper**](../../models/folder-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The storage quota for rooms (for an AI agent, for agents) is turned off, `quota` exceeds the storage limit of the portal, or the caller may not edit a listed room or it lies in Trash or in the archive | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderArrayWrapper**](../../models/folder-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
