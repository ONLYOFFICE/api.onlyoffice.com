# aiPromptsRenameFolder

> AiFolderMutationResult aiPromptsRenameFolder(aiPromptsRenameFolder\_request)

`PUT /api/2.0/ai/prompts/rename-folder`

Rename folder

Renames a folder in the caller's prompt library, validating the new name against the folders already there. The prompts inside it are untouched and keep their IDs. The answer carries the renamed folder. A name that another folder already uses is rejected.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiPromptsRenameFolder\_request** | body | [**aiPromptsRenameFolder_request**](../../models/ai-prompts-rename-folder-request-body.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the folder was renamed, with the stored folder in `folder`. | [**AiFolderMutationResult**](../../models/ai-folder-mutation-result.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiFolderMutationResult**](../../models/ai-folder-mutation-result.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
