# aiAiApproveToolCall

> AiChatEvent aiAiApproveToolCall(aiAiApproveToolCall\_request)

`POST /api/2.0/ai/ai/approve-tool-call`

Approve tool call

Resumes a chat round that a tool call has paused, and streams the continuation as newline-delimited `ChatEvent` objects. The result supplied in the request is persisted onto the assistant message that issued the call, so the tool is not executed here - the caller runs it and reports the outcome. The round continues against the augmented history and may pause again on a further tool call. Call `POST api/2.0/ai/ai/deny-tool-call` instead to refuse the call and let the model answer without it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAiApproveToolCall\_request** | body | [**aiAiApproveToolCall_request**](../../models/ai-ai-approve-tool-call-request-body.md) |  | [required] |

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
