# aiPromptsGetFolderById

> AiPromptFolder aiPromptsGetFolderById(id)

`GET /api/2.0/ai/prompts/get-folder-by-id`

Get a prompt folder

Returns one folder of the caller's prompt library by its ID, without the prompts inside it. The ID is required and is read from the query. An unknown or foreign ID is not reported as 404: the answer is an empty body with status 200. This differs from the delete operation on the same ID, which does answer 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | query | **String** | The prompt folder identifier. | [required] [example: `44444444-4444-4444-4444-444444444444`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The folder, or an empty body when no folder of the caller's has that ID. | [**AiPromptFolder**](../../models/ai-prompt-folder.md) | - |
| **400** | The folder ID is missing. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiPromptFolder**](../../models/ai-prompt-folder.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
