# aiAssignmentsAssign

> AiAssignmentMutationResult aiAssignmentsAssign(aiAssignmentsAssign\_request)

`PUT /api/2.0/ai/assignments/assign`

Bind a profile to an action

Binds a profile to one AI action portal-wide, creating the assignment or replacing it in place, and returns the result. Both `actionType` and `profileId` are required. The profile's declared capabilities are checked against the action, so a model that cannot generate images cannot be bound to `ImageGeneration` - the `Default` slot is exempt, because it stands in for every action. There is no room-scoped form of this write: a room's own binding is created by the agent that owns it, while reads accept an `entityId`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAssignmentsAssign\_request** | body | [**aiAssignmentsAssign_request**](../../models/ai-assignments-assign-request-body.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the binding was stored. A failure is reported in `error` rather than as a status. | [**AiAssignmentMutationResult**](../../models/ai-assignment-mutation-result.md) | - |
| **400** | `actionType` or `profileId` is missing. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiAssignmentMutationResult**](../../models/ai-assignment-mutation-result.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
