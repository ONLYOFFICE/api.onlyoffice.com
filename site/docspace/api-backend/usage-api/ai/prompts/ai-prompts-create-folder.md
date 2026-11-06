# aiPromptsCreateFolder

> AiFolderMutationResult aiPromptsCreateFolder(AiPromptsCreateFolderRequest)

`POST /api/2.0/ai/prompts/create-folder`

Create folder

Creates a folder in the caller's prompt library and returns it. The name has to be a non-empty string and unique across that library - a non-string or empty one answers 400, a name in use 409, both with the `{ success: false, error }` body. Folders do not nest: there is one flat level, so a folder cannot be created inside another. The answer carries the folder ID to use as `folderId` when saving or moving prompts.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiPromptsCreateFolderRequest** | body | **String** | The name of the folder to create, as a bare JSON string. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the folder was created, with it in `folder`. | [**AiFolderMutationResult**](../../models/ai-folder-mutation-result.md) | - |
| **400** | `name` is missing, empty or not a string. | [**AiFolderMutationResult**](../../models/ai-folder-mutation-result.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
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
