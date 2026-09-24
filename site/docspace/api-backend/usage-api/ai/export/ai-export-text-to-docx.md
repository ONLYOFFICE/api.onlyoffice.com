# aiExportTextToDocx

> aiExportTextToDocx_202_response aiExportTextToDocx(aiExportTextToDocx\_request)

`POST /api/2.0/ai/text-to-docx`

Start markdown export

Queues a markdown export and answers 202 as soon as the job is accepted, without waiting for it. `title`, `content` and `folderId` are all required, and a `content` of only whitespace counts as missing even though it is not empty. `format` is optional and selects the output - `Docx` (the default), `Pdf`, or `Md`, which stores the markdown verbatim instead of converting it. The conversion runs in the AI worker, which saves the .docx into the target folder - an agent room resolves to its own result-storage subfolder - so there is nothing to poll here: completion arrives as the ordinary folder-modified socket event. This route accepts a body of up to 15 MB rather than the 100 KB the rest of the API allows, because a whole thread transcript is sent in one request.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **aiExportTextToDocx\_request** | body | [**aiExportTextToDocx_request**](../../models/ai-export-text-to-docx-request-body.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **202** | Confirms the export was queued. The file arrives in the target folder later, announced by a folder-modified socket event. | [**aiExportTextToDocx_202_response**](../../models/ai-export-text-to-docx-202-response.md) | - |
| **400** | `title`, `content` or `folderId` is missing, or `format` is not one of `Docx`, `Pdf`, `Md`. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **403** | AI is disabled for this portal, or the caller is a guest. Relayed from the DocSpace AI service. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The transcript is larger than 15 MB, this route's own parser limit. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |

## Return type

[**aiExportTextToDocx_202_response**](../../models/ai-export-text-to-docx-202-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
