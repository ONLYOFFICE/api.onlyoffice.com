# getRoomCovers

> CoversResultArrayWrapper getRoomCovers()

`GET /api/2.0/files/rooms/covers`

Get room cover gallery

Returns the built-in cover images for rooms. Each entry has the ID for `POST api/2.0/files/rooms/{id}/cover` and the image as vector markup. The list is the same for all portals, rooms, accounts, and languages. The IDs do not change, so you can store them. The images can change between product versions. Any signed-in user can call it. A guest who has nothing shared on the portal gets 403. The call is read-only. Only the IDs of this list are valid covers when you create or change a room.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The built-in room covers with their identifiers and vector markup | [**CoversResultArrayWrapper**](../models/covers-result-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a guest with whom nothing on the portal has been shared | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CoversResultArrayWrapper**](../models/covers-result-array-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
