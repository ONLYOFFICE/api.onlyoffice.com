# aiSettingsSetUser

> AiUserSettingsWrapper aiSettingsSetUser(AiSettingsSetUserRequest)

`PUT /api/2.0/ai/config/user`

Update user AI settings

Replaces the AI settings of the calling user and returns the stored result. `chatRecommendedModelVisible` is required and has to be a real boolean - a body the JSON parser cannot read, such as one sent as text/plain, used to arrive empty and answer 200 having stored nothing. The body is then proxied to the DocSpace AI service, which validates the rest, so a rejected value comes back with that service's verdict. Only the caller's own settings can be written. Portal-wide configuration is not touched by this operation.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiSettingsSetUserRequest** | body | **Map** | The user's AI settings: `chatRecommendedModelVisible` as a boolean, required. Read the current one with `GET api/2.0/ai/config/user` and send it back changed. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The calling user's stored AI settings. | [**AiUserSettingsWrapper**](../../models/ai-user-settings-wrapper.md) | - |
| **400** | `chatRecommendedModelVisible` is missing or not a boolean. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiUserSettingsWrapper**](../../models/ai-user-settings-wrapper.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
