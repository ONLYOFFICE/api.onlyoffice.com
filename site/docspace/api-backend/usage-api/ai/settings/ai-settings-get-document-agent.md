# aiSettingsGetDocumentAgent

> AiSuccessResponse aiSettingsGetDocumentAgent()

`GET /api/2.0/ai/document-agent/settings`

Get the document agent settings

Returns the portal's document agent settings, as the Document Agent tab of the portal settings shows them: `enabled` (whether the `document_agent` tool is offered to the chat), `profileId` (the model profile its tasks run on, null for the chat's own model), `reasoning` (`default` for the model's own default, else `off`, `low`, `medium`, `high`, `max`), `maxToolCalls` and `maxFileBytes` (the limits of one task, at most the agent's own ceilings of 150 and 32 MiB), `taskLog` (whether every task leaves its full log as a file) and `taskLogFolderId` (where the logs go, null for next to the task's results). The settings are kept by the DocSpace AI service and proxied from it; a portal that never saved any gets the defaults, and a profile or a log folder that no longer exists comes back as null. Any member of the portal may read them, a guest may not.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Success. | [**AiSuccessResponse**](../../models/ai-success-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiSuccessResponse**](../../models/ai-success-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
