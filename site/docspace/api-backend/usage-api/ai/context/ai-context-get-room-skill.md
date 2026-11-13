# aiContextGetRoomSkill

> String aiContextGetRoomSkill(roomId, skillId, cloud)

`GET /api/2.0/ai/context/get-room-skill`

Get room skill

Returns the Markdown file of one skill of an Instructions room as a JSON string. `roomId` and `skillId` are required, and the skill has to be one of that room's skills: the ID of any other file, readable or not, answers 404, as does a room that is not an Instructions room the caller can read. Only the first 256 KiB of the file are read, which covers the 64 K characters a chat passes to the model; a longer file comes back cut there without a signal. This is a read-only operation.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **roomId** | query | **String** | The Instructions room identifier. | [required] |
| **skillId** | query | **String** | The skill identifier, as `GET api/2.0/ai/context/get-room-skills` lists it. | [required] |
| **cloud** | query | **String** | The account the room belongs to. Only `docspace`, this portal, exists, and the value is not read; omit it. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The skill's Markdown file as a JSON string, its first 256 KiB. | **String** | - |
| **400** | `roomId` or `skillId` is missing. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The room is not an Instructions room the caller can read, or `skillId` is not one of its skills. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

**String**

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
