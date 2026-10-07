# aiToolsReplaceAllCustomServers

> AiToolsBulkResult aiToolsReplaceAllCustomServers(AiToolsReplaceAllCustomServersRequest)

`PUT /api/2.0/ai/tools/replace-all-custom-servers`

Replace all custom servers

Replaces the whole custom MCP server registry of the scope with the supplied map in one write, which makes it the operation a settings screen saves with. `map` is required: without it the registry would be emptied, so a missing or non-object value is rejected rather than treated as none. Every name in the map is validated as a routable path segment and every configuration is resolved before anything is written, so a map with one bad entry changes nothing. `entityId` has to name a room the caller can open - this is the operation where an unreachable one would otherwise have wiped the portal-wide registry.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiToolsReplaceAllCustomServersRequest** | body | [**AiToolsReplaceAllCustomServersRequest**](../../models/ai-tools-replace-all-custom-servers-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the registry was replaced, with `errors` listing what was refused. | [**AiToolsBulkResult**](../../models/ai-tools-bulk-result.md) | - |
| **400** | The body is not a map of server name to configuration, or a name is not routable. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The referenced object does not exist: an unknown or deleted room named by `entityId`, or an object the caller cannot read - for those the two cases are deliberately indistinguishable. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiToolsBulkResult**](../../models/ai-tools-bulk-result.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
