# aiAgentsNews

Referenced types are defined in the [full reference](../aichat.md).

> AiNewItemsAgentNewItemsArrayWrapper aiAgentsNews()

`GET /api/2.0/ai/agents/news`

List agent news items

Lists the unread items across the caller's AI agent rooms, so a badge can be rendered without walking each room. It takes no parameters and is scoped to the caller by the DocSpace AI service. The answer is that service's new-items payload. This is a read-only operation and does not mark anything as seen.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The unread items of the caller's agent rooms. | [**AiNewItemsAgentNewItemsArrayWrapper**](../aichat.md#model-ainewitemsagentnewitemsarraywrapper) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |

## Return type

[**AiNewItemsAgentNewItemsArrayWrapper**](../aichat.md#model-ainewitemsagentnewitemsarraywrapper)

## Authorization

[cookieAuth](../aichat.md#cookieauth), [bearerAuth](../aichat.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
