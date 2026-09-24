# aiAssignmentsUnassign

> AiSuccessResponse aiAssignmentsUnassign(body)

`DELETE /api/2.0/ai/assignments/unassign`

Clear an action's profile

Clears the portal-wide binding of one AI action, after which the action falls back to the `Default` slot. `actionType` is required and may be sent in the body or as a query parameter. An action whose slot is already empty is not reported as an error - the call answers success either way, so it is safe to repeat. Clearing `Default` itself leaves the actions that relied on it unresolvable.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the action now has no profile of its own. | [**AiSuccessResponse**](../../models/ai-success-response.md) | - |
| **400** | `actionType` is missing. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
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
