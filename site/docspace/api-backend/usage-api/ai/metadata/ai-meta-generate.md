# aiMetaGenerate

> aiMetaGenerate_200_response aiMetaGenerate(AiMetaGenerateRequest)

`POST /api/2.0/ai/meta/generate`

Generate metadata fields

Reads one file as text and asks the model bound to the `GenerateMeta` action - the `Default` slot when that action has no profile of its own - which custom metadata fields describe it, and what their values are. `kind` names the entry's table and `id` its integer identifier, the same way as `POST api/2.0/ai/meta/fill`; only `file` is accepted for now, a folder or a room answers 400 until it is settled whether their metadata should describe the entry itself or its files; `prompt` is an optional note on the kind of fields the caller is interested in, which is passed to the model as a hint, never as an instruction. The text is the file itself, converted to plain text through the portal's own conversion (word-processing and presentation formats, pdf included, to txt; spreadsheets to csv), under the caller's rights, so a file the caller cannot read is skipped as `forbidden` rather than failing the call. Each document is cut at 40 000 characters and the whole set at 240 000, which `sources[].truncated` reports. The model runs once, without tools, and the answer is validated: field names are trimmed, deduplicated regardless of case and capped at 50, the portal's own limit for custom fields on one entry; each field carries the value the text supports as a string, or `null` when the text does not state one, since a custom field on the portal is text and cannot be saved empty. Nothing is written: the caller decides which fields to create and saves them through the Files metadata API.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AiMetaGenerateRequest** | body | [**AiMetaGenerateRequest**](../../models/ai-meta-generate-request.md) |  | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The proposed fields, each with a name and the value found or null, the documents the proposal was read from, and the entries that were left out with the reason for each. | [**aiMetaGenerate_200_response**](../../models/ai-meta-generate-200-response.md) | - |
| **400** | `kind` is not `file` (folders and rooms are not accepted for now), `id` is not an integer id, or `prompt` is not a string. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **401** | Missing `asc_auth_key` cookie or `Authorization` header. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **402** | The model provider refused the request for lack of credit; `code` and `providerMessage` carry its own words. | [**aiMetaGenerate_402_response**](../../models/ai-meta-generate-402-response.md) | - |
| **403** | The caller cannot open the entry. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **404** | The entry does not exist. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **413** | The request body is larger than 100 KB, the JSON parser's limit on this route. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **422** | The content could not be read as text; `skipped` says why. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **429** | The model provider is rate-limiting requests; `code` and `providerMessage` carry its own words. | [**aiMetaGenerate_402_response**](../../models/ai-meta-generate-402-response.md) | - |
| **500** | Unhandled failure. The reason is logged server-side and never echoed back. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **502** | The model request failed; `code` says how and `providerMessage` carries the provider's own words when it gave any. | [**aiMetaGenerate_402_response**](../../models/ai-meta-generate-402-response.md) | - |
| **503** | No profile is bound to `GenerateMeta` and the `Default` slot is empty too. | [**AiErrorResponse**](../../models/ai-error-response.md) | - |
| **504** | Reading the files or the model round did not finish within the time budget. | [**aiMetaGenerate_402_response**](../../models/ai-meta-generate-402-response.md) | - |

## Return type

[**aiMetaGenerate_200_response**](../../models/ai-meta-generate-200-response.md)

## Authorization

[cookieAuth](../ai.md#cookieauth), [bearerAuth](../ai.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
