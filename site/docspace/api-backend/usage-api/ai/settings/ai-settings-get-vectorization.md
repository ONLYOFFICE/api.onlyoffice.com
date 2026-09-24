# aiSettingsGetVectorization

> AiVectorizationSettingsWrapper aiSettingsGetVectorization()

`GET /api/2.0/ai/config/vectorization`

Get vectorization settings

Returns the portal's vectorization settings - the embedding provider and the options used when portal content is indexed for retrieval. It takes no parameters and is proxied unchanged to the DocSpace AI service. Vectorization is a portal-wide setting, so there is no room-scoped form of it. Change it with `PUT api/2.0/ai/config/vectorization`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The portal's vectorization settings. | [**AiVectorizationSettingsWrapper**](../../models/ai-vectorization-settings-wrapper.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiVectorizationSettingsWrapper**](../../models/ai-vectorization-settings-wrapper.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
