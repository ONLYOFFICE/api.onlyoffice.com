# createRoomFromTemplate

> RoomFromTemplateStatusWrapper createRoomFromTemplate(CreateRoomFromTemplateDto)

`POST /api/2.0/files/rooms/fromtemplate`

Create a room from the template

Starts a job that creates a room in the Rooms section from a room template. Requires read access to the template and the right to create rooms. Other callers get 403. A user or a guest cannot create rooms. The call queues work and returns the progress record of the job. The room does not exist yet when the response arrives. Repeat `GET api/2.0/files/rooms/fromtemplate/status` until `isCompleted` is true. Then take `roomId` from it. A non-empty `error` means that the job failed. The job fails if the template is a public room while the portal forbids external sharing. The portal keeps one job record per account. Starting a new job deletes the record of a finished one. Wait for the running job to end before you start the next one. Settings that the body leaves out come from the template. With `copyLogo`, the call ignores `logo`. The call returns 400 if `title` is blank. It returns 403 if `quota` is set while the quota for this kind of room is turned off. If no room template has the `templateId`, the call returns 404.  Raises the `room.created` webhook once the queued operation builds the room. Raises the `room.updated` webhook after it when `quota` is given. Raises the `agent.created` webhook instead for a room built from an AI agent template. Raises the `agent.updated` webhook instead for such a room with `quota`.

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
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomFromTemplateStatusWrapper**](../models/room-from-template-status-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
