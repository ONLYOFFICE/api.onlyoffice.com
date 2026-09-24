# aiPromptsListFolders

> List aiPromptsListFolders()

`GET /api/2.0/ai/prompts/list-folders`

List folders

Lists every folder of the caller's prompt library, newest first, with no parameters and no pagination. Folders are flat, so the answer is a single list rather than a tree. The prompts inside them are not included - read those with `GET api/2.0/ai/prompts/list` per folder. Another user's folders are never listed.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every folder of the caller's library, newest first. | [**List**](../../models/ai-prompt-folder.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**List**](../../models/ai-prompt-folder.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
