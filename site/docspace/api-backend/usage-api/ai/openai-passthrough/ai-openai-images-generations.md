# aiOpenaiImagesGenerations

> Map aiOpenaiImagesGenerations(profileId, AiOpenaiImagesGenerationsRequest)

`POST /api/2.0/ai/openai/{profileId}/v1/images/generations`

OpenAI image generation passthrough

OpenAI-compatible image generation for the document editor's AI plugin, working as the chat-completions passthrough does: the profile named by `profileId` is resolved server-side, its credentials are attached, and the body reaches the provider as sent. The documented OpenAI fields are checked first - `prompt` has to be a non-empty string, `n` a positive integer, `model`, `size`, `quality`, `style` and `response_format` strings when present - and a body failing that answers 400 instead of whatever the provider would have made of it; fields outside that set are passed on untouched. The provider's 4xx status and body are relayed, so its 429 and its own error envelope surface as they stand; a 5xx is replaced by a fixed 502 envelope with the detail kept in the server log. A body larger than this route accepts is refused before it is forwarded. A client disconnect aborts the provider call.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **profileId** | path | **String** | The AI provider profile identifier. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **AiOpenaiImagesGenerationsRequest** | body | **Map** | An OpenAI image-generation request, forwarded to the provider as sent once its documented fields pass a type check. The shape is the provider's, not this API's, and the credentials come from the profile in the path. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The provider's own response, relayed with its status and content type (a 5xx excepted). | **Map** | - |
| **400** | `prompt` is missing or empty, `n` is not a positive integer, or a documented string field has another type. | [**aiOpenaiChatCompletions_403_response**](../../models/ai-openai-chat-completions-403-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**aiOpenaiImagesGenerations_403_response**](../../models/ai-openai-images-generations-403-response.md) | - |
| **404** | No profile with this identifier exists for the caller. | [**aiOpenaiImagesGenerations_403_response**](../../models/ai-openai-images-generations-403-response.md) | - |
| **413** | The request body is larger than this route accepts. | [**aiOpenaiImagesGenerations_403_response**](../../models/ai-openai-images-generations-403-response.md) | - |
| **429** | Relayed verbatim from the AI provider, which is rate-limiting this portal's key. | [**aiOpenaiImagesGenerations_403_response**](../../models/ai-openai-images-generations-403-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**aiOpenaiImagesGenerations_403_response**](../../models/ai-openai-images-generations-403-response.md) | - |
| **502** | The provider, or the hop in front of it, failed or answered a 5xx; the detail is in the server log. | [**aiOpenaiImagesGenerations_403_response**](../../models/ai-openai-images-generations-403-response.md) | - |

## Return type

**Map**

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
