# aiAssignmentsResolveForAction

> AiResolvedAssignment aiAssignmentsResolveForAction(actionType, entityId)

`GET /api/2.0/ai/assignments/resolve-for-action`

Resolve for action

Returns the profile that will serve one AI action, falling back to the `Default` slot when the action has no profile of its own. `actionType` is required and has to be one of the known actions - an unknown or misspelled value is rejected rather than resolved to the default. `entityId` narrows the lookup to a room and has to name one the caller can open - an unknown room answers 404 rather than quietly resolving portal-wide - while an accessible room with no assignment of its own degrades to the portal-wide one. When neither slot is set, the slot names a profile that no longer exists, or the `Default` profile cannot serve the action, the call answers 404, so use `GET api/2.0/ai/assignments/try-resolve-for-action` when an unconfigured portal should answer empty instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **actionType** | query | **String** | The AI action the request applies to - one of Default, Chat, Code, Summarization, Translation, TextAnalyze, ImageGeneration, OCR, Vision, FormAnalysis. | [required] [example: `Chat`] |
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile that will serve the action. | [**AiResolvedAssignment**](../../models/ai-resolved-assignment.md) | - |
| **400** | `actionType` is missing or unknown. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | No profile can serve the action, or `entityId` names a room that does not exist. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiResolvedAssignment**](../../models/ai-resolved-assignment.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
