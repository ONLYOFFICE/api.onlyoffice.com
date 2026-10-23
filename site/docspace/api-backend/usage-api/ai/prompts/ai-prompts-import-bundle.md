# aiPromptsImportBundle

> AiImportResult aiPromptsImportBundle(AiPromptsImportBundleRequest)

`POST /api/2.0/ai/prompts/import-bundle`

Import bundle

Writes a bundle produced by `GET api/2.0/ai/prompts/export` back into the caller's library. `mode` decides how: `replace` deletes the current prompts and folders before writing, and `merge` writes the bundle on top of what is already there. The bundle's shape - version 1, `folders` and `prompts` arrays of objects with string ids, names and texts - and the folder references inside it are validated before anything is written, so a corrupt bundle is rejected whole rather than applied halfway: 400 with the refusals in `errors`, or 409 when every refusal is a name that already exists in the library. `replace` is destructive and cannot be undone - export first if the current library matters.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiPromptsImportBundleRequest** | body | [**AiPromptsImportBundleRequest**](../../models/ai-prompts-import-bundle-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the bundle was written, how many prompts it imported, and what was refused. | [**AiImportResult**](../../models/ai-import-result.md) | - |
| **400** | The bundle is malformed, references a folder it does not carry, holds an empty entry or two entries of the same name, or `mode` is unknown. | [**AiImportResult**](../../models/ai-import-result.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, the caller is a guest, or the room named by `entityId` is one the caller cannot open. Relayed from the DocSpace AI service or the Files API. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **409** | Every refused entry is a name that already exists in the library (`merge` only). | [**AiImportResult**](../../models/ai-import-result.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**AiImportResult**](../../models/ai-import-result.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
