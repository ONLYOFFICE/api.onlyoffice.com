# aiAgentsUpdateQuota

Referenced types are defined in the [full reference](../aichat.md).

> AiFolderIntegerArrayWrapper aiAgentsUpdateQuota(aiAgentsUpdateQuota\_request)

`PUT /api/2.0/ai/agents/agentquota`

Update agents' quota

Sets the storage quota of the listed AI agent rooms in one call, forwarding `roomIds` and `quota` to the DocSpace AI service unchanged. The answer is that service's payload, one updated room per entry. A quota applies to the room's stored files, not to the model usage of its chats. Use `PUT api/2.0/ai/agents/resetquota` to return rooms to the portal default instead of naming a number.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiAgentsUpdateQuota\_request** | body | [**aiAgentsUpdateQuota_request**](../aichat.md#model-aiagentsupdatequota-request-body) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The updated agent rooms, one entry each. | [**AiFolderIntegerArrayWrapper**](../aichat.md#model-aifolderintegerarraywrapper) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |

## Return type

[**AiFolderIntegerArrayWrapper**](../aichat.md#model-aifolderintegerarraywrapper)

## Authorization

[cookieAuth](../aichat.md#cookieauth), [bearerAuth](../aichat.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## AIAssignmentsApi
