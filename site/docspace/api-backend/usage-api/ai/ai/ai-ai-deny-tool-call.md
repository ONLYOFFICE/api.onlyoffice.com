# aiAiDenyToolCall

> AiChatEvent aiAiDenyToolCall(AiAiToolCallData)

`POST /api/2.0/ai/ai/deny-tool-call`

Deny tool call

Refuses the tool call a chat round is paused on and resumes it immediately, streaming the continuation as newline-delimited `ChatEvent` objects. The literal `User deny tool call` is persisted in place of the tool result, so the model sees an explicit refusal rather than a missing answer and may reply without the tool or ask for something else. Nothing is executed and no result is accepted from the caller. Use `POST api/2.0/ai/ai/approve-tool-call` to supply a result instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiAiToolCallData** | body | [**AiAiToolCallData**](../../models/ai-ai-tool-call-data.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Newline-delimited stream of chat events — one JSON `ChatEvent` object per line. | [**AiChatEvent**](../../models/ai-chat-event.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiChatEvent**](../../models/ai-chat-event.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/x-ndjson, application/json
