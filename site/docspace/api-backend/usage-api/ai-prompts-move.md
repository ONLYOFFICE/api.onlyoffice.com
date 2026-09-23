# aiPromptsMove

Referenced types are defined in the [full reference](../aichat.md).

> AiPromptMutationResult aiPromptsMove(aiPromptsMove\_request)

`PUT /api/2.0/ai/prompts/move`

Move a prompt to a folder

Moves a saved prompt into another folder, or to the root when `folderId` is omitted or null. The name is re-validated in the target folder, so the move fails when a prompt of that name already sits there - rename it first with `PUT api/2.0/ai/prompts/update`. Nothing about the prompt other than its folder changes. The answer carries the moved prompt.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiPromptsMove\_request** | body | [**aiPromptsMove_request**](../aichat.md#model-aipromptsmove-request-body) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the prompt was moved, with the moved prompt in `prompt`. | [**AiPromptMutationResult**](../aichat.md#model-aipromptmutationresult) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |

## Return type

[**AiPromptMutationResult**](../aichat.md#model-aipromptmutationresult)

## Authorization

[cookieAuth](../aichat.md#cookieauth), [bearerAuth](../aichat.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
