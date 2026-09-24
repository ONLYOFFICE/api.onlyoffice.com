# aiThreadsTouch

> AiSuccessResponse aiThreadsTouch(aiThreadsTouch\_request)

`POST /api/2.0/ai/threads/touch`

Bump a thread's activity

Bumps a thread's last-edit date without adding a message, which resurfaces it in the list. Passing `profileId` also rebinds the thread to another model, so this is the operation to call when a model switch alone should count as activity. Nothing else about the thread changes and the answer only confirms the write. It is idempotent: repeating it simply moves the date forward again.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiThreadsTouch\_request** | body | [**aiThreadsTouch_request**](../../models/ai-threads-touch-request-body.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the thread's activity date moved forward. | [**AiSuccessResponse**](../../models/ai-success-response.md) | - |
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
