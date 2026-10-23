# aiThreadsReadMessages

> List aiThreadsReadMessages(threadId, count, cursor, direction)

`GET /api/2.0/ai/threads/read-messages`

Read messages

Reads the messages of one thread, oldest first, with the same string-encoded JSON cursor as the thread list. `direction` turns the read around, and only the exact value `desc` does so - anything else, including a misspelling, reads forward. `threadId` is required and a missing one answers 400, so an empty list always means a thread with no messages. A malformed cursor is ignored and the read starts from the beginning.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **threadId** | query | **String** | The chat thread identifier. | [required] [example: `11111111-1111-1111-1111-111111111111`] |
| **count** | query | **Integer** | The maximum number of items to return in one page. | [optional] [example: `20`] |
| **cursor** | query | **String** | The keyset pagination cursor: the JSON-encoded sort key of the last item already received. Omit for the first page. | [optional] [example: `{"id":"11111111-1111-1111-1111-111111111111","lastEditDate":1767225600000}`] |
| **direction** | query | **String** | The order the message page is read in. Only desc turns the read around and pages back from the newest message; omit for the forward read. | [optional] [example: `desc`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The thread's messages, oldest first unless `direction` reversed them. | [**List**](../../models/ai-thread-message-like.md) | - |
| **400** | `threadId` is missing. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**List**](../../models/ai-thread-message-like.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
