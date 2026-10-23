# aiThreadsUpdateMessage

> AiSuccessResponse aiThreadsUpdateMessage(AiThreadsUpdateMessageRequest)

`PUT /api/2.0/ai/threads/update-message`

Update message

Replaces the content of one stored message, which is how the edit and regenerate flows change a message outside the streaming lifecycle. The whole message is overwritten by the one supplied rather than merged, so send a complete object with a known `role` and a content that is a non-blank string or a part list with at least one real part - a tool-call-only assistant message counts, an empty list does not. The role has to match the stored message's: a user message cannot be turned into an assistant one. An unknown `messageId` answers 404. The answer only confirms the write.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiThreadsUpdateMessageRequest** | body | [**AiThreadsUpdateMessageRequest**](../../models/ai-threads-update-message-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the replacement was stored. | [**AiSuccessResponse**](../../models/ai-success-response.md) | - |
| **400** | `messageId` is missing, the message is empty or has an unknown role, or its role differs from the stored message's. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | No message has this ID. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiSuccessResponse**](../../models/ai-success-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
