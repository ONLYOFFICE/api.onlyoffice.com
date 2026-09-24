# aiPromptsList

> List aiPromptsList(folderId)

`GET /api/2.0/ai/prompts/list`

List saved prompts

Lists the caller's saved prompts, newest first. `folderId` scopes the answer to one folder, and omitting it - or sending it empty - lists the prompts that sit at the root rather than every prompt, because the client fetcher cannot tell an absent value from a null one. There is therefore no way to ask for the whole library in one call: walk the folders from `GET api/2.0/ai/prompts/list-folders`, or take everything at once with `GET api/2.0/ai/prompts/export`. The prompts of other users are never included.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | query | **String** | The prompt folder identifier. Omit to list the prompts that sit outside any folder. | [optional] [example: `44444444-4444-4444-4444-444444444444`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The prompts of the scope, newest first. | [**List**](../../models/ai-prompt.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**List**](../../models/ai-prompt.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
