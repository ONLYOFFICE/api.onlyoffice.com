# aiAiRegenerateStream

> AiChatEvent aiAiRegenerateStream(aiAiRegenerateStream\_request)

`POST /api/2.0/ai/ai/regenerate-stream`

Regenerate stream

Re-rolls the last assistant reply of an existing thread: every message after the last user message - the previous reply and any tool-call hops - is dropped, and a fresh reply is streamed as newline-delimited `ChatEvent` objects against the unchanged prompt. The thread has to exist already, `threadId` is required, and no title is generated. The dropped messages are gone for good, so this is a destructive operation on the thread's tail rather than a retry that keeps both answers. Unlike `send-with-stream` the profile is not verified before the stream opens, so an unusable model surfaces as an error frame inside the 200 rather than as a 4xx.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAiRegenerateStream\_request** | body | [**aiAiRegenerateStream_request**](../../models/ai-ai-regenerate-stream-request-body.md) |  | [required] |

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
