# aiPreferencesSetToolPermissionMode

> AiSuccessResponse aiPreferencesSetToolPermissionMode(AiPreferencesSetToolPermissionModeRequest)

`PUT /api/2.0/ai/preferences/set-tool-permission-mode`

Set tool permission mode

Persists the tool permission mode of the calling user. `value` has to be one of `ask`, `auto`, `allow`: anything else is rejected rather than coerced, so an absent or mistyped value can never overwrite the stored mode. `entityId` is validated like on the other writes and otherwise ignored - the mode applies to every chat of the user. Idempotent.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiPreferencesSetToolPermissionModeRequest** | body | [**AiPreferencesSetToolPermissionModeRequest**](../../models/ai-preferences-set-tool-permission-mode-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the preference was stored. | [**AiSuccessResponse**](../../models/ai-success-response.md) | - |
| **400** | `value` is not one of `ask`, `auto`, `allow`, or `entityId` is not a room ID. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiSuccessResponse**](../../models/ai-success-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
