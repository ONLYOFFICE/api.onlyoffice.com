# createRoomFromTemplate

> RoomFromTemplateStatusWrapper createRoomFromTemplate(CreateRoomFromTemplateDto)

`POST /api/2.0/files/rooms/fromtemplate`

Create a room from the template

Starts a background job that copies a room template into a new room of the Rooms section, and answers with the same progress record that `GET api/2.0/files/rooms/fromtemplate/status` returns. The caller must be able to read the template and to create rooms at all, so a user or a guest is refused, and the checks run before the job is queued. The room does not exist when the response arrives: poll the status operation until `isCompleted` is true, then take `roomId` from it, and treat a non-empty `error` as a failed job. Only one such job is kept per account, and a finished one is discarded when the next is started, so a second creation loses the record of the first. Anything not sent is inherited from the template, and `copyLogo` keeps the template logo and makes `logo` pointless. `quota` is accepted only while the per-room quota feature is on, and a template of a public room cannot be instantiated while the portal forbids external sharing. A template that does not exist or cannot be read is answered as missing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateRoomFromTemplateDto** | body | [**CreateRoomFromTemplateDto**](../models/create-room-from-template-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The progress record of the room creation job | [**RoomFromTemplateStatusWrapper**](../models/room-from-template-status-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `templateId` or `title`, `title` is blank or longer than 170 characters, `color` is longer than 6 or `cover` longer than 50 characters, `logo` has no `tmpFile`, a position outside 0-1280 or a size outside 1-1280, `lifetime` has an unknown `period` or a `value` outside 1-999, or the `watermark` text is longer than 255 characters | - | - |
| **403** | The caller cannot read the template or is a user or a guest, or `quota` is set while the storage quota for rooms (for an AI agent template, for agents) is turned off | - | - |
| **404** | No room template with `templateId` exists | - | - |
| **500** | `logo.width` or `logo.height` is larger than 2147483647 | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomFromTemplateStatusWrapper**](../models/room-from-template-status-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
