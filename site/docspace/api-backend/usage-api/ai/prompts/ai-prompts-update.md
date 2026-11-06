# aiPromptsUpdate

> AiPromptMutationResult aiPromptsUpdate(AiPromptsUpdateRequest)

`PUT /api/2.0/ai/prompts/update`

Update a saved prompt

Changes a saved prompt and returns the stored result. Only the fields present in `updates` are written, so a partial object leaves the rest of the prompt alone. The name and the folder reference are re-validated whenever either changes, which means an update can fail on a name another prompt in the same folder already uses - that answers 409, an unknown prompt or folder 404, an empty or non-string value 400, always with the `{ success: false, error }` body. Use `PUT api/2.0/ai/prompts/move` to change only the folder.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiPromptsUpdateRequest** | body | [**AiPromptsUpdateRequest**](../../models/ai-prompts-update-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the prompt was updated, with the stored prompt in `prompt`. | [**AiPromptMutationResult**](../../models/ai-prompt-mutation-result.md) | - |
| **400** | `id` is missing, `updates` is not an object, or a field in it has the wrong type or is empty. | [**AiPromptMutationResult**](../../models/ai-prompt-mutation-result.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | No prompt has this ID, or `folderId` names no folder of the caller's. | [**AiPromptMutationResult**](../../models/ai-prompt-mutation-result.md) | - |
| **409** | A prompt of that name already sits in the target folder. | [**AiPromptMutationResult**](../../models/ai-prompt-mutation-result.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiPromptMutationResult**](../../models/ai-prompt-mutation-result.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
