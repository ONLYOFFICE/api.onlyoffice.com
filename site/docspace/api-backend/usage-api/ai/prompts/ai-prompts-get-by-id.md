# aiPromptsGetById

> AiPrompt aiPromptsGetById(id)

`GET /api/2.0/ai/prompts/get-by-id`

Get a saved prompt

Returns one saved prompt by its ID. The ID is required and is read from the query. An ID that is unknown, or that belongs to another user, is not reported as 404: the answer is an empty body with status 200, so treat a missing payload as no such prompt. Prompt IDs come from `GET api/2.0/ai/prompts/list` or from the answer of the create operation.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | query | **String** | The saved prompt identifier. | [required] [example: `33333333-3333-3333-3333-333333333333`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The prompt, or an empty body when no prompt of the caller's has that ID. | [**AiPrompt**](../../models/ai-prompt.md) | - |
| **400** | The prompt ID is missing. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiPrompt**](../../models/ai-prompt.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
