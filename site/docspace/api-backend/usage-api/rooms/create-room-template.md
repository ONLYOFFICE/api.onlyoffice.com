# createRoomTemplate

> RoomTemplateStatusWrapper createRoomTemplate(RoomTemplateDto)

`POST /api/2.0/files/roomtemplate`

Create a room template

Starts a job that creates a room template from a room, and returns the job state. The portal saves the template in the Templates section. The template takes the type, indexing, storage limit, lifetime, download, and watermark settings of the room. The job copies the files and ordinary subfolders of the room, but not its service subfolders. Requires room manager access to the source room. Other callers get 403, even a DocSpace admin. The call queues work. Poll `GET api/2.0/files/roomtemplate/status` until `isCompleted` is true, then read `templateId`. While a job of the caller runs, a repeated call starts nothing and returns its state. After the job ends, a repeated call creates another template. If `public` is true, the call ignores `share` and `groups` and shares the template with everyone. If `copyLogo` is true, the call ignores `logo`. If `roomId` is not a room of the Rooms section, the call returns 404. The call returns 403 if the room is archived or private. It also returns 403 if `quota` is set while room quotas are turned off. The call returns 400 if `roomId` is missing, `title` is empty, or a value breaks its limits.  Raises the `room.created` webhook for the new template, once the queued operation builds it. Raises the `room.updated` webhook after it when `quota` is given. Raises the `agent.created` webhook instead for an AI agent template. Raises the `agent.updated` webhook instead for an AI agent template with `quota`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **RoomTemplateDto** | body | [**RoomTemplateDto**](../models/room-template-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the template creation just queued: `isCompleted` is still false, so the job has to be polled for its result | [**RoomTemplateStatusWrapper**](../models/room-template-status-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `roomId`, `title` is empty or longer than 400 characters, `color` is longer than 6 or `cover` longer than 50 characters, or `logo` has no `tmpFile` or a position or size outside 0-1280 | - | - |
| **403** | The source room is archived or private, the caller cannot edit it, or `quota` is set while the storage quota for rooms (for an AI agent, for agents) is turned off | - | - |
| **404** | No room with `roomId` exists in the Rooms section | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomTemplateStatusWrapper**](../models/room-template-status-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
