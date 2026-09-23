# aiPromptsExport

Referenced types are defined in the [full reference](../aichat.md).

> AiPromptBundle aiPromptsExport()

`GET /api/2.0/ai/prompts/export`

Export the prompt library

Builds a versioned bundle of every prompt and folder in the caller's library and returns it, with no parameters. The bundle is self-contained: it carries its own format version so an older export can still be read back, and it is the input `POST api/2.0/ai/prompts/import-bundle` expects. This is also the only way to read the whole library at once, since listing is folder-scoped. Nothing is changed by the call.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The whole library as a versioned bundle, ready to import. | [**AiPromptBundle**](../aichat.md#model-aipromptbundle) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../aichat.md#model-aierrorresponse) | - |

## Return type

[**AiPromptBundle**](../aichat.md#model-aipromptbundle)

## Authorization

[cookieAuth](../aichat.md#cookieauth), [bearerAuth](../aichat.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
