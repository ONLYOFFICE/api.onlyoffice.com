# aiOpenaiChatCompletions

> Map aiOpenaiChatCompletions(profileId, AiOpenaiChatCompletionsRequest)

`POST /api/2.0/ai/openai/{profileId}/v1/chat/completions`

OpenAI chat completions passthrough

OpenAI-compatible chat completions for the document editor's AI plugin. The profile is resolved server-side, its credentials are attached, and the body is forwarded to the provider as sent - the payload is owned by the plugin's SDK on one end and the provider on the other - except that a JSON body which names no `model` gets the profile's model filled in; a `model` the body carries wins. The provider's 4xx answers are relayed with their status and body, so a 429 and the provider's own error envelope surface as they stand; a 5xx from the provider or from the hop in front of it is not relayed - its detail stays in the server log and the call answers a fixed 502 envelope. A client disconnect cancels the provider call.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **profileId** | path | **String** | The AI provider profile identifier. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **AiOpenaiChatCompletionsRequest** | body | **Map** | An OpenAI Chat Completions request, forwarded to the provider as sent. The shape is the provider's, not this API's, so consult the provider's own reference. The credentials come from the profile in the path and must not be sent here; the profile's model is used when the body names none, and a `model` in the body takes precedence. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The provider's own response, relayed with its status and content type (a 5xx excepted). | **Map** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**aiOpenaiChatCompletions_403_response**](../../models/ai-openai-chat-completions-403-response.md) | - |
| **404** | No profile with this identifier exists for the caller. | [**aiOpenaiChatCompletions_403_response**](../../models/ai-openai-chat-completions-403-response.md) | - |
| **413** | The request body is larger than this route accepts. | [**aiOpenaiChatCompletions_403_response**](../../models/ai-openai-chat-completions-403-response.md) | - |
| **429** | Relayed verbatim from the AI provider, which is rate-limiting this portal's key. | [**aiOpenaiChatCompletions_403_response**](../../models/ai-openai-chat-completions-403-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**aiOpenaiChatCompletions_403_response**](../../models/ai-openai-chat-completions-403-response.md) | - |
| **502** | The provider, or the hop in front of it, failed or answered a 5xx; the detail is in the server log. | [**aiOpenaiChatCompletions_403_response**](../../models/ai-openai-chat-completions-403-response.md) | - |

## Return type

**Map**

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
