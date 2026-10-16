# updateRoomsQuota

> FolderArrayWrapper updateRoomsQuota(UpdateRoomsQuotaRequestDto)

`PUT /api/2.0/files/rooms/roomquota`

Change the room quota limit

Sets the same custom storage limit, in bytes, on every listed room and streams the updated rooms back in the order they were given. The per-room quota feature has to be on for the portal, and the value must stay within the portal own limit, otherwise the call is refused before anything is written. The caller must be a manager of each listed room, and an archived room or a room in the trash is refused. The list is not transactional: rooms processed before the offending one keep their new limit, so a failed call has to be checked room by room. Only numeric room ids are processed, which means ids of rooms stored in a connected third-party account are silently skipped. A room whose limit already equals the requested value is left untouched and still returned. To go back to the portal default use `PUT api/2.0/files/rooms/resetquota`, and to drop the custom limit entirely send a quota of -1 to `PUT api/2.0/files/rooms/{id}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateRoomsQuotaRequestDto** | body | [**UpdateRoomsQuotaRequestDto**](../../models/update-rooms-quota-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The rooms as they are after the new limit was applied | [**FolderArrayWrapper**](../../models/folder-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The storage quota for rooms (for an AI agent, for agents) is turned off, `quota` exceeds the storage limit of the portal, or the caller may not edit a listed room or it lies in Trash or in the archive | - | - |
| **500** | A listed room does not exist, or an id is a number that is not a 32-bit integer | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
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
