# aiPromptsRenameFolder

> AiFolderMutationResult aiPromptsRenameFolder(AiPromptsRenameFolderRequest)

`PUT /api/2.0/ai/prompts/rename-folder`

Rename folder

Renames a folder in the caller's prompt library, validating the new name against the folders already there. The prompts inside it are untouched and keep their IDs. The answer carries the renamed folder. A name that another folder already uses is rejected with 409, an unknown folder with 404 and a non-string or empty name with 400, always with the `{ success: false, error }` body.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiPromptsRenameFolderRequest** | body | [**AiPromptsRenameFolderRequest**](../../models/ai-prompts-rename-folder-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the folder was renamed, with the stored folder in `folder`. | [**AiFolderMutationResult**](../../models/ai-folder-mutation-result.md) | - |
| **400** | `id` or `name` is missing, or `name` is empty or not a string. | [**AiFolderMutationResult**](../../models/ai-folder-mutation-result.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | No folder has this ID. | [**AiFolderMutationResult**](../../models/ai-folder-mutation-result.md) | - |
| **409** | A folder of that name already exists. | [**AiFolderMutationResult**](../../models/ai-folder-mutation-result.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiFolderMutationResult**](../../models/ai-folder-mutation-result.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
