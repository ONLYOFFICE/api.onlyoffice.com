# aiPreferencesGetToolPermissionMode

> AiChatToolPermissionMode aiPreferencesGetToolPermissionMode(entityId)

`GET /api/2.0/ai/preferences/get-tool-permission-mode`

Get tool permission mode

Returns how a tool call the model makes is approved for the calling user, in the chat library's spelling: `ask` prompts for every call bar the tools pinned as always allowed, `auto` also runs a tool that opted out of approval itself or is annotated read-only / non-destructive, `allow` runs everything without asking. The mode is one value per user, stored in the user's AI settings (the same value `GET api/2.0/ai/config/tool-mode` reports as the AI service's enum); `entityId` is accepted for symmetry with the depth routes and ignored. The AI service's default is `auto`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The mode in force for the scope, as a bare JSON string, falling back to `ask` when none is stored. | [**AiChatToolPermissionMode**](../../models/ai-chat-tool-permission-mode.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiChatToolPermissionMode**](../../models/ai-chat-tool-permission-mode.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
