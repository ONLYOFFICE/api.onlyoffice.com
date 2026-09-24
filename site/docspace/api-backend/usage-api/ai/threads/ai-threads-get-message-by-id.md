# aiThreadsGetMessageById

> AiThreadMessageLike aiThreadsGetMessageById(messageId)

`GET /api/2.0/ai/threads/get-message-by-id`

Get one chat message

Returns one message by its ID, wherever it sits, without needing the thread it belongs to. `messageId` is required. Unlike `GET api/2.0/ai/threads/get-by-id` an unknown ID is not reported as 404: the answer is an empty body with status 200, so a client has to treat a missing payload as no such message. Message IDs come from the thread history or from the answer of `POST api/2.0/ai/threads/append-user-message`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **messageId** | query | **String** | The globally unique chat message identifier. | [required] [example: `22222222-2222-2222-2222-222222222222`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The message, or an empty body when no message has that ID. | [**AiThreadMessageLike**](../../models/ai-thread-message-like.md) | - |
| **400** | `messageId` is missing. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiThreadMessageLike**](../../models/ai-thread-message-like.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
