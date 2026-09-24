# aiSettingsSetUser

> AiAiUserSettingsWrapper aiSettingsSetUser(request\_body)

`PUT /api/2.0/ai/config/user`

Update user AI settings

Replaces the AI settings of the calling user and returns the stored result. The body is proxied unchanged to the DocSpace AI service, which validates it, so a rejected value comes back with that service's verdict. Only the caller's own settings can be written. Portal-wide configuration is not touched by this operation.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **request\_body** | body | **Map** | The user's AI settings, proxied unchanged to the DocSpace AI service, which owns and validates the shape. Read the current one with `GET api/2.0/ai/config/user` and send it back changed. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The calling user's stored AI settings. | [**AiAiUserSettingsWrapper**](../../models/ai-ai-user-settings-wrapper.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiAiUserSettingsWrapper**](../../models/ai-ai-user-settings-wrapper.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
