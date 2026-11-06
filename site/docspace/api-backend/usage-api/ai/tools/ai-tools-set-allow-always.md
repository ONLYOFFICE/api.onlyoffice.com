# aiToolsSetAllowAlways

> AiSuccessResponse aiToolsSetAllowAlways(AiToolsSetAllowAlwaysRequest)

`PUT /api/2.0/ai/tools/set-allow-always`

Set allow always

Adds one tool to the scope's always-allow list, or takes it off, which decides whether a call to it pauses the round for approval. `serverType` and `toolName` have to be non-empty strings and `value` a real boolean - `true` adds, `false` removes - and anything else is rejected before the list is touched, so a malformed body can no longer grant a permanent approval. Unlike the disable operation, `serverType` is not checked against the known server types: an unknown one is stored and then simply never matches. `entityId` has to name a room the caller can open.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiToolsSetAllowAlwaysRequest** | body | [**AiToolsSetAllowAlwaysRequest**](../../models/ai-tools-set-allow-always-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the always-allow list was updated. | [**AiSuccessResponse**](../../models/ai-success-response.md) | - |
| **400** | `serverType` or `toolName` is missing or empty, or `value` is not a boolean. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The referenced object does not exist: an unknown or deleted room named by `entityId`, or an object the caller cannot read - for those the two cases are deliberately indistinguishable. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiSuccessResponse**](../../models/ai-success-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
