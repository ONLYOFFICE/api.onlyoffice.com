# aiPreferencesSetDeepMode

> AiSuccessResponse aiPreferencesSetDeepMode(aiPreferencesSetDeepMode\_request)

`PUT /api/2.0/ai/preferences/set-deep-mode`

Set deep mode

Stores the deep-mode toggle of a scope. `false` stores the `off` depth; `true` keeps the depth already stored and falls back to the default depth (`medium`) when none is. `value` has to be a real boolean: a string, a number or an absent value is rejected rather than coerced, so the string false cannot silently switch the setting on and an empty request cannot silently switch it off. `entityId` picks a room and omitting it writes the portal-wide preference. It is idempotent, so there is no need to read the current value first.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiPreferencesSetDeepMode\_request** | body | [**aiPreferencesSetDeepMode_request**](../../models/ai-preferences-set-deep-mode-request-body.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirms the preference was stored. | [**AiSuccessResponse**](../../models/ai-success-response.md) | - |
| **400** | `value` is missing or is not a boolean. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
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
