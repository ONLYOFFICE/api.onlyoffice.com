# createRoomTemplate

> RoomTemplateStatusWrapper createRoomTemplate(RoomTemplateDto)

`POST /api/2.0/files/roomtemplate`

Create a room template

Queues a background job that turns an existing room into a reusable room template, and returns the state of that job right away. The template lands in the portal's Templates section, inherits the source room's type, privacy, indexing, storage limit, lifetime, download and watermark settings, and receives copies of the room's files together with its ordinary subfolders and everything inside them; the service subfolders a room keeps for its own workflows are left out. The caller needs room-manager rights on the source room, and the room must not be archived: a room that cannot be found under Rooms is answered as missing, and every other refusal comes back as a rejection. The template is not ready when the response arrives, so poll `GET api/2.0/files/roomtemplate/status` until `isCompleted` is true, then read `templateId`; a non-empty `error` there means the job failed and the half-built template was removed. Only one template creation is tracked per caller, and starting another replaces the previous record. Setting `public` to true discards `share` and `groups` and shares the finished template with everyone instead, while `copyLogo` reuses the source room's own picture and makes `logo` irrelevant.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **RoomTemplateDto** | body | [**RoomTemplateDto**](../models/room-template-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the template creation just queued: `isCompleted` is still false, so the job has to be polled for its result | [**RoomTemplateStatusWrapper**](../models/room-template-status-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomTemplateStatusWrapper**](../models/room-template-status-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
