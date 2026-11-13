# aiSettingsSetDocumentAgent

> AiSuccessResponse aiSettingsSetDocumentAgent(AiSettingsSetDocumentAgentRequest)

`PUT /api/2.0/ai/document-agent/settings`

Set the document agent settings

Replaces the portal's document agent settings and returns the stored result. The whole object is required, every field as `GET api/2.0/ai/document-agent/settings` returns it; a limit above the agent's ceiling, an unknown reasoning level or a missing field is rejected rather than coerced. The DocSpace AI service stores them and checks the rest: the profile has to exist, and the log folder has to be a portal folder (not a third-party one, not in the trash) the caller may create files in. Only a portal administrator may write.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiSettingsSetDocumentAgentRequest** | body | **Map** | The portal's document agent settings, every field required. Read the current one with `GET api/2.0/ai/document-agent/settings` and send it back changed. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Success. | [**AiSuccessResponse**](../../models/ai-success-response.md) | - |
| **400** | A field is missing, has the wrong type, or a limit is above the agent's ceiling. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | The caller is not a portal administrator, or may not create files in the log folder. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The log folder does not exist or is in the trash. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiSuccessResponse**](../../models/ai-success-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
