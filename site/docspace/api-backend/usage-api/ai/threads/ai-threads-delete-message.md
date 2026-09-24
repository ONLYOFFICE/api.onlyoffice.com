# aiThreadsDeleteMessage

> AiSuccessResponse aiThreadsDeleteMessage(body)

`DELETE /api/2.0/ai/threads/delete-message`

Delete message

Deletes one message and leaves the rest of the thread untouched. `messageId` is required and may be sent either in the body or as a query parameter. An unknown ID is not reported: the call answers success without having deleted anything, so verify with `GET api/2.0/ai/threads/read-messages` when it matters. The deletion is permanent.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the message to delete, as a bare JSON string. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the request was accepted, whether or not a message was deleted. | [**AiSuccessResponse**](../../models/ai-success-response.md) | - |
| **400** | `messageId` is missing. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiSuccessResponse**](../../models/ai-success-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
