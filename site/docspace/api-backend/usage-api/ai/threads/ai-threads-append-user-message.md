# aiThreadsAppendUserMessage

> aiThreadsAppendUserMessage_200_response aiThreadsAppendUserMessage(aiThreadsAppendUserMessage\_request)

`POST /api/2.0/ai/threads/append-user-message`

Append user message

Stores a user message in a thread and bumps its last-edit date so the thread resurfaces at the top of the list. The per-kind attachment cap of the composer is enforced here as well, so a direct API call cannot exceed what the UI allows. Passing `profileId` rebinds the thread to another model, which is how a mid-conversation model switch is recorded. The answer carries the new message's ID; the message is stored as sent and no reply is generated - run a round with `POST api/2.0/ai/ai/send-with-stream` for that.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiThreadsAppendUserMessage\_request** | body | [**aiThreadsAppendUserMessage_request**](../../models/ai-threads-append-user-message-request-body.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored message, with the ID storage assigned to it. | [**aiThreadsAppendUserMessage_200_response**](../../models/ai-threads-append-user-message-200-response.md) | - |
| **400** | The message is longer than the limit allows. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**aiThreadsAppendUserMessage_200_response**](../../models/ai-threads-append-user-message-200-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
