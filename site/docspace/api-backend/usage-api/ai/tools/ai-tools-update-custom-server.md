# aiToolsUpdateCustomServer

> AiToolsMutationResult aiToolsUpdateCustomServer(AiToolsUpdateCustomServerRequest)

`PUT /api/2.0/ai/tools/update-custom-server`

Update custom server

Replaces the stored configuration of a registered custom MCP server, under the same name and scope rules as the add operation. The name is re-validated as a routable path segment, and an omitted `config` resolves the same way - to a system server's canonical settings, or to the portal-level entry of that name. `entityId` has to name a room the caller can open. The answer carries the stored registry entry.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiToolsUpdateCustomServerRequest** | body | [**AiToolsUpdateCustomServerRequest**](../../models/ai-tools-update-custom-server-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the server was updated, with the stored entry. | [**AiToolsMutationResult**](../../models/ai-tools-mutation-result.md) | - |
| **400** | The server name is missing or is not routable. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The referenced object does not exist: an unknown or deleted room named by `entityId`, or an object the caller cannot read - for those the two cases are deliberately indistinguishable. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiToolsMutationResult**](../../models/ai-tools-mutation-result.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
