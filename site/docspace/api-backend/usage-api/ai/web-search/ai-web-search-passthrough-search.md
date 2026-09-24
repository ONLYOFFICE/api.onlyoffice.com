# aiWebSearchPassthroughSearch

> Map aiWebSearchPassthroughSearch(request\_body)

`POST /api/2.0/ai/websearch/v1/search`

Web search passthrough

Runs a web search on behalf of the document editor's AI plugin, which holds only a placeholder configuration - the portal's active provider and its key are resolved here, so neither ever reaches the browser. The portal-wide configuration is used, and a portal without one answers 404. The `entityId` and `entityKind` query parameters name the document the search is billed to; with the ONLYOFFICE provider the entry is resolved under the caller's credentials and sent to the gateway as the request `metadata` (`source_id` / `source_type` / `source_title`), and an entry the caller cannot open sends none. The provider's own status, body and content type are relayed as they stand, so a provider that rate-limits answers 429 and one that is unreachable answers 502. Closing the connection aborts the upstream request.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **request\_body** | body | **Map** | A search request in the shape the portal's active web-search provider expects, forwarded to it unchanged. The endpoint and the key come from the stored configuration and must not be sent here. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The provider's own response, relayed verbatim with its status and content type. | **Map** | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | Web search is not configured for this portal. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **429** | Relayed verbatim from the AI provider, which is rate-limiting this portal's key. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **502** | The AI provider could not be reached, or answered with a failure of its own. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

**Map**

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
