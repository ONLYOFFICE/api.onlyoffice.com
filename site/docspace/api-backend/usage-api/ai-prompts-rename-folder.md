# aiPromptsRenameFolder

Referenced types are defined in the [full reference](../aichat.md).

> AiFolderMutationResult aiPromptsRenameFolder(aiPromptsRenameFolder\_request)

`PUT /api/2.0/ai/prompts/rename-folder`

Rename folder

Renames a folder in the caller's prompt library, validating the new name against the folders already there. The prompts inside it are untouched and keep their IDs. The answer carries the renamed folder. A name that another folder already uses is rejected.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiPromptsRenameFolder\_request** | body | [**aiPromptsRenameFolder_request**](../aichat.md#model-aipromptsrenamefolder-request-body) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the folder was renamed, with the stored folder in `folder`. | [**AiFolderMutationResult**](../aichat.md#model-aifoldermutationresult) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |

## Return type

[**AiFolderMutationResult**](../aichat.md#model-aifoldermutationresult)

## Authorization

[cookieAuth](../aichat.md#cookieauth), [bearerAuth](../aichat.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
