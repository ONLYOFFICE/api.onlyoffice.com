# aiPreferencesClearDeepMode

> AiSuccessResponse aiPreferencesClearDeepMode(body)

`DELETE /api/2.0/ai/preferences/clear-deep-mode`

Clear deep mode

Removes the stored extended-thinking setting of a scope (the depth and, with it, the deep-mode toggle), after which reads fall back to the configured default rather than to false. `entityId` picks a room and omitting it clears the portal-wide preference. Clearing a scope that has no stored value is not an error. This differs from storing false, which is an explicit choice a later read reports as set.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | The ID of the room whose preference is cleared, as a bare JSON string. Send an empty body to clear the portal-wide preference. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the scope has no preference of its own and now inherits the default. | [**AiSuccessResponse**](../../models/ai-success-response.md) | - |
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
