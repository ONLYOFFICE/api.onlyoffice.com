# aiEditorToolsList

> aiEditorToolsList_200_response aiEditorToolsList()

`GET /api/2.0/ai/editor-tools/list`

List editor tools

Returns the catalogue of DocSpace tools the document editor's AI plugin may offer the model - the same composed set the DocSpace chat sees, minus the two web-search tools the editor already reaches through its own passthrough. `entityId` scopes the catalogue to a room, which decides the room-specific tools it contains. Each entry carries exactly four fields: the tool name, its description, its input schema, and whether calling it requires an approval dialog; nothing else is exposed, because the raw listings of system servers carry transport details that must not reach a browser. The approval flag follows the same policy the chat engine applies, and a read-only tool comes back needing none - execute a tool with `POST api/2.0/ai/editor-tools/call`, which accepts only the names this catalogue reports.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The tools the editor plugin may offer the model, four fields each. | [**aiEditorToolsList_200_response**](../../models/ai-editor-tools-list-200-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**aiEditorToolsList_200_response**](../../models/ai-editor-tools-list-200-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
