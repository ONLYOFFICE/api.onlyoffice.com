# aiSendCustom

> AiThreadMessageLike aiSendCustom(AiSendCustomRequest)

`POST /api/2.0/ai/ai/send-custom`

Send custom

Runs a free-form one-turn call against a system prompt supplied in the request, with no thread, no history and nothing persisted. The model is the explicit `profileId` when it resolves, otherwise the `Default` assignment slot. `systemPrompt` is required and `userMessage` has to carry text or an attachment, or the call answers 400 before anything runs. The shape of the answer depends on the body rather than on the route: with `isStream: true` it arrives as a newline-delimited stream of chat events, and without it as a single JSON document, so a client has to handle both; `isStream` has to be a real boolean when sent, a string is refused. Use `POST api/2.0/ai/ai/send` when the prompt should come from the portal's own action configuration instead of from the caller.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiSendCustomRequest** | body | [**AiSendCustomRequest**](../../models/ai-send-custom-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The assistant's reply as one message, or a newline-delimited stream of chat events when `isStream` was set. Nothing was persisted. | [**AiThreadMessageLike**](../../models/ai-thread-message-like.md) | - |
| **400** | `systemPrompt` is missing or empty, `userMessage` carries neither text nor an attachment, or `isStream` is not a boolean. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiThreadMessageLike**](../../models/ai-thread-message-like.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
