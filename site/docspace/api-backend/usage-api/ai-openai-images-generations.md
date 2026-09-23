# aiOpenaiImagesGenerations

Referenced types are defined in the [full reference](../aichat.md).

> Map aiOpenaiImagesGenerations(profileId, request\_body)

`POST /api/2.0/ai/openai/{profileId}/v1/images/generations`

OpenAI image generation passthrough

OpenAI-compatible image generation for the document editor's AI plugin, working exactly as the chat-completions passthrough does: the profile named by `profileId` is resolved server-side, its credentials are attached, and the body reaches the provider unchanged. The provider's status and body are relayed verbatim, so its 429 and its own error envelope surface as they stand. A body larger than this route accepts is refused before it is forwarded. A client disconnect aborts the provider call.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **profileId** | path | **String** | The AI provider profile identifier. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **request\_body** | body | **Map** | An OpenAI image-generation request, forwarded to the provider byte for byte. The shape is the provider's, not this API's, and the credentials come from the profile in the path. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The provider's own response, relayed verbatim with its status and content type. | **Map** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**aiOpenaiChatCompletions_403_response**](../aichat.md#model-aiopenaichatcompletions-403-response) | - |
| **404** | No profile with this identifier exists for the caller. | [**aiOpenaiChatCompletions_403_response**](../aichat.md#model-aiopenaichatcompletions-403-response) | - |
| **413** | The request body is larger than this route accepts. | [**aiOpenaiChatCompletions_403_response**](../aichat.md#model-aiopenaichatcompletions-403-response) | - |
| **429** | Relayed verbatim from the AI provider, which is rate-limiting this portal's key. | [**aiOpenaiChatCompletions_403_response**](../aichat.md#model-aiopenaichatcompletions-403-response) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**aiOpenaiChatCompletions_403_response**](../aichat.md#model-aiopenaichatcompletions-403-response) | - |
| **502** | The AI provider could not be reached, or answered with a failure of its own. | [**aiOpenaiChatCompletions_403_response**](../aichat.md#model-aiopenaichatcompletions-403-response) | - |

## Return type

**Map**

## Authorization

[cookieAuth](../aichat.md#cookieauth), [bearerAuth](../aichat.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIPreferencesApi
