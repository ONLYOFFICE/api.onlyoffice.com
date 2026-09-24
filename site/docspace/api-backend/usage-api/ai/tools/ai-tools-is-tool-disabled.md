# aiToolsIsToolDisabled

> Boolean aiToolsIsToolDisabled(serverType, toolName, entityId)

`GET /api/2.0/ai/tools/is-tool-disabled`

Is tool disabled

Tells whether one named tool of one server type is switched off in the scope. Both `serverType` and `toolName` are required and are read from the query; `entityId` picks the scope. The answer is a bare boolean. It reflects only the disable list - a tool that is on offer may still require approval, which `GET api/2.0/ai/tools/is-allow-always` reports.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **serverType** | query | **String** | The MCP server type the tool belongs to. | [required] [example: `docspace`] |
| **toolName** | query | **String** | The tool name. | [required] [example: `docspace_get_folder`] |
| **entityId** | query | **String** | The DocSpace entity the request is scoped to - the room, folder or agent workspace the chat is invoked from. Omit for the portal-wide scope. | [optional] [example: `1234`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether that one tool is switched off in the scope. | **Boolean** | - |
| **400** | `serverType` or `toolName` is missing. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

**Boolean**

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
