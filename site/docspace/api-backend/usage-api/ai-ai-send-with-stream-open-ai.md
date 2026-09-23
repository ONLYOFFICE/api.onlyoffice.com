# aiAiSendWithStreamOpenAI

Referenced types are defined in the [full reference](../aichat.md).

> AiOpenAIStreamChunk aiAiSendWithStreamOpenAI(AiAiSendStreamBody)

`POST /api/2.0/ai/ai/send-with-stream-openai`

Stream a chat in OpenAI format

The same chat round as `send-with-stream`, re-encoded as a server-sent-events stream of OpenAI `chat.completion.chunk` objects terminated by a `[DONE]` sentinel. Thread handling, persistence, title generation and the profile pre-flight are identical, and a tool call ends the stream with `finish_reason: tool_calls` instead of a pause event - resume it through the same approve and deny operations. Unlike `send-with-stream` it does not reject an empty user message and does not enforce the per-kind attachment cap, so validate both before calling. Choose this route only for a client that already speaks the OpenAI wire format; `POST api/2.0/ai/ai/send-with-stream` is the native one.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiAiSendStreamBody** | body | [**AiAiSendStreamBody**](../aichat.md#model-aiaisendstreambody) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Server-sent events stream of OpenAI `chat.completion.chunk` objects, terminated by a `[DONE]` sentinel. | [**AiOpenAIStreamChunk**](../aichat.md#model-aiopenaistreamchunk) | - |
| **400** | The prompt is empty, or no AI profile could be resolved for the requested action. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **402** | The portal has no paid AI quota left, so the profile bound to this action cannot be dispatched. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |

## Return type

[**AiOpenAIStreamChunk**](../aichat.md#model-aiopenaistreamchunk)

## Authorization

[cookieAuth](../aichat.md#cookieauth), [bearerAuth](../aichat.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/event-stream, application/json

## AIAgentsApi
