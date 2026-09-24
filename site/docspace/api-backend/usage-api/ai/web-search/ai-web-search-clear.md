# aiWebSearchClear

> AiSuccessResponse aiWebSearchClear(body)

`DELETE /api/2.0/ai/web-search/clear`

Clear the web-search configuration

Removes the portal's web-search configuration, after which web search is unavailable everywhere it was not configured separately. This is not scoped: it takes no `entityId` and any body sent with it is ignored, so it cannot be used to clear one room's configuration. Clearing an already-unconfigured portal is not an error and the call answers success either way. The stored provider key is destroyed with the configuration and has to be entered again.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **body** | body | **String** | Ignored. The operation always clears the portal-wide configuration, so send an empty body; a value here does not scope it to a room. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the portal has no web-search configuration any more. | [**AiSuccessResponse**](../../models/ai-success-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiSuccessResponse**](../../models/ai-success-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
